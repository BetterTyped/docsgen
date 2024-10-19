import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getMethods } from "../utils/methods.utils";
import { Method } from "./method";
import { getTypesArray } from "../utils/properties.utils";
import { DisplayType, HeadingType } from "types/components.types";
import { Table } from "../modules/table/table";
import { Grid } from "../modules/grid/grid";
import { Separator } from "./separator";

export type MethodsProps = {
  className?: string;
  display?: DisplayType;
  headingSize?: HeadingType;
};

export const Methods: React.FC<PagePropsType & MethodsProps> = (props) => {
  const { reflection, reflectionsTree, className = "", display, headingSize = "h3" } = props;
  const children = getTypesArray(reflectionsTree, reflection);

  if (!children) return null;

  const methods = getMethods(children, reflectionsTree);
  const Heading = headingSize;

  if (display === "grid") {
    return (
      <Grid className={`api-docs__methods ${className}`} pageProps={props} title="Methods" reflections={methods} />
    );
  }

  if (display === "table") {
    return (
      <Table className={`api-docs__methods ${className}`} pageProps={props} title="Methods" reflections={methods} />
    );
  }

  return (
    <div className={`api-docs__methods ${className}`}>
      <Heading className="api-docs__title">Methods</Heading>
      <Separator />
      {methods.map((method, index) => {
        return <Method {...props} key={index} reflection={method} />;
      })}
    </div>
  );
};
