import React from "react";

import { getTags } from "pages/handlers/tags";
import { getSignature } from "pages/utils/signature.utils";
import { PagePropsType } from "types/page.types";
import { HeadingType } from "types/components.types";

export type ExamplesProps = {
  className?: string;
  headingSize?: HeadingType;
};

export const Examples: React.FC<PagePropsType & ExamplesProps> = (props) => {
  const { reflection, headingSize = "h5", className = "" } = props;

  const Heading = headingSize;

  const signature = getSignature(reflection);
  const comment = signature?.comment || reflection.comment;
  const examples = getTags(comment, "@example");

  if (!examples.length) {
    return null;
  }

  return (
    <div className={`api-docs__examples ${className}`}>
      {examples.map((example, index) => {
        return (
          <div key={index} className="api-docs__example">
            {example.title && <Heading className="api-docs__example-title">{example.title}</Heading>}
            <pre>{example.description}</pre>
          </div>
        );
      })}
    </div>
  );
};
