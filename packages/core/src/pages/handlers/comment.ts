import { JSONOutput } from "typedoc";

import { getSignature } from "pages/utils/signature.utils";

export const getComment = (reflection: JSONOutput.SomeReflection | undefined): JSONOutput.Comment | undefined => {
  if (!reflection) return;

  if (reflection.comment) {
    return reflection.comment;
  }

  if ("type" in reflection && reflection.type && "declaration" in reflection.type) {
    return getComment(reflection.type.declaration.signatures?.[0]);
  }
};

export const getCommentText = (reflection: JSONOutput.SomeReflection): string => {
  const comment = "comment" in reflection ? reflection.comment : getSignature(reflection)?.comment;

  if (!comment) {
    return "";
  }
  // New line is necessary for MDX to parse it correctly - otherwise we would get errors
  return `\n

${comment?.summary.map(({ text }) => text).join("\n")}

\n`;
};
