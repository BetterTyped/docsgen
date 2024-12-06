import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getTypesArray, getProperties } from "../utils/properties.utils";
import { Property } from "./property";
import { DisplayType } from "types/components.types";
import { Grid } from "../modules/grid/grid";
import { Table } from "../modules/table/table";

export type PropertiesProps = {
  className?: string;
  display?: DisplayType;
};

export const Properties: React.FC<PagePropsType & PropertiesProps> = (props) => {
  const { reflection, reflectionsTree, display, className = "" } = props;
  const children = getTypesArray(reflectionsTree, reflection);

  if (!children) return null;

  const properties = getProperties(children, reflectionsTree);

  if (display === "grid") {
    return (
      <Grid
        className={`api-docs__properties ${className}`}
        pageProps={props}
        title="Properties"
        reflections={properties}
      />
    );
  }

  if (display === "table") {
    return (
      <Table
        className={`api-docs__properties ${className}`}
        pageProps={props}
        title="Properties"
        reflections={properties}
      />
    );
  }

  return (
    <div className="api-docs__properties">
      {properties.map((prop, index) => (
        <Property key={index} {...props} reflection={prop} />
      ))}
    </div>
  );
};
