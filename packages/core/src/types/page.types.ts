import { JSONOutput } from "typedoc";

import { PackageOptions, PluginOptions } from "./package.types";

export type PagePropsType<T = JSONOutput.SomeReflection> = {
  reflection: T;
  reflectionsTree: JSONOutput.ProjectReflection[];
  npmName: string;
  packageName: string;
  pluginOptions: PluginOptions;
  packageOptions: PackageOptions;
};
