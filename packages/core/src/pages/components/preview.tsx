import React from "react";
import { JSONOutput, ReflectionKind } from "typedoc";

import { PagePropsType } from "../../types/page.types";
import { Type } from "./type";
import { Code } from "./code";
import { GenericParameters } from "./generic-parameters";
import { getSignature } from "../utils/signature.utils";
import { getCallPreview } from "../utils/parsing.utils";
import { getTypesArray, getProperties } from "../utils/properties.utils";
import { getMethods } from "../utils/methods.utils";
import { isComponent } from "pages/utils/component.utils";
import { getReference } from "pages/utils/reference.utils";

export const Preview: React.FC<PagePropsType<JSONOutput.SomeReflection | JSONOutput.SomeType>> = (props) => {
  const { reflection, reflectionsTree } = props;

  if (!reflection) return null;

  /**
   * Reference handling
   */

  if ("type" in reflection && typeof reflection.type !== "string" && reflection.type?.type === "reference") {
    const reference = getReference(reflectionsTree, reflection.type);

    if (reference) {
      return <Preview {...props} reflection={reference} />;
    }
  }
  if ("type" in reflection && reflection.type === "reference") {
    const reference = getReference(reflectionsTree, reflection);

    if (reference) {
      return <Preview {...props} reflection={reference} />;
    }
  }

  /**
   * Reflections handling
   */

  if (!("kind" in reflection)) {
    return null;
  }

  if (reflection.kind === ReflectionKind.Class) {
    const signature = getSignature(reflection);
    if (!signature) return null;

    const [name, typeSignature, callSignature] = getCallPreview(signature);
    const children = getTypesArray(reflectionsTree, reflection);
    const properties = getProperties(children, reflectionsTree);
    const methods = getMethods(children, reflectionsTree);

    return (
      <div className="api-docs__preview class">
        <Code>
          {`${name}${typeSignature}(${callSignature}) {\n`}
          {properties.map((prop, index) => (
            <React.Fragment key={index}>
              {"  "}
              {prop.name}:
              <Type {...props} reflection={prop.type} />
              {"\n"}
            </React.Fragment>
          ))}
          {methods.map((method, index) => (
            <React.Fragment key={index}>
              {"  "}
              {method.name}:
              <Type {...props} reflection={getSignature(method) || method} />
              {"\n"}
            </React.Fragment>
          ))}
          {`}`}
        </Code>
      </div>
    );
  }

  if (isComponent(reflection)) {
    const signature = getSignature(reflection);
    if (!signature) return null;

    const [name] = getCallPreview(signature);

    // prettier-ignore
    return (
      <div className="api-docs__preview fn">
        <Code>
          {"<"}{name} {"{...props}"} {"/>"}
        </Code>
      </div>
    );
    // prettier-ignore
  }

  if (
    reflection.kind === ReflectionKind.Function ||
    reflection.kind === ReflectionKind.Method ||
    reflection.kind === ReflectionKind.CallSignature
  ) {
    const signature = getSignature(reflection);
    if (!signature) return null;

    const [name, typeSignature, callSignature] = getCallPreview(signature);

    return (
      <div className="api-docs__preview fn">
        <Code>
          {name}
          {typeSignature}({callSignature})
        </Code>
      </div>
    );
  }

  if (reflection.kind === ReflectionKind.Enum) {
    const { name } = reflection;

    const children =
      reflection &&
      "children" in reflection &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reflection?.children?.map<[string, string | number | boolean]>((child: any) => {
        const type = child.type && "value" in child.type && child.type.value;

        if (typeof type === "object" && type && "value" in type) {
          return [child.name, type.value || ""];
        }

        return [child.name, type || ""];
      });

    if (!children) return null;

    return (
      <div className="api-docs__preview enum">
        <Code>
          {`enum ${name} {\n`}
          {children.map((element) => {
            const isString = typeof element[1] === "string";
            const value = !isString ? element[1] : `"${element[1]}"`;
            return `  ${element[0]} = ${value}; \n`;
          })}
          {`}`}
        </Code>
      </div>
    );
  }
  if (reflection.kind === ReflectionKind.Variable) {
    const { name, flags } = reflection;
    const type = "type" in reflection ? reflection.type : null;
    const varType = flags?.isConst ? "const" : "let";

    return (
      <div className="api-docs__preview var">
        <Code>
          {varType} {name} = <Type {...props} reflection={type} />
        </Code>
      </div>
    );
  }
  if (reflection.kind === ReflectionKind.TypeAlias) {
    const { name } = reflection;
    const type = "type" in reflection ? reflection.type : null;

    const children =
      (type &&
        "declaration" in type &&
        type.declaration?.children?.map<[string, JSONOutput.DeclarationReflection]>((child) => {
          const signature = getSignature(child);

          return [child.name, (signature?.type || signature || child) as unknown as JSONOutput.DeclarationReflection];
        })) ||
      [];

    if (!children?.length && !type) return null;

    const generics = "typeParameters" in reflection && reflection.typeParameters && (
      <GenericParameters generics={reflection.typeParameters} />
    );

    if (!children?.length && type) {
      return (
        <div className="api-docs__preview type single">
          <Code>
            type {name}
            {generics} = <Type {...props} reflection={type} />;
          </Code>
        </div>
      );
    }

    return (
      <div className="api-docs__preview type">
        <Code>
          type {name}
          {generics} = {"{\n"}
          {children.map(([elementName, elementType], index) => (
            <React.Fragment key={index}>
              {"  "}
              {elementName}
              {elementType.flags?.isOptional && "?"}: <Type {...props} reflection={elementType} />; {"\n"}
            </React.Fragment>
          ))}
          {`}`}
        </Code>
      </div>
    );
  }
  return null;
};
