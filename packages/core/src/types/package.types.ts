import * as TypeDoc from "typedoc";

import { logsLevels } from "helpers/log.utils";
import { ClassPageOptions } from "pages/class.page";
import { ComponentPageOptions } from "pages/component.page";
import { DefaultPageOptions } from "pages/default.page";
import { EnumPageOptions } from "pages/enum.page";
import { FunctionPageOptions } from "pages/function.page";
import { TypePageOptions } from "pages/type.page";
import { VariablePageOptions } from "pages/var.page";

export enum PackagePages {
  CLASS = "class",
  COMPONENT = "component",
  DEFAULT = "default",
  ENUM = "enum",
  FUNCTION = "function",
  TYPE = "type",
  VARIABLE = "var",
}

export type PluginOptions = {
  outDir: string;
  packages: PackageOptions[];
  id: string;
  generateMdx?: boolean;
  tsConfigPath?: string;
  typeDocOptions?: Partial<TypeDoc.TypeDocOptions>;
  watch?: boolean;
  addMonorepoPage?: boolean;
  logLevel?: (typeof logsLevels)[number];
  pages?: {
    [PackagePages.CLASS]?: ClassPageOptions;
    [PackagePages.COMPONENT]?: ComponentPageOptions;
    [PackagePages.DEFAULT]?: DefaultPageOptions;
    [PackagePages.ENUM]?: EnumPageOptions;
    [PackagePages.FUNCTION]?: FunctionPageOptions;
    [PackagePages.TYPE]?: TypePageOptions;
    [PackagePages.VARIABLE]?: VariablePageOptions;
  };
};

export type PackageOptions = {
  title: string;
  dir: string;
  entryPath: string | string[];
  outDir?: string;
  logo?: string;
  description?: string;
  tsconfigName?: string;
  tsconfigDir?: string;
  readmeName?: string;
  readmeDir?: string;
  showImports?: boolean;
  addPackagePage?: boolean;
  generateMdx?: boolean;
  orderCategories?: Record<string, number>;
  excludeCategories?: string[];
  additionalCategories?: {
    name: string;
    category: Record<string, string | number>;
  }[];
  fileNameMapper?: (options: {
    isComponent: boolean;
    reflection: TypeDoc.JSONOutput.SomeReflection;
    kind: string | TypeDoc.ReflectionKind;
    name: string;
  }) => string;
  nameMapper?: (options: { name: string; reflection: TypeDoc.JSONOutput.SomeReflection }) => string;
  kindMapper?: (options: { kind: string; reflection: TypeDoc.JSONOutput.SomeReflection }) => string;
  exclude?: (reflection: { kind: string; tags: TypeDoc.JSONOutput.CommentTag[] }) => boolean;
};

export type PkgMeta = {
  title: string;
  packageDocsJsonPath: string;
  packageDocsDir: string;
};
