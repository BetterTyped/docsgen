import { DeclarationReflection } from "typedoc/dist/lib/serialization/schema";

import { getKindName } from "pages/utils";
import { isComponent } from "pages/utils/component.utils";
import { PagePropsType } from "types/page.types";

export const mdxClassName = "mdx-settings";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const Mdx = (props: PagePropsType) => {
  const { reflection, packageOptions } = props;

  const kind = getKindName(reflection as unknown as DeclarationReflection);
  const { name } = reflection;

  const fileName = packageOptions.fileNameMapper?.({ isComponent: isComponent(reflection), reflection, name, kind });

  const title = `${reflection.name}`;
  const sidebarLabel = `${fileName ? `${capitalize(reflection.name)} ${fileName}` : reflection.name}`;

  return (
    // ClassName is used by the docgen plugin to extract the MDX settings, DO NOT CHANGE!
    <div className={mdxClassName}>
      {`
---
sidebar_position: 1
title: ${title}
sidebar_label: ${sidebarLabel}
---
`}
    </div>
  );
};
