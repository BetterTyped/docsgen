import React from "react";

import { HeadingType } from "../../types/components.types";
import { PagePropsType } from "../../types/page.types";
import { getStatusIcon } from "../handlers/name";
import { sanitizeString } from "parsing/renderer/utils/sanitize.utils";

export type NameProps = {
  headingSize?: HeadingType;
};

export const Name: React.FC<PagePropsType & NameProps> = ({ reflection, headingSize = "h1" }) => {
  const { name } = reflection;
  const Heading = headingSize;

  const icon = getStatusIcon(reflection);

  if (headingSize === "h1") {
    return (
      <>
        {"\n"}
        {"\n"}
        {`# ${icon}${name}`}
        {"\n"}
        {"\n"}
      </>
    );
  }

  return (
    <Heading className="api-docs__name">
      {icon}
      {sanitizeString(name)}
    </Heading>
  );
};
