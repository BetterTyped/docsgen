/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JSONOutput } from "typedoc";
import { render } from "@testing-library/react";

import { Table } from "../table";
import { getMethods } from "pages/utils/methods.utils";
import { HF_SOCKETS_TREE_REFLECTION } from "snapshots/hf-sockets-reflection";

const reflectionsTree = [HF_SOCKETS_TREE_REFLECTION];
const pageProps = {
  reflection: {} as any,
  reflectionsTree,
  packageName: "@hyper-fetch/sockets",
  packageOptions: {} as any,
  npmName: "@hyper-fetch/sockets",
  pluginOptions: {} as any,
};

const getListenerMethods = () => {
  const listener = HF_SOCKETS_TREE_REFLECTION.children!.find(
    (r) => "Listener" === r.name,
  ) as JSONOutput.DeclarationReflection;
  return getMethods(listener.children!, reflectionsTree);
};

describe("Table", () => {
  it("should render function-typed property methods with Code wrapper and signature preview", () => {
    const methods = getListenerMethods();
    const { container } = render(
      <Table reflections={methods} reflectionsTree={reflectionsTree} pageProps={pageProps} title="Methods" hideType />,
    );

    const rows = container.querySelectorAll("tr.api-docs__table-row");
    const listenRow = [...rows].find((row) => {
      const nameCell = row.querySelector("td:first-child");
      return nameCell?.textContent?.startsWith("listen(");
    });

    expect(listenRow).toBeDefined();
    const codeCell = listenRow!.querySelector("td.api-docs__table-type code");
    expect(codeCell).toBeTruthy();
    expect(codeCell!.textContent).toContain("listen(");
  });

  it("should render standard methods with Code wrapper and signature preview", () => {
    const methods = getListenerMethods();
    const { container } = render(
      <Table reflections={methods} reflectionsTree={reflectionsTree} pageProps={pageProps} title="Methods" hideType />,
    );

    const rows = container.querySelectorAll("tr.api-docs__table-row");
    const setParamsRow = [...rows].find((row) => row.textContent?.includes("setParams"));

    expect(setParamsRow).toBeDefined();
    const codeCell = setParamsRow!.querySelector("td.api-docs__table-type code");
    expect(codeCell).toBeTruthy();
    expect(codeCell!.textContent).toContain("setParams");
    expect(codeCell!.textContent).toContain("(");
  });

  it("should render non-method properties without Code wrapper", () => {
    const listener = HF_SOCKETS_TREE_REFLECTION.children!.find(
      (r) => "Listener" === r.name,
    ) as JSONOutput.DeclarationReflection;
    const topic = listener.children!.find((r) => "topic" === r.name) as JSONOutput.DeclarationReflection;

    const { container } = render(
      <Table
        reflections={[topic]}
        reflectionsTree={reflectionsTree}
        pageProps={pageProps}
        title="Properties"
        hideType
      />,
    );

    const row = container.querySelector("tr.api-docs__table-row");
    expect(row).toBeDefined();
    const nameCell = row!.querySelector("td.api-docs__table-name");
    expect(nameCell).toBeTruthy();
    expect(nameCell!.textContent).toBe("topic");
  });
});
