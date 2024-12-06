/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSONOutput } from "typedoc";
import { render } from "@testing-library/react";

import { Returns } from "../returns";
import { HF_TREE_REFLECTION } from "snapshots/hf-core-reflection";

describe("It should render correct returns", () => {
  it("should render correct returns", () => {
    const requestReflection = HF_TREE_REFLECTION.children!.find(
      (reflection) => reflection.name === "Request",
    ) as JSONOutput.DeclarationReflection;
    const setPayloadMapperReflection = requestReflection.children!.find(
      (reflection) => reflection.name === "setPayloadMapper",
    ) as JSONOutput.SomeReflection;

    const { container } = render(
      <Returns
        reflection={setPayloadMapperReflection}
        reflectionsTree={[HF_TREE_REFLECTION]}
        packageName="@hyper-fetch/core"
        packageOptions={{} as any}
        npmName="@hyper-fetch/core"
        pluginOptions={{} as any}
      />,
    );

    [
      "Request",
      "Response",
      "Payload",
      "QueryParams",
      "LocalError",
      "Endpoint",
      "Client",
      "HasPayload",
      "HasParams",
      "HasQuery",
    ].forEach((name) => expect(container.innerHTML).toInclude(name));
  });
});
