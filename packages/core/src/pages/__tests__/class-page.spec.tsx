/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JSONOutput } from "typedoc";
import { render } from "@testing-library/react";

import { HF_TREE_REFLECTION } from "../../snapshots/hf-core-reflection";
import { ClassPage } from "pages/class.page";

describe("It should render correct type", () => {
  it("should render correct page element", () => {
    const RequestClass = HF_TREE_REFLECTION.children!.find(
      (reflection) => "Request" === reflection.name,
    ) as JSONOutput.DeclarationReflection;

    const { container } = render(
      <ClassPage
        reflection={RequestClass}
        reflectionsTree={[HF_TREE_REFLECTION]}
        packageName="@hyper-fetch/core"
        packageOptions={{} as any}
        npmName="@hyper-fetch/core"
        pluginOptions={{} as any}
      />,
    );

    // Methods
    const setPayloadSection = container.querySelector(`[method-data="setPayloadMapper"]`);
    const setPayloadPreview = setPayloadSection?.querySelector(`[method-data="setPayloadMapper"] .api-docs__preview`);
    const setPayloadParams = setPayloadSection?.querySelector(".api-docs__parameters");

    expect(setPayloadSection).toBeInTheDocument();
    expect(setPayloadSection?.innerHTML).toContain("setPayloadMapper()");
    expect(setPayloadSection?.innerHTML).toContain("Map data before it gets send to the server");

    expect(setPayloadPreview).toBeInTheDocument();
    expect(setPayloadPreview?.innerHTML).toContain("setPayloadMapper");
    expect(setPayloadPreview?.innerHTML).toContain("MappedPayload");
    expect(setPayloadPreview?.innerHTML).toContain("payloadMapper");
    expect(setPayloadParams).toBeInTheDocument();
    expect(setPayloadParams?.innerHTML).toContain("Parameters");
    expect(setPayloadParams?.innerHTML).toContain("payloadMapper");
  });
});
