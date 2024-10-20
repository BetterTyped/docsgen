import { LoadContext } from "@docusaurus/types";
import * as path from "path";

import { prepareApiDirectory } from "../parsing/generator/utils/file.utils";
import { PluginOptions } from "../types/package.types";
import { trace, info, setLogLevel } from "../helpers/log.utils";
import { buildDocs } from "../parsing/docs";

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
    // eslint-disable-next-line no-param-reassign
    options.generateMdx = true;
  }

  prepareApiDirectory(docsGenerationDir);

  trace("Initializing plugin...");

  info("Successfully initialized plugin.");
  if (options.packages.length) {
    await buildDocs(docsGenerationDir, generatedFilesDir, options, extra);
    trace("Loading generated docs.");
  } else {
    trace("No packages found.");
  }
  // eslint-disable-next-line no-console
  console.log("\n");
};
