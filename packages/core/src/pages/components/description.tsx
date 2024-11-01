import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getCommentNode } from "pages/handlers/comment";

export type DescriptionProps = {
  className?: string;
};

export const Description: React.FC<PagePropsType & DescriptionProps> = (props) => {
  const { reflection, className = "" } = props;

  return <div className={`api-docs__description ${className}`}>{getCommentNode(reflection)}</div>;
};
