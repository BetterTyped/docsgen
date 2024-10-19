import React from "react";
import ReactDOMServer from "react-dom/server";

import { HeadingType } from "../../types/components.types";
import { PagePropsType } from "types/page.types";

const isChildNull = (children: React.ReactElement) => {
  return !ReactDOMServer.renderToStaticMarkup(children);
};

export type SectionType = {
  title?: string;
  className?: string;
  headingSize?: HeadingType;
} & (
  | {
      props: PagePropsType;
      render: boolean | ((props: PagePropsType) => React.ReactNode);
    }
  | {
      props?: never;
      render?: never;
    }
);

export const Section: React.FC<{ children: React.ReactNode } & SectionType> = ({
  props,
  title,
  children,
  className,
  headingSize = "h2",
  render,
}) => {
  if (!render) {
    return null;
  }

  if (typeof render === "function") {
    return render(props);
  }

  const Heading = headingSize;

  if (isChildNull(children as React.ReactElement)) {
    return null;
  }

  return (
    <div className={`api-docs__${(title || className || "section").toLocaleLowerCase()}`}>
      {title && (
        <div className="api-docs__section-title">
          <Heading>{title}</Heading>
        </div>
      )}
      {children}
    </div>
  );
};
