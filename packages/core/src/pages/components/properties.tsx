import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getTypesArray, getProperties } from "../utils/properties.utils";
import { Property } from "./property";
import { DisplayType, HeadingType } from "types/components.types";
import { Grid } from "../modules/grid/grid";
import { Table } from "../modules/table/table";
import { Separator } from "./separator";

export type PropertiesProps = {
  className?: string;
  display?: DisplayType;
  headingSize?: HeadingType;
};

export const Properties: React.FC<PagePropsType & PropertiesProps> = (props) => {
  const { reflection, reflectionsTree, display, headingSize = "h3", className = "" } = props;
  const children = getTypesArray(reflectionsTree, reflection);
  const Heading = headingSize;

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
      <Heading className="api-docs__title">Properties</Heading>
      <Separator />
      {properties.map((prop, index) => (
        <Property key={index} {...props} reflection={prop} />
      ))}
    </div>
  );
};
