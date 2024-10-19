import { JSONOutput } from "typedoc";

import { getSignature } from "./signature.utils";

export const isComponent = (reflection: JSONOutput.SomeReflection) => {
  const signature = getSignature(reflection);

  const isComponentElement =
    signature?.type &&
    "qualifiedName" in signature.type &&
    signature.type.qualifiedName &&
    ["React.ReactNode", "JSX.Element", "ReactNode", "Element"].includes(signature.type.qualifiedName);

  const hasComponentsTypes =
    signature &&
    "types" in signature &&
    (signature?.types as JSONOutput.ReferenceType[]).every((type) => {
      return ["React.ReactNode", "JSX.Element", "ReactNode", "Element"].includes(type?.name);
    });

  if (isComponentElement || hasComponentsTypes) {
    return true;
  }
  return false;
};
