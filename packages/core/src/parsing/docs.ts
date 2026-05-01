/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import * as path from "path";
import { Listr } from "listr2";

import { pluginOptionsPath } from "../constants/paths.constants";
import type { PluginOptions } from "../types/package.types";
import { setCurrentTask } from "../helpers/log.utils";
import { cleanFileName, createFile } from "./generator/utils/file.utils";
import { generateMonorepoPage } from "../pages/presentation/monorepo.page";
import { generatePackagePage } from "../pages/presentation/package.page";
import { parseTypescriptToJson } from "./parser/parser";
import { apiGenerator } from "./generator/api-generator";
import { getPackageOptions } from "./generator/utils/package.utils";
import { isNewInstance } from "../helpers/concurrency.utils";

interface BuildDocsOptions {
  docsGenerationDir: string;
  generatedFilesDir: string;
  pluginOptions: PluginOptions;
  extra: { instanceDate: string; instanceFile: string };
}

export const buildDocsTasks = ({ docsGenerationDir, generatedFilesDir, pluginOptions, extra }: BuildDocsOptions) => {
  const { packages, tsConfigPath, addMonorepoPage = true, addPackagePage = true } = pluginOptions;
  const isMonorepo = 1 < packages.length;
  const isEnabledMonorepo = 1 < packages.filter((pkg) => pkg.generateMdx).length;

  return new Listr(
    [
      {
        title: "Generate monorepo page",
        enabled: () => isMonorepo && (pluginOptions.generateMdx || isEnabledMonorepo) && addMonorepoPage,
        task: (ctx, task) => {
          setCurrentTask(task);
          generateMonorepoPage(docsGenerationDir, pluginOptions);
          setCurrentTask(null);
        },
      },
      {
        title: "Save generation options",
        task: (ctx, task) => {
          if (isNewInstance(extra.instanceFile, extra.instanceDate)) {
            task.skip("Instance already exists");
            return;
          }
          const optionsFilePath = path.join(docsGenerationDir, pluginOptionsPath);
          createFile(optionsFilePath, JSON.stringify(pluginOptions));
        },
      },
      {
        title: `Parse packages (${packages.length})`,
        task: (ctx, task) => {
          if (isNewInstance(extra.instanceFile, extra.instanceDate)) {
            task.skip("Instance already exists");
            return;
          }

          return task.newListr(
            packages.map((packageOptions) => ({
              title: cleanFileName(packageOptions.title),
              task: (subCtx: unknown, packageTask: typeof task) => {
                if (isNewInstance(extra.instanceFile, extra.instanceDate)) {
                  packageTask.skip("Skipped");
                  return;
                }

                const {
                  tsconfigPath,
                  pkgMeta,
                  entries,
                  packageOptionsPath,
                  mdxOutDir,
                  packageDocsJsonPath,
                  hasPackagePage,
                } = getPackageOptions(
                  packages,
                  packageOptions,
                  docsGenerationDir,
                  generatedFilesDir,
                  tsConfigPath,
                  isMonorepo,
                );

                return packageTask.newListr([
                  {
                    title: "Setup directories",
                    task: () => {
                      createFile(packageOptionsPath, JSON.stringify(pkgMeta));
                    },
                  },
                  {
                    title: "Generate package page",
                    enabled: () => {
                      const shouldCreate = hasPackagePage !== undefined ? hasPackagePage : addPackagePage;
                      return !!(pluginOptions.generateMdx && shouldCreate);
                    },
                    task: () => {
                      generatePackagePage(mdxOutDir, packageOptions);
                    },
                  },
                  {
                    title: "Parse TypeScript",
                    task: async () => {
                      await parseTypescriptToJson(packageDocsJsonPath, entries, tsconfigPath, pluginOptions);
                    },
                  },
                ]);
              },
            })),
          );
        },
      },
      {
        title: `Generate documentation (${packages.length} packages)`,
        task: (ctx, task) => {
          if (isNewInstance(extra.instanceFile, extra.instanceDate)) {
            task.skip("Instance already exists");
            return;
          }

          return task.newListr(
            packages.map((packageOptions) => ({
              title: cleanFileName(packageOptions.title),
              task: async (subCtx: unknown, pkgTask: typeof task) => {
                if (isNewInstance(extra.instanceFile, extra.instanceDate)) {
                  pkgTask.skip("Skipped");
                  return;
                }

                const { packageName, docsJsonPaths, mdxOutDir } = getPackageOptions(
                  packages,
                  packageOptions,
                  docsGenerationDir,
                  generatedFilesDir,
                  tsConfigPath,
                  isMonorepo,
                );

                setCurrentTask(pkgTask);

                const parsedApiJsons = docsJsonPaths.map((docsPath) => {
                  return require(docsPath);
                });

                await apiGenerator({
                  packageName,
                  parsedApiJsons,
                  mdxOutDir,
                  docsGenerationDir,
                  pluginOptions,
                  packageOptions,
                  generatedFilesDir,
                });

                setCurrentTask(null);
              },
            })),
          );
        },
      },
    ],
    { rendererOptions: { collapseSubtasks: false } },
  );
};
