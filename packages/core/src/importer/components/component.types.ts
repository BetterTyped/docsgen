import { PagePropsType } from "../../types/page.types";
import { DefinitionProps } from "../../pages/components/definition";
import { ReturnsProps } from "../../pages/components/returns";
import { GenericsProps } from "../../pages/components/generics";
import { ImportProps } from "../../pages/components/import";
import { MethodProps } from "../../pages/components/method";
import { MethodsProps } from "../../pages/components/methods";
import { NameProps } from "../../pages/components/name";
import { ParameterProps } from "../../pages/components/parameter";
import { ParametersProps } from "../../pages/components/parameters";
import { PropertiesProps } from "../../pages/components/properties";
import { PropertyProps } from "../../pages/components/property";
import { DescriptionProps } from "../../pages/components/description";

export type ComponentsProps =
  | ({
      type: "definition";
    } & DefinitionProps)
  | ({
      type: "npm";
    } & PagePropsType)
  | ({
      type: "details";
    } & PagePropsType)
  | ({
      type: "description";
    } & DescriptionProps)
  | ({
      type: "generics";
    } & GenericsProps)
  | ({
      type: "import";
    } & ImportProps)
  | ({
      type: "method";
    } & MethodProps)
  | ({
      type: "methods";
    } & MethodsProps)
  | ({
      type: "name";
    } & NameProps)
  | ({
      type: "parameter";
    } & ParameterProps)
  | ({
      type: "parameters";
    } & ParametersProps)
  | ({
      type: "preview";
    } & PagePropsType)
  | ({
      type: "property";
    } & PropertyProps)
  | ({
      type: "properties";
    } & PropertiesProps)
  | ({
      type: "returns";
    } & ReturnsProps)
  | ({
      type: "returnsPreview";
    } & PagePropsType)
  | ({
      type: "signature";
    } & PagePropsType)
  | ({
      type: "sources";
    } & PagePropsType)
  | ({
      type: "type";
    } & PagePropsType);
