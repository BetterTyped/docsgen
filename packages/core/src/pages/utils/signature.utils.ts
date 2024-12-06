import { JSONOutput, ReflectionKind } from "typedoc";

export const getSignature = (
  reflection: JSONOutput.SomeReflection | JSONOutput.SomeType,
): JSONOutput.SignatureReflection | undefined => {
  // Methods
  if ("signatures" in reflection && reflection.signatures) {
    return reflection.signatures?.find((signature) => !!signature);
  }

  // Class / Function
  if ("children" in reflection && reflection.children) {
    return reflection.children?.find((child) =>
      [ReflectionKind.Constructor, ReflectionKind.CallSignature].includes(child.kind),
    )?.signatures?.[0];
  }
  return undefined;
};
