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
import { ReturnsPreview } from "../../pages/components/returns-preview";
import { Npm } from "pages/components/npm";
import { Details } from "pages/components/details";

const components = {
  definition: Definition,
  npm: Npm,
  import: Import,
  details: Details,
  description: Description,
  generics: Generics,
  method: Method,
  methods: Methods,
  name: Name,
  parameter: Parameter,
  parameters: Parameters,
  preview: Preview,
  property: Property,
  properties: Properties,
  returns: Returns,
  returnsPreview: ReturnsPreview,
  signature: Signature,
  sources: Sources,
  type: Type,
};

export type DocsComponents = typeof components;

export type GetComponentProps<Name extends keyof DocsComponents> = {
  type: Name;
} & React.ComponentPropsWithoutRef<(typeof components)[Name]>;

export const getComponent = <Name extends keyof DocsComponents>(options: GetComponentProps<Name>) => {
  const { type: componentType } = options;

  if (!components[componentType]) {
    throw new Error(`Component type not found - ${componentType}`);
  }

  return components[componentType];
};
