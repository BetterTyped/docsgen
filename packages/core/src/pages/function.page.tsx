import React from "react";

import { PagePropsType } from "../types/page.types";
import { Definition } from "./components/definition";
import { Description } from "./components/description";
import { Import } from "./components/import";
import { Name } from "./components/name";
import { Parameters } from "./components/parameters";
import { Preview } from "./components/preview";
import { Returns } from "./components/returns";
import { Section } from "./components/section";
import { Separator } from "./components/separator";
import { Sources } from "./components/sources";
import { Examples } from "./components/examples";
import { Npm } from "./components/npm";
import { ReturnsPreview } from "./components/returns-preview";
import { Mdx } from "./components/mdx";
import { PackagePages } from "types/package.types";

export type FunctionPageOptions = {
  mdx?: boolean | ((props: PagePropsType) => React.ReactNode);
  intro?: boolean | ((props: PagePropsType) => React.ReactNode);
  usage?: boolean | ((props: PagePropsType) => React.ReactNode);
  parameters?: boolean | ((props: PagePropsType) => React.ReactNode);
  returns?: boolean | ((props: PagePropsType) => React.ReactNode);
  custom?: (props: PagePropsType) => React.ReactNode;
};

export const FunctionPage: React.FC<PagePropsType> = (props) => {
  const { pluginOptions } = props;
  const { pages } = pluginOptions;
  const {
    mdx = true,
    intro = true,
    parameters = true,
    usage = true,
    returns = true,
    custom,
  } = pages?.[PackagePages.FUNCTION] || {};

  if (custom) {
    return custom(props);
  }

  return (
    <>
      <Section props={props} render={mdx}>
        <Mdx {...props} />
      </Section>
      <Section className="intro" props={props} render={intro}>
        <Name {...props} />
        <Description {...props} />
        <Sources {...props} />
        <Separator />
        <Import {...props} />
        <Definition {...props} />
        <Npm {...props} />
      </Section>
      <Section title="Usage" props={props} render={usage}>
        <Examples {...props} />
      </Section>
      <Section title="Parameters" props={props} render={parameters}>
        <Preview {...props} />
        <Parameters {...props} />
      </Section>
      <Section title="Returns" props={props} render={returns}>
        <ReturnsPreview {...props} />
        <Returns {...props} />
      </Section>
    </>
  );
};
