import { JSONOutput } from "typedoc";

import { getTypePreview } from "./types.utils";

export const getCallPreview = ({
  signature,
  reflectionsTree,
  options,
}: {
  signature: JSONOutput.SignatureReflection;
  reflectionsTree: JSONOutput.ProjectReflection[];
  options?: { paramsTypes?: boolean };
}) => {
  const { name } = signature;
  const { paramsTypes = true } = options || {};

  const typeSignatures = signature.typeParameter?.length && signature.typeParameter.map((param) => param.name);
  const typeSignature = typeSignatures ? `<${typeSignatures.join(", ")}>` : "";

  const callSignatures =
    signature.parameters?.length &&
    signature.parameters.map((param, index) => {
      // eslint-disable-next-line no-nested-ternary
      const paramName = param.flags?.isRest
        ? `...${param.name}`
        : param.name === "__namedParameter"
          ? `params$${index}`
          : param.name;

      const typeName = getTypePreview({ typeReflection: param, reflectionsTree });

      return paramsTypes && typeName ? `${paramName}: ${typeName}` : paramName;
    });
  const callSignature = callSignatures ? callSignatures.join(", ") : "";

  return [name, typeSignature, callSignature];
};
