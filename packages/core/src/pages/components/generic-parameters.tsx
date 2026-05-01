import React from "react";
import type { JSONOutput } from "typedoc";

export type GenericParametersProps = {
  generics?: JSONOutput.TypeParameterReflection[];
};

export const GenericParameters = ({ generics }: GenericParametersProps) => {
  if (!generics || 0 === generics.length) {
    return null;
  }

  return (
    <span className="api-docs__generics">
      {"<"}
      {generics.map((param, i) => (
        <React.Fragment key={param.id}>
          { 0 < i && ","}
          {param.name}
        </React.Fragment>
      ))}
      {">"}
    </span>
  );
};
