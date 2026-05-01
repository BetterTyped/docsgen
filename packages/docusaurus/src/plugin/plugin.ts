import * as path from "path";
import type { PluginOptions } from "@docsgen/core";
import { generate } from "@docsgen/core";
import type { LoadContext } from "@docusaurus/types";

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
