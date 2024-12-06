/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSONOutput } from "typedoc";
import { render } from "@testing-library/react";

import { Type } from "../type";

const data = {
  id: 4827,
  name: "size",
  variant: "declaration",
  kind: 1024,
  flags: {},
  comment: {
    summary: [
      {
        kind: "text",
        text: "Change the sizes of the button",
      },
    ],
  },
  sources: [
    {
      fileName: "packages/ui/src/components/elements/button/button.styles.ts",
      line: 30,
      character: 4,
      url: "https://github.com/prc5/react-building-blocks/blob/21b9af1/packages/ui/src/components/elements/button/button.styles.ts#L30",
    },
  ],
  type: {
    type: "union",
    types: [
      {
        type: "literal",
        value: "xs",
      },
      {
        type: "literal",
        value: "sm",
      },
      {
        type: "literal",
        value: "md",
      },
      {
        type: "literal",
        value: "lg",
      },
      {
        type: "literal",
        value: "xl",
      },
    ],
  },
  defaultValue: "...",
} as JSONOutput.DeclarationReflection;

const reflectionTree = [
  {
    id: 4624,
    name: "@docsgen/ui",
    variant: "project",
    kind: 1,
    flags: {},
    children: [data],
  } as JSONOutput.ProjectReflection,
];

describe("It should render correct type", () => {
  it("should render correct type", () => {
    const { container } = render(
      <Type
        reflection={data}
        reflectionsTree={reflectionTree}
        packageName="@docsgen/ui"
        packageOptions={{} as any}
        npmName="@docsgen/ui"
        pluginOptions={{} as any}
      />,
    );

    expect(container.innerHTML).toInclude("xs");
    expect(container.innerHTML).toInclude("sm");
    expect(container.innerHTML).toInclude("md");
    expect(container.innerHTML).toInclude("lg");
    expect(container.innerHTML).toInclude("xl");
  });
});
