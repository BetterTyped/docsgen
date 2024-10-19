import { JSONOutput } from "typedoc";

import { getKindName } from "./display.utils";

export const getSignature = (
  reflection: JSONOutput.SomeReflection | JSONOutput.SomeType,
): JSONOutput.SignatureReflection | undefined => {
  const parametersKinds = ["Call", "Constructor"];

  // Methods
  if ("signatures" in reflection && reflection.signatures) {
    return reflection.signatures?.find((signature) => !!signature);
  }

  // Class / Function
  if ("children" in reflection && reflection.children) {
    return reflection.children
      ?.find((child) => !!parametersKinds.includes(getKindName(child)))
      ?.signatures?.find((signature) => !!signature);
  }
  return undefined;
};
