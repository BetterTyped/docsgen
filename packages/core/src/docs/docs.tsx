import path from "path";
import { JSONOutput } from "typedoc";
import { readJsonSync } from "fs-extra";

import { PluginOptions, PkgMeta } from "../types/package.types";
import { pluginOptionsPath, packageConfigPath } from "../constants/paths.constants";
import { cleanFileName } from "../parsing/generator/utils/file.utils";
import { getPackageDocsPath } from "../parsing/generator/utils/package.utils";
import { ComponentsProps } from "importer/components/component.types";
import { getComponent } from "importer/components/component-map.utils";
import { getFile, getMatchingElement } from "importer/utils/docs.utils";

// TODO FIGURE OUT HOW TO MAKE THIS WORK

// How to get to the files?
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const file = {} as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const options = {} as any;

export const Docs = (props: ComponentsProps & { packageName: string; componentName: string }) => {
  const { packageName, componentName } = props;

  const currentVersionedDir = file.history[0]
    ?.split("/")
    .find((pathPart: string) => pathPart.includes("versioned_docs"));
  const version = file.history[0]?.split("/").find((pathPart: string) => pathPart.includes("version-"));

  const { packageRoute, apiDir, versionedDir = currentVersionedDir } = options;

  const libDocsPath = version ? `${versionedDir}/${version}/${packageRoute}` : apiDir;
  const filesDir = path.join(file.cwd);
  const docsDir = path.join(filesDir, libDocsPath);
  const optionsPath = path.join(docsDir, pluginOptionsPath);

  const pluginOptions = getFile<PluginOptions>(optionsPath);

  if (!pluginOptions) {
    throw new Error(`Cannot find plugin options for ${packageName}`);
  }

  const packagesNames = pluginOptions.packages.map((pkg) => cleanFileName(pkg.title));
  const isMonorepo = pluginOptions.packages.length > 1;

  const reflectionsMap: { name: string; reflection: JSONOutput.ProjectReflection }[] = pluginOptions.packages.map(
    (pkg) => {
      return {
        name: cleanFileName(pkg.title),
        // readJsonSync is not getting cached as require does
        reflection: readJsonSync(getPackageDocsPath(docsDir, cleanFileName(pkg.title), isMonorepo)),
      };
    },
  );

  if (!packagesNames.includes(packageName)) {
    throw new Error(`Cannot find package ${packageName}`);
  }

  const packageOptions = pluginOptions.packages.find((pkg) => cleanFileName(pkg.title) === packageName);

  if (!packageOptions) {
    throw new Error(`Cannot find package options for ${packageName}`);
  }

  if (!reflectionsMap.length) {
    throw new Error(`Cannot existing docs.json reflection files`);
  }

  const configPath = path.join(docsDir, packageName, packageConfigPath);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires
  const packageMeta: PkgMeta = readJsonSync(configPath);

  const packageReflection = reflectionsMap.find(({ name }) => cleanFileName(packageName) === name)?.reflection;

  if (!packageReflection) {
    throw new Error(`Cannot find package reflection for ${packageName}`);
  }
  if (!packageReflection.children) {
    throw new Error(`Package reflections tree is empty`);
  }

  const packagesReflections = [
    packageReflection,
    ...reflectionsMap.filter(({ name }) => cleanFileName(packageName) !== name).map(({ reflection }) => reflection),
  ];

  const reflection = getMatchingElement(packageReflection, componentName);
  const Component = getComponent(props);

  return (
    <Component
      {...props}
      reflection={reflection}
      reflectionsTree={packagesReflections}
      npmName={packageReflection.name}
      packageName={packageName}
      pluginOptions={pluginOptions}
      packageOptions={packageOptions}
    />
  );
};
