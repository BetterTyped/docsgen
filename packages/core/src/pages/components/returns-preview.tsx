import React from "react";

import { PagePropsType } from "../../types/page.types";
import { getSignature } from "../utils/signature.utils";
import { Preview } from "./preview";

export const ReturnsPreview: React.FC<PagePropsType> = (props) => {
  const { reflection } = props;

  const signature = getSignature(reflection);

  if (!signature || !("type" in signature)) return null;
  if (!signature.type) return null;

  return <Preview {...props} reflection={signature.type} />;
};
