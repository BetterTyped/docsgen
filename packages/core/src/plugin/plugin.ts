import type { LoadContext } from "@docusaurus/types";
import * as path from "path";
import { Listr } from "listr2";

import { prepareApiDirectory } from "../parsing/generator/utils/file.utils";
import type { PluginOptions } from "../types/package.types";
import { setLogLevel } from "../helpers/log.utils";
import { buildDocsTasks } from "../parsing/docs";

export const generate = async (
  context: LoadContext,
  options: PluginOptions,
  extra: { instanceFile: string; instanceDate: string },
) => {
  const { generatedFilesDir } = context;
  const { outDir } = options;
  const docsGenerationDir = path.join(generatedFilesDir, "..", outDir);

  if (options.logLevel) {
    setLogLevel(options.logLevel);
  }

  if (options.generateMdx === undefined) {
    options.generateMdx = true;
  }

  const tasks = new Listr(
    [
      {
        title: "Docsgen",
        task: (_ctx, task) => {
          return task.newListr(
            [
              {
                title: "Prepare output directory",
                task: () => {
                  prepareApiDirectory(docsGenerationDir);
                },
              },
              {
                title: "Build documentation",
                enabled: () => 0 < options.packages.length,
                task: () => {
                  return buildDocsTasks({ docsGenerationDir, generatedFilesDir, pluginOptions: options, extra });
                },
              },
              {
                title: "No packages found",
                enabled: () => 0 === options.packages.length,
                task: (_ctx, innerTask) => {
                  innerTask.skip("No packages configured");
                },
              },
            ],
            { rendererOptions: { collapseSubtasks: false } },
          );
        },
      },
    ],
    {
      rendererOptions: {
        collapseSubtasks: false,
        suffixSkips: true,
      },
      collectErrors: "minimal",
    },
  );

  await tasks.run();
};
