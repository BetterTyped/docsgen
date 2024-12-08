import React from "react";
import { JSONOutput, ReflectionKind } from "typedoc";

import { ClassPage } from "../../pages/class.page";
import { FunctionPage } from "../../pages/function.page";
import { EnumPage } from "../../pages/enum.page";
import { VarPage } from "../../pages/var.page";
import { TypePage } from "../../pages/type.page";
import { PagePropsType } from "../../types/page.types";
import { transformMarkdown } from "./utils/processing.utils";
import { DefaultPage } from "pages/default.page";
import { isComponent } from "pages/utils/component.utils";
import { ComponentPage } from "pages/component.page";

/**
 * Renderer
 * @param props
 * @param component
 * @returns
 */
export const renderer = <T extends React.FC<PagePropsType>>(
  component: T,
  props: PagePropsType,
  options?: Parameters<typeof transformMarkdown>[1],
) => {
  return transformMarkdown(component(props) as React.ReactElement, options);
};

/**
 * Pages renderer
 * @param props
 * @param component
 * @returns
 */
export const pageRenderer = (props: PagePropsType<JSONOutput.DeclarationReflection>) => {
  if (isComponent(props.reflection)) {
    return renderer(ComponentPage, props);
  }
  switch (props.reflection.kind) {
    case ReflectionKind.Class: {
      return renderer(ClassPage, props);
    }
    case ReflectionKind.Enum: {
      return renderer(EnumPage, props);
    }
    case ReflectionKind.Variable: {
      return renderer(VarPage, props);
    }
    case ReflectionKind.Function: {
      return renderer(FunctionPage, props);
    }
    case ReflectionKind.TypeAlias: {
      return renderer(TypePage, props);
    }
    case ReflectionKind.Interface: {
      return renderer(TypePage, props);
    }
    default: {
      return renderer(DefaultPage, props);
    }
  }
};
