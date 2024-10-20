import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getSignature } from "../utils/signature.utils";
import { Code } from "./code";
import { Definition } from "./definition";
import { Description } from "./description";
import { Name } from "./name";
import { Section } from "./section";
import { Sources } from "./sources";
import { Type } from "./type";
import { Examples } from "./examples";

export type PropertyProps = {
  className?: string;
};

export const Property: React.FC<PagePropsType & PropertyProps> = (props) => {
  const { reflection, className = "" } = props;
  const { name } = reflection;
  const type = "type" in reflection ? reflection.type : null;
  const methodSignature = getSignature(reflection);

  return (
    <div className={`api-docs__property ${className}`} property-data={name}>
      <Name {...props} headingSize="h4" />
      <Sources {...props} />
      <Section headingSize="h5" title="Description">
        <Description {...props} reflection={methodSignature || reflection} />
        <Definition {...props} reflection={reflection} />
      </Section>
      <Section headingSize="h5" title="Type">
        <div className="api-docs__property-type">
          <Code>
            <Type {...props} reflection={type} />
          </Code>
        </div>
      </Section>
      <Examples {...props} />
      <hr />
    </div>
  );
};
