import React from "react";

import { PagePropsType } from "../types/page.types";
import { Definition } from "./components/definition";
import { Description } from "./components/description";
import { Import } from "./components/import";
import { Name } from "./components/name";
import { Preview } from "./components/preview";
import { Section } from "./components/section";
import { Separator } from "./components/separator";
import { Sources } from "./components/sources";
import { Npm } from "./components/npm";
import { Mdx } from "./components/mdx";
import { PackagePages } from "types/package.types";

export type EnumPageOptions = {
  mdx?: boolean | ((props: PagePropsType) => React.ReactNode);
  intro?: boolean | ((props: PagePropsType) => React.ReactNode);
  preview?: boolean | ((props: PagePropsType) => React.ReactNode);
  custom?: (props: PagePropsType) => React.ReactNode;
};

export const EnumPage: React.FC<PagePropsType> = (props) => {
  const { pluginOptions } = props;
  const { pages } = pluginOptions;
  const { mdx = true, intro = true, preview = true, custom } = pages?.[PackagePages.ENUM] || {};

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
      <Section title="Preview" props={props} render={preview}>
        <Preview {...props} />
      </Section>
    </>
  );
};
