import * as path from "path";
import { JSONOutput } from "typedoc";

import { trace, error } from "../../helpers/log.utils";
import { createFile, readFile } from "./utils/file.utils";
import { pageRenderer } from "../renderer/renderer";
import { PackageOptions, PluginOptions } from "../../types/package.types";
import { getKindName } from "../../pages/utils/display.utils";
import { isComponent } from "pages/utils/component.utils";
import { copyDocs } from "./utils/copy-docs";
import { getSignature, getTags } from "pages";

const docsExtension = ".mdx";

type ApiGeneratorProps = {
  packageName: string;
  parsedApiJsons: JSONOutput.ProjectReflection[];
  mdxOutDir: string;
  docsGenerationDir: string;
  generatedFilesDir: string;
  pluginOptions: PluginOptions;
  packageOptions: PackageOptions;
};

export const apiGenerator = async ({
  packageName,
  parsedApiJsons,
  mdxOutDir,
  pluginOptions,
  packageOptions,
  ...rest
}: ApiGeneratorProps) => {
  const {
    fileNameMapper,
    nameMapper,
    kindMapper,
    additionalCategories,
    orderCategories,
    excludeCategories,
    exclude,
    dir,
  } = packageOptions;
  const parsedApiJson = parsedApiJsons[0];

  parsedApiJson.children?.forEach((reflection) => {
    const { name } = reflection;
    const kind = getKindName(reflection);
    const signature = getSignature(reflection);
    const comment = signature?.comment || reflection?.comment;
    const excluded = getTags(comment, "@exclude")?.length;

    if (excluded) {
      return;
    }

    if (
      exclude?.({
        kind,
        tags: comment?.blockTags || [],
      })
    ) {
      return;
    }

    if (excludeCategories?.includes(kind)) {
      return;
    }

    if (!kind) {
      return trace(`Module ${kind} not parsed. Missing type specification.`, packageName);
    }

    const data = pageRenderer({
      reflection: reflection as JSONOutput.DeclarationReflection,
      reflectionsTree: parsedApiJsons,
      pluginOptions,
      packageOptions,
      npmName: parsedApiJson.name,
      packageName,
      ...rest,
    });

    const fileName = fileNameMapper?.({ isComponent: isComponent(reflection), reflection, kind, name });

    const nameForFile = nameMapper ? nameMapper({ name, reflection }) : name;
    const category = kindMapper ? kindMapper({ kind, reflection }) : kind;

    const filePath = fileName
      ? path.join(nameForFile, `${fileName}${docsExtension}`)
      : `${nameForFile}${docsExtension}`;

    try {
      const outDir = path.join(mdxOutDir, category, name);
      const pagePath = path.join(mdxOutDir, category, filePath);
      const projectDirectory = dir;

      const categoryOrder = orderCategories?.[kind];
      if (categoryOrder !== undefined && !readFile(path.join(mdxOutDir, category, "_category_.json"))) {
        createFile(path.join(mdxOutDir, category, "_category_.json"), JSON.stringify({ position: categoryOrder }));
      }

      if (additionalCategories?.length) {
        additionalCategories.forEach((categoryEntity) => {
          createFile(
            path.join(mdxOutDir, categoryEntity.name, "_category_.json"),
            JSON.stringify(categoryEntity.category),
          );
        });
      }

      // Copy docs from source code with @docs tag
      copyDocs(reflection, projectDirectory, outDir);

      if (pluginOptions.generateMdx || packageOptions.generateMdx) {
        // Create auto-documented files
        createFile(pagePath, data);
      }
    } catch (err) {
      error(`Cannot create file for ${name}`);
      error(err);
    }
  });
};
