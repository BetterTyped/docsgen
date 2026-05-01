import React from "react";
import type { JSONOutput } from "typedoc";

import type { PagePropsType } from "../../types/page.types";
import { getTypePreview } from "pages/utils/types.utils";

export const Type = ({
  needsParens = false,
  ...props
}: PagePropsType<JSONOutput.SomeReflection | JSONOutput.SomeType | undefined | null> & {
  needsParens?: boolean;
}): React.ReactElement | null => {
  const { reflection, reflectionsTree } = props;

  const typePreview = getTypePreview({ typeReflection: reflection, reflectionsTree, needParens: needsParens });

  return <>{typePreview}</>;
};
