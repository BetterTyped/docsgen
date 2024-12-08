import { JSONOutput, ReflectionKind } from "typedoc";

import { isMethod } from "./methods.utils";
import { getReference } from "./reference.utils";
import { getSignature } from "./signature.utils";
import { getTags } from "pages/handlers";

export const getTypes = (
  reflectionsTree: JSONOutput.ProjectReflection[],
  reflection: JSONOutput.SomeReflection | JSONOutput.SomeType,
): JSONOutput.DeclarationReflection[] => {
  if (!reflection) return [];

  if ("type" in reflection && typeof reflection.type !== "string" && reflection.type) {
    return getTypes(reflectionsTree, reflection.type);
  }

  if ("type" in reflection && typeof reflection.type === "string" && reflection.type === "intersection") {
    return reflection.types
      .map((type) => {
        return getTypes(reflectionsTree, type);
      })
      .flat()
      .filter(Boolean);
  }

  if (
    "type" in reflection &&
    typeof reflection.type === "object" &&
    reflection.type &&
    "typeArguments" in reflection.type
  ) {
    return reflection.type?.typeArguments
      ?.map((type) => {
        return getTypes(reflectionsTree, type);
      })
      .flat()
      .filter(Boolean) as JSONOutput.DeclarationReflection[];
  }

  if ("children" in reflection) {
    return reflection.children || [];
  }
  if (
    "type" in reflection &&
    typeof reflection.type === "object" &&
    "declaration" in reflection.type &&
    reflection.type.declaration &&
    "children" in reflection.type.declaration
  ) {
    return reflection.type.declaration.children || [];
  }
  if (
    "type" in reflection &&
    typeof reflection.type === "object" &&
    "types" in reflection.type &&
    reflection.type?.types
  ) {
    return reflection.type.types
      .map((type) => {
        return getTypes(reflectionsTree, type);
      })
      .flat()
      .filter(Boolean);
  }

  if ("type" in reflection && typeof reflection.type === "string" && reflection.type === "reference") {
    const reference = getReference(reflectionsTree, reflection);

    if (reference?.kind === ReflectionKind.Class) {
      const types = [];
      const signature = getSignature(reflection);
      if (signature) {
        types.push(...getTypes(reflectionsTree, signature));
      }
      return types;
    }

    if (!reference) return [];
    return getTypes(reflectionsTree, reference);
  }

  if ("declaration" in reflection && reflection.declaration) {
    return getTypes(reflectionsTree, reflection.declaration);
  }

  return [];
};

export const getProperties = (
  children: JSONOutput.DeclarationReflection[],
  reflectionsTree: JSONOutput.ProjectReflection[],
) => {
  if (!children) return [];
  return children
    .sort((a, b) => {
      const nameA = a.name.startsWith("_");
      const nameB = b.name.startsWith("_");

      if (nameA && nameB) {
        return 0;
      }
      if (nameA) {
        return 1;
      }
      return -1;
    })
    .filter((element) => element.name !== "constructor")
    .filter((element) => {
      return !isMethod(element, reflectionsTree);
    })
    .filter((element) => {
      const isInternal = getTags(element.comment, "@internal");
      if (isInternal?.length) {
        return false;
      }
      return true;
    });
};
