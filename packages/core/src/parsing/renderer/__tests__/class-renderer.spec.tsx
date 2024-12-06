/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSONOutput } from "typedoc";

import { HF_TREE_REFLECTION } from "snapshots/hf-core-reflection";
import { pageRenderer } from "../renderer";

describe("It should render correctly class page", () => {
  it("should render correct class page element", () => {
    const RequestClass = HF_TREE_REFLECTION.children!.find(
      (reflection) => reflection.name === "Request",
    ) as JSONOutput.DeclarationReflection;

    const rendered = pageRenderer({
      reflectionsTree: [HF_TREE_REFLECTION],
      reflection: RequestClass,
      packageName: "@hyper-fetch/core",
      npmName: "@hyper-fetch/core",
      packageOptions: {} as any,
      pluginOptions: {} as any,
    });

    // Methods
    expect(rendered).toMatchSnapshot();
  });
});
