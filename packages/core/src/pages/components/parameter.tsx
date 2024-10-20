import React from "react";

import { PagePropsType } from "../../types/page.types";
import { Code } from "./code";
import { Description } from "./description";
import { Name } from "./name";
import { Type } from "./type";
import { DisplayType } from "types/components.types";

export type ParameterProps = {
  type?: DisplayType;
};

export const Parameter: React.FC<PagePropsType> = (props) => {
  const { reflection } = props;
  const type = "type" in reflection ? reflection.type : null;

  if (!type) return null;

  return (
    <div className="api-docs__parameter">
      <Name {...props} headingSize="h4" />
      <Description {...props} />
      <Code>
        <Type {...props} reflection={type} />
      </Code>
      <hr />
    </div>
  );
};
