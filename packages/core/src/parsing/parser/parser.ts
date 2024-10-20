import { Application, TSConfigReader, TypeDocReader } from "typedoc";

import { PluginOptions } from "../../types/package.types";
import { info } from "../../helpers/log.utils";

export const parseTypescriptToJson = async (
  docsJsonPath: string,
  entryPoints: string[],
  tsconfig: string,
  pluginOptions: PluginOptions,
  // eslint-disable-next-line max-params
) => {
  try {
    // 1. Parser options to bootstrap project
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

    // 2. Load custom plugins
    // ---

    // 3. Prepare parser readers
    app.options.addReader(new TSConfigReader());
    app.options.addReader(new TypeDocReader());

    // 4. Parse project
    const project = await app.convert();

    // 5. Generate json output
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
    console.error(err);
  }
};
