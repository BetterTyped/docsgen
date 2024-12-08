import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getTags } from "../handlers/tags";
import { Code } from "./code";
import { getTypes } from "../utils/properties.utils";
import { getSortedChildren } from "../utils/display.utils";
import { DisplayType, HeadingType } from "types/components.types";
import { Table } from "../modules/table/table";
import { Grid } from "../modules/grid/grid";
import { Type } from "./type";
import { getSignature } from "pages/utils/signature.utils";
import { Tag } from "./tag";

export type ReturnsProps = {
  className?: string;
  headingSize?: HeadingType;
  display?: DisplayType;
  onlyArray?: boolean;
};

export const Returns: React.FC<PagePropsType & ReturnsProps> = (props) => {
  const { reflection, reflectionsTree, display = "table", className, onlyArray } = props;
  const { comment } = reflection;
  const disableReturn = getTags(comment, "@disableReturns")[0];
  const signature = getSignature(reflection);

  if (disableReturn) return null;

  const children = getTypes(reflectionsTree, signature || reflection);
  const sorted = getSortedChildren(children, reflectionsTree);

  if (display === "grid" && sorted.length) {
    return (
      <Grid
        className={`api-docs__returns ${className}`}
        pageProps={props}
        title={reflection.name}
        reflections={sorted}
        reflectionsTree={reflectionsTree}
      />
    );
  }

  if (display === "table" && sorted.length) {
    return (
      <Table
        className={`api-docs__returns ${className}`}
        pageProps={props}
        title={reflection.name}
        reflections={sorted}
        reflectionsTree={reflectionsTree}
      />
    );
  }

  if (onlyArray) return null;

  return (
    <div className={`api-docs__returns ${className}`}>
      <Tag {...props} reflection={signature || reflection} tagName="@returns" />
      {/* TODO: add returns description */}
      {!disableReturn && (
        <Code>
          <Type {...props} reflection={signature || reflection} />
        </Code>
      )}
    </div>
  );
};
