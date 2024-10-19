/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { PagePropsType } from "../../types/page.types";
import { Definition } from "../../pages/components/definition";
import { Returns } from "../../pages/components/returns";
import { Generics } from "../../pages/components/generics";
import { Import } from "../../pages/components/import";
import { Method } from "../../pages/components/method";
import { Methods } from "../../pages/components/methods";
import { Name } from "../../pages/components/name";
import { Parameter } from "../../pages/components/parameter";
import { Parameters } from "../../pages/components/parameters";
import { Preview } from "../../pages/components/preview";
import { Properties } from "../../pages/components/properties";
import { Property } from "../../pages/components/property";
import { Description } from "../../pages/components/description";
import { Signature } from "../../pages/components/signature";
import { Sources } from "../../pages/components/sources";
import { Type } from "../../pages/components/type";
import { ComponentsProps } from "./component.types";
import { ReturnsPreview } from "../../pages/components/returns-preview";
import { Npm } from "pages/components/npm";
import { Details } from "pages/components/details";

export const getComponent = (options: ComponentsProps): React.FC<PagePropsType> => {
  const { type: componentType } = options;
  switch (componentType) {
    case "definition": {
      return Definition;
    }
    case "npm": {
      return Npm;
    }
    case "import": {
      return Import;
    }
    case "details": {
      return Details;
    }
    case "description": {
      return Description;
    }
    case "generics": {
      return Generics as any;
    }
    case "method": {
      return Method;
    }
    case "methods": {
      return Methods;
    }
    case "name": {
      return Name;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    case "parameter": {
      return Parameter;
    }
    case "parameters": {
      return Parameters;
    }
    case "preview": {
      return Preview as any;
    }
    case "property": {
      return Property;
    }
    case "properties": {
      return Properties;
    }
    case "returns": {
      return Returns;
    }
    case "returnsPreview": {
      return ReturnsPreview;
    }
    case "signature": {
      return Signature as any;
    }
    case "sources": {
      return Sources;
    }
    case "type": {
      return Type as React.FC<PagePropsType>;
    }
    // Todo display page
    default: {
      throw new Error(`Component type not found - ${componentType}`);
    }
  }
};
