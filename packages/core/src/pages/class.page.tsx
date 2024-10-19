import React from "react";

import { PagePropsType } from "../types/page.types";
import { Definition } from "./components/definition";
import { Description } from "./components/description";
import { Import } from "./components/import";
import { Methods } from "./components/methods";
import { Name } from "./components/name";
import { Parameters } from "./components/parameters";
import { Properties } from "./components/properties";
import { Section } from "./components/section";
import { Separator } from "./components/separator";
import { Sources } from "./components/sources";
import { Npm } from "./components/npm";
import { Preview } from "./components/preview";
import { Examples } from "./components/examples";
import { Mdx } from "./components/mdx";
import { PackagePages } from "types/package.types";

export type ClassPageOptions = {
  mdx?: boolean | ((props: PagePropsType) => React.ReactNode);
  intro?: boolean | ((props: PagePropsType) => React.ReactNode);
  parameters?: boolean | ((props: PagePropsType) => React.ReactNode);
  properties?: boolean | ((props: PagePropsType) => React.ReactNode);
  methods?: boolean | ((props: PagePropsType) => React.ReactNode);
  usage?: boolean | ((props: PagePropsType) => React.ReactNode);
  custom?: (props: PagePropsType) => React.ReactNode;
};

export const ClassPage: React.FC<PagePropsType> = (props) => {
  const { pluginOptions } = props;
  const { pages } = pluginOptions;
  const {
    mdx = true,
    intro = true,
    parameters = true,
    properties = true,
    methods = true,
    usage = true,
    custom,
  } = pages?.[PackagePages.CLASS] || {};

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
      <Section title="Parameters" props={props} render={parameters}>
        <Preview {...props} />
        <Parameters {...props} />
      </Section>
      <Section title="Properties" props={props} render={properties}>
        <Properties {...props} />
      </Section>
      <Section title="Methods" props={props} render={methods}>
        <Methods {...props} />
      </Section>
      <Section title="Usage" props={props} render={usage}>
        <Examples {...props} />
      </Section>
    </>
  );
};
