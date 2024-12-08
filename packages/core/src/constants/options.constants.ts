import { RequiredKeys } from "../types/helpers.types";
import { PackageOptions } from "../types/package.types";

export const defaultPackageOptions: RequiredKeys<
  Omit<
    PackageOptions,
    | "dir"
    | "entryPath"
    | "title"
    | "outDir"
    | "generateMdx"
    | "additionalCategories"
    | "exclude"
    | "fileNameMapper"
    | "nameMapper"
    | "kindMapper"
    | "hasPackagePage"
  >
> = {
  logo: "",
  description: "",
  tsconfigName: "tsconfig.json",
  tsconfigDir: "",
  readmeName: "README.md",
  readmeDir: "",
  showImports: true,
  orderCategories: {},
  excludeCategories: ["Namespaces"],
};
