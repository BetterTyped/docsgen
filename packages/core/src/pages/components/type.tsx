// Based on great work of @milesj https://github.com/milesj/docusaurus-plugin-typedoc-api/blob/39737cabeaf5a2d01a66edf07967b59cbdc2994f/packages/plugin/src/components/MemberSignatureTitle.tsx
import React from "react";
import { JSONOutput } from "typedoc";

import { PagePropsType } from "../../types/page.types";
import { getReference } from "../utils/reference.utils";
import { Signature } from "./signature";

// prettier-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-useless-escape
const braceLeft = "\\{";

// prettier-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-useless-escape
const braceRight = "\\}";

function parens(element: JSX.Element, needsParens?: boolean): JSX.Element {
  if (!needsParens) {
    return element;
  }

  return (
    <>
      {needsParens && <span className="api-type__symbol token tag punctuation">(</span>}
      {element}
      {needsParens && <span className="api-type__symbol token tag punctuation">)</span>}
    </>
  );
}

export const Type = ({
  needsParens = false,
  ...props
}: PagePropsType<JSONOutput.SomeReflection | JSONOutput.SomeType | undefined | null> & {
  needsParens?: boolean;
}): React.ReactElement | null => {
  const { reflection, reflectionsTree } = props;
  if (reflection === null) {
    return <>null</>;
  }

  if (!reflection) {
    return <>void</>;
  }

  if ("type" in reflection && typeof reflection.type !== "string") {
    return <Type {...props} needsParens={needsParens} reflection={reflection.type} />;
  }

  if (!("type" in reflection)) {
    return <>{reflection.name}</>;
  }

  switch (String(reflection.type)) {
    case "array": {
      const type = reflection as unknown as JSONOutput.ArrayType;

      return (
        <>
          <Type {...props} reflection={type.elementType} needsParens />
          <span className="api-type__symbol token tag punctuation">[]</span>
        </>
      );
    }

    case "conditional": {
      const type = reflection as unknown as JSONOutput.ConditionalType;

      return parens(
        <>
          <Type {...props} reflection={type.checkType} needsParens />
          <span className="api-type__symbol token tag punctuation"> extends </span>
          <Type {...props} reflection={type.extendsType} />
          <span className="api-type__symbol token tag punctuation"> ? </span>
          <Type {...props} reflection={type.trueType} />
          <span className="api-type__symbol token tag punctuation"> : </span>
          <Type {...props} reflection={type.falseType} />
        </>,
        needsParens,
      );
    }

    case "indexedAccess": {
      const type = reflection as unknown as JSONOutput.IndexedAccessType;

      return (
        <>
          <Type {...props} reflection={type.objectType} />
          <span className="api-type__symbol token tag punctuation">[</span>
          <Type {...props} reflection={type.indexType} />
          <span className="api-type__symbol token tag punctuation">]</span>
        </>
      );
    }

    case "inferred": {
      const type = reflection as unknown as JSONOutput.InferredType;

      return (
        <>
          <span className="api-type__symbol token tag punctuation">infer </span> {type.name}
        </>
      );
    }

    case "intersection": {
      const type = reflection as unknown as JSONOutput.IntersectionType;

      return parens(
        <>
          {type.types.map((t, i) => (
            <React.Fragment key={t.type + i}>
              {i > 0 && <span className="api-type__symbol token tag punctuation"> & </span>}
              <Type {...props} reflection={t} needsParens />
            </React.Fragment>
          ))}
        </>,
        needsParens,
      );
    }

    case "intrinsic": {
      const type = reflection as unknown as JSONOutput.IntrinsicType;

      return <span className="api-type__type token tag class-name ">{type.name}</span>;
    }

    case "literal": {
      const type = reflection as unknown as JSONOutput.LiteralType;

      return <span className="api-type__type token tag class-name ">{String(type.value)}</span>;
    }

    case "mapped": {
      const type = reflection as unknown as unknown as JSONOutput.MappedType;

      return (
        <>
          <span className="api-type__symbol token tag punctuation">{braceLeft} </span>

          {type.readonlyModifier === "+" && <span className="api-type__symbol token tag punctuation">readonly </span>}
          {type.readonlyModifier === "-" && <span className="api-type__symbol token tag punctuation">-readonly </span>}

          <span className="api-type__symbol token tag punctuation">[ </span>
          <span className="api-type__type token tag class-name ">{type.parameter}</span>
          <span className="api-type__symbol token tag punctuation"> in </span>
          <Type {...props} reflection={type.parameterType} />
          {type.nameType && (
            <>
              <span className="api-type__symbol token tag punctuation"> as </span>
              <Type {...props} reflection={type.nameType} />
            </>
          )}
          <span className="api-type__symbol token tag punctuation"> ]</span>

          {type.optionalModifier === "+" && <span className="api-type__symbol token tag punctuation">?: </span>}
          {type.optionalModifier === "-" && <span className="api-type__symbol token tag punctuation">-?: </span>}
          {!type.optionalModifier && <span className="api-type__symbol token tag punctuation">: </span>}

          <Type {...props} reflection={type.templateType} />

          <span className="api-type__symbol token tag punctuation"> {braceRight}</span>
        </>
      );
    }

    case "optional": {
      const type = reflection as unknown as JSONOutput.OptionalType;

      return (
        <>
          <Type {...props} reflection={type.elementType} />
          <span className="api-type__symbol token tag punctuation">?</span>
        </>
      );
    }

    case "predicate": {
      const type = reflection as unknown as JSONOutput.PredicateType;

      return (
        <>
          {type.asserts && <span className="api-type__symbol token tag punctuation">asserts </span>}
          <span className="api-type__type token tag class-name ">{type.name}</span>
          {type.targetType && (
            <>
              <span className="api-type__symbol token tag punctuation"> is </span>
              <Type {...props} reflection={type.targetType} />
            </>
          )}
        </>
      );
    }

    case "query": {
      const type = reflection as unknown as JSONOutput.QueryType;

      return (
        <>
          <span className="api-type__symbol token tag punctuation">typeof </span>
          <Type {...props} reflection={type.queryType} />
        </>
      );
    }

    case "reference": {
      const type = reflection as unknown as JSONOutput.ReferenceType;
      const ref = getReference(reflectionsTree, type);
      const genericClass = ref?.id && !ref.sources ? "api-type__type token tag class-name -generic" : "";

      return (
        <>
          <span className={`api-type__type token tag class-name  ${genericClass}`}>{type.name}</span>
          {type.typeArguments && type.typeArguments.length > 0 && (
            <>
              <span className="api-type__symbol token tag punctuation">{"<"}</span>
              {type.typeArguments.map((t, i) => (
                <React.Fragment key={t.type + i}>
                  {i > 0 && <span className="api-type__symbol token tag punctuation">, </span>}
                  <Type {...props} reflection={t} />
                </React.Fragment>
              ))}
              <span className="api-type__symbol token tag punctuation">{">"}</span>
            </>
          )}
        </>
      );
    }

    case "reflection": {
      const type = reflection as unknown as JSONOutput.ReflectionType;
      const decl = type.declaration;

      // object literal
      if (decl?.children && decl.children.length > 0) {
        return (
          <>
            <span className="api-type__symbol token tag punctuation">{braceLeft} </span>
            {decl.children.map((child, i) => (
              <React.Fragment key={child.id ?? i}>
                {i > 0 && <span className="api-type__symbol token tag punctuation">; </span>}
                <span>
                  {child.name}
                  <span className="api-type__symbol token tag punctuation">{child.flags?.isOptional && "?"}: </span>
                  {child.type ? <Type {...props} reflection={child.type} /> : "any"}
                </span>
              </React.Fragment>
            ))}
            <span className="api-type__symbol token tag punctuation"> {braceRight}</span>
          </>
        );
      }

      if (decl?.signatures && decl.signatures.length === 1) {
        return <Signature {...props} hideName useArrow reflection={decl.signatures[0]} />;
      }

      if (decl?.signatures && decl.signatures.length > 0) {
        return parens(
          <>
            <span className="api-type__symbol token tag punctuation">{braceLeft} </span>
            {decl.signatures.map((sig, i) => (
              <React.Fragment key={sig.id ?? i}>
                <>
                  {i > 0 && <span className="api-type__symbol token tag punctuation">; </span>}
                  <Signature {...props} reflection={sig} />
                </>
              </React.Fragment>
            ))}
            <span className="api-type__symbol token tag punctuation"> {braceRight}</span>
          </>,
          needsParens,
        );
      }

      return (
        <>
          {braceLeft}
          {braceRight}
        </>
      );
    }

    case "rest": {
      const type = reflection as unknown as JSONOutput.RestType;

      return (
        <>
          <span className="api-type__symbol token tag punctuation">...</span>
          <Type {...props} reflection={type.elementType} />
        </>
      );
    }

    case "tuple": {
      const type = reflection as unknown as JSONOutput.TupleType;

      return (
        <>
          <span className="api-type__symbol token tag punctuation">[</span>
          {type.elements?.map((t, i) => (
            <React.Fragment key={t.type + i}>
              {i > 0 && <span className="api-type__symbol token tag punctuation">, </span>}
              <Type {...props} reflection={t} />
            </React.Fragment>
          ))}
          <span className="api-type__symbol token tag punctuation">]</span>
        </>
      );
    }

    case "typeOperator": {
      const type = reflection as unknown as JSONOutput.TypeOperatorType;

      return (
        <>
          <span className="api-type__symbol token tag punctuation">{type.operator} </span>
          <Type {...props} reflection={type.target} />
        </>
      );
    }

    case "union": {
      const type = reflection as unknown as JSONOutput.UnionType;

      return parens(
        <>
          {type.types.map((t, i) => (
            <React.Fragment key={t.type + i}>
              {i > 0 && <span className="api-type__symbol token tag punctuation"> | </span>}
              <Type {...props} reflection={t} needsParens />
            </React.Fragment>
          ))}
        </>,
        needsParens,
      );
    }

    case "unknown": {
      const type = reflection as unknown as JSONOutput.UnknownType;

      return <span className="api-type__type token tag class-name ">{type.name}</span>;
    }

    case "named-tuple-member": {
      const type = reflection as unknown as unknown as JSONOutput.NamedTupleMemberType;

      return (
        <>
          {type.name}
          <span className="api-type__symbol token tag punctuation">{type.isOptional ? "?: " : ": "}</span>
          <Type {...props} reflection={type.element} />
        </>
      );
    }

    case "template-literal": {
      const type = reflection as unknown as unknown as JSONOutput.TemplateLiteralType;

      return (
        <>
          <span className="api-type__symbol token tag punctuation">`</span>
          {type.head && <span className="api-type__type token tag class-name ">{type.head}</span>}
          {type.tail.map((t, i) => (
            <React.Fragment key={i}>
              <span className="api-type__symbol token tag punctuation">${"{ "}</span>
              {typeof t[0] !== "string" && <Type {...props} reflection={t[0]} />}
              <span className="api-type__symbol token tag punctuation">{" }"}</span>
              {typeof t[1] === "string" && <span className="api-type__type token tag class-name ">{t[1]}</span>}
            </React.Fragment>
          ))}
          <span className="api-type__symbol token tag punctuation">`</span>
        </>
      );
    }

    default:
      return <span className="api-type__type token tag class-name ">void</span>;
  }
};

