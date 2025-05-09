import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getMethods } from "../utils/methods.utils";
import { Method } from "./method";
import { getTypes } from "../utils/properties.utils";
import { DisplayType } from "types/components.types";
import { Table } from "../modules/table/table";
import { Grid } from "../modules/grid/grid";

export type MethodsProps = {
  className?: string;
  display?: DisplayType;
};

export const Methods: React.FC<PagePropsType & MethodsProps> = (props) => {
  const { reflection, reflectionsTree, className = "", display } = props;
  const children = getTypes(reflectionsTree, reflection);

  if (!children) return null;

  const methods = getMethods(children, reflectionsTree);

  if (!methods.length) return null;

  if (display === "grid") {
    return (
      <Grid
        className={`api-docs__methods ${className}`}
        pageProps={props}
        title="Methods"
        reflections={methods}
        reflectionsTree={reflectionsTree}
      />
    );
  }

  if (display === "table") {
    return (
      <Table
        className={`api-docs__methods ${className}`}
        pageProps={props}
        title="Methods"
        reflections={methods}
        reflectionsTree={reflectionsTree}
        hideType
      />
    );
  }

  return (
    <div className={`api-docs__methods ${className}`}>
      {methods.map((method, index) => {
        return <Method {...props} key={index} reflection={method} />;
      })}
    </div>
  );
};
