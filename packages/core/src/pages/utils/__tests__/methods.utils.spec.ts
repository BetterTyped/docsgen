import type { JSONOutput } from "typedoc";

import { isMethod, getMethods } from "../methods.utils";
import { HF_SOCKETS_TREE_REFLECTION } from "snapshots/hf-sockets-reflection";

const reflectionsTree = [HF_SOCKETS_TREE_REFLECTION];

const getListenerChild = (name: string) => {
  const listener = HF_SOCKETS_TREE_REFLECTION.children!.find(
    (r) => "Listener" === r.name,
  ) as JSONOutput.DeclarationReflection;
  return listener.children!.find((r) => r.name === name) as JSONOutput.DeclarationReflection;
};

const getListenerChildren = () => {
  const listener = HF_SOCKETS_TREE_REFLECTION.children!.find(
    (r) => "Listener" === r.name,
  ) as JSONOutput.DeclarationReflection;
  return listener.children!;
};

describe("isMethod", () => {
  it("should return true for a standard method (kind 2048)", () => {
    const setParams = getListenerChild("setParams");
    expect(isMethod(setParams, reflectionsTree)).toBe(true);
  });

  it("should return true for a function-typed property (listen) whose type resolves to a function", () => {
    const listen = getListenerChild("listen");
    expect(isMethod(listen, reflectionsTree)).toBe(true);
  });

  it("should return false for a non-function property", () => {
    const topic = getListenerChild("topic");
    expect(isMethod(topic, reflectionsTree)).toBe(false);
  });
});

describe("getMethods", () => {
  it("should include listen in the methods list", () => {
    const children = getListenerChildren();
    const methods = getMethods(children, reflectionsTree);
    const methodNames = methods.map((m) => m.name);

    expect(methodNames).toContain("listen");
  });

  it("should include standard methods like setParams, setOptions, clone", () => {
    const children = getListenerChildren();
    const methods = getMethods(children, reflectionsTree);
    const methodNames = methods.map((m) => m.name);

    expect(methodNames).toContain("setParams");
    expect(methodNames).toContain("setOptions");
    expect(methodNames).toContain("clone");
  });

  it("should exclude non-function properties like topic", () => {
    const children = getListenerChildren();
    const methods = getMethods(children, reflectionsTree);
    const methodNames = methods.map((m) => m.name);

    expect(methodNames).not.toContain("topic");
  });
});
