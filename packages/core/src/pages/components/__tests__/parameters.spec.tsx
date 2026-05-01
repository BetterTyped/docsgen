/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JSONOutput } from "typedoc";
import { render } from "@testing-library/react";

import { Parameters } from "../parameters";
import { HF_TREE_REFLECTION } from "snapshots/hf-core-reflection";

describe("It should render correct parameters", () => {
  it("should render correct parameters", () => {
    const requestReflection = HF_TREE_REFLECTION.children!.find(
      (reflection) => "Request" === reflection.name,
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

    expect(container.innerHTML).toContain("client");
    expect(container.innerHTML).toContain("requestOptions");
    expect(container.innerHTML).toContain("initialRequestConfiguration");
  });
});
