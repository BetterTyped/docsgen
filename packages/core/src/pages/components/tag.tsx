import React from "react";

import { getTags } from "pages/handlers/tags";
import { PagePropsType } from "types/page.types";

type TagProps = {
  tagName: `@${string}`;
};

export const Tag: React.FC<PagePropsType & TagProps> = (props) => {
  const { reflection, tagName } = props;

  const tag = getTags(reflection.comment, tagName)[0];

  if (!tag) return null;

  return (
    <div className="api-docs__tag">
      <div className="api-docs__tag-name">{tag.title}</div>
      <div className="api-docs__tag-text">{tag.description}</div>
    </div>
  );
};
