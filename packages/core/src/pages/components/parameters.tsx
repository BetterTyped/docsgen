import React from "react";

import { DisplayType, HeadingType } from "../../types/components.types";
import { PagePropsType } from "../../types/page.types";
import { getSignature } from "../utils/signature.utils";
import { Parameter } from "./parameter";
import { Table } from "../modules/table/table";
import { Grid } from "../modules/grid/grid";
import { getTypes } from "pages/utils/properties.utils";
import { isComponent } from "pages/utils/component.utils";
import { Separator } from "./separator";

export type ParametersProps = {
  className?: string;
  display?: DisplayType;
  headingSize?: HeadingType;
};

export const Parameters: React.FC<PagePropsType & ParametersProps> = (props) => {
  const { reflectionsTree, reflection, headingSize = "h2", display = "table", className = "" } = props;
  const signature = getSignature(reflection);

  if (!signature?.parameters?.length) return null;

  const Heading = headingSize;

  const firstParam = signature.parameters[0];
  const children = isComponent(reflection) ? getTypes(reflectionsTree, firstParam) : signature.parameters;

  if (display === "grid") {
    return (
      <Grid
        className={`api-docs__parameters ${className}`}
        pageProps={props}
        title="Parameters"
        reflections={children}
        reflectionsTree={reflectionsTree}
      />
    );
  }

  if (display === "table") {
    return (
      <Table
        className={`api-docs__parameters ${className}`}
        pageProps={props}
        title="Parameters"
        reflections={children}
        reflectionsTree={reflectionsTree}
      />
    );
  }

  return (
    <div className="api-docs__parameters">
      <Heading className="api-docs__title">Parameters</Heading>
      <Separator />
      {children.map((param, index) => {
        return <Parameter key={index} {...props} reflection={param} />;
      })}
    </div>
  );
};
