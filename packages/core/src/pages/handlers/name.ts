import type { JSONOutput } from "typedoc";

export const getStatusIcon = (reflection: JSONOutput.SomeReflection) => {
  const { comment } = reflection;

  if (!comment) {return "";}

  const tags = new Set((comment.blockTags || []).map((blockTag) => blockTag.tag));

  if (tags.has("@new")) {
    return "🆕 ";
  }
  if (tags.has("@alpha")) {
    return "⚠️ ";
  }
  if (tags.has("@beta")) {
    return "🚧 ";
  }
  if (tags.has("@experimental")) {
    return "🧪 ";
  }
  if (tags.has("@deprecated")) {
    return "⛔️ ";
  }

  return ``;
};
