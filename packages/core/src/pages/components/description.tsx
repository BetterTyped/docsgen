import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getCommentNode } from "pages/handlers/comment";
import { getSignature } from "pages/utils";

export type DescriptionProps = {
  className?: string;
};

export const Description: React.FC<PagePropsType & DescriptionProps> = (props) => {
  const { reflection, className = "" } = props;

  const signature = getSignature(reflection);
  const children = getCommentNode(signature || reflection) || getCommentNode(reflection);

  return <div className={`api-docs__description ${className}`}>{children}</div>;
};
