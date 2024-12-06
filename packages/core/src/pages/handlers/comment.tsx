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

export const getCommentText = (reflection: JSONOutput.SomeReflection | JSONOutput.SignatureReflection): string => {
  const comment = "comment" in reflection ? reflection.comment : getSignature(reflection)?.comment;

  if (!comment) {
    return "";
  }
  return comment?.summary
    .map(({ text }) => text)
    .join("\n")
    .trim();
};

export const getCommentNode = (
  reflection: JSONOutput.SomeReflection | JSONOutput.SignatureReflection,
): React.ReactNode => {
  const comment = getCommentText(reflection).trim();

  if (!comment) {
    return null;
  }
  // New line is necessary for MDX to parse it correctly - otherwise we would get errors
  return (
    <>
      {`

${comment}

`}
    </>
  );
};
