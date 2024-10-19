/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import * as path from "path";

import { docsJsonPath, packageConfigPath } from "../../../constants/paths.constants";
import { PackageOptions, PkgMeta } from "../../../types/package.types";
import { cleanFileName } from "./file.utils";

export const getPackageJson = (dir: string, name: string): undefined | Record<string, unknown> => {
  try {
    const files = require(path.join(dir, name));
    return files;
  } catch (err) {
    throw new Error("Cannot find package.json");
  }
};

export const getPackageDocsDir = (docsGenerationDir: string, packageName: string, isMonorepo: boolean) => {
  return isMonorepo ? path.join(docsGenerationDir, packageName) : docsGenerationDir;
};

export const getPackageDocsPath = (docsGenerationDir: string, packageName: string, isMonorepo: boolean) => {
  const directory = getPackageDocsDir(docsGenerationDir, packageName, isMonorepo);
  return path.join(directory, docsJsonPath);
};

export const getPackageOptions = (
  packages: PackageOptions[],
  packageOptions: PackageOptions,
  docsGenerationDir: string,
  generatedFilesDir: string,
  tsConfigPath: string | undefined,
  isMonorepo: boolean,
  // eslint-disable-next-line max-params
) => {
  const { dir, title, entryPath, tsconfigName = "/tsconfig.json", tsconfigDir = packageOptions.dir } = packageOptions;

  // Returns Hyper Fetch => Hyper-Fetch
  const packageName = cleanFileName(title);
  // Returns /api/Hyper-Fetch(if monorepo) or /api
  const packageDocsDir = getPackageDocsDir(docsGenerationDir, packageName, isMonorepo);
  // We can set a custom output directory for mdx files, that are separate outDir
  const mdxOutDir = packageOptions?.outDir ? path.join(generatedFilesDir, "..", packageOptions.outDir) : packageDocsDir;
  // All packages json paths
  const packageDocsPaths = packages.map((pkg) =>
    getPackageDocsPath(docsGenerationDir, cleanFileName(pkg.title), isMonorepo),
  );
  // Returns [packageDir]/docs.json
  const packageDocsJsonPath = getPackageDocsPath(docsGenerationDir, packageName, isMonorepo);
  const docsJsonPaths: string[] = [
    packageDocsJsonPath,
    ...packageDocsPaths.filter((pkgPath) => pkgPath !== packageDocsJsonPath),
  ];
  // Package tsconfig file
  const tsconfigPath = tsConfigPath || path.join(tsconfigDir, tsconfigName);

  // Generate meta
  const pkgMeta: PkgMeta = {
    title,
    packageDocsJsonPath,
    packageDocsDir,
  };
  // Package entry files
  const entries = Array.isArray(entryPath)
    ? entryPath.map((entry) => path.join(dir, entry))
    : [path.join(dir, entryPath)];

  const packageOptionsPath = path.join(packageDocsDir, packageConfigPath);

  return {
    ...packageOptions,
    packageName,
    tsconfigPath,
    pkgMeta,
    entries,
    packageDocsJsonPath,
    packageOptionsPath,
    docsJsonPaths,
    packageDocsDir,
    mdxOutDir,
  };
};
