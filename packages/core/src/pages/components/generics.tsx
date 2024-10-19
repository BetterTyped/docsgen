import React from "react";
import { JSONOutput } from "typedoc";

import { PagePropsType } from "../../types/page.types";
import { getSignature } from "../utils/signature.utils";

export type GenericsProps = {
  className?: string;
};

// <Type1, Type2>
export const Generics: React.FC<PagePropsType<JSONOutput.DeclarationReflection> & GenericsProps> = (props) => {
  const { reflection, className = "" } = props;
  const signature = getSignature(reflection);

  if (!signature?.typeParameter) return null;

  return (
    <div className={`api-docs__generics ${className}`}>
      {"<"}
      {signature.typeParameter.map((param, index) => (
        <React.Fragment key={param.id}>
          {index > 0 && ","}
          {param.name}
        </React.Fragment>
      ))}
      {">"}
    </div>
  );
};
