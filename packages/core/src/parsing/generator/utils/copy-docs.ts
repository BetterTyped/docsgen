import path from "path";
import fs from "fs-extra";
import { JSONOutput } from "typedoc";

import { getSignature, getTags } from "pages";
import { error } from "helpers/log.utils";

export const copyDocs = (reflection: JSONOutput.DeclarationReflection, projectDirectory: string, outPath: string) => {
  const signature = getSignature(reflection);
  const tags = getTags(signature?.comment || reflection?.comment, "@docs");
  const source = reflection.sources?.[0];

  if (tags?.length && source) {
    tags.forEach((tag) => {
      if (!tag.title && !tag.description) return;

      const dirParts = projectDirectory.split("/");

      /**
       * @example fileName 'packages/ui/src/components/elements/accordion/accordion.tsx'
       */
      const pathParts = source.fileName.split("/");

      // Remove file name
      pathParts.pop();

      // Align directory structure
      const eraseIndex = dirParts.findIndex((part) => {
        return pathParts.find((currPart) => currPart === part);
      });
      if (eraseIndex !== -1) {
        const index = dirParts.length - eraseIndex;
        Array(index)
          .fill(0)
          .forEach(() => dirParts.pop());
      }

      /**
       * @docs ./docs
       * @example fileName 'packages/ui/src/components/elements/accordion/docs'
       */
      const docsPath = path.join(dirParts.join("/"), pathParts.join("/"), tag.title || tag.description);

      try {
        fs.copySync(docsPath, outPath, { errorOnExist: false });
      } catch (err) {
        error(err, reflection.name);
      }
    });
  }
};
