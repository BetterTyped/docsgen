import { Application, TSConfigReader, TypeDocReader } from "typedoc";

import type { PluginOptions } from "../../types/package.types";
import { info, error } from "../../helpers/log.utils";

export const parseTypescriptToJson = async (
  docsJsonPath: string,
  entryPoints: string[],
  tsconfig: string,
  pluginOptions: PluginOptions,
  // eslint-disable-next-line max-params
) => {
  try {
    const app = await Application.bootstrapWithPlugins({
      excludeExternals: true,
      excludeInternal: true,
      excludePrivate: true,
      excludeProtected: true,
      exclude: ["node_modules", "tests", "__tests__", "**/*.spec.ts", "**/*.test.ts", "**/*.tests.ts"],
      logLevel: "Error",
      entryPointStrategy: "expand",
      ...pluginOptions.typeDocOptions,
      plugin: ["typedoc-plugin-markdown", ...(pluginOptions.typeDocOptions?.plugin || [])],
      tsconfig,
      entryPoints,
    });

    app.options.addReader(new TSConfigReader());
    app.options.addReader(new TypeDocReader());

    const project = await app.convert();

    if (pluginOptions.watch) {
      app.convertAndWatch(async (watchProject) => {
        info("Watching for changes...");
        await app.generateJson(watchProject, docsJsonPath);
      });
    } else if (project) {
      await app.generateJson(project, docsJsonPath);
    } else {
      throw new Error(`Cannot generate docs for dir: ${docsJsonPath}.`);
    }
  } catch (err) {
    error(err);
  }
};
