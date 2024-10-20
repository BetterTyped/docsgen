import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getCommentText } from "pages/handlers/comment";

export type DescriptionProps = {
  className?: string;
};

export const Description: React.FC<PagePropsType & DescriptionProps> = (props) => {
  const { reflection, className = "" } = props;

  return (
    <div className={`api-docs__description ${className}`}>
      {`
${getCommentText(reflection)}
        `}
    </div>
  );
};
