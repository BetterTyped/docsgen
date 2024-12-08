import { JSONOutput } from "typedoc";

export const getGenericParamsPreview = ({ generics }: { generics?: JSONOutput.TypeParameterReflection[] }): string => {
  if (!generics || generics.length === 0) {
    return "";
  }

  return `<${generics.map((param) => param.name).join(", ")}>`;
};
