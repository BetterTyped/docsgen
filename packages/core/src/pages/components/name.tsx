import React from "react";

import type { HeadingType } from "../../types/components.types";
import type { PagePropsType } from "../../types/page.types";
import { getStatusIcon } from "../handlers/name";
import { sanitizeString } from "parsing/renderer/utils/sanitize.utils";

export type NameProps = {
  headingSize?: HeadingType;
};

export const Name: React.FC<PagePropsType & NameProps> = ({ reflection, headingSize = "h1" }) => {
  const { name } = reflection;
  const Heading = headingSize;

  const icon = getStatusIcon(reflection);

  if ("h1" === headingSize) {
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
