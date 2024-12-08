/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import * as path from "path";

import { pluginOptionsPath } from "../constants/paths.constants";
import { asyncForEach } from "./generator/utils/loop.utils";
import { PluginOptions } from "../types/package.types";
import { info, success, trace } from "../helpers/log.utils";
import { cleanFileName, createFile } from "./generator/utils/file.utils";
import { generateMonorepoPage } from "../pages/presentation/monorepo.page";
import { generatePackagePage } from "../pages/presentation/package.page";
import { parseTypescriptToJson } from "./parser/parser";
import { apiGenerator } from "./generator/api-generator";
import { getPackageOptions } from "./generator/utils/package.utils";
import { isNewInstance } from "../helpers/concurrency.utils";

export const buildDocs = async (
  docsGenerationDir: string,
  generatedFilesDir: string,
  pluginOptions: PluginOptions,
  extra: { instanceDate: string; instanceFile: string },
  // eslint-disable-next-line max-params
) => {
  const { packages, tsConfigPath, addMonorepoPage = true, addPackagePage = true } = pluginOptions;
  const isMonorepo = packages.length > 1;

  const isEnabledMonorepo = packages.filter((pkg) => pkg.generateMdx).length > 1;

  if (isMonorepo && (pluginOptions.generateMdx || isEnabledMonorepo) && addMonorepoPage) {
    trace(`Generating monorepo page for ${pluginOptions.packages.length} packages`);
    generateMonorepoPage(docsGenerationDir, pluginOptions);
  }

  if (isNewInstance(extra.instanceFile, extra.instanceDate)) return;

  /**
   * Save generation options
   */
  const optionsFilePath = path.join(docsGenerationDir, pluginOptionsPath);
  createFile(optionsFilePath, JSON.stringify(pluginOptions));

  if (isNewInstance(extra.instanceFile, extra.instanceDate)) return;

  /**
   * Generate docs for each package
   */
  await asyncForEach(packages, async (packageOptions) => {
    if (isNewInstance(extra.instanceFile, extra.instanceDate)) return;

    const {
      packageName,
      tsconfigPath,
      pkgMeta,
      entries,
      packageOptionsPath,
      mdxOutDir,
      packageDocsJsonPath,
      hasPackagePage,
    } = getPackageOptions(packages, packageOptions, docsGenerationDir, generatedFilesDir, tsConfigPath, isMonorepo);

    /**
     * Get directories required for package generation
     */
    trace(`Setup package directories for ${cleanFileName(packageOptions.title)}`, packageName);
    createFile(packageOptionsPath, JSON.stringify(pkgMeta));

    const shouldCreateIndexPage = hasPackagePage !== undefined ? hasPackagePage : addPackagePage;

    /**
     * Generate package page from readme or custom setup
     */
    if (pluginOptions.generateMdx && shouldCreateIndexPage) {
      trace(`Generating package page`, packageName);
      generatePackagePage(mdxOutDir, packageOptions);
    }

    /**
     * Scan and parse docs to json
     */
    trace(`Starting project parsing...`, packageName);
    await parseTypescriptToJson(packageDocsJsonPath, entries, tsconfigPath, pluginOptions);
    trace(`Successfully parsed docs.`, packageName);
  });

  /**
   * Generate docs files
   */
  await asyncForEach(packages, async (packageOptions) => {
    if (isNewInstance(extra.instanceFile, extra.instanceDate)) return;

    const { packageName, docsJsonPaths, mdxOutDir } = getPackageOptions(
      packages,
      packageOptions,
      docsGenerationDir,
      generatedFilesDir,
      tsConfigPath,
      isMonorepo,
    );

    if (pluginOptions.generateMdx || packageOptions.generateMdx) {
      info(`Generating docs files for ${cleanFileName(packageOptions.title)}`);
    }

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
  });

  success(`Documentation was built successfully!`);
};
