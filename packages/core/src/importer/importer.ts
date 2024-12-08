import path from "path";
import React from "react";
// TS fails to import it at build
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { visit, SKIP } from "unist-util-visit";
import { JSONOutput } from "typedoc";
import { mdxFromMarkdown } from "mdast-util-mdx";
import { fromMarkdown } from "mdast-util-from-markdown";
import { mdxjs } from "micromark-extension-mdxjs";
import { readJsonSync } from "fs-extra";
import { parse } from "@reins/query-params";

import { PluginOptions, PkgMeta } from "../types/package.types";
import { pluginOptionsPath, packageConfigPath } from "../constants/paths.constants";
import { getFile, getMatchingElement } from "./utils/docs.utils";
import { DocsComponents, getComponent, GetComponentProps } from "./components/component-map.utils";
import { cleanFileName } from "../parsing/generator/utils/file.utils";
import { renderer } from "../parsing/renderer/renderer";
import { getPackageDocsPath } from "../parsing/generator/utils/package.utils";

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

type TreeNode = {
  type: string;
  value: string;
  children: Array<TreeNode>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>; // large structure
  position: {
    start: { line: number; column: number; offset: number };
    end: { line: number; column: number; offset: number };
  };
};

type TreeType = {
  type: "root";
  children: Array<TreeNode>;
};

type FileType = {
  cwd: string;
  data: {
    frontMatter: Record<string, string>;
    compilerName: string;
    contentTitle: string;
  };
  history: string[];
  messages: string[];
  value: string; // file string content
};

export const importer = (options: { packageRoute: string; apiDir: string; versionedDir?: string }) => {
  return () => {
    return (tree: TreeType, file: FileType) => {
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
        throw new Error(`Cannot find plugin options in ${optionsPath}`);
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

      const packageRegex = `([^ ]+)`;
      const nameRegex = "([^ ]+)";
      const displayOptions = "([^;]*)";
      const rgx = new RegExp(`(@import ${packageRegex} ${nameRegex} ${displayOptions})`);

      visit(tree, "text", (node: TreeNode) => {
        const apiImport = node.value.match(rgx) as null | string[];
        if (apiImport) {
          const [, , packageName, componentName, componentOptions] = apiImport;
          // eslint-disable-next-line prettier/prettier
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
            ...reflectionsMap
              .filter(({ name }) => cleanFileName(packageName) !== name)
              .map(({ reflection }) => reflection),
          ];
          const reflection = getMatchingElement(packageReflection, componentName);
          const optionsPreparation = replaceAll(componentOptions, " ", "")
            .replace("[", "")
            .replace("]", "")
            .replace(")", "");
          let optionsNormalization = replaceAll(replaceAll(optionsPreparation, ",", "&"), ":", "=");
          if (optionsNormalization[optionsNormalization.length - 1] === "&") {
            optionsNormalization = optionsNormalization.slice(0, -1);
          }
          const parsedOptions = parse(optionsNormalization) as GetComponentProps<keyof DocsComponents>;
          const Component = getComponent(parsedOptions);
          const html = renderer(Component as React.FC, {
            ...parsedOptions,
            reflection,
            reflectionsTree: packagesReflections,
            npmName: packageReflection.name,
            packageName,
            pluginOptions,
            packageOptions,
          });
          // Markdown AST
          const subTree = fromMarkdown(html, {
            extensions: [mdxjs()],
            mdastExtensions: [mdxFromMarkdown()],
          }) as TreeNode;
          if (subTree) {
            // Sanitize tables from nested <p> tags added by remark
            visit(subTree, "paragraph", (paragraph: TreeNode, state: string, parent: TreeNode) => {
              if (parent) {
                // eslint-disable-next-line no-param-reassign
                parent.children = parent.children
                  .map((child) => {
                    if (child === paragraph) {
                      return paragraph.children;
                    }
                    return child;
                  })
                  .flat();
              }
            });
            Object.assign(node, subTree);
          }
          return SKIP;
        }
      });
    };
  };
};
