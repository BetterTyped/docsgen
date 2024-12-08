/* eslint-disable max-lines */
/* eslint-disable no-nested-ternary */
import { JSONOutput } from "typedoc";

import { getSignaturePreview } from "./signature.utils";

function parens(element: string, needsParens?: boolean): string {
  if (!needsParens) {
    return element;
  }

  return `(${element})`;
}

export const getTypePreview = ({
  typeReflection,
  reflectionsTree,
  needParens = false,
}: {
  typeReflection: JSONOutput.SomeReflection | JSONOutput.SomeType | undefined | null;
  reflectionsTree: JSONOutput.ProjectReflection[];
  needParens?: boolean;
}): string => {
  if (!typeReflection) return "void";
  if (typeReflection === null) return "null";

  if ("type" in typeReflection && typeof typeReflection.type !== "string") {
    return getTypePreview({
      typeReflection: typeReflection.type,
      reflectionsTree,
      needParens,
    });
  }

  if (!("type" in typeReflection)) {
    return typeReflection.name;
  }

  switch (String(typeReflection.type)) {
    case "array": {
      const type = typeReflection as unknown as JSONOutput.ArrayType;

      return `${getTypePreview({ typeReflection: type.elementType, reflectionsTree, needParens: true })}[]`;
    }

    case "conditional": {
      const type = typeReflection as unknown as JSONOutput.ConditionalType;

      return parens(
        `${getTypePreview({ typeReflection: type.checkType, reflectionsTree, needParens: true })} extends ${getTypePreview({ typeReflection: type.extendsType, reflectionsTree, needParens })} ? ${getTypePreview({ typeReflection: type.trueType, reflectionsTree, needParens })} : ${getTypePreview({ typeReflection: type.falseType, reflectionsTree, needParens })}`,
        needParens,
      );
    }

    case "indexedAccess": {
      const type = typeReflection as unknown as JSONOutput.IndexedAccessType;

      return `${getTypePreview({ typeReflection: type.objectType, reflectionsTree, needParens })}[${getTypePreview({ typeReflection: type.indexType, reflectionsTree, needParens })}]`;
    }

    case "inferred": {
      const type = typeReflection as unknown as JSONOutput.InferredType;

      return `infer ${type.name}`;
    }

    case "intersection": {
      const type = typeReflection as unknown as JSONOutput.IntersectionType;

      return parens(
        type.types.map((t) => getTypePreview({ typeReflection: t, reflectionsTree, needParens: true })).join(" & "),
        needParens,
      );
    }

    case "intrinsic": {
      const type = typeReflection as unknown as JSONOutput.IntrinsicType;

      return type.name;
    }

    case "literal": {
      const type = typeReflection as unknown as JSONOutput.LiteralType;

      return String(type.value);
    }

    case "mapped": {
      const type = typeReflection as unknown as JSONOutput.MappedType;

      const modifier = type.readonlyModifier === "+" ? "readonly " : type.readonlyModifier === "-" ? "-readonly " : "";
      const inType = getTypePreview({ typeReflection: type.parameterType, reflectionsTree, needParens });
      const nameType = type.nameType && getTypePreview({ typeReflection: type.nameType, reflectionsTree, needParens });
      const optionalModifier = type.optionalModifier === "+" ? "?:" : "-?:";
      const assignmentModifier = type.optionalModifier ? optionalModifier : ":";
      const typePreview = getTypePreview({ typeReflection: type.templateType, reflectionsTree, needParens });

      return `{ ${modifier}[ ${type.parameter} in ${inType}${nameType ? ` as ${nameType} ` : ""}]${assignmentModifier} ${typePreview} }`;
    }

    case "optional": {
      const type = typeReflection as unknown as JSONOutput.OptionalType;

      return `${getTypePreview({ typeReflection: type.elementType, reflectionsTree, needParens })}?`;
    }

    case "predicate": {
      const type = typeReflection as unknown as JSONOutput.PredicateType;

      return `${type.asserts ? "asserts " : ""}${type.name}${type.targetType ? ` is ${getTypePreview({ typeReflection: type.targetType, reflectionsTree, needParens })}` : ""}`;
    }

    case "query": {
      const type = typeReflection as unknown as JSONOutput.QueryType;

      return `typeof ${getTypePreview({ typeReflection: type.queryType, reflectionsTree, needParens })}`;
    }

    case "reference": {
      const type = typeReflection as unknown as JSONOutput.ReferenceType;

      return `${type.name}${type.typeArguments && type.typeArguments.length > 0 ? `<${type.typeArguments.map((t) => getTypePreview({ typeReflection: t, reflectionsTree, needParens })).join(", ")}>` : ""}`;
    }

    case "reflection": {
      const type = typeReflection as unknown as JSONOutput.ReflectionType;
      const decl = type.declaration;

      // object literal
      if (decl?.children && decl.children.length > 0) {
        return `{ ${decl.children.map((child) => `${child.name}${child.flags?.isOptional ? "?" : ""}: ${child.type ? getTypePreview({ typeReflection: child.type, reflectionsTree, needParens }) : "any"}`).join("; ")} }`;
      }

      if (decl?.signatures && decl.signatures.length === 1) {
        return getSignaturePreview({ reflection: decl.signatures[0], reflectionsTree, useArrow: true, hideName: true });
      }

      if (decl?.signatures && decl.signatures.length > 0) {
        return parens(
          `{ ${decl.signatures.map((sig) => getSignaturePreview({ reflection: sig, reflectionsTree, useArrow: true, hideName: true })).join("; ")} }`,
          needParens,
        );
      }

      return `{}`;
    }

    case "rest": {
      const type = typeReflection as unknown as JSONOutput.RestType;

      return `...${getTypePreview({ typeReflection: type.elementType, reflectionsTree, needParens })}`;
    }

    case "tuple": {
      const type = typeReflection as unknown as JSONOutput.TupleType;

      return `[${type.elements?.map((t) => getTypePreview({ typeReflection: t, reflectionsTree, needParens })).join(", ")}]`;
    }

    case "typeOperator": {
      const type = typeReflection as unknown as JSONOutput.TypeOperatorType;

      return `${type.operator} ${getTypePreview({ typeReflection: type.target, reflectionsTree, needParens })}`;
    }

    case "union": {
      const type = typeReflection as unknown as JSONOutput.UnionType;

      return parens(
        type.types.map((t) => getTypePreview({ typeReflection: t, reflectionsTree, needParens: true })).join(" | "),
        needParens,
      );
    }

    case "unknown": {
      const type = typeReflection as unknown as JSONOutput.UnknownType;

      return type.name;
    }

    case "named-tuple-member": {
      const type = typeReflection as unknown as unknown as JSONOutput.NamedTupleMemberType;

      return `${type.name}${type.isOptional ? "?: " : ": "}${getTypePreview({ typeReflection: type.element, reflectionsTree, needParens })}`;
    }

    case "template-literal": {
      const type = typeReflection as unknown as unknown as JSONOutput.TemplateLiteralType;

      return `${type.head}${type.tail.map((t, i) => ` ${i > 0 ? "${" : ""}${typeof t[0] !== "string" ? getTypePreview({ typeReflection: t[0], reflectionsTree, needParens }) : ""}${t[1]}`).join("")}`;
    }

    default:
      return "void";
  }
};
