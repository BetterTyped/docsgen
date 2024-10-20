import * as path from "path";
import { generate, PluginOptions } from "@docsgen/core";
import { LoadContext } from "@docusaurus/types";

import { createInstance, isNewInstance } from "../helpers/concurrency.utils";

const name = "docsgen-docusaurus";

export async function plugin(context: LoadContext, options: PluginOptions) {
  const fileName = `/loadingTypedoc[${options.id}].json`;
  const file = path.join(context.generatedFilesDir, fileName);

  // Once per minute
  if (isNewInstance(file, new Date().toISOString())) {
    const date = createInstance(context.generatedFilesDir, file);
    await generate(context, options, { instanceDate: date, instanceFile: file });
  }

  return {
    name,
  };
}
