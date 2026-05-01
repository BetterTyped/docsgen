import type { JSONOutput } from "typedoc";

export const getGenericParamsPreview = ({ generics }: { generics?: JSONOutput.TypeParameterReflection[] }): string => {
  if (!generics || 0 === generics.length) {
    return "";
  }

  return `<${generics.map((param) => param.name).join(", ")}>`;
};
