import type { JSONOutput } from "typedoc";

import { resolveSignature } from "../signature.utils";
import { HF_SOCKETS_TREE_REFLECTION } from "snapshots/hf-sockets-reflection";

const reflectionsTree = [HF_SOCKETS_TREE_REFLECTION];

const getListenerChild = (name: string) => {
  const listener = HF_SOCKETS_TREE_REFLECTION.children!.find(
    (r) => "Listener" === r.name,
  ) as JSONOutput.DeclarationReflection;
  return listener.children!.find((r) => r.name === name) as JSONOutput.DeclarationReflection;
};

describe("resolveSignature", () => {
  it("should return signature for a standard method (kind 2048) with direct signatures", () => {
    const setParams = getListenerChild("setParams");
    const signature = resolveSignature(setParams, reflectionsTree);

    expect(signature).toBeDefined();
    expect(signature!.name).toBe("setParams");
    expect(signature!.kind).toBe(4096);
  });

  it("should return signature for a function-typed property whose type is a reference to a conditional function type", () => {
    const listen = getListenerChild("listen");
    const signature = resolveSignature(listen, reflectionsTree);

    expect(signature).toBeDefined();
    expect(signature!.kind).toBe(4096);
    expect(signature!.parameters).toBeDefined();
    expect(signature!.parameters!.length).toBeGreaterThan(0);
    expect(signature!.parameters![0].name).toBe("callback");
  });

  it("should return undefined for a non-function property", () => {
    const topic = getListenerChild("topic");
    const signature = resolveSignature(topic, reflectionsTree);

    expect(signature).toBeUndefined();
  });
});
