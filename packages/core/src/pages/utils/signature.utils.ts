import type { JSONOutput} from "typedoc";
import { ReflectionKind } from "typedoc";

import { getGenericParamsPreview } from "./generics.utils";
import { getReference } from "./reference.utils";
import { getTypePreview } from "./types.utils";

const resolveSignatureFromType = (
  type: JSONOutput.SomeType,
  reflectionsTree: JSONOutput.ProjectReflection[],
): JSONOutput.SignatureReflection | undefined => {
  if ("object" !== typeof type || !type) {return undefined;}

  if ("target" in type && type.target && "name" in type) {
    const referenceType = getReference(reflectionsTree, type as JSONOutput.ReferenceType);

    if ("conditional" === referenceType?.type?.type) {
      const fromTrue =
        referenceType.type.trueType && resolveSignatureFromType(referenceType.type.trueType, reflectionsTree);
      if (fromTrue) {return fromTrue;}

      const fromFalse =
        referenceType.type.falseType && resolveSignatureFromType(referenceType.type.falseType, reflectionsTree);
      if (fromFalse) {return fromFalse;}
    }

    if (referenceType?.type) {
      return resolveSignatureFromType(referenceType.type, reflectionsTree);
    }
  }

  if ("declaration" in type && type.declaration) {
    const decl = type.declaration;
    if ("signatures" in decl && decl.signatures?.length) {
      return decl.signatures[0];
    }
  }

  return undefined;
};

/**
 * Resolves the first callable signature from a reflection by following
 * reference and conditional type chains. Handles properties whose type
 * is a reference to a function type alias (e.g. `listen: ListenType`).
 */
export const resolveSignature = (
  reflection: JSONOutput.DeclarationReflection | JSONOutput.SomeReflection,
  reflectionsTree: JSONOutput.ProjectReflection[],
): JSONOutput.SignatureReflection | undefined => {
  if ("signatures" in reflection && reflection.signatures?.length) {
    return reflection.signatures.find((s) => !!s);
  }

  if ("type" in reflection && "object" === typeof reflection.type && reflection.type) {
    return resolveSignatureFromType(reflection.type, reflectionsTree);
  }

  return undefined;
};

export const getSignature = (
  reflection: JSONOutput.SignatureReflection | JSONOutput.SomeReflection | JSONOutput.SomeType,
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

  // All Signature Reflections
  if (
    "kind" in reflection &&
    [
      ReflectionKind.SetSignature,
      ReflectionKind.GetSignature,
      ReflectionKind.IndexSignature,
      ReflectionKind.CallSignature,
      ReflectionKind.ConstructorSignature,
    ].includes(reflection.kind)
  ) {
    return reflection as JSONOutput.SignatureReflection;
  }

  return undefined;
};

export const getSignaturePreview = ({
  reflection,
  reflectionsTree,
  useArrow,
  hideName,
  hideGenerics,
  hideParamTypes,
  hideReturns,
}: {
  reflection: JSONOutput.SignatureReflection;
  reflectionsTree: JSONOutput.ProjectReflection[];
  useArrow?: boolean;
  hideName?: boolean;
  hideGenerics?: boolean;
  hideParamTypes?: boolean;
  hideReturns?: boolean;
}): string => {
  const hasName = !hideName && "__type" !== reflection.name;
  const isConstructor = reflection.kind === ReflectionKind.Constructor;

  const constructorName = !hasName && isConstructor ? `${reflection.flags?.isAbstract ? "abstract " : ""}new` : "";

  const name = hasName ? reflection.name : constructorName;

  const generics = !hideGenerics ? getGenericParamsPreview({ generics: reflection.typeParameter }) : "";
  const params =
    reflection.parameters
      ?.map((param) => {
        if (hideParamTypes) {
          return param.name;
        }
        const type = getTypePreview({ typeReflection: param.type, reflectionsTree });
        return `${param.flags?.isRest ? "..." : ""}${param.name}${param.flags?.isOptional ? "?" : ""}: ${type}`;
      })
      .join(", ") || "";
  const returns = !hideReturns
    ? `${useArrow ? " => " : ": "}${getTypePreview({
        typeReflection: reflection.type,
        reflectionsTree,
      })}`
    : "";

  return `${name}${generics}(${params})${returns}`;
};
