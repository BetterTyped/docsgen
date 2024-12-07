import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getSignature } from "../utils/signature.utils";
import { Definition } from "./definition";
import { Description } from "./description";
import { Name } from "./name";
import { Parameters } from "./parameters";
import { Preview } from "./preview";
import { Returns } from "./returns";
import { Section } from "./section";
import { Sources } from "./sources";
import { DisplayType } from "types/components.types";
import { Grid } from "../modules/grid/grid";
import { Table } from "../modules/table/table";

export type MethodProps = {
  className?: string;
  display?: DisplayType;
  withParams?: boolean;
};

export const Method: React.FC<PagePropsType & MethodProps> = (props) => {
  const { reflection, className = "", display, withParams = false } = props;
  const { name } = reflection;
  const methodSignature = getSignature(reflection);

  const paramsList = withParams ? methodSignature?.parameters?.map((param) => param.name).join(", ") || "" : "";

  if (!methodSignature) {
    return null;
  }

  if (display === "grid") {
    if (!methodSignature?.parameters) {
      console.error("Cannot display grid view, parameters not found for method: ", name);
      return null;
    }

    return (
      <Grid
        className={`api-docs__parameters ${className}`}
        pageProps={props}
        title="Parameters"
        reflections={methodSignature.parameters}
      />
    );
  }

  if (display === "table") {
    if (!methodSignature?.parameters) {
      console.error("Cannot display table view, parameters not found for method: ", name);
      return null;
    }

    return (
      <Table
        className={`api-docs__parameters ${className}`}
        pageProps={props}
        title="Parameters"
        reflections={methodSignature.parameters}
      />
    );
  }

  return (
    <div className={`api-docs__method ${className}`} method-data={name}>
      <Name
        {...props}
        reflection={{
          ...reflection,
          name: `${name}(${paramsList})`,
        }}
        headingSize="h3"
      />
      <Sources {...props} />
      <Description {...props} />
      <Definition {...props} />
      <Section headingSize="h6" title="Preview">
        <Preview {...props} />
      </Section>
      <Section headingSize="h6" title="Parameters">
        <Parameters {...props} headingSize="h4" />
      </Section>
      <Section headingSize="h6" title="Return">
        <Returns {...props} />
      </Section>
      <hr />
    </div>
  );
};
