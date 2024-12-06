/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSONOutput } from "typedoc";
import { render } from "@testing-library/react";

import { Parameters } from "../parameters";
import { HF_TREE_REFLECTION } from "snapshots/hf-core-reflection";

describe("It should render correct parameters", () => {
  it("should render correct parameters", () => {
    const requestReflection = HF_TREE_REFLECTION.children!.find(
      (reflection) => reflection.name === "Request",
    ) as JSONOutput.DeclarationReflection;

    const { container } = render(
      <Parameters
        reflection={requestReflection}
        reflectionsTree={[HF_TREE_REFLECTION]}
        packageName="@hyper-fetch/core"
        packageOptions={{} as any}
        npmName="@hyper-fetch/core"
        pluginOptions={{} as any}
      />,
    );

    expect(container.innerHTML).toInclude("client");
    expect(container.innerHTML).toInclude("requestOptions");
    expect(container.innerHTML).toInclude("initialRequestConfiguration");
  });
});
