/* eslint-disable max-lines */
import type { JSONOutput } from "typedoc";

export const HF_REACT_TREE_REFLECTION: JSONOutput.ProjectReflection = {
  id: 4880,
  name: "@hyper-fetch/react",
  variant: "project",
  kind: 1,
  flags: {},
  children: [
    {
      id: 5372,
      name: "CallbackParameters",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 95,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L95",
        },
      ],
      typeParameters: [
        {
          id: 5376,
          name: "Request",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
        {
          id: 5377,
          name: "Resp",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
        },
      ],
      type: {
        type: "intersection",
        types: [
          {
            type: "reflection",
            declaration: {
              id: 5373,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5375,
                  name: "mutationContext",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 97,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L97",
                    },
                  ],
                  type: {
                    type: "union",
                    types: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractMutationContextType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5376,
                            name: "Request",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractMutationContextType",
                        package: "@hyper-fetch/core",
                      },
                      {
                        type: "intrinsic",
                        name: "undefined",
                      },
                    ],
                  },
                },
                {
                  id: 5374,
                  name: "response",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 96,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L96",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: 5377,
                    name: "Resp",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [5375, 5374],
                },
              ],
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 95,
                  character: 72,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L95",
                },
              ],
            },
          },
          {
            type: "reference",
            target: {
              sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
              qualifiedName: "Omit",
            },
            typeArguments: [
              {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/managers/request/request.manager.types.ts",
                  qualifiedName: "RequestResponseEventType",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: 5376,
                    name: "Request",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                ],
                name: "RequestResponseEventType",
                package: "@hyper-fetch/core",
              },
              {
                type: "literal",
                value: "response",
              },
            ],
            name: "Omit",
            package: "typescript",
          },
        ],
      },
    },
    {
      id: 5383,
      name: "OnErrorCallbackType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 103,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L103",
        },
      ],
      typeParameters: [
        {
          id: 5387,
          name: "Request",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5384,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-request-events/use-request-events.types.ts",
              line: 103,
              character: 67,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L103",
            },
          ],
          signatures: [
            {
              id: 5385,
              name: "__type",
              variant: "signature",
              kind: 4096,
              flags: {},
              parameters: [
                {
                  id: 5386,
                  name: "params",
                  variant: "param",
                  kind: 32_768,
                  flags: {},
                  type: {
                    type: "reference",
                    target: 5372,
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5387,
                        name: "Request",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/adapter/adapter.types.ts",
                          qualifiedName: "ResponseErrorType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractErrorType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5387,
                                name: "Request",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractErrorType",
                            package: "@hyper-fetch/core",
                          },
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractAdapterType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5387,
                                name: "Request",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractAdapterType",
                            package: "@hyper-fetch/core",
                          },
                        ],
                        name: "ResponseErrorType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "CallbackParameters",
                    package: "@hyper-fetch/react",
                  },
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "void",
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Promise",
                    },
                    typeArguments: [
                      {
                        type: "intrinsic",
                        name: "void",
                      },
                    ],
                    name: "Promise",
                    package: "typescript",
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      id: 5388,
      name: "OnFinishedCallbackType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 106,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L106",
        },
      ],
      typeParameters: [
        {
          id: 5392,
          name: "Request",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5389,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-request-events/use-request-events.types.ts",
              line: 106,
              character: 70,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L106",
            },
          ],
          signatures: [
            {
              id: 5390,
              name: "__type",
              variant: "signature",
              kind: 4096,
              flags: {},
              parameters: [
                {
                  id: 5391,
                  name: "params",
                  variant: "param",
                  kind: 32_768,
                  flags: {},
                  type: {
                    type: "reference",
                    target: 5372,
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5392,
                        name: "Request",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/adapter/adapter.types.ts",
                          qualifiedName: "ResponseType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractResponseType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5392,
                                name: "Request",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractResponseType",
                            package: "@hyper-fetch/core",
                          },
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractErrorType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5392,
                                name: "Request",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractErrorType",
                            package: "@hyper-fetch/core",
                          },
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractAdapterType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5392,
                                name: "Request",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractAdapterType",
                            package: "@hyper-fetch/core",
                          },
                        ],
                        name: "ResponseType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "CallbackParameters",
                    package: "@hyper-fetch/react",
                  },
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "void",
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Promise",
                    },
                    typeArguments: [
                      {
                        type: "intrinsic",
                        name: "void",
                      },
                    ],
                    name: "Promise",
                    package: "typescript",
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      id: 5398,
      name: "OnProgressCallbackType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 115,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L115",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5399,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-request-events/use-request-events.types.ts",
              line: 115,
              character: 37,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L115",
            },
          ],
          signatures: [
            {
              id: 5400,
              name: "__type",
              variant: "signature",
              kind: 4096,
              flags: {},
              typeParameter: [
                {
                  id: 5402,
                  name: "Request",
                  variant: "typeParam",
                  kind: 131_072,
                  flags: {},
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/request/request.types.ts",
                      qualifiedName: "RequestInstance",
                    },
                    name: "RequestInstance",
                    package: "@hyper-fetch/core",
                  },
                },
              ],
              parameters: [
                {
                  id: 5401,
                  name: "data",
                  variant: "param",
                  kind: 32_768,
                  flags: {},
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/managers/request/request.manager.types.ts",
                      qualifiedName: "RequestProgressEventType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5402,
                        name: "Request",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "RequestProgressEventType",
                    package: "@hyper-fetch/core",
                  },
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "void",
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Promise",
                    },
                    typeArguments: [
                      {
                        type: "intrinsic",
                        name: "void",
                      },
                    ],
                    name: "Promise",
                    package: "typescript",
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      id: 5393,
      name: "OnStartCallbackType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 112,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L112",
        },
      ],
      typeParameters: [
        {
          id: 5397,
          name: "Request",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5394,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-request-events/use-request-events.types.ts",
              line: 112,
              character: 67,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L112",
            },
          ],
          signatures: [
            {
              id: 5395,
              name: "__type",
              variant: "signature",
              kind: 4096,
              flags: {},
              parameters: [
                {
                  id: 5396,
                  name: "data",
                  variant: "param",
                  kind: 32_768,
                  flags: {},
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/managers/request/request.manager.types.ts",
                      qualifiedName: "RequestEventType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5397,
                        name: "Request",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "RequestEventType",
                    package: "@hyper-fetch/core",
                  },
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "void",
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Promise",
                    },
                    typeArguments: [
                      {
                        type: "intrinsic",
                        name: "void",
                      },
                    ],
                    name: "Promise",
                    package: "typescript",
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      id: 5378,
      name: "OnSuccessCallbackType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 100,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L100",
        },
      ],
      typeParameters: [
        {
          id: 5382,
          name: "Request",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5379,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-request-events/use-request-events.types.ts",
              line: 100,
              character: 69,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L100",
            },
          ],
          signatures: [
            {
              id: 5380,
              name: "__type",
              variant: "signature",
              kind: 4096,
              flags: {},
              parameters: [
                {
                  id: 5381,
                  name: "params",
                  variant: "param",
                  kind: 32_768,
                  flags: {},
                  type: {
                    type: "reference",
                    target: 5372,
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5382,
                        name: "Request",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/adapter/adapter.types.ts",
                          qualifiedName: "ResponseSuccessType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractResponseType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5382,
                                name: "Request",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractResponseType",
                            package: "@hyper-fetch/core",
                          },
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractAdapterType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5382,
                                name: "Request",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractAdapterType",
                            package: "@hyper-fetch/core",
                          },
                        ],
                        name: "ResponseSuccessType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "CallbackParameters",
                    package: "@hyper-fetch/react",
                  },
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "void",
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Promise",
                    },
                    typeArguments: [
                      {
                        type: "intrinsic",
                        name: "void",
                      },
                    ],
                    name: "Promise",
                    package: "typescript",
                  },
                ],
              },
            },
          ],
        },
      },
    },
    {
      id: 5626,
      name: "ProviderOptionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "provider/provider.types.ts",
          line: 10,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L10",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5627,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5630,
              name: "useCacheConfig",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 13,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L13",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Partial",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: 5056,
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/request/request.types.ts",
                          qualifiedName: "RequestInstance",
                        },
                        name: "RequestInstance",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "UseCacheOptionsType",
                    package: "@hyper-fetch/react",
                  },
                ],
                name: "Partial",
                package: "typescript",
              },
            },
            {
              id: 5633,
              name: "useEmitter",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 16,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L16",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Partial",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: 5265,
                    name: "UseEmitterOptionsType",
                    package: "@hyper-fetch/react",
                  },
                ],
                name: "Partial",
                package: "typescript",
              },
            },
            {
              id: 5628,
              name: "useFetchConfig",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 11,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L11",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Partial",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: 4886,
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/request/request.types.ts",
                          qualifiedName: "RequestInstance",
                        },
                        name: "RequestInstance",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "UseFetchOptionsType",
                    package: "@hyper-fetch/react",
                  },
                ],
                name: "Partial",
                package: "typescript",
              },
            },
            {
              id: 5632,
              name: "useListener",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 15,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L15",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Partial",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: 5181,
                    name: "UseListenerOptionsType",
                    package: "@hyper-fetch/react",
                  },
                ],
                name: "Partial",
                package: "typescript",
              },
            },
            {
              id: 5631,
              name: "useQueueConfig",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 14,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L14",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Partial",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: 5008,
                    name: "UseQueueOptionsType",
                    package: "@hyper-fetch/react",
                  },
                ],
                name: "Partial",
                package: "typescript",
              },
            },
            {
              id: 5629,
              name: "useSubmitConfig",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 12,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L12",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Partial",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: 4934,
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/request/request.types.ts",
                          qualifiedName: "RequestInstance",
                        },
                        name: "RequestInstance",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "UseSubmitOptionsType",
                    package: "@hyper-fetch/react",
                  },
                ],
                name: "Partial",
                package: "typescript",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5630, 5633, 5628, 5632, 5631, 5629],
            },
          ],
          sources: [
            {
              fileName: "provider/provider.types.ts",
              line: 10,
              character: 34,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L10",
            },
          ],
        },
      },
    },
    {
      id: 5634,
      name: "ProviderProps",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "provider/provider.types.ts",
          line: 19,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L19",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5635,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5636,
              name: "children",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Children to render",
                  },
                ],
              },
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 23,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L23",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/@types+react@19.2.14/node_modules/@types/react/index.d.ts",
                  qualifiedName: "React.ReactNode",
                },
                name: "React.ReactNode",
                package: "@types/react",
              },
            },
            {
              id: 5637,
              name: "config",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Configuration to set for available hooks",
                  },
                ],
              },
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 27,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L27",
                },
              ],
              type: {
                type: "reference",
                target: 5626,
                name: "ProviderOptionsType",
                package: "@hyper-fetch/react",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5636, 5637],
            },
          ],
          sources: [
            {
              fileName: "provider/provider.types.ts",
              line: 19,
              character: 28,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L19",
            },
          ],
        },
      },
    },
    {
      id: 5638,
      name: "ProviderValueType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "provider/provider.types.ts",
          line: 30,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L30",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5639,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5640,
              name: "config",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 31,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L31",
                },
              ],
              type: {
                type: "reference",
                target: 5626,
                name: "ProviderOptionsType",
                package: "@hyper-fetch/react",
              },
            },
            {
              id: 5641,
              name: "setConfig",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "provider/provider.types.ts",
                  line: 32,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L32",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5642,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "provider/provider.types.ts",
                      line: 32,
                      character: 13,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L32",
                    },
                  ],
                  signatures: [
                    {
                      id: 5643,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5644,
                          name: "newConfig",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5626,
                            name: "ProviderOptionsType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5640, 5641],
            },
          ],
          sources: [
            {
              fileName: "provider/provider.types.ts",
              line: 30,
              character: 32,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.types.ts#L30",
            },
          ],
        },
      },
    },
    {
      id: 5012,
      name: "QueueRequest",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-queue/use-queue.types.ts",
          line: 16,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L16",
        },
      ],
      typeParameters: [
        {
          id: 5029,
          name: "Request",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "intersection",
        types: [
          {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/dispatcher/dispatcher.types.ts",
              qualifiedName: "ResolvedQueueItemType",
            },
            typeArguments: [
              {
                type: "reference",
                target: 5029,
                name: "Request",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "ResolvedQueueItemType",
            package: "@hyper-fetch/core",
          },
          {
            type: "reflection",
            declaration: {
              id: 5013,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5015,
                  name: "canceled",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Whether the request was canceled before completing",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 20,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L20",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 5026,
                  name: "deleteRequest",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Removes request from the queue",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 44,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L44",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5027,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-queue/use-queue.types.ts",
                          line: 44,
                          character: 17,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L44",
                        },
                      ],
                      signatures: [
                        {
                          id: 5028,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5019,
                  name: "downloading",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Downloading progress for given request",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 32,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L32",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/adapter/adapter.types.ts",
                      qualifiedName: "ProgressType",
                    },
                    name: "ProgressType",
                    package: "@hyper-fetch/core",
                  },
                },
                {
                  id: 5014,
                  name: "failed",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Whether the request has failed after all retry attempts",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 18,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L18",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 5016,
                  name: "removed",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Whether the request was removed from the queue",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 22,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L22",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 5020,
                  name: "startRequest",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Callback which allow to start previously stopped request.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 36,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L36",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5021,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-queue/use-queue.types.ts",
                          line: 36,
                          character: 16,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L36",
                        },
                      ],
                      signatures: [
                        {
                          id: 5022,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5023,
                  name: "stopRequest",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Callback which allow to stop request and cancel it if it's ongoing.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 40,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L40",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5024,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-queue/use-queue.types.ts",
                          line: 40,
                          character: 15,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L40",
                        },
                      ],
                      signatures: [
                        {
                          id: 5025,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5017,
                  name: "success",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Whether the request completed successfully",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 24,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L24",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 5018,
                  name: "uploading",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Uploading progress for given request",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 28,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L28",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/adapter/adapter.types.ts",
                      qualifiedName: "ProgressType",
                    },
                    name: "ProgressType",
                    package: "@hyper-fetch/core",
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [5015, 5026, 5019, 5014, 5016, 5020, 5023, 5017, 5018],
                },
              ],
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 16,
                  character: 93,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L16",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: 5272,
      name: "UseAppManagerReturnType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-app-manager/use-app-manager.types.ts",
          line: 1,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.types.ts#L1",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5273,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5274,
              name: "isFocused",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Is window focused",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-app-manager/use-app-manager.types.ts",
                  line: 5,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.types.ts#L5",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5275,
              name: "isOnline",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Network online status",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-app-manager/use-app-manager.types.ts",
                  line: 9,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.types.ts#L9",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5280,
              name: "setFocused",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Focus state setter",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-app-manager/use-app-manager.types.ts",
                  line: 17,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.types.ts#L17",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5281,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-app-manager/use-app-manager.types.ts",
                      line: 17,
                      character: 14,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.types.ts#L17",
                    },
                  ],
                  signatures: [
                    {
                      id: 5282,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5283,
                          name: "isFocused",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "boolean",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5276,
              name: "setOnline",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Network state setter",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-app-manager/use-app-manager.types.ts",
                  line: 13,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.types.ts#L13",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5277,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-app-manager/use-app-manager.types.ts",
                      line: 13,
                      character: 13,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.types.ts#L13",
                    },
                  ],
                  signatures: [
                    {
                      id: 5278,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5279,
                          name: "isOnline",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "boolean",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5274, 5275, 5280, 5276],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-app-manager/use-app-manager.types.ts",
              line: 1,
              character: 38,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.types.ts#L1",
            },
          ],
        },
      },
    },
    {
      id: 5056,
      name: "UseCacheOptionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-cache/use-cache.types.ts",
          line: 5,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L5",
        },
      ],
      typeParameters: [
        {
          id: 5061,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5057,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5060,
              name: "deepCompare",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Deep comparison function for hook to check for equality in incoming data, to limit rerenders.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-cache/use-cache.types.ts",
                  line: 17,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L17",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "boolean",
                  },
                  {
                    type: "query",
                    queryType: {
                      type: "reference",
                      target: 5648,
                      name: "isEqual",
                      package: "@hyper-fetch/react",
                    },
                  },
                ],
              },
            },
            {
              id: 5058,
              name: "dependencyTracking",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "If ",
                  },
                  {
                    kind: "code",
                    text: "`true`",
                  },
                  {
                    kind: "text",
                    text: " it will rerender only when values used by our component gets changed. Otherwise it will rerender on any change.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-cache/use-cache.types.ts",
                  line: 9,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L9",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5059,
              name: "initialResponse",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "If cache is empty we can use placeholder data.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-cache/use-cache.types.ts",
                  line: 13,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L13",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "indexedAccess",
                    indexType: {
                      type: "literal",
                      value: "data",
                    },
                    objectType: {
                      type: "reference",
                      target: {
                        sourceFileName: "../packages/core/src/cache/cache.types.ts",
                        qualifiedName: "CacheValueType",
                      },
                      typeArguments: [
                        {
                          type: "reference",
                          target: {
                            sourceFileName: "../packages/core/src/types/request.types.ts",
                            qualifiedName: "ExtractResponseType",
                          },
                          typeArguments: [
                            {
                              type: "reference",
                              target: 5061,
                              name: "T",
                              package: "@hyper-fetch/react",
                              refersToTypeParameter: true,
                            },
                          ],
                          name: "ExtractResponseType",
                          package: "@hyper-fetch/core",
                        },
                        {
                          type: "reference",
                          target: {
                            sourceFileName: "../packages/core/src/types/request.types.ts",
                            qualifiedName: "ExtractErrorType",
                          },
                          typeArguments: [
                            {
                              type: "reference",
                              target: 5061,
                              name: "T",
                              package: "@hyper-fetch/react",
                              refersToTypeParameter: true,
                            },
                          ],
                          name: "ExtractErrorType",
                          package: "@hyper-fetch/core",
                        },
                      ],
                      name: "CacheValueType",
                      package: "@hyper-fetch/core",
                    },
                  },
                  {
                    type: "literal",
                    value: null,
                  },
                ],
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5060, 5058, 5059],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-cache/use-cache.types.ts",
              line: 5,
              character: 61,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L5",
            },
          ],
        },
      },
    },
    {
      id: 5062,
      name: "UseCacheReturnType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-cache/use-cache.types.ts",
          line: 20,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L20",
        },
      ],
      typeParameters: [
        {
          id: 5068,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "intersection",
        types: [
          {
            type: "reference",
            target: 5438,
            typeArguments: [
              {
                type: "reference",
                target: 5068,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseTrackedStateType",
            package: "@hyper-fetch/react",
          },
          {
            type: "reference",
            target: 5450,
            typeArguments: [
              {
                type: "reference",
                target: 5068,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseTrackedStateActions",
            package: "@hyper-fetch/react",
          },
          {
            type: "reflection",
            declaration: {
              id: 5063,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5064,
                  name: "invalidate",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Invalidate cache for the current request or pass custom key to trigger it by invalidationKey(Regex / cacheKey).",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-cache/use-cache.types.ts",
                      line: 25,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L25",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5065,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-cache/use-cache.types.ts",
                          line: 25,
                          character: 16,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L25",
                        },
                      ],
                      signatures: [
                        {
                          id: 5066,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 5067,
                              name: "cacheKeys",
                              variant: "param",
                              kind: 32_768,
                              flags: {
                                isOptional: true,
                              },
                              type: {
                                type: "union",
                                types: [
                                  {
                                    type: "intrinsic",
                                    name: "string",
                                  },
                                  {
                                    type: "reference",
                                    target: {
                                      sourceFileName:
                                        "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                                      qualifiedName: "RegExp",
                                    },
                                    name: "RegExp",
                                    package: "typescript",
                                  },
                                  {
                                    type: "reference",
                                    target: {
                                      sourceFileName: "../packages/core/src/request/request.types.ts",
                                      qualifiedName: "RequestInstance",
                                    },
                                    name: "RequestInstance",
                                    package: "@hyper-fetch/core",
                                  },
                                  {
                                    type: "array",
                                    elementType: {
                                      type: "union",
                                      types: [
                                        {
                                          type: "intrinsic",
                                          name: "string",
                                        },
                                        {
                                          type: "reference",
                                          target: {
                                            sourceFileName:
                                              "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                                            qualifiedName: "RegExp",
                                          },
                                          name: "RegExp",
                                          package: "typescript",
                                        },
                                        {
                                          type: "reference",
                                          target: {
                                            sourceFileName: "../packages/core/src/request/request.types.ts",
                                            qualifiedName: "RequestInstance",
                                          },
                                          name: "RequestInstance",
                                          package: "@hyper-fetch/core",
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [5064],
                },
              ],
              sources: [
                {
                  fileName: "hooks/use-cache/use-cache.types.ts",
                  line: 21,
                  character: 30,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.types.ts#L21",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: 5265,
      name: "UseEmitterOptionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-emitter/use-emitter.types.ts",
          line: 1,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.types.ts#L1",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5266,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5267,
              name: "dependencyTracking",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "When true (default), only re-renders when accessed state properties change",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-emitter/use-emitter.types.ts",
                  line: 3,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.types.ts#L3",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5267],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-emitter/use-emitter.types.ts",
              line: 1,
              character: 36,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.types.ts#L1",
            },
          ],
        },
      },
    },
    {
      id: 4886,
      name: "UseFetchOptionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-fetch/use-fetch.types.ts",
          line: 16,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L16",
        },
      ],
      typeParameters: [
        {
          id: 4911,
          name: "R",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "intersection",
        types: [
          {
            type: "reflection",
            declaration: {
              id: 4887,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 4901,
                  name: "bounce",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Enable/disable debouncing for often changing keys or refreshing, to limit requests to server.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 79,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L79",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4902,
                  name: "deepCompare",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Deep comparison function for hook to check for equality in incoming data, to limit rerenders.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 83,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L83",
                    },
                  ],
                  type: {
                    type: "union",
                    types: [
                      {
                        type: "intrinsic",
                        name: "boolean",
                      },
                      {
                        type: "query",
                        queryType: {
                          type: "reference",
                          target: 5648,
                          name: "isEqual",
                          package: "@hyper-fetch/react",
                        },
                      },
                    ],
                  },
                },
                {
                  id: 4889,
                  name: "dependencies",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Refetch dependencies",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 26,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L26",
                    },
                  ],
                  type: {
                    type: "array",
                    elementType: {
                      type: "intrinsic",
                      name: "any",
                    },
                  },
                },
                {
                  id: 4891,
                  name: "dependencyTracking",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "If ",
                      },
                      {
                        kind: "code",
                        text: "`true`",
                      },
                      {
                        kind: "text",
                        text: " it will rerender only when values used by our component gets changed. Otherwise it will rerender on any change.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 34,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L34",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4890,
                  name: "disabled",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Disable fetching",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 30,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L30",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4893,
                  name: "initialResponse",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "If cache is empty we can use placeholder data.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 42,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L42",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/helpers.types.ts",
                      qualifiedName: "NullableType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName:
                            "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                          qualifiedName: "Partial",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractAdapterResolvedType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 4911,
                                name: "R",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractAdapterResolvedType",
                            package: "@hyper-fetch/core",
                          },
                        ],
                        name: "Partial",
                        package: "typescript",
                      },
                    ],
                    name: "NullableType",
                    package: "@hyper-fetch/core",
                  },
                },
                {
                  id: 4894,
                  name: "keepPreviousData",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: 'Controls what happens to the current state when the cache key changes (e.g. params or query params change).\n\n- "auto" (default) — Smart mode: clears state when URL params change (different resource),\n  preserves state when only query params change (pagination/filtering).\n- "preserve" — Always keeps previous data visible until new data arrives.\n- "clean" — Always resets state to initial values when cache key changes.',
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 51,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L51",
                    },
                  ],
                  type: {
                    type: "union",
                    types: [
                      {
                        type: "literal",
                        value: "auto",
                      },
                      {
                        type: "literal",
                        value: "preserve",
                      },
                      {
                        type: "literal",
                        value: "clean",
                      },
                    ],
                  },
                },
                {
                  id: 4897,
                  name: "refetchBlurred",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Enable/disable data refresh if our tab is not focused(used by user at given time).",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 63,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L63",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4898,
                  name: "refetchOnBlur",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Enable/disable data refresh if user leaves current tab.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 67,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L67",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4899,
                  name: "refetchOnFocus",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Enable/disable data refresh if user enters current tab.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 71,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L71",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4900,
                  name: "refetchOnReconnect",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Enable/disable data refresh if network is restored.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 75,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L75",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4895,
                  name: "refresh",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Enable/disable refresh data",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 55,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L55",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4896,
                  name: "refreshTime",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Refresh data interval time",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 59,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L59",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "number",
                  },
                },
                {
                  id: 4892,
                  name: "revalidate",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "If ",
                      },
                      {
                        kind: "code",
                        text: "`true`",
                      },
                      {
                        kind: "text",
                        text: " it will refetch data in background no matter if we have it from cache.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 38,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L38",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4888,
                  name: "suspense",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Enable React Suspense mode. When true, the hook throws a Promise while loading,\nwhich is caught by the nearest Suspense boundary. The component re-renders\nwith data available once the request resolves.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 22,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L22",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [4901, 4902, 4889, 4891, 4890, 4893, 4894, 4897, 4898, 4899, 4900, 4895, 4896, 4892, 4888],
                },
              ],
              sources: [
                {
                  fileName: "hooks/use-fetch/use-fetch.types.ts",
                  line: 16,
                  character: 61,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L16",
                },
              ],
            },
          },
          {
            type: "union",
            types: [
              {
                type: "reflection",
                declaration: {
                  id: 4903,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  children: [
                    {
                      id: 4905,
                      name: "bounceTime",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "How long it should bounce requests.",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-fetch/use-fetch.types.ts",
                          line: 93,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L93",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "number",
                      },
                    },
                    {
                      id: 4906,
                      name: "bounceTimeout",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "Not applicable for debounce mode",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-fetch/use-fetch.types.ts",
                          line: 97,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L97",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                    {
                      id: 4904,
                      name: "bounceType",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "Possibility to choose between debounce and throttle approaches",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-fetch/use-fetch.types.ts",
                          line: 89,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L89",
                        },
                      ],
                      type: {
                        type: "literal",
                        value: "debounce",
                      },
                    },
                  ],
                  groups: [
                    {
                      title: "Properties",
                      children: [4905, 4906, 4904],
                    },
                  ],
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 85,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L85",
                    },
                  ],
                },
              },
              {
                type: "reflection",
                declaration: {
                  id: 4907,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  children: [
                    {
                      id: 4909,
                      name: "bounceTime",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "How long it should bounce requests.",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-fetch/use-fetch.types.ts",
                          line: 107,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L107",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "number",
                      },
                    },
                    {
                      id: 4910,
                      name: "bounceTimeout",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "ONLY in throttle mode - options for handling last bounce event",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-fetch/use-fetch.types.ts",
                          line: 111,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L111",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "number",
                      },
                    },
                    {
                      id: 4908,
                      name: "bounceType",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "Possibility to choose between debounce and throttle approaches",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-fetch/use-fetch.types.ts",
                          line: 103,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L103",
                        },
                      ],
                      type: {
                        type: "literal",
                        value: "throttle",
                      },
                    },
                  ],
                  groups: [
                    {
                      title: "Properties",
                      children: [4909, 4910, 4908],
                    },
                  ],
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 99,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L99",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
    {
      id: 4912,
      name: "UseFetchReturnType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-fetch/use-fetch.types.ts",
          line: 115,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L115",
        },
      ],
      typeParameters: [
        {
          id: 4923,
          name: "R",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "intersection",
        types: [
          {
            type: "reference",
            target: 5438,
            typeArguments: [
              {
                type: "reference",
                target: 4923,
                name: "R",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseTrackedStateType",
            package: "@hyper-fetch/react",
          },
          {
            type: "reference",
            target: 5450,
            typeArguments: [
              {
                type: "reference",
                target: 4923,
                name: "R",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseTrackedStateActions",
            package: "@hyper-fetch/react",
          },
          {
            type: "reference",
            target: 5309,
            typeArguments: [
              {
                type: "reference",
                target: 4923,
                name: "R",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseRequestEventsActionsType",
            package: "@hyper-fetch/react",
          },
          {
            type: "reflection",
            declaration: {
              id: 4913,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 4914,
                  name: "bounce",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Data related to current state of the bounce usage",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 121,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L121",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4915,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      children: [
                        {
                          id: 4916,
                          name: "active",
                          variant: "declaration",
                          kind: 1024,
                          flags: {},
                          comment: {
                            summary: [
                              {
                                kind: "text",
                                text: "Active state of the bounce method",
                              },
                            ],
                          },
                          sources: [
                            {
                              fileName: "hooks/use-fetch/use-fetch.types.ts",
                              line: 125,
                              character: 6,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L125",
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "boolean",
                          },
                        },
                        {
                          id: 4917,
                          name: "reset",
                          variant: "declaration",
                          kind: 1024,
                          flags: {},
                          comment: {
                            summary: [
                              {
                                kind: "text",
                                text: "Method to stop the active bounce method execution",
                              },
                            ],
                          },
                          sources: [
                            {
                              fileName: "hooks/use-fetch/use-fetch.types.ts",
                              line: 129,
                              character: 6,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L129",
                            },
                          ],
                          type: {
                            type: "reflection",
                            declaration: {
                              id: 4918,
                              name: "__type",
                              variant: "declaration",
                              kind: 65_536,
                              flags: {},
                              sources: [
                                {
                                  fileName: "hooks/use-fetch/use-fetch.types.ts",
                                  line: 129,
                                  character: 13,
                                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L129",
                                },
                              ],
                              signatures: [
                                {
                                  id: 4919,
                                  name: "__type",
                                  variant: "signature",
                                  kind: 4096,
                                  flags: {},
                                  type: {
                                    type: "intrinsic",
                                    name: "void",
                                  },
                                },
                              ],
                            },
                          },
                        },
                      ],
                      groups: [
                        {
                          title: "Properties",
                          children: [4916, 4917],
                        },
                      ],
                      sources: [
                        {
                          fileName: "hooks/use-fetch/use-fetch.types.ts",
                          line: 121,
                          character: 12,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L121",
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4920,
                  name: "refetch",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Refetch current request",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-fetch/use-fetch.types.ts",
                      line: 134,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L134",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4921,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-fetch/use-fetch.types.ts",
                          line: 134,
                          character: 13,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L134",
                        },
                      ],
                      signatures: [
                        {
                          id: 4922,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [4914, 4920],
                },
              ],
              sources: [
                {
                  fileName: "hooks/use-fetch/use-fetch.types.ts",
                  line: 117,
                  character: 35,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.types.ts#L117",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: 5181,
      name: "UseListenerOptionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-listener/use-listener.types.ts",
          line: 1,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.types.ts#L1",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5182,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5183,
              name: "dependencyTracking",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "When true (default), only re-renders when accessed state properties change",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-listener/use-listener.types.ts",
                  line: 3,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.types.ts#L3",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5183],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-listener/use-listener.types.ts",
              line: 1,
              character: 37,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.types.ts#L1",
            },
          ],
        },
      },
    },
    {
      id: 5008,
      name: "UseQueueOptionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-queue/use-queue.types.ts",
          line: 9,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L9",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5009,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5010,
              name: "dispatcherType",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: 'Which dispatcher to use: "auto" picks based on request method, "fetch" or "submit" forces a specific one',
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 11,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L11",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: "auto",
                  },
                  {
                    type: "literal",
                    value: "fetch",
                  },
                  {
                    type: "literal",
                    value: "submit",
                  },
                ],
              },
            },
            {
              id: 5011,
              name: "keepFinishedRequests",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "When true, completed requests remain in the queue list for inspection",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 13,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L13",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5010, 5011],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-queue/use-queue.types.ts",
              line: 9,
              character: 34,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L9",
            },
          ],
        },
      },
    },
    {
      id: 5030,
      name: "UseQueueReturnType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-queue/use-queue.types.ts",
          line: 47,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L47",
        },
      ],
      typeParameters: [
        {
          id: 5044,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5031,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5034,
              name: "dispatcher",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request dispatcher instance",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 59,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L59",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/dispatcher/dispatcher.ts",
                  qualifiedName: "Dispatcher",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractAdapterType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5044,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractAdapterType",
                    package: "@hyper-fetch/core",
                  },
                ],
                name: "Dispatcher",
                package: "@hyper-fetch/core",
              },
            },
            {
              id: 5038,
              name: "pause",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Callback which allow to pause queue. It will allow ongoing requests to be finished, but will stop next from being send.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 67,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L67",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5039,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 67,
                      character: 9,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L67",
                    },
                  ],
                  signatures: [
                    {
                      id: 5040,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5033,
              name: "requests",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "List of requests for provided request",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 55,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L55",
                },
              ],
              type: {
                type: "array",
                elementType: {
                  type: "reference",
                  target: 5012,
                  typeArguments: [
                    {
                      type: "reference",
                      target: 5044,
                      name: "T",
                      package: "@hyper-fetch/react",
                      refersToTypeParameter: true,
                    },
                  ],
                  name: "QueueRequest",
                  package: "@hyper-fetch/react",
                },
              },
            },
            {
              id: 5041,
              name: "start",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Callback which allow to start queue.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 71,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L71",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5042,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 71,
                      character: 9,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L71",
                    },
                  ],
                  signatures: [
                    {
                      id: 5043,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5035,
              name: "stop",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Callback which allow to stop queue, it will cancel ongoing requests.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 63,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L63",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5036,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-queue/use-queue.types.ts",
                      line: 63,
                      character: 8,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L63",
                    },
                  ],
                  signatures: [
                    {
                      id: 5037,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5032,
              name: "stopped",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Queue status for provided request",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-queue/use-queue.types.ts",
                  line: 51,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L51",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5034, 5038, 5033, 5041, 5035, 5032],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-queue/use-queue.types.ts",
              line: 47,
              character: 60,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.types.ts#L47",
            },
          ],
        },
      },
    },
    {
      id: 5309,
      name: "UseRequestEventsActionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 34,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L34",
        },
      ],
      typeParameters: [
        {
          id: 5350,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5310,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5311,
              name: "abort",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Callback that allows canceling ongoing requests from the given queryKey.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 38,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L38",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5312,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 38,
                      character: 9,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L38",
                    },
                  ],
                  signatures: [
                    {
                      id: 5313,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5322,
              name: "onAbort",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on aborting of requests. Includes ",
                  },
                  {
                    kind: "code",
                    text: "`mutationContext`",
                  },
                  {
                    kind: "text",
                    text: " when ",
                  },
                  {
                    kind: "code",
                    text: "`setOptimistic`",
                  },
                  {
                    kind: "text",
                    text: " is configured.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 50,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L50",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5323,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 50,
                      character: 11,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L50",
                    },
                  ],
                  signatures: [
                    {
                      id: 5324,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5325,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5383,
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5350,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "OnErrorCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5342,
              name: "onDownloadProgress",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on download progress ETA.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 70,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L70",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5343,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 70,
                      character: 22,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L70",
                    },
                  ],
                  signatures: [
                    {
                      id: 5344,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5345,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5398,
                            name: "OnProgressCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5318,
              name: "onError",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on error response. Includes ",
                  },
                  {
                    kind: "code",
                    text: "`mutationContext`",
                  },
                  {
                    kind: "text",
                    text: " when ",
                  },
                  {
                    kind: "code",
                    text: "`setOptimistic`",
                  },
                  {
                    kind: "text",
                    text: " is configured.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 46,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L46",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5319,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 46,
                      character: 11,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L46",
                    },
                  ],
                  signatures: [
                    {
                      id: 5320,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5321,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5383,
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5350,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "OnErrorCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5330,
              name: "onFinished",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on any response. Includes ",
                  },
                  {
                    kind: "code",
                    text: "`mutationContext`",
                  },
                  {
                    kind: "text",
                    text: " when ",
                  },
                  {
                    kind: "code",
                    text: "`setOptimistic`",
                  },
                  {
                    kind: "text",
                    text: " is configured.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 58,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L58",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5331,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 58,
                      character: 14,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L58",
                    },
                  ],
                  signatures: [
                    {
                      id: 5332,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5333,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5388,
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5350,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "OnFinishedCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5326,
              name: "onOfflineError",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on request going into offline awaiting for network connection to be restored.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 54,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L54",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5327,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 54,
                      character: 18,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L54",
                    },
                  ],
                  signatures: [
                    {
                      id: 5328,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5329,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5383,
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5350,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "OnErrorCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5334,
              name: "onRequestStart",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on request start.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 62,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L62",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5335,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 62,
                      character: 18,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L62",
                    },
                  ],
                  signatures: [
                    {
                      id: 5336,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5337,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5393,
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5350,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "OnStartCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5338,
              name: "onResponseStart",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on response start(before we receive all data from server).",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 66,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L66",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5339,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 66,
                      character: 19,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L66",
                    },
                  ],
                  signatures: [
                    {
                      id: 5340,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5341,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5393,
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5350,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "OnStartCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5314,
              name: "onSuccess",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on success response. Includes ",
                  },
                  {
                    kind: "code",
                    text: "`mutationContext`",
                  },
                  {
                    kind: "text",
                    text: " when ",
                  },
                  {
                    kind: "code",
                    text: "`setOptimistic`",
                  },
                  {
                    kind: "text",
                    text: " is configured.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 42,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L42",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5315,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 42,
                      character: 13,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L42",
                    },
                  ],
                  signatures: [
                    {
                      id: 5316,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5317,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5378,
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5350,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "OnSuccessCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5346,
              name: "onUploadProgress",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Helper hook listening on upload progress ETA.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 74,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L74",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5347,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 74,
                      character: 20,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L74",
                    },
                  ],
                  signatures: [
                    {
                      id: 5348,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5349,
                          name: "callback",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5398,
                            name: "OnProgressCallbackType",
                            package: "@hyper-fetch/react",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5311, 5322, 5342, 5318, 5330, 5326, 5334, 5338, 5314, 5346],
            },
          ],
          sources: [
            {
              fileName: "helpers/use-request-events/use-request-events.types.ts",
              line: 34,
              character: 69,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L34",
            },
          ],
        },
      },
    },
    {
      id: 5288,
      name: "UseRequestEventsDataMap",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 21,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L21",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5289,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5290,
              name: "unmount",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 21,
                  character: 40,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L21",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                  qualifiedName: "VoidFunction",
                },
                name: "VoidFunction",
                package: "typescript",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5290],
            },
          ],
          sources: [
            {
              fileName: "helpers/use-request-events/use-request-events.types.ts",
              line: 21,
              character: 38,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L21",
            },
          ],
        },
      },
    },
    {
      id: 5291,
      name: "UseRequestEventsLifecycleMap",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 22,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L22",
        },
      ],
      type: {
        type: "reference",
        target: {
          sourceFileName:
            "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts",
          qualifiedName: "Map",
        },
        typeArguments: [
          {
            type: "intrinsic",
            name: "string",
          },
          {
            type: "reflection",
            declaration: {
              id: 5292,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5293,
                  name: "unmount",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 22,
                      character: 57,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L22",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                      qualifiedName: "VoidFunction",
                    },
                    name: "VoidFunction",
                    package: "typescript",
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [5293],
                },
              ],
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 22,
                  character: 55,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L22",
                },
              ],
            },
          },
        ],
        name: "Map",
        package: "typescript",
      },
    },
    {
      id: 5294,
      name: "UseRequestEventsPropsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 25,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L25",
        },
      ],
      typeParameters: [
        {
          id: 5308,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5295,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5299,
              name: "actions",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 29,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L29",
                },
              ],
              type: {
                type: "reference",
                target: 5450,
                typeArguments: [
                  {
                    type: "reference",
                    target: 5308,
                    name: "T",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                ],
                name: "UseTrackedStateActions",
                package: "@hyper-fetch/react",
              },
            },
            {
              id: 5297,
              name: "dispatcher",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 27,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L27",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/dispatcher/dispatcher.ts",
                  qualifiedName: "Dispatcher",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractAdapterType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5308,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractAdapterType",
                    package: "@hyper-fetch/core",
                  },
                ],
                name: "Dispatcher",
                package: "@hyper-fetch/core",
              },
            },
            {
              id: 5304,
              name: "getIsDataProcessing",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 31,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L31",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5305,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 31,
                      character: 23,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L31",
                    },
                  ],
                  signatures: [
                    {
                      id: 5306,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5307,
                          name: "cacheKey",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "string",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "boolean",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5298,
              name: "logger",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 28,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L28",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/managers/logger/logger.manager.types.ts",
                  qualifiedName: "LoggerMethods",
                },
                name: "LoggerMethods",
                package: "@hyper-fetch/core",
              },
            },
            {
              id: 5296,
              name: "request",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 26,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L26",
                },
              ],
              type: {
                type: "reference",
                target: 5308,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5300,
              name: "setCacheData",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 30,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L30",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5301,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 30,
                      character: 16,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L30",
                    },
                  ],
                  signatures: [
                    {
                      id: 5302,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5303,
                          name: "cacheData",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheValueType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: {
                                  sourceFileName: "../packages/core/src/types/request.types.ts",
                                  qualifiedName: "ExtractResponseType",
                                },
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5308,
                                    name: "T",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "ExtractResponseType",
                                package: "@hyper-fetch/core",
                              },
                              {
                                type: "reference",
                                target: {
                                  sourceFileName: "../packages/core/src/types/request.types.ts",
                                  qualifiedName: "ExtractErrorType",
                                },
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5308,
                                    name: "T",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "ExtractErrorType",
                                package: "@hyper-fetch/core",
                              },
                            ],
                            name: "CacheValueType",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5299, 5297, 5304, 5298, 5296, 5300],
            },
          ],
          sources: [
            {
              fileName: "helpers/use-request-events/use-request-events.types.ts",
              line: 25,
              character: 67,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L25",
            },
          ],
        },
      },
    },
    {
      id: 5351,
      name: "UseRequestEventsReturnType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-request-events/use-request-events.types.ts",
          line: 78,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L78",
        },
      ],
      typeParameters: [
        {
          id: 5371,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "tuple",
        elements: [
          {
            type: "reference",
            target: 5309,
            typeArguments: [
              {
                type: "reference",
                target: 5371,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseRequestEventsActionsType",
            package: "@hyper-fetch/react",
          },
          {
            type: "reflection",
            declaration: {
              id: 5352,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5353,
                  name: "addCacheDataListener",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 81,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L81",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5354,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-request-events/use-request-events.types.ts",
                          line: 81,
                          character: 26,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L81",
                        },
                      ],
                      signatures: [
                        {
                          id: 5355,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 5356,
                              name: "request",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5371,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            },
                          ],
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName:
                                "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                              qualifiedName: "VoidFunction",
                            },
                            name: "VoidFunction",
                            package: "typescript",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5358,
                  name: "addLifecycleListeners",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 83,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L83",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5359,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-request-events/use-request-events.types.ts",
                          line: 83,
                          character: 27,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L83",
                        },
                      ],
                      signatures: [
                        {
                          id: 5360,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 5361,
                              name: "request",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5371,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            },
                            {
                              id: 5362,
                              name: "requestId",
                              variant: "param",
                              kind: 32_768,
                              flags: {
                                isOptional: true,
                              },
                              type: {
                                type: "intrinsic",
                                name: "string",
                              },
                            },
                            {
                              id: 5363,
                              name: "optimisticResult",
                              variant: "param",
                              kind: 32_768,
                              flags: {
                                isOptional: true,
                              },
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName: "../packages/core/src/request/request.types.ts",
                                  qualifiedName: "OptimisticCallbackResult",
                                },
                                typeArguments: [
                                  {
                                    type: "intrinsic",
                                    name: "any",
                                  },
                                ],
                                name: "OptimisticCallbackResult",
                                package: "@hyper-fetch/core",
                              },
                            },
                          ],
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName:
                                "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                              qualifiedName: "VoidFunction",
                            },
                            name: "VoidFunction",
                            package: "typescript",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5357,
                  name: "clearCacheDataListener",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 82,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L82",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                      qualifiedName: "VoidFunction",
                    },
                    name: "VoidFunction",
                    package: "typescript",
                  },
                },
                {
                  id: 5368,
                  name: "clearLifecycleListeners",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 89,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L89",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5369,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-request-events/use-request-events.types.ts",
                          line: 89,
                          character: 29,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L89",
                        },
                      ],
                      signatures: [
                        {
                          id: 5370,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5364,
                  name: "removeLifecycleListener",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-request-events/use-request-events.types.ts",
                      line: 88,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L88",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5365,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-request-events/use-request-events.types.ts",
                          line: 88,
                          character: 29,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L88",
                        },
                      ],
                      signatures: [
                        {
                          id: 5366,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 5367,
                              name: "requestId",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "string",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [5353, 5358, 5357, 5368, 5364],
                },
              ],
              sources: [
                {
                  fileName: "helpers/use-request-events/use-request-events.types.ts",
                  line: 80,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-request-events/use-request-events.types.ts#L80",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: 5617,
      name: "UseSocketStateProps",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-socket-state/use-socket-state.types.ts",
          line: 11,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L11",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5618,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5619,
              name: "dependencyTracking",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "helpers/use-socket-state/use-socket-state.types.ts",
                  line: 12,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L12",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5619],
            },
          ],
          sources: [
            {
              fileName: "helpers/use-socket-state/use-socket-state.types.ts",
              line: 11,
              character: 34,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L11",
            },
          ],
        },
      },
    },
    {
      id: 5608,
      name: "UseSocketStateType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-socket-state/use-socket-state.types.ts",
          line: 3,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L3",
        },
      ],
      typeParameters: [
        {
          id: 5615,
          name: "Socket",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/sockets/src/socket/socket.types.ts",
              qualifiedName: "SocketInstance",
            },
            name: "SocketInstance",
            package: "@hyper-fetch/sockets",
          },
        },
        {
          id: 5616,
          name: "DataType",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          default: {
            type: "intrinsic",
            name: "any",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5609,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5612,
              name: "connected",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-socket-state/use-socket-state.types.ts",
                  line: 6,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L6",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5613,
              name: "connecting",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-socket-state/use-socket-state.types.ts",
                  line: 7,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L7",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5610,
              name: "data",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-socket-state/use-socket-state.types.ts",
                  line: 4,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L4",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "reference",
                    target: 5616,
                    name: "DataType",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                  {
                    type: "literal",
                    value: null,
                  },
                ],
              },
            },
            {
              id: 5611,
              name: "extra",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-socket-state/use-socket-state.types.ts",
                  line: 5,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L5",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/sockets/src/types/extract.types.ts",
                      qualifiedName: "ExtractSocketExtraType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5615,
                        name: "Socket",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractSocketExtraType",
                    package: "@hyper-fetch/sockets",
                  },
                  {
                    type: "literal",
                    value: null,
                  },
                ],
              },
            },
            {
              id: 5614,
              name: "timestamp",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-socket-state/use-socket-state.types.ts",
                  line: 8,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L8",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "number",
                  },
                  {
                    type: "literal",
                    value: null,
                  },
                ],
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5612, 5613, 5610, 5611, 5614],
            },
          ],
          sources: [
            {
              fileName: "helpers/use-socket-state/use-socket-state.types.ts",
              line: 3,
              character: 80,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.types.ts#L3",
            },
          ],
        },
      },
    },
    {
      id: 5074,
      name: "UseStreamOptionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-stream/use-stream.types.ts",
          line: 3,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L3",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5075,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5076,
              name: "autoStart",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "When true, the stream starts automatically on mount. Defaults to false.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 7,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L7",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5076],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-stream/use-stream.types.ts",
              line: 3,
              character: 35,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L3",
            },
          ],
        },
      },
    },
    {
      id: 5077,
      name: "UseStreamReturnType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-stream/use-stream.types.ts",
          line: 10,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L10",
        },
      ],
      typeParameters: [
        {
          id: 5095,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5078,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5089,
              name: "abort",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Abort the ongoing stream.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 48,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L48",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5090,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-stream/use-stream.types.ts",
                      line: 48,
                      character: 9,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L48",
                    },
                  ],
                  signatures: [
                    {
                      id: 5091,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5080,
              name: "chunks",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Raw binary chunks received from the stream.\nUseful for binary streaming like file downloads.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 20,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L20",
                },
              ],
              type: {
                type: "array",
                elementType: {
                  type: "reference",
                  target: {
                    sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                    qualifiedName: "Uint8Array",
                  },
                  name: "Uint8Array",
                  package: "typescript",
                },
              },
            },
            {
              id: 5082,
              name: "done",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Whether the stream has finished (all chunks consumed).",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 28,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L28",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5083,
              name: "error",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Error from the request or stream consumption.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 32,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L32",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractErrorType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5095,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractErrorType",
                    package: "@hyper-fetch/core",
                  },
                  {
                    type: "literal",
                    value: null,
                  },
                ],
              },
            },
            {
              id: 5084,
              name: "extra",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Response extra metadata (headers, etc.).",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 36,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L36",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/adapter.types.ts",
                      qualifiedName: "ExtractAdapterExtraType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractAdapterType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5095,
                            name: "T",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractAdapterType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "ExtractAdapterExtraType",
                    package: "@hyper-fetch/core",
                  },
                  {
                    type: "literal",
                    value: null,
                  },
                ],
              },
            },
            {
              id: 5092,
              name: "reset",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Reset state to initial values, allowing a fresh stream.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 52,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L52",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5093,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-stream/use-stream.types.ts",
                      line: 52,
                      character: 9,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L52",
                    },
                  ],
                  signatures: [
                    {
                      id: 5094,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5086,
              name: "start",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Start consuming the stream. The request is sent with ",
                  },
                  {
                    kind: "code",
                    text: "`streaming: true`",
                  },
                  {
                    kind: "text",
                    text: ".",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 44,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L44",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5087,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-stream/use-stream.types.ts",
                      line: 44,
                      character: 9,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L44",
                    },
                  ],
                  signatures: [
                    {
                      id: 5088,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5085,
              name: "status",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "HTTP status code from the response.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 40,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L40",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "number",
                  },
                  {
                    type: "literal",
                    value: null,
                  },
                ],
              },
            },
            {
              id: 5081,
              name: "streaming",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Whether the stream is currently being consumed.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 24,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L24",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5079,
              name: "text",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Accumulated text from all stream chunks decoded as UTF-8.\nUseful for text-based streaming like LLM responses or SSE.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "hooks/use-stream/use-stream.types.ts",
                  line: 15,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L15",
                },
              ],
              type: {
                type: "intrinsic",
                name: "string",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5089, 5080, 5082, 5083, 5084, 5092, 5086, 5085, 5081, 5079],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-stream/use-stream.types.ts",
              line: 10,
              character: 61,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.types.ts#L10",
            },
          ],
        },
      },
    },
    {
      id: 4934,
      name: "UseSubmitOptionsType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-submit/use-submit.types.ts",
          line: 13,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L13",
        },
      ],
      typeParameters: [
        {
          id: 4948,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "intersection",
        types: [
          {
            type: "reflection",
            declaration: {
              id: 4935,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 4938,
                  name: "bounce",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Enable/disable debouncing for often changing keys or refreshing, to limit requests to server.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 25,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L25",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4940,
                  name: "deepCompare",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Deep comparison function for hook to check for equality in incoming data, to limit rerenders.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 33,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L33",
                    },
                  ],
                  type: {
                    type: "union",
                    types: [
                      {
                        type: "intrinsic",
                        name: "boolean",
                      },
                      {
                        type: "query",
                        queryType: {
                          type: "reference",
                          target: 5648,
                          name: "isEqual",
                          package: "@hyper-fetch/react",
                        },
                      },
                    ],
                  },
                },
                {
                  id: 4939,
                  name: "dependencyTracking",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "If ",
                      },
                      {
                        kind: "code",
                        text: "`true`",
                      },
                      {
                        kind: "text",
                        text: " it will rerender only when values used by our component gets changed. Otherwise it will rerender on any change.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 29,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L29",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4936,
                  name: "disabled",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Disable submitting",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 17,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L17",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 4937,
                  name: "initialResponse",
                  variant: "declaration",
                  kind: 1024,
                  flags: {
                    isOptional: true,
                  },
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "If cache is empty we can use placeholder data.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 21,
                      character: 2,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L21",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/helpers.types.ts",
                      qualifiedName: "NullableType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName:
                            "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                          qualifiedName: "Partial",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractAdapterResolvedType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 4948,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractAdapterResolvedType",
                            package: "@hyper-fetch/core",
                          },
                        ],
                        name: "Partial",
                        package: "typescript",
                      },
                    ],
                    name: "NullableType",
                    package: "@hyper-fetch/core",
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [4938, 4940, 4939, 4936, 4937],
                },
              ],
              sources: [
                {
                  fileName: "hooks/use-submit/use-submit.types.ts",
                  line: 13,
                  character: 62,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L13",
                },
              ],
            },
          },
          {
            type: "union",
            types: [
              {
                type: "reflection",
                declaration: {
                  id: 4941,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  children: [
                    {
                      id: 4943,
                      name: "bounceTime",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "How long it should bounce requests.",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 43,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L43",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "number",
                      },
                    },
                    {
                      id: 4942,
                      name: "bounceType",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "Possibility to choose between debounce and throttle approaches",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 39,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L39",
                        },
                      ],
                      type: {
                        type: "literal",
                        value: "debounce",
                      },
                    },
                  ],
                  groups: [
                    {
                      title: "Properties",
                      children: [4943, 4942],
                    },
                  ],
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 35,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L35",
                    },
                  ],
                },
              },
              {
                type: "reflection",
                declaration: {
                  id: 4944,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  children: [
                    {
                      id: 4946,
                      name: "bounceTime",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "How long it should interval requests.",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 53,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L53",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "number",
                      },
                    },
                    {
                      id: 4947,
                      name: "bounceTimeout",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "ONLY in throttle mode - options for handling last bounce event",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 57,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L57",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "number",
                      },
                    },
                    {
                      id: 4945,
                      name: "bounceType",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      comment: {
                        summary: [
                          {
                            kind: "text",
                            text: "Possibility to choose between debounce and throttle approaches",
                          },
                        ],
                      },
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 49,
                          character: 6,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L49",
                        },
                      ],
                      type: {
                        type: "literal",
                        value: "throttle",
                      },
                    },
                  ],
                  groups: [
                    {
                      title: "Properties",
                      children: [4946, 4947, 4945],
                    },
                  ],
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 45,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L45",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
    {
      id: 4949,
      name: "UseSubmitReturnType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-submit/use-submit.types.ts",
          line: 61,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L61",
        },
      ],
      typeParameters: [
        {
          id: 5001,
          name: "RequestType",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "intersection",
        types: [
          {
            type: "reference",
            target: {
              sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
              qualifiedName: "Omit",
            },
            typeArguments: [
              {
                type: "reference",
                target: 5438,
                typeArguments: [
                  {
                    type: "reference",
                    target: 5001,
                    name: "RequestType",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                ],
                name: "UseTrackedStateType",
                package: "@hyper-fetch/react",
              },
              {
                type: "literal",
                value: "loading",
              },
            ],
            name: "Omit",
            package: "typescript",
          },
          {
            type: "reference",
            target: 5450,
            typeArguments: [
              {
                type: "reference",
                target: 5001,
                name: "RequestType",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseTrackedStateActions",
            package: "@hyper-fetch/react",
          },
          {
            type: "reflection",
            declaration: {
              id: 4950,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 4951,
                  name: "abort",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Callback which allows to cancel ongoing requests from given queryKey.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 69,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L69",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4952,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 69,
                          character: 11,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L69",
                        },
                      ],
                      signatures: [
                        {
                          id: 4953,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4992,
                  name: "bounce",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Data related to current state of the bounce usage",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 117,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L117",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4993,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      children: [
                        {
                          id: 4994,
                          name: "active",
                          variant: "declaration",
                          kind: 1024,
                          flags: {},
                          comment: {
                            summary: [
                              {
                                kind: "text",
                                text: "Active state of the bounce method",
                              },
                            ],
                          },
                          sources: [
                            {
                              fileName: "hooks/use-submit/use-submit.types.ts",
                              line: 121,
                              character: 6,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L121",
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "boolean",
                          },
                        },
                        {
                          id: 4995,
                          name: "reset",
                          variant: "declaration",
                          kind: 1024,
                          flags: {},
                          comment: {
                            summary: [
                              {
                                kind: "text",
                                text: "Method to stop the active bounce method execution",
                              },
                            ],
                          },
                          sources: [
                            {
                              fileName: "hooks/use-submit/use-submit.types.ts",
                              line: 125,
                              character: 6,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L125",
                            },
                          ],
                          type: {
                            type: "reflection",
                            declaration: {
                              id: 4996,
                              name: "__type",
                              variant: "declaration",
                              kind: 65_536,
                              flags: {},
                              sources: [
                                {
                                  fileName: "hooks/use-submit/use-submit.types.ts",
                                  line: 125,
                                  character: 13,
                                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L125",
                                },
                              ],
                              signatures: [
                                {
                                  id: 4997,
                                  name: "__type",
                                  variant: "signature",
                                  kind: 4096,
                                  flags: {},
                                  type: {
                                    type: "intrinsic",
                                    name: "void",
                                  },
                                },
                              ],
                            },
                          },
                        },
                      ],
                      groups: [
                        {
                          title: "Properties",
                          children: [4994, 4995],
                        },
                      ],
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 117,
                          character: 12,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L117",
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4982,
                  name: "onSubmitAbort",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on aborting of requests. Includes ",
                      },
                      {
                        kind: "code",
                        text: "`mutationContext`",
                      },
                      {
                        kind: "text",
                        text: " when ",
                      },
                      {
                        kind: "code",
                        text: "`setOptimistic`",
                      },
                      {
                        kind: "text",
                        text: " is configured. Abort events are not triggering onError callbacks.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 101,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L101",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4983,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 101,
                          character: 19,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L101",
                        },
                      ],
                      signatures: [
                        {
                          id: 4984,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4985,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5383,
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5001,
                                    name: "RequestType",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "OnErrorCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4974,
                  name: "onSubmitDownloadProgress",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on download progress ETA. We can later match given requests by their id's or request instance which holds all data which is being transferred.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 93,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L93",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4975,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 93,
                          character: 30,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L93",
                        },
                      ],
                      signatures: [
                        {
                          id: 4976,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4977,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5398,
                                name: "OnProgressCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4958,
                  name: "onSubmitError",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on error response. Includes ",
                      },
                      {
                        kind: "code",
                        text: "`mutationContext`",
                      },
                      {
                        kind: "text",
                        text: " when ",
                      },
                      {
                        kind: "code",
                        text: "`setOptimistic`",
                      },
                      {
                        kind: "text",
                        text: " is configured.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 77,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L77",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4959,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 77,
                          character: 19,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L77",
                        },
                      ],
                      signatures: [
                        {
                          id: 4960,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4961,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5383,
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5001,
                                    name: "RequestType",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "OnErrorCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4962,
                  name: "onSubmitFinished",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on any response. Includes ",
                      },
                      {
                        kind: "code",
                        text: "`mutationContext`",
                      },
                      {
                        kind: "text",
                        text: " when ",
                      },
                      {
                        kind: "code",
                        text: "`setOptimistic`",
                      },
                      {
                        kind: "text",
                        text: " is configured.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 81,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L81",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4963,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 81,
                          character: 22,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L81",
                        },
                      ],
                      signatures: [
                        {
                          id: 4964,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4965,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5388,
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5001,
                                    name: "RequestType",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "OnFinishedCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4986,
                  name: "onSubmitOfflineError",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on request going into offline awaiting for network connection to be restored. It will not trigger onError when 'offline' mode is set on request.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 105,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L105",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4987,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 105,
                          character: 26,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L105",
                        },
                      ],
                      signatures: [
                        {
                          id: 4988,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4989,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5383,
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5001,
                                    name: "RequestType",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "OnErrorCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4966,
                  name: "onSubmitRequestStart",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on request start.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 85,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L85",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4967,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 85,
                          character: 26,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L85",
                        },
                      ],
                      signatures: [
                        {
                          id: 4968,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4969,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5393,
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5001,
                                    name: "RequestType",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "OnStartCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4970,
                  name: "onSubmitResponseStart",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on response start(before we receive all data from server).",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 89,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L89",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4971,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 89,
                          character: 27,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L89",
                        },
                      ],
                      signatures: [
                        {
                          id: 4972,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4973,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5393,
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5001,
                                    name: "RequestType",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "OnStartCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4954,
                  name: "onSubmitSuccess",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on success response. Includes ",
                      },
                      {
                        kind: "code",
                        text: "`mutationContext`",
                      },
                      {
                        kind: "text",
                        text: " when ",
                      },
                      {
                        kind: "code",
                        text: "`setOptimistic`",
                      },
                      {
                        kind: "text",
                        text: " is configured.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 73,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L73",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4955,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 73,
                          character: 21,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L73",
                        },
                      ],
                      signatures: [
                        {
                          id: 4956,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4957,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5378,
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5001,
                                    name: "RequestType",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "OnSuccessCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4978,
                  name: "onSubmitUploadProgress",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Helper hook listening on upload progress ETA. We can later match given requests by their id's or request instance which holds all data which is being transferred.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 97,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L97",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4979,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 97,
                          character: 28,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L97",
                        },
                      ],
                      signatures: [
                        {
                          id: 4980,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 4981,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: 5398,
                                name: "OnProgressCallbackType",
                                package: "@hyper-fetch/react",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4998,
                  name: "refetch",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Refetch current request",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 130,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L130",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 4999,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-submit/use-submit.types.ts",
                          line: 130,
                          character: 13,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L130",
                        },
                      ],
                      signatures: [
                        {
                          id: 5000,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 4990,
                  name: "submit",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Method responsible for triggering requests. It return Promise which will be resolved with the request.",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 109,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L109",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/request/request.types.ts",
                      qualifiedName: "RequestSendType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5001,
                        name: "RequestType",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "RequestSendType",
                    package: "@hyper-fetch/core",
                  },
                },
                {
                  id: 4991,
                  name: "submitting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  comment: {
                    summary: [
                      {
                        kind: "text",
                        text: "Request loading state",
                      },
                    ],
                  },
                  sources: [
                    {
                      fileName: "hooks/use-submit/use-submit.types.ts",
                      line: 113,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L113",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [4951, 4992, 4982, 4974, 4958, 4962, 4986, 4966, 4970, 4954, 4978, 4998, 4990, 4991],
                },
              ],
              sources: [
                {
                  fileName: "hooks/use-submit/use-submit.types.ts",
                  line: 65,
                  character: 40,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.types.ts#L65",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: 5450,
      name: "UseTrackedStateActions",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
          line: 79,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L79",
        },
      ],
      typeParameters: [
        {
          id: 5491,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5451,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5488,
              name: "clearState",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Reset all state fields to their initial values (data, error, status, extra → null, loading → false, etc.).",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 128,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L128",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5489,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 128,
                      character: 14,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L128",
                    },
                  ],
                  signatures: [
                    {
                      id: 5490,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5452,
              name: "setData",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom data. We can do it locally(inside hook state).\nIf you need to update cache data use client.cache.update(). method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 84,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L84",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5453,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 84,
                      character: 11,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L84",
                    },
                  ],
                  signatures: [
                    {
                      id: 5454,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5455,
                          name: "data",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "union",
                                types: [
                                  {
                                    type: "reference",
                                    target: {
                                      sourceFileName: "../packages/core/src/types/request.types.ts",
                                      qualifiedName: "ExtractResponseType",
                                    },
                                    typeArguments: [
                                      {
                                        type: "reference",
                                        target: 5491,
                                        name: "T",
                                        package: "@hyper-fetch/react",
                                        refersToTypeParameter: true,
                                      },
                                    ],
                                    name: "ExtractResponseType",
                                    package: "@hyper-fetch/core",
                                  },
                                  {
                                    type: "literal",
                                    value: null,
                                  },
                                ],
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5456,
              name: "setError",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom error. We can do it locally(inside hook state).\nIf you need to update cache data use client.cache.update() method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 89,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L89",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5457,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 89,
                      character: 12,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L89",
                    },
                  ],
                  signatures: [
                    {
                      id: 5458,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5459,
                          name: "error",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "union",
                                types: [
                                  {
                                    type: "reference",
                                    target: {
                                      sourceFileName: "../packages/core/src/types/request.types.ts",
                                      qualifiedName: "ExtractErrorType",
                                    },
                                    typeArguments: [
                                      {
                                        type: "reference",
                                        target: 5491,
                                        name: "T",
                                        package: "@hyper-fetch/react",
                                        refersToTypeParameter: true,
                                      },
                                    ],
                                    name: "ExtractErrorType",
                                    package: "@hyper-fetch/core",
                                  },
                                  {
                                    type: "literal",
                                    value: null,
                                  },
                                ],
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5472,
              name: "setExtra",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom additional data. We can do it locally(inside hook state).\nIf you need to update cache data use client.cache.update() method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 109,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L109",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5473,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 109,
                      character: 12,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L109",
                    },
                  ],
                  signatures: [
                    {
                      id: 5474,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5475,
                          name: "extra",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "union",
                                types: [
                                  {
                                    type: "reference",
                                    target: {
                                      sourceFileName: "../packages/core/src/types/adapter.types.ts",
                                      qualifiedName: "ExtractAdapterExtraType",
                                    },
                                    typeArguments: [
                                      {
                                        type: "reference",
                                        target: {
                                          sourceFileName: "../packages/core/src/types/request.types.ts",
                                          qualifiedName: "ExtractAdapterType",
                                        },
                                        typeArguments: [
                                          {
                                            type: "reference",
                                            target: 5491,
                                            name: "T",
                                            package: "@hyper-fetch/react",
                                            refersToTypeParameter: true,
                                          },
                                        ],
                                        name: "ExtractAdapterType",
                                        package: "@hyper-fetch/core",
                                      },
                                    ],
                                    name: "ExtractAdapterExtraType",
                                    package: "@hyper-fetch/core",
                                  },
                                  {
                                    type: "literal",
                                    value: null,
                                  },
                                ],
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5460,
              name: "setLoading",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom loading. We can do it locally(inside hook state).\nIf you need to update cache data use client.cache.update() method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 94,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L94",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5461,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 94,
                      character: 14,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L94",
                    },
                  ],
                  signatures: [
                    {
                      id: 5462,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5463,
                          name: "loading",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "intrinsic",
                                name: "boolean",
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5484,
              name: "setRequestTimestamp",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom timestamp. We can do it locally(inside hook state).\nIf you need to update cache data use client.cache.update() method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 124,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L124",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5485,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 124,
                      character: 23,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L124",
                    },
                  ],
                  signatures: [
                    {
                      id: 5486,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5487,
                          name: "timestamp",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                                  qualifiedName: "Date",
                                },
                                name: "Date",
                                package: "typescript",
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5480,
              name: "setResponseTimestamp",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom timestamp. We can do it locally(inside hook state).\nIf you need to update cache data use client.cache.update() method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 119,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L119",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5481,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 119,
                      character: 24,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L119",
                    },
                  ],
                  signatures: [
                    {
                      id: 5482,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5483,
                          name: "timestamp",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                                  qualifiedName: "Date",
                                },
                                name: "Date",
                                package: "typescript",
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5476,
              name: "setRetries",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom retries count. We can do it locally(inside hook state).\nIf you need to update cache data use client.cache.update() method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 114,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L114",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5477,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 114,
                      character: 14,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L114",
                    },
                  ],
                  signatures: [
                    {
                      id: 5478,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5479,
                          name: "retries",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "intrinsic",
                                name: "number",
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5464,
              name: "setStatus",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom status. We can do it locally(inside hook state).\nIf you need to turn on loading for all listening hooks use client.requestManager.events.emitLoading() method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 99,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L99",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5465,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 99,
                      character: 13,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L99",
                    },
                  ],
                  signatures: [
                    {
                      id: 5466,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5467,
                          name: "status",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: {
                                  sourceFileName: "../packages/core/src/types/adapter.types.ts",
                                  qualifiedName: "ExtractAdapterStatusType",
                                },
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: {
                                      sourceFileName: "../packages/core/src/types/request.types.ts",
                                      qualifiedName: "ExtractAdapterType",
                                    },
                                    typeArguments: [
                                      {
                                        type: "reference",
                                        target: 5491,
                                        name: "T",
                                        package: "@hyper-fetch/react",
                                        refersToTypeParameter: true,
                                      },
                                    ],
                                    name: "ExtractAdapterType",
                                    package: "@hyper-fetch/core",
                                  },
                                ],
                                name: "ExtractAdapterStatusType",
                                package: "@hyper-fetch/core",
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
            {
              id: 5468,
              name: "setSuccess",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Action to set custom success. We can do it locally(inside hook state).\nIf you need to update cache data use client.cache.update() method.",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 104,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L104",
                },
              ],
              type: {
                type: "reflection",
                declaration: {
                  id: 5469,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 104,
                      character: 14,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L104",
                    },
                  ],
                  signatures: [
                    {
                      id: 5470,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      parameters: [
                        {
                          id: 5471,
                          name: "success",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/cache/cache.types.ts",
                              qualifiedName: "CacheSetState",
                            },
                            typeArguments: [
                              {
                                type: "intrinsic",
                                name: "boolean",
                              },
                            ],
                            name: "CacheSetState",
                            package: "@hyper-fetch/core",
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5488, 5452, 5456, 5472, 5460, 5484, 5480, 5476, 5464, 5468],
            },
          ],
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
              line: 79,
              character: 64,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L79",
            },
          ],
        },
      },
    },
    {
      id: 5408,
      name: "UseTrackedStateProps",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
          line: 17,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L17",
        },
      ],
      typeParameters: [
        {
          id: 5419,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5409,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5415,
              name: "deepCompare",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 23,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L23",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "intrinsic",
                    name: "boolean",
                  },
                  {
                    type: "query",
                    queryType: {
                      type: "reference",
                      target: 5648,
                      name: "isEqual",
                      package: "@hyper-fetch/react",
                    },
                  },
                ],
              },
            },
            {
              id: 5414,
              name: "dependencyTracking",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 22,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L22",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5417,
              name: "disabled",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 25,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L25",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5413,
              name: "dispatcher",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 21,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L21",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/dispatcher/dispatcher.ts",
                  qualifiedName: "Dispatcher",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractAdapterType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5419,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractAdapterType",
                    package: "@hyper-fetch/core",
                  },
                ],
                name: "Dispatcher",
                package: "@hyper-fetch/core",
              },
            },
            {
              id: 5412,
              name: "initialResponse",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 20,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L20",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/types/helpers.types.ts",
                  qualifiedName: "NullableType",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Partial",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractAdapterResolvedType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5419,
                            name: "T",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractAdapterResolvedType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "Partial",
                    package: "typescript",
                  },
                ],
                name: "NullableType",
                package: "@hyper-fetch/core",
              },
            },
            {
              id: 5416,
              name: "keepPreviousData",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 24,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L24",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: "auto",
                  },
                  {
                    type: "literal",
                    value: "preserve",
                  },
                  {
                    type: "literal",
                    value: "clean",
                  },
                ],
              },
            },
            {
              id: 5411,
              name: "logger",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 19,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L19",
                },
              ],
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/managers/logger/logger.manager.types.ts",
                  qualifiedName: "LoggerMethods",
                },
                name: "LoggerMethods",
                package: "@hyper-fetch/core",
              },
            },
            {
              id: 5410,
              name: "request",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 18,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L18",
                },
              ],
              type: {
                type: "reference",
                target: 5419,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5418,
              name: "revalidate",
              variant: "declaration",
              kind: 1024,
              flags: {
                isOptional: true,
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 26,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L26",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5415, 5414, 5417, 5413, 5412, 5416, 5411, 5410, 5418],
            },
          ],
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
              line: 17,
              character: 62,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L17",
            },
          ],
        },
      },
    },
    {
      id: 5420,
      name: "UseTrackedStateReturn",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
          line: 29,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L29",
        },
      ],
      typeParameters: [
        {
          id: 5437,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "tuple",
        elements: [
          {
            type: "reference",
            target: 5438,
            typeArguments: [
              {
                type: "reference",
                target: 5437,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseTrackedStateType",
            package: "@hyper-fetch/react",
          },
          {
            type: "reference",
            target: 5450,
            typeArguments: [
              {
                type: "reference",
                target: 5437,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseTrackedStateActions",
            package: "@hyper-fetch/react",
          },
          {
            type: "reflection",
            declaration: {
              id: 5421,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5433,
                  name: "getIsDataProcessing",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 36,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L36",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5434,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                          line: 36,
                          character: 25,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L36",
                        },
                      ],
                      signatures: [
                        {
                          id: 5435,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 5436,
                              name: "cacheKey",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "string",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "boolean",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5430,
                  name: "getStaleStatus",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 35,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L35",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5431,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                          line: 35,
                          character: 20,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L35",
                        },
                      ],
                      signatures: [
                        {
                          id: 5432,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          type: {
                            type: "intrinsic",
                            name: "boolean",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5426,
                  name: "setCacheData",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 34,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L34",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5427,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                          line: 34,
                          character: 18,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L34",
                        },
                      ],
                      signatures: [
                        {
                          id: 5428,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 5429,
                              name: "cacheData",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName: "../packages/core/src/cache/cache.types.ts",
                                  qualifiedName: "CacheValueType",
                                },
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: {
                                      sourceFileName: "../packages/core/src/types/request.types.ts",
                                      qualifiedName: "ExtractResponseType",
                                    },
                                    typeArguments: [
                                      {
                                        type: "reference",
                                        target: 5437,
                                        name: "T",
                                        package: "@hyper-fetch/react",
                                        refersToTypeParameter: true,
                                      },
                                    ],
                                    name: "ExtractResponseType",
                                    package: "@hyper-fetch/core",
                                  },
                                  {
                                    type: "reference",
                                    target: {
                                      sourceFileName: "../packages/core/src/types/request.types.ts",
                                      qualifiedName: "ExtractErrorType",
                                    },
                                    typeArguments: [
                                      {
                                        type: "reference",
                                        target: 5437,
                                        name: "T",
                                        package: "@hyper-fetch/react",
                                        refersToTypeParameter: true,
                                      },
                                    ],
                                    name: "ExtractErrorType",
                                    package: "@hyper-fetch/core",
                                  },
                                ],
                                name: "CacheValueType",
                                package: "@hyper-fetch/core",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5422,
                  name: "setRenderKey",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                      line: 33,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L33",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5423,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                          line: 33,
                          character: 18,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L33",
                        },
                      ],
                      signatures: [
                        {
                          id: 5424,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          parameters: [
                            {
                              id: 5425,
                              name: "renderKey",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "typeOperator",
                                operator: "keyof",
                                target: {
                                  type: "reference",
                                  target: 5438,
                                  typeArguments: [
                                    {
                                      type: "reference",
                                      target: 5437,
                                      name: "T",
                                      package: "@hyper-fetch/react",
                                      refersToTypeParameter: true,
                                    },
                                  ],
                                  name: "UseTrackedStateType",
                                  package: "@hyper-fetch/react",
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [5433, 5430, 5426, 5422],
                },
              ],
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 32,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L32",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: 5438,
      name: "UseTrackedStateType",
      variant: "declaration",
      kind: 2_097_152,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
          line: 40,
          character: 12,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L40",
        },
      ],
      typeParameters: [
        {
          id: 5449,
          name: "T",
          variant: "typeParam",
          kind: 131_072,
          flags: {},
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
          default: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/request/request.types.ts",
              qualifiedName: "RequestInstance",
            },
            name: "RequestInstance",
            package: "@hyper-fetch/core",
          },
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5439,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5440,
              name: "data",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request response data",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 44,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L44",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: null,
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractResponseType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5449,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractResponseType",
                    package: "@hyper-fetch/core",
                  },
                ],
              },
            },
            {
              id: 5441,
              name: "error",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request response error",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 48,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L48",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: null,
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractErrorType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5449,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractErrorType",
                    package: "@hyper-fetch/core",
                  },
                ],
              },
            },
            {
              id: 5444,
              name: "extra",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request additional response data",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 60,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L60",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: null,
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/adapter.types.ts",
                      qualifiedName: "ExtractAdapterExtraType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractAdapterType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5449,
                            name: "T",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractAdapterType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "ExtractAdapterExtraType",
                    package: "@hyper-fetch/core",
                  },
                ],
              },
            },
            {
              id: 5442,
              name: "loading",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request loading state",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 52,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L52",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
            {
              id: 5448,
              name: "requestTimestamp",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request response timestamp",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 76,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L76",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: null,
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Date",
                    },
                    name: "Date",
                    package: "typescript",
                  },
                ],
              },
            },
            {
              id: 5447,
              name: "responseTimestamp",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request response timestamp",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 72,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L72",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: null,
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Date",
                    },
                    name: "Date",
                    package: "typescript",
                  },
                ],
              },
            },
            {
              id: 5446,
              name: "retries",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request attempts",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 68,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L68",
                },
              ],
              type: {
                type: "intrinsic",
                name: "number",
              },
            },
            {
              id: 5443,
              name: "status",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request status",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 56,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L56",
                },
              ],
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: null,
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/adapter.types.ts",
                      qualifiedName: "ExtractAdapterStatusType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractAdapterType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5449,
                            name: "T",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractAdapterType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "ExtractAdapterStatusType",
                    package: "@hyper-fetch/core",
                  },
                  {
                    type: "literal",
                    value: null,
                  },
                ],
              },
            },
            {
              id: 5445,
              name: "success",
              variant: "declaration",
              kind: 1024,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Information whether request succeeded",
                  },
                ],
              },
              sources: [
                {
                  fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
                  line: 64,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L64",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5440, 5441, 5444, 5442, 5448, 5447, 5446, 5443, 5445],
            },
          ],
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.types.ts",
              line: 40,
              character: 79,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts#L40",
            },
          ],
        },
      },
    },
    {
      id: 5620,
      name: "initialSocketState",
      variant: "declaration",
      kind: 32,
      flags: {
        isConst: true,
      },
      sources: [
        {
          fileName: "helpers/use-socket-state/use-socket-state.constants.ts",
          line: 5,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.constants.ts#L5",
        },
      ],
      type: {
        type: "reference",
        target: 5608,
        typeArguments: [
          {
            type: "reference",
            target: {
              sourceFileName: "../packages/sockets/src/socket/socket.types.ts",
              qualifiedName: "SocketInstance",
            },
            name: "SocketInstance",
            package: "@hyper-fetch/sockets",
          },
        ],
        name: "UseSocketStateType",
        package: "@hyper-fetch/react",
      },
      defaultValue: "...",
    },
    {
      id: 5403,
      name: "initialState",
      variant: "declaration",
      kind: 32,
      flags: {
        isConst: true,
      },
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.constants.ts",
          line: 3,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.constants.ts#L3",
        },
      ],
      type: {
        type: "reference",
        target: 5438,
        name: "UseTrackedStateType",
        package: "@hyper-fetch/react",
      },
      defaultValue: "...",
    },
    {
      id: 5051,
      name: "useCacheDefaultOptions",
      variant: "declaration",
      kind: 32,
      flags: {
        isConst: true,
      },
      sources: [
        {
          fileName: "hooks/use-cache/use-cache.constants.ts",
          line: 1,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.constants.ts#L1",
        },
      ],
      type: {
        type: "reflection",
        declaration: {
          id: 5052,
          name: "__type",
          variant: "declaration",
          kind: 65_536,
          flags: {},
          children: [
            {
              id: 5055,
              name: "deepCompare",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "hooks/use-cache/use-cache.constants.ts",
                  line: 4,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.constants.ts#L4",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
              defaultValue: "true",
            },
            {
              id: 5053,
              name: "dependencyTracking",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "hooks/use-cache/use-cache.constants.ts",
                  line: 2,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.constants.ts#L2",
                },
              ],
              type: {
                type: "intrinsic",
                name: "boolean",
              },
              defaultValue: "true",
            },
            {
              id: 5054,
              name: "initialResponse",
              variant: "declaration",
              kind: 1024,
              flags: {},
              sources: [
                {
                  fileName: "hooks/use-cache/use-cache.constants.ts",
                  line: 3,
                  character: 2,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.constants.ts#L3",
                },
              ],
              type: {
                type: "literal",
                value: null,
              },
              defaultValue: "null",
            },
          ],
          groups: [
            {
              title: "Properties",
              children: [5055, 5053, 5054],
            },
          ],
          sources: [
            {
              fileName: "hooks/use-cache/use-cache.constants.ts",
              line: 1,
              character: 38,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.constants.ts#L1",
            },
          ],
        },
      },
      defaultValue: "...",
    },
    {
      id: 4928,
      name: "useFetchDefaultOptions",
      variant: "declaration",
      kind: 32,
      flags: {
        isConst: true,
      },
      sources: [
        {
          fileName: "hooks/use-fetch/use-fetch.constants.ts",
          line: 9,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.constants.ts#L9",
        },
      ],
      type: {
        type: "reference",
        target: {
          sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.constants.ts",
          qualifiedName: "DefaultOptionsType",
        },
        name: "DefaultOptionsType",
        package: "@hyper-fetch/react",
      },
      defaultValue: "...",
    },
    {
      id: 5045,
      name: "useQueueDefaultOptions",
      variant: "declaration",
      kind: 32,
      flags: {
        isConst: true,
      },
      sources: [
        {
          fileName: "hooks/use-queue/use-queue.constants.ts",
          line: 4,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.constants.ts#L4",
        },
      ],
      type: {
        type: "reference",
        target: {
          sourceFileName: "../packages/core/src/types/helpers.types.ts",
          qualifiedName: "RequiredKeys",
        },
        typeArguments: [
          {
            type: "reference",
            target: 5008,
            name: "UseQueueOptionsType",
            package: "@hyper-fetch/react",
          },
        ],
        name: "RequiredKeys",
        package: "@hyper-fetch/core",
      },
      defaultValue: "...",
    },
    {
      id: 5002,
      name: "useSubmitDefaultOptions",
      variant: "declaration",
      kind: 32,
      flags: {
        isConst: true,
      },
      sources: [
        {
          fileName: "hooks/use-submit/use-submit.constants.ts",
          line: 9,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.constants.ts#L9",
        },
      ],
      type: {
        type: "reference",
        target: {
          sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.constants.ts",
          qualifiedName: "DefaultOptionsType",
        },
        name: "DefaultOptionsType",
        package: "@hyper-fetch/react",
      },
      defaultValue: "...",
    },
    {
      id: 5621,
      name: "Provider",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "provider/provider.tsx",
          line: 15,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.tsx#L15",
        },
      ],
      signatures: [
        {
          id: 5622,
          name: "Provider",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Provider with configuration for hooks",
              },
            ],
            blockTags: [
              {
                tag: "@returns",
                content: [],
              },
            ],
          },
          sources: [
            {
              fileName: "provider/provider.tsx",
              line: 15,
              character: 24,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.tsx#L15",
            },
          ],
          parameters: [
            {
              id: 5623,
              name: "options",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5634,
                name: "ProviderProps",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "reference",
            target: {
              sourceFileName: "../node_modules/.pnpm/@types+react@19.2.14/node_modules/@types/react/jsx-runtime.d.ts",
              qualifiedName: "JSX.Element",
            },
            name: "Element",
            package: "@types/react",
            qualifiedName: "JSX.Element",
          },
        },
      ],
    },
    {
      id: 5665,
      name: "createTrackedProxy",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "utils/tracked-proxy.utils.ts",
          line: 6,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/tracked-proxy.utils.ts#L6",
        },
      ],
      signatures: [
        {
          id: 5666,
          name: "createTrackedProxy",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Wraps a plain object in a Proxy that calls ",
              },
              {
                kind: "code",
                text: "`setRenderKey`",
              },
              {
                kind: "text",
                text: " when tracked properties are accessed.\nUnlike getter-based tracking, Proxy-wrapped objects display their actual values in console.log,\nmaking debugging significantly easier while preserving field-level dependency tracking.",
              },
            ],
          },
          sources: [
            {
              fileName: "utils/tracked-proxy.utils.ts",
              line: 6,
              character: 34,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/tracked-proxy.utils.ts#L6",
            },
          ],
          typeParameter: [
            {
              id: 5667,
              name: "T",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Record",
                },
                typeArguments: [
                  {
                    type: "intrinsic",
                    name: "string",
                  },
                  {
                    type: "intrinsic",
                    name: "unknown",
                  },
                ],
                name: "Record",
                package: "typescript",
              },
            },
            {
              id: 5668,
              name: "K",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "intrinsic",
                name: "string",
              },
            },
          ],
          parameters: [
            {
              id: 5669,
              name: "target",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5667,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5670,
              name: "trackedKeys",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "typeOperator",
                operator: "readonly",
                target: {
                  type: "array",
                  elementType: {
                    type: "reference",
                    target: 5668,
                    name: "K",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                },
              },
            },
            {
              id: 5671,
              name: "setRenderKey",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reflection",
                declaration: {
                  id: 5672,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  sources: [
                    {
                      fileName: "utils/tracked-proxy.utils.ts",
                      line: 9,
                      character: 16,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/tracked-proxy.utils.ts#L9",
                    },
                  ],
                  signatures: [
                    {
                      id: 5673,
                      name: "__type",
                      variant: "signature",
                      kind: 4096,
                      flags: {},
                      sources: [
                        {
                          fileName: "utils/tracked-proxy.utils.ts",
                          line: 9,
                          character: 16,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/tracked-proxy.utils.ts#L9",
                        },
                      ],
                      parameters: [
                        {
                          id: 5674,
                          name: "key",
                          variant: "param",
                          kind: 32_768,
                          flags: {},
                          type: {
                            type: "reference",
                            target: 5668,
                            name: "K",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "void",
                      },
                    },
                  ],
                },
              },
            },
          ],
          type: {
            type: "reference",
            target: 5667,
            name: "T",
            package: "@hyper-fetch/react",
            refersToTypeParameter: true,
          },
        },
      ],
    },
    {
      id: 5652,
      name: "getBounceData",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "utils/bounce.utils.ts",
          line: 1,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L1",
        },
      ],
      signatures: [
        {
          id: 5653,
          name: "getBounceData",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "utils/bounce.utils.ts",
              line: 1,
              character: 29,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L1",
            },
          ],
          parameters: [
            {
              id: 5654,
              name: "bounceData",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reflection",
                declaration: {
                  id: 5655,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  children: [
                    {
                      id: 5659,
                      name: "active",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      sources: [
                        {
                          fileName: "utils/bounce.utils.ts",
                          line: 3,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L3",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "boolean",
                      },
                    },
                    {
                      id: 5656,
                      name: "reset",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      sources: [
                        {
                          fileName: "utils/bounce.utils.ts",
                          line: 2,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L2",
                        },
                      ],
                      type: {
                        type: "reflection",
                        declaration: {
                          id: 5657,
                          name: "__type",
                          variant: "declaration",
                          kind: 65_536,
                          flags: {},
                          sources: [
                            {
                              fileName: "utils/bounce.utils.ts",
                              line: 2,
                              character: 9,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L2",
                            },
                          ],
                          signatures: [
                            {
                              id: 5658,
                              name: "__type",
                              variant: "signature",
                              kind: 4096,
                              flags: {},
                              sources: [
                                {
                                  fileName: "utils/bounce.utils.ts",
                                  line: 2,
                                  character: 9,
                                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L2",
                                },
                              ],
                              type: {
                                type: "intrinsic",
                                name: "void",
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  groups: [
                    {
                      title: "Properties",
                      children: [5659, 5656],
                    },
                  ],
                  sources: [
                    {
                      fileName: "utils/bounce.utils.ts",
                      line: 1,
                      character: 42,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L1",
                    },
                  ],
                },
              },
            },
          ],
          type: {
            type: "reflection",
            declaration: {
              id: 5660,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5664,
                  name: "active",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "utils/bounce.utils.ts",
                      line: 4,
                      character: 25,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L4",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                },
                {
                  id: 5661,
                  name: "reset",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "utils/bounce.utils.ts",
                      line: 4,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L4",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5662,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "utils/bounce.utils.ts",
                          line: 4,
                          character: 13,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L4",
                        },
                      ],
                      signatures: [
                        {
                          id: 5663,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "utils/bounce.utils.ts",
                              line: 4,
                              character: 13,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L4",
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [5664, 5661],
                },
              ],
              sources: [
                {
                  fileName: "utils/bounce.utils.ts",
                  line: 4,
                  character: 4,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/bounce.utils.ts#L4",
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: 5497,
      name: "getDetailsState",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
          line: 51,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L51",
        },
      ],
      signatures: [
        {
          id: 5498,
          name: "getDetailsState",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
              line: 51,
              character: 31,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L51",
            },
          ],
          parameters: [
            {
              id: 5499,
              name: "state",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: 5438,
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/request/request.types.ts",
                      qualifiedName: "RequestInstance",
                    },
                    name: "RequestInstance",
                    package: "@hyper-fetch/core",
                  },
                ],
                name: "UseTrackedStateType",
                package: "@hyper-fetch/react",
              },
            },
            {
              id: 5500,
              name: "details",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Partial",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/managers/request/request.manager.types.ts",
                      qualifiedName: "ResponseDetailsType",
                    },
                    name: "ResponseDetailsType",
                    package: "@hyper-fetch/core",
                  },
                ],
                name: "Partial",
                package: "typescript",
              },
            },
          ],
          type: {
            type: "reference",
            target: {
              sourceFileName: "../packages/core/src/managers/request/request.manager.types.ts",
              qualifiedName: "ResponseDetailsType",
            },
            name: "ResponseDetailsType",
            package: "@hyper-fetch/core",
          },
        },
      ],
    },
    {
      id: 5524,
      name: "getInitialState",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
          line: 132,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L132",
        },
      ],
      signatures: [
        {
          id: 5525,
          name: "getInitialState",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
              line: 132,
              character: 31,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L132",
            },
          ],
          typeParameter: [
            {
              id: 5526,
              name: "T",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/request/request.types.ts",
                  qualifiedName: "RequestInstance",
                },
                name: "RequestInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 5527,
              name: "__namedParameters",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reflection",
                declaration: {
                  id: 5528,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  children: [
                    {
                      id: 5532,
                      name: "disabled",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 142,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L142",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "boolean",
                      },
                    },
                    {
                      id: 5530,
                      name: "dispatcher",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 140,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L140",
                        },
                      ],
                      type: {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/dispatcher/dispatcher.ts",
                          qualifiedName: "Dispatcher",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractAdapterType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5526,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractAdapterType",
                            package: "@hyper-fetch/core",
                          },
                        ],
                        name: "Dispatcher",
                        package: "@hyper-fetch/core",
                      },
                    },
                    {
                      id: 5529,
                      name: "initialResponse",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 139,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L139",
                        },
                      ],
                      type: {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/helpers.types.ts",
                          qualifiedName: "NullableType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: {
                              sourceFileName:
                                "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                              qualifiedName: "Partial",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: {
                                  sourceFileName: "../packages/core/src/types/request.types.ts",
                                  qualifiedName: "ExtractAdapterResolvedType",
                                },
                                typeArguments: [
                                  {
                                    type: "reference",
                                    target: 5526,
                                    name: "T",
                                    package: "@hyper-fetch/react",
                                    refersToTypeParameter: true,
                                  },
                                ],
                                name: "ExtractAdapterResolvedType",
                                package: "@hyper-fetch/core",
                              },
                            ],
                            name: "Partial",
                            package: "typescript",
                          },
                        ],
                        name: "NullableType",
                        package: "@hyper-fetch/core",
                      },
                    },
                    {
                      id: 5531,
                      name: "request",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 141,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L141",
                        },
                      ],
                      type: {
                        type: "reference",
                        target: 5526,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    },
                    {
                      id: 5533,
                      name: "revalidate",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 143,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L143",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "boolean",
                      },
                    },
                  ],
                  groups: [
                    {
                      title: "Properties",
                      children: [5532, 5530, 5529, 5531, 5533],
                    },
                  ],
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                      line: 138,
                      character: 3,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L138",
                    },
                  ],
                },
              },
            },
          ],
          type: {
            type: "reference",
            target: 5438,
            typeArguments: [
              {
                type: "reference",
                target: 5526,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseTrackedStateType",
            package: "@hyper-fetch/react",
          },
        },
      ],
    },
    {
      id: 5514,
      name: "getIsInitiallyLoading",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
          line: 109,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L109",
        },
      ],
      signatures: [
        {
          id: 5515,
          name: "getIsInitiallyLoading",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
              line: 109,
              character: 37,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L109",
            },
          ],
          typeParameter: [
            {
              id: 5516,
              name: "T",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/request/request.types.ts",
                  qualifiedName: "RequestInstance",
                },
                name: "RequestInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 5517,
              name: "__namedParameters",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reflection",
                declaration: {
                  id: 5518,
                  name: "__type",
                  variant: "declaration",
                  kind: 65_536,
                  flags: {},
                  children: [
                    {
                      id: 5523,
                      name: "disabled",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 120,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L120",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "boolean",
                      },
                    },
                    {
                      id: 5520,
                      name: "dispatcher",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 117,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L117",
                        },
                      ],
                      type: {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/dispatcher/dispatcher.ts",
                          qualifiedName: "Dispatcher",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: {
                              sourceFileName: "../packages/core/src/types/request.types.ts",
                              qualifiedName: "ExtractAdapterType",
                            },
                            typeArguments: [
                              {
                                type: "reference",
                                target: 5516,
                                name: "T",
                                package: "@hyper-fetch/react",
                                refersToTypeParameter: true,
                              },
                            ],
                            name: "ExtractAdapterType",
                            package: "@hyper-fetch/core",
                          },
                        ],
                        name: "Dispatcher",
                        package: "@hyper-fetch/core",
                      },
                    },
                    {
                      id: 5521,
                      name: "hasState",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 118,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L118",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "boolean",
                      },
                    },
                    {
                      id: 5519,
                      name: "queryKey",
                      variant: "declaration",
                      kind: 1024,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 116,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L116",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "string",
                      },
                    },
                    {
                      id: 5522,
                      name: "revalidate",
                      variant: "declaration",
                      kind: 1024,
                      flags: {
                        isOptional: true,
                      },
                      sources: [
                        {
                          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                          line: 119,
                          character: 2,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L119",
                        },
                      ],
                      type: {
                        type: "intrinsic",
                        name: "boolean",
                      },
                    },
                  ],
                  groups: [
                    {
                      title: "Properties",
                      children: [5523, 5520, 5521, 5519, 5522],
                    },
                  ],
                  sources: [
                    {
                      fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
                      line: 115,
                      character: 3,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L115",
                    },
                  ],
                },
              },
            },
          ],
          type: {
            type: "intrinsic",
            name: "boolean",
          },
        },
      ],
    },
    {
      id: 4924,
      name: "getRefreshTime",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-fetch/use-fetch.utils.ts",
          line: 1,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.utils.ts#L1",
        },
      ],
      signatures: [
        {
          id: 4925,
          name: "getRefreshTime",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "hooks/use-fetch/use-fetch.utils.ts",
              line: 1,
              character: 30,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.utils.ts#L1",
            },
          ],
          parameters: [
            {
              id: 4926,
              name: "refreshTime",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "intrinsic",
                name: "number",
              },
            },
            {
              id: 4927,
              name: "dataTimestamp",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Date",
                },
                name: "Date",
                package: "typescript",
              },
            },
          ],
          type: {
            type: "intrinsic",
            name: "number",
          },
        },
      ],
    },
    {
      id: 5492,
      name: "getShouldClearState",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
          line: 37,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L37",
        },
      ],
      signatures: [
        {
          id: 5493,
          name: "getShouldClearState",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Determines whether state should be cleared when the cache key changes.\n\n- ",
              },
              {
                kind: "code",
                text: '`"clean"`',
              },
              {
                kind: "text",
                text: " — always clear\n- ",
              },
              {
                kind: "code",
                text: '`"preserve"`',
              },
              {
                kind: "text",
                text: " — never clear\n- ",
              },
              {
                kind: "code",
                text: '`"auto"`',
              },
              {
                kind: "text",
                text: " — clear when the resource identity changed (URL params), preserve when only query params changed",
              },
            ],
          },
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
              line: 37,
              character: 35,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L37",
            },
          ],
          parameters: [
            {
              id: 5494,
              name: "mode",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "union",
                types: [
                  {
                    type: "literal",
                    value: "auto",
                  },
                  {
                    type: "literal",
                    value: "preserve",
                  },
                  {
                    type: "literal",
                    value: "clean",
                  },
                ],
              },
            },
            {
              id: 5495,
              name: "oldCacheKey",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "intrinsic",
                name: "string",
              },
            },
            {
              id: 5496,
              name: "newCacheKey",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "intrinsic",
                name: "string",
              },
            },
          ],
          type: {
            type: "intrinsic",
            name: "boolean",
          },
        },
      ],
    },
    {
      id: 5511,
      name: "getTimestamp",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
          line: 105,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L105",
        },
      ],
      signatures: [
        {
          id: 5512,
          name: "getTimestamp",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
              line: 105,
              character: 28,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L105",
            },
          ],
          parameters: [
            {
              id: 5513,
              name: "timestamp",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/types/helpers.types.ts",
                  qualifiedName: "NullableType",
                },
                typeArguments: [
                  {
                    type: "union",
                    types: [
                      {
                        type: "intrinsic",
                        name: "number",
                      },
                      {
                        type: "reference",
                        target: {
                          sourceFileName:
                            "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                          qualifiedName: "Date",
                        },
                        name: "Date",
                        package: "typescript",
                      },
                    ],
                  },
                ],
                name: "NullableType",
                package: "@hyper-fetch/core",
              },
            },
          ],
          type: {
            type: "union",
            types: [
              {
                type: "literal",
                value: null,
              },
              {
                type: "reference",
                target: {
                  sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                  qualifiedName: "Date",
                },
                name: "Date",
                package: "typescript",
              },
            ],
          },
        },
      ],
    },
    {
      id: 5505,
      name: "getValidCacheData",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
          line: 73,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L73",
        },
      ],
      signatures: [
        {
          id: 5506,
          name: "getValidCacheData",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
              line: 73,
              character: 33,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L73",
            },
          ],
          typeParameter: [
            {
              id: 5507,
              name: "T",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/request/request.types.ts",
                  qualifiedName: "RequestInstance",
                },
                name: "RequestInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 5508,
              name: "request",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5507,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5509,
              name: "initialResponse",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/types/helpers.types.ts",
                  qualifiedName: "NullableType",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                      qualifiedName: "Partial",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractAdapterResolvedType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5507,
                            name: "T",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractAdapterResolvedType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "Partial",
                    package: "typescript",
                  },
                ],
                name: "NullableType",
                package: "@hyper-fetch/core",
              },
            },
            {
              id: 5510,
              name: "cacheData",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/types/helpers.types.ts",
                  qualifiedName: "NullableType",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/cache/cache.types.ts",
                      qualifiedName: "CacheValueType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractResponseType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5507,
                            name: "T",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractResponseType",
                        package: "@hyper-fetch/core",
                      },
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractErrorType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5507,
                            name: "T",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractErrorType",
                        package: "@hyper-fetch/core",
                      },
                      {
                        type: "reference",
                        target: {
                          sourceFileName: "../packages/core/src/types/request.types.ts",
                          qualifiedName: "ExtractAdapterType",
                        },
                        typeArguments: [
                          {
                            type: "reference",
                            target: 5507,
                            name: "T",
                            package: "@hyper-fetch/react",
                            refersToTypeParameter: true,
                          },
                        ],
                        name: "ExtractAdapterType",
                        package: "@hyper-fetch/core",
                      },
                    ],
                    name: "CacheValueType",
                    package: "@hyper-fetch/core",
                  },
                ],
                name: "NullableType",
                package: "@hyper-fetch/core",
              },
            },
          ],
          type: {
            type: "union",
            types: [
              {
                type: "literal",
                value: null,
              },
              {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/cache/cache.types.ts",
                  qualifiedName: "CacheValueType",
                },
                typeArguments: [
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractResponseType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5507,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractResponseType",
                    package: "@hyper-fetch/core",
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractErrorType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5507,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractErrorType",
                    package: "@hyper-fetch/core",
                  },
                  {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/core/src/types/request.types.ts",
                      qualifiedName: "ExtractAdapterType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5507,
                        name: "T",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "ExtractAdapterType",
                    package: "@hyper-fetch/core",
                  },
                ],
                name: "CacheValueType",
                package: "@hyper-fetch/core",
              },
            ],
          },
        },
      ],
    },
    {
      id: 5645,
      name: "isEmpty",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "utils/deep-equal.utils.ts",
          line: 6,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/deep-equal.utils.ts#L6",
        },
      ],
      signatures: [
        {
          id: 5646,
          name: "isEmpty",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Check if value is empty",
              },
            ],
            blockTags: [
              {
                tag: "@returns",
                content: [
                  {
                    kind: "text",
                    text: "true when value is empty",
                  },
                ],
              },
            ],
          },
          sources: [
            {
              fileName: "utils/deep-equal.utils.ts",
              line: 6,
              character: 23,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/deep-equal.utils.ts#L6",
            },
          ],
          parameters: [
            {
              id: 5647,
              name: "value",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "any object or primitive",
                  },
                ],
              },
              type: {
                type: "intrinsic",
                name: "unknown",
              },
            },
          ],
          type: {
            type: "intrinsic",
            name: "boolean",
          },
        },
      ],
    },
    {
      id: 5648,
      name: "isEqual",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "utils/deep-equal.utils.ts",
          line: 23,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/deep-equal.utils.ts#L23",
        },
      ],
      signatures: [
        {
          id: 5649,
          name: "isEqual",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Allow to deep compare any passed values",
              },
            ],
            blockTags: [
              {
                tag: "@returns",
                content: [
                  {
                    kind: "text",
                    text: "true when elements are equal",
                  },
                ],
              },
            ],
          },
          sources: [
            {
              fileName: "utils/deep-equal.utils.ts",
              line: 23,
              character: 23,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/utils/deep-equal.utils.ts#L23",
            },
          ],
          parameters: [
            {
              id: 5650,
              name: "firstValue",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "unknown",
                  },
                ],
              },
              type: {
                type: "intrinsic",
                name: "unknown",
              },
            },
            {
              id: 5651,
              name: "secondValue",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "unknown",
                  },
                ],
              },
              type: {
                type: "intrinsic",
                name: "unknown",
              },
            },
          ],
          type: {
            type: "intrinsic",
            name: "boolean",
          },
        },
      ],
    },
    {
      id: 5501,
      name: "isStaleCacheData",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
          line: 68,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L68",
        },
      ],
      signatures: [
        {
          id: 5502,
          name: "isStaleCacheData",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-tracked-state/use-tracked-state.utils.ts",
              line: 68,
              character: 32,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts#L68",
            },
          ],
          parameters: [
            {
              id: 5503,
              name: "staleTime",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "intrinsic",
                name: "number",
              },
            },
            {
              id: 5504,
              name: "staleTimestamp",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/types/helpers.types.ts",
                  qualifiedName: "NullableType",
                },
                typeArguments: [
                  {
                    type: "union",
                    types: [
                      {
                        type: "intrinsic",
                        name: "number",
                      },
                      {
                        type: "reference",
                        target: {
                          sourceFileName:
                            "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                          qualifiedName: "Date",
                        },
                        name: "Date",
                        package: "typescript",
                      },
                    ],
                  },
                ],
                name: "NullableType",
                package: "@hyper-fetch/core",
              },
            },
          ],
          type: {
            type: "intrinsic",
            name: "boolean",
          },
        },
      ],
    },
    {
      id: 5268,
      name: "useAppManager",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-app-manager/use-app-manager.hooks.ts",
          line: 7,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.hooks.ts#L7",
        },
      ],
      signatures: [
        {
          id: 5269,
          name: "useAppManager",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Track the application's online/offline and focus/blur state through the client's AppManager.",
              },
            ],
          },
          sources: [
            {
              fileName: "hooks/use-app-manager/use-app-manager.hooks.ts",
              line: 7,
              character: 29,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-app-manager/use-app-manager.hooks.ts#L7",
            },
          ],
          typeParameter: [
            {
              id: 5270,
              name: "Client",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/client/client.types.ts",
                  qualifiedName: "ClientInstance",
                },
                name: "ClientInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 5271,
              name: "client",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5270,
                name: "Client",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
          ],
          type: {
            type: "reference",
            target: 5272,
            name: "UseAppManagerReturnType",
            package: "@hyper-fetch/react",
          },
        },
      ],
    },
    {
      id: 5046,
      name: "useCache",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-cache/use-cache.hooks.ts",
          line: 12,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.hooks.ts#L12",
        },
      ],
      signatures: [
        {
          id: 5047,
          name: "useCache",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Subscribe to cache updates for a given request without triggering network activity.",
              },
            ],
          },
          sources: [
            {
              fileName: "hooks/use-cache/use-cache.hooks.ts",
              line: 12,
              character: 24,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-cache/use-cache.hooks.ts#L12",
            },
          ],
          typeParameter: [
            {
              id: 5048,
              name: "T",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/request/request.types.ts",
                  qualifiedName: "RequestInstance",
                },
                name: "RequestInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 5049,
              name: "request",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5048,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5050,
              name: "options",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: 5056,
                typeArguments: [
                  {
                    type: "reference",
                    target: 5048,
                    name: "T",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                ],
                name: "UseCacheOptionsType",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "reference",
            target: 5062,
            typeArguments: [
              {
                type: "reference",
                target: 5048,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseCacheReturnType",
            package: "@hyper-fetch/react",
          },
        },
      ],
    },
    {
      id: 5184,
      name: "useEmitter",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-emitter/use-emitter.hooks.ts",
          line: 10,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L10",
        },
      ],
      signatures: [
        {
          id: 5185,
          name: "useEmitter",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Send messages through a socket emitter with tracked connection state and lifecycle callbacks.",
              },
            ],
          },
          sources: [
            {
              fileName: "hooks/use-emitter/use-emitter.hooks.ts",
              line: 10,
              character: 26,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L10",
            },
          ],
          typeParameter: [
            {
              id: 5186,
              name: "EmitterType",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/sockets/src/emitter/emitter.types.ts",
                  qualifiedName: "EmitterInstance",
                },
                name: "EmitterInstance",
                package: "@hyper-fetch/sockets",
              },
            },
          ],
          parameters: [
            {
              id: 5187,
              name: "emitter",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5186,
                name: "EmitterType",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5188,
              name: "options",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: 5265,
                name: "UseEmitterOptionsType",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "reflection",
            declaration: {
              id: 5189,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5260,
                  name: "clearState",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 107,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5261,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 107,
                          character: 16,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                        },
                      ],
                      signatures: [
                        {
                          id: 5262,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 107,
                              character: 16,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5263,
                  name: "connected",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                      line: 71,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L71",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                  defaultValue: "state.connected",
                },
                {
                  id: 5264,
                  name: "connecting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                      line: 72,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L72",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                  defaultValue: "state.connecting",
                },
                {
                  id: 5201,
                  name: "emit",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                      line: 77,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L77",
                    },
                  ],
                  type: {
                    type: "reference",
                    target: {
                      sourceFileName: "../packages/sockets/src/emitter/emitter.types.ts",
                      qualifiedName: "EmitType",
                    },
                    typeArguments: [
                      {
                        type: "reference",
                        target: 5186,
                        name: "EmitterType",
                        package: "@hyper-fetch/react",
                        refersToTypeParameter: true,
                      },
                    ],
                    name: "EmitType",
                    package: "@hyper-fetch/sockets",
                  },
                },
                {
                  id: 5202,
                  name: "onConnected",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 120,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5203,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 120,
                          character: 17,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                        },
                      ],
                      signatures: [
                        {
                          id: 5204,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 120,
                              character: 17,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                            },
                          ],
                          parameters: [
                            {
                              id: 5205,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                  qualifiedName: "VoidFunction",
                                },
                                name: "VoidFunction",
                                package: "typescript",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5218,
                  name: "onConnecting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 129,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5219,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 129,
                          character: 18,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                        },
                      ],
                      signatures: [
                        {
                          id: 5220,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 129,
                              character: 18,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                            },
                          ],
                          parameters: [
                            {
                              id: 5221,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                  qualifiedName: "VoidFunction",
                                },
                                name: "VoidFunction",
                                package: "typescript",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5206,
                  name: "onDisconnected",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 123,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5207,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 123,
                          character: 20,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                        },
                      ],
                      signatures: [
                        {
                          id: 5208,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 123,
                              character: 20,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                            },
                          ],
                          parameters: [
                            {
                              id: 5209,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                  qualifiedName: "VoidFunction",
                                },
                                name: "VoidFunction",
                                package: "typescript",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5190,
                  name: "onEmit",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                      line: 75,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L75",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5191,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                          line: 59,
                          character: 17,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L59",
                        },
                      ],
                      signatures: [
                        {
                          id: 5192,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                              line: 59,
                              character: 17,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L59",
                            },
                          ],
                          parameters: [
                            {
                              id: 5193,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reflection",
                                declaration: {
                                  id: 5194,
                                  name: "__type",
                                  variant: "declaration",
                                  kind: 65_536,
                                  flags: {},
                                  sources: [
                                    {
                                      fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                                      line: 59,
                                      character: 28,
                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L59",
                                    },
                                  ],
                                  signatures: [
                                    {
                                      id: 5195,
                                      name: "__type",
                                      variant: "signature",
                                      kind: 4096,
                                      flags: {},
                                      sources: [
                                        {
                                          fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                                          line: 59,
                                          character: 28,
                                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L59",
                                        },
                                      ],
                                      parameters: [
                                        {
                                          id: 5196,
                                          name: "emitter",
                                          variant: "param",
                                          kind: 32_768,
                                          flags: {},
                                          type: {
                                            type: "reference",
                                            target: 5186,
                                            name: "EmitterType",
                                            package: "@hyper-fetch/react",
                                            refersToTypeParameter: true,
                                          },
                                        },
                                      ],
                                      type: {
                                        type: "intrinsic",
                                        name: "void",
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5197,
                  name: "onEmitError",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                      line: 76,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L76",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5198,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                          line: 63,
                          character: 22,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L63",
                        },
                      ],
                      signatures: [
                        {
                          id: 5199,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                              line: 63,
                              character: 22,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L63",
                            },
                          ],
                          parameters: [
                            {
                              id: 5200,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName: "../packages/sockets/src/emitter/emitter.types.ts",
                                  qualifiedName: "EmitterCallbackErrorType",
                                },
                                name: "EmitterCallbackErrorType",
                                package: "@hyper-fetch/sockets",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5210,
                  name: "onError",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 126,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5211,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 126,
                          character: 13,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                        },
                      ],
                      signatures: [
                        {
                          id: 5212,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 126,
                              character: 13,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                            },
                          ],
                          typeParameter: [
                            {
                              id: 5213,
                              name: "ErrorType",
                              variant: "typeParam",
                              kind: 131_072,
                              flags: {},
                              default: {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                  qualifiedName: "Event",
                                },
                                name: "Event",
                                package: "typescript",
                              },
                            },
                          ],
                          parameters: [
                            {
                              id: 5214,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reflection",
                                declaration: {
                                  id: 5215,
                                  name: "__type",
                                  variant: "declaration",
                                  kind: 65_536,
                                  flags: {},
                                  sources: [
                                    {
                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                      line: 126,
                                      character: 43,
                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                                    },
                                  ],
                                  signatures: [
                                    {
                                      id: 5216,
                                      name: "__type",
                                      variant: "signature",
                                      kind: 4096,
                                      flags: {},
                                      sources: [
                                        {
                                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                          line: 126,
                                          character: 43,
                                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                                        },
                                      ],
                                      parameters: [
                                        {
                                          id: 5217,
                                          name: "event",
                                          variant: "param",
                                          kind: 32_768,
                                          flags: {},
                                          type: {
                                            type: "reference",
                                            target: 5126,
                                            name: "ErrorType",
                                            package: "@hyper-fetch/react",
                                            refersToTypeParameter: true,
                                          },
                                        },
                                      ],
                                      type: {
                                        type: "intrinsic",
                                        name: "void",
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5222,
                  name: "onReconnecting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 132,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5223,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 132,
                          character: 20,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                        },
                      ],
                      signatures: [
                        {
                          id: 5224,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 132,
                              character: 20,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                            },
                          ],
                          parameters: [
                            {
                              id: 5225,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reflection",
                                declaration: {
                                  id: 5226,
                                  name: "__type",
                                  variant: "declaration",
                                  kind: 65_536,
                                  flags: {},
                                  sources: [
                                    {
                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                      line: 132,
                                      character: 31,
                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                    },
                                  ],
                                  signatures: [
                                    {
                                      id: 5227,
                                      name: "__type",
                                      variant: "signature",
                                      kind: 4096,
                                      flags: {},
                                      sources: [
                                        {
                                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                          line: 132,
                                          character: 31,
                                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                        },
                                      ],
                                      parameters: [
                                        {
                                          id: 5228,
                                          name: "data",
                                          variant: "param",
                                          kind: 32_768,
                                          flags: {},
                                          type: {
                                            type: "reflection",
                                            declaration: {
                                              id: 5229,
                                              name: "__type",
                                              variant: "declaration",
                                              kind: 65_536,
                                              flags: {},
                                              children: [
                                                {
                                                  id: 5230,
                                                  name: "attempts",
                                                  variant: "declaration",
                                                  kind: 1024,
                                                  flags: {},
                                                  sources: [
                                                    {
                                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                      line: 132,
                                                      character: 40,
                                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                                    },
                                                  ],
                                                  type: {
                                                    type: "intrinsic",
                                                    name: "number",
                                                  },
                                                },
                                              ],
                                              groups: [
                                                {
                                                  title: "Properties",
                                                  children: [5230],
                                                },
                                              ],
                                              sources: [
                                                {
                                                  fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                  line: 132,
                                                  character: 38,
                                                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                                },
                                              ],
                                            },
                                          },
                                        },
                                      ],
                                      type: {
                                        type: "intrinsic",
                                        name: "void",
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5231,
                  name: "onReconnectingFailed",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 135,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5232,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 135,
                          character: 26,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                        },
                      ],
                      signatures: [
                        {
                          id: 5233,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 135,
                              character: 26,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                            },
                          ],
                          parameters: [
                            {
                              id: 5234,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reflection",
                                declaration: {
                                  id: 5235,
                                  name: "__type",
                                  variant: "declaration",
                                  kind: 65_536,
                                  flags: {},
                                  sources: [
                                    {
                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                      line: 135,
                                      character: 37,
                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                    },
                                  ],
                                  signatures: [
                                    {
                                      id: 5236,
                                      name: "__type",
                                      variant: "signature",
                                      kind: 4096,
                                      flags: {},
                                      sources: [
                                        {
                                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                          line: 135,
                                          character: 37,
                                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                        },
                                      ],
                                      parameters: [
                                        {
                                          id: 5237,
                                          name: "data",
                                          variant: "param",
                                          kind: 32_768,
                                          flags: {},
                                          type: {
                                            type: "reflection",
                                            declaration: {
                                              id: 5238,
                                              name: "__type",
                                              variant: "declaration",
                                              kind: 65_536,
                                              flags: {},
                                              children: [
                                                {
                                                  id: 5239,
                                                  name: "attempts",
                                                  variant: "declaration",
                                                  kind: 1024,
                                                  flags: {},
                                                  sources: [
                                                    {
                                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                      line: 135,
                                                      character: 46,
                                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                                    },
                                                  ],
                                                  type: {
                                                    type: "intrinsic",
                                                    name: "number",
                                                  },
                                                },
                                              ],
                                              groups: [
                                                {
                                                  title: "Properties",
                                                  children: [5239],
                                                },
                                              ],
                                              sources: [
                                                {
                                                  fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                  line: 135,
                                                  character: 44,
                                                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                                },
                                              ],
                                            },
                                          },
                                        },
                                      ],
                                      type: {
                                        type: "intrinsic",
                                        name: "void",
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5248,
                  name: "setConnected",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 95,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5249,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 95,
                          character: 18,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                        },
                      ],
                      signatures: [
                        {
                          id: 5250,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 95,
                              character: 18,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                            },
                          ],
                          parameters: [
                            {
                              id: 5251,
                              name: "connected",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "boolean",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5252,
                  name: "setConnecting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 99,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5253,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 99,
                          character: 19,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                        },
                      ],
                      signatures: [
                        {
                          id: 5254,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 99,
                              character: 19,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                            },
                          ],
                          parameters: [
                            {
                              id: 5255,
                              name: "connecting",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "boolean",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5240,
                  name: "setData",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 87,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5241,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 87,
                          character: 13,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                        },
                      ],
                      signatures: [
                        {
                          id: 5242,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 87,
                              character: 13,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                            },
                          ],
                          parameters: [
                            {
                              id: 5243,
                              name: "data",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "unknown",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5244,
                  name: "setExtra",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 91,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5245,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 91,
                          character: 14,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                        },
                      ],
                      signatures: [
                        {
                          id: 5246,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 91,
                              character: 14,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                            },
                          ],
                          parameters: [
                            {
                              id: 5247,
                              name: "extra",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "any",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5256,
                  name: "setTimestamp",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 103,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5257,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 103,
                          character: 18,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                        },
                      ],
                      signatures: [
                        {
                          id: 5258,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 103,
                              character: 18,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                            },
                          ],
                          parameters: [
                            {
                              id: 5259,
                              name: "timestamp",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "union",
                                types: [
                                  {
                                    type: "literal",
                                    value: null,
                                  },
                                  {
                                    type: "intrinsic",
                                    name: "number",
                                  },
                                ],
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [
                    5260, 5263, 5264, 5201, 5202, 5218, 5206, 5190, 5197, 5210, 5222, 5231, 5248, 5252, 5240, 5244,
                    5256,
                  ],
                },
              ],
              sources: [
                {
                  fileName: "hooks/use-emitter/use-emitter.hooks.ts",
                  line: 70,
                  character: 4,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-emitter/use-emitter.hooks.ts#L70",
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: 4881,
      name: "useFetch",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-fetch/use-fetch.hooks.ts",
          line: 28,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.hooks.ts#L28",
        },
      ],
      signatures: [
        {
          id: 4882,
          name: "useFetch",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "This hook aims to retrieve data from the server. It automatically fetches on mount and\nrefetches based on dependencies, with support for caching, polling, and suspense.",
              },
            ],
            blockTags: [
              {
                tag: "@returns",
                content: [],
              },
            ],
          },
          sources: [
            {
              fileName: "hooks/use-fetch/use-fetch.hooks.ts",
              line: 28,
              character: 24,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-fetch/use-fetch.hooks.ts#L28",
            },
          ],
          typeParameter: [
            {
              id: 4883,
              name: "R",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/request/request.types.ts",
                  qualifiedName: "RequestInstance",
                },
                name: "RequestInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 4884,
              name: "request",
              variant: "param",
              kind: 32_768,
              flags: {},
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Request instance",
                  },
                ],
              },
              type: {
                type: "reference",
                target: 4883,
                name: "R",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 4885,
              name: "options",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              comment: {
                summary: [
                  {
                    kind: "text",
                    text: "Hook options",
                  },
                ],
              },
              type: {
                type: "reference",
                target: 4886,
                typeArguments: [
                  {
                    type: "reference",
                    target: 4883,
                    name: "R",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                ],
                name: "UseFetchOptionsType",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "reference",
            target: 4912,
            typeArguments: [
              {
                type: "reference",
                target: 4883,
                name: "R",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseFetchReturnType",
            package: "@hyper-fetch/react",
          },
        },
      ],
    },
    {
      id: 5096,
      name: "useListener",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-listener/use-listener.hooks.ts",
          line: 10,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L10",
        },
      ],
      signatures: [
        {
          id: 5097,
          name: "useListener",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Subscribe to incoming socket messages on a given listener topic with tracked connection state and callbacks.",
              },
            ],
          },
          sources: [
            {
              fileName: "hooks/use-listener/use-listener.hooks.ts",
              line: 10,
              character: 27,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L10",
            },
          ],
          typeParameter: [
            {
              id: 5098,
              name: "ListenerType",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/sockets/src/listener/listener.types.ts",
                  qualifiedName: "ListenerInstance",
                },
                name: "ListenerInstance",
                package: "@hyper-fetch/sockets",
              },
            },
          ],
          parameters: [
            {
              id: 5099,
              name: "listener",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5098,
                name: "ListenerType",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5100,
              name: "options",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: 5181,
                name: "UseListenerOptionsType",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "reflection",
            declaration: {
              id: 5101,
              name: "__type",
              variant: "declaration",
              kind: 65_536,
              flags: {},
              children: [
                {
                  id: 5173,
                  name: "clearState",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 107,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5174,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 107,
                          character: 16,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                        },
                      ],
                      signatures: [
                        {
                          id: 5175,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 107,
                              character: 16,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5178,
                  name: "connected",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                      line: 73,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L73",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                  defaultValue: "state.connected",
                },
                {
                  id: 5179,
                  name: "connecting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                      line: 74,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L74",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "boolean",
                  },
                  defaultValue: "state.connecting",
                },
                {
                  id: 5176,
                  name: "data",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                      line: 71,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L71",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "unknown",
                  },
                  defaultValue: "state.data",
                },
                {
                  id: 5177,
                  name: "extra",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                      line: 72,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L72",
                    },
                  ],
                  type: {
                    type: "intrinsic",
                    name: "any",
                  },
                  defaultValue: "state.extra",
                },
                {
                  id: 5102,
                  name: "listen",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                      line: 79,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L79",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5103,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-listener/use-listener.hooks.ts",
                          line: 35,
                          character: 17,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L35",
                        },
                      ],
                      signatures: [
                        {
                          id: 5104,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "hooks/use-listener/use-listener.hooks.ts",
                              line: 35,
                              character: 17,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L35",
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  id: 5115,
                  name: "onConnected",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 120,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5116,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 120,
                          character: 17,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                        },
                      ],
                      signatures: [
                        {
                          id: 5117,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 120,
                              character: 17,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                            },
                          ],
                          parameters: [
                            {
                              id: 5118,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                  qualifiedName: "VoidFunction",
                                },
                                name: "VoidFunction",
                                package: "typescript",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5131,
                  name: "onConnecting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 129,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5132,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 129,
                          character: 18,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                        },
                      ],
                      signatures: [
                        {
                          id: 5133,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 129,
                              character: 18,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                            },
                          ],
                          parameters: [
                            {
                              id: 5134,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                  qualifiedName: "VoidFunction",
                                },
                                name: "VoidFunction",
                                package: "typescript",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5119,
                  name: "onDisconnected",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 123,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5120,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 123,
                          character: 20,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                        },
                      ],
                      signatures: [
                        {
                          id: 5121,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 123,
                              character: 20,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                            },
                          ],
                          parameters: [
                            {
                              id: 5122,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                  qualifiedName: "VoidFunction",
                                },
                                name: "VoidFunction",
                                package: "typescript",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5123,
                  name: "onError",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 126,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5124,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 126,
                          character: 13,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                        },
                      ],
                      signatures: [
                        {
                          id: 5125,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 126,
                              character: 13,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                            },
                          ],
                          typeParameter: [
                            {
                              id: 5126,
                              name: "ErrorType",
                              variant: "typeParam",
                              kind: 131_072,
                              flags: {},
                              default: {
                                type: "reference",
                                target: {
                                  sourceFileName:
                                    "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                  qualifiedName: "Event",
                                },
                                name: "Event",
                                package: "typescript",
                              },
                            },
                          ],
                          parameters: [
                            {
                              id: 5127,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reflection",
                                declaration: {
                                  id: 5128,
                                  name: "__type",
                                  variant: "declaration",
                                  kind: 65_536,
                                  flags: {},
                                  sources: [
                                    {
                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                      line: 126,
                                      character: 43,
                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                                    },
                                  ],
                                  signatures: [
                                    {
                                      id: 5129,
                                      name: "__type",
                                      variant: "signature",
                                      kind: 4096,
                                      flags: {},
                                      sources: [
                                        {
                                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                          line: 126,
                                          character: 43,
                                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                                        },
                                      ],
                                      parameters: [
                                        {
                                          id: 5130,
                                          name: "event",
                                          variant: "param",
                                          kind: 32_768,
                                          flags: {},
                                          type: {
                                            type: "reference",
                                            target: 5126,
                                            name: "ErrorType",
                                            package: "@hyper-fetch/react",
                                            refersToTypeParameter: true,
                                          },
                                        },
                                      ],
                                      type: {
                                        type: "intrinsic",
                                        name: "void",
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5105,
                  name: "onEvent",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                      line: 46,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L46",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5106,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "hooks/use-listener/use-listener.hooks.ts",
                          line: 46,
                          character: 13,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L46",
                        },
                      ],
                      signatures: [
                        {
                          id: 5107,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "hooks/use-listener/use-listener.hooks.ts",
                              line: 46,
                              character: 13,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L46",
                            },
                          ],
                          parameters: [
                            {
                              id: 5108,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reflection",
                                declaration: {
                                  id: 5109,
                                  name: "__type",
                                  variant: "declaration",
                                  kind: 65_536,
                                  flags: {},
                                  sources: [
                                    {
                                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                                      line: 24,
                                      character: 12,
                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L24",
                                    },
                                  ],
                                  signatures: [
                                    {
                                      id: 5110,
                                      name: "__type",
                                      variant: "signature",
                                      kind: 4096,
                                      flags: {},
                                      sources: [
                                        {
                                          fileName: "hooks/use-listener/use-listener.hooks.ts",
                                          line: 24,
                                          character: 12,
                                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L24",
                                        },
                                      ],
                                      parameters: [
                                        {
                                          id: 5111,
                                          name: "response",
                                          variant: "param",
                                          kind: 32_768,
                                          flags: {},
                                          type: {
                                            type: "reflection",
                                            declaration: {
                                              id: 5112,
                                              name: "__type",
                                              variant: "declaration",
                                              kind: 65_536,
                                              flags: {},
                                              children: [
                                                {
                                                  id: 5113,
                                                  name: "data",
                                                  variant: "declaration",
                                                  kind: 1024,
                                                  flags: {},
                                                  sources: [
                                                    {
                                                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                                                      line: 24,
                                                      character: 25,
                                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L24",
                                                    },
                                                  ],
                                                  type: {
                                                    type: "reference",
                                                    target: {
                                                      sourceFileName: "../packages/sockets/src/types/extract.types.ts",
                                                      qualifiedName: "ExtractListenerResponseType",
                                                    },
                                                    typeArguments: [
                                                      {
                                                        type: "reference",
                                                        target: 5098,
                                                        name: "ListenerType",
                                                        package: "@hyper-fetch/react",
                                                        refersToTypeParameter: true,
                                                      },
                                                    ],
                                                    name: "ExtractListenerResponseType",
                                                    package: "@hyper-fetch/sockets",
                                                  },
                                                },
                                                {
                                                  id: 5114,
                                                  name: "extra",
                                                  variant: "declaration",
                                                  kind: 1024,
                                                  flags: {},
                                                  sources: [
                                                    {
                                                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                                                      line: 24,
                                                      character: 74,
                                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L24",
                                                    },
                                                  ],
                                                  type: {
                                                    type: "reference",
                                                    target: {
                                                      sourceFileName:
                                                        "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es5.d.ts",
                                                      qualifiedName: "Record",
                                                    },
                                                    typeArguments: [
                                                      {
                                                        type: "intrinsic",
                                                        name: "string",
                                                      },
                                                      {
                                                        type: "intrinsic",
                                                        name: "any",
                                                      },
                                                    ],
                                                    name: "Record",
                                                    package: "typescript",
                                                  },
                                                },
                                              ],
                                              groups: [
                                                {
                                                  title: "Properties",
                                                  children: [5113, 5114],
                                                },
                                              ],
                                              sources: [
                                                {
                                                  fileName: "hooks/use-listener/use-listener.hooks.ts",
                                                  line: 24,
                                                  character: 23,
                                                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L24",
                                                },
                                              ],
                                            },
                                          },
                                        },
                                      ],
                                      type: {
                                        type: "intrinsic",
                                        name: "void",
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5135,
                  name: "onReconnecting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 132,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5136,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 132,
                          character: 20,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                        },
                      ],
                      signatures: [
                        {
                          id: 5137,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 132,
                              character: 20,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                            },
                          ],
                          parameters: [
                            {
                              id: 5138,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reflection",
                                declaration: {
                                  id: 5139,
                                  name: "__type",
                                  variant: "declaration",
                                  kind: 65_536,
                                  flags: {},
                                  sources: [
                                    {
                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                      line: 132,
                                      character: 31,
                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                    },
                                  ],
                                  signatures: [
                                    {
                                      id: 5140,
                                      name: "__type",
                                      variant: "signature",
                                      kind: 4096,
                                      flags: {},
                                      sources: [
                                        {
                                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                          line: 132,
                                          character: 31,
                                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                        },
                                      ],
                                      parameters: [
                                        {
                                          id: 5141,
                                          name: "data",
                                          variant: "param",
                                          kind: 32_768,
                                          flags: {},
                                          type: {
                                            type: "reflection",
                                            declaration: {
                                              id: 5142,
                                              name: "__type",
                                              variant: "declaration",
                                              kind: 65_536,
                                              flags: {},
                                              children: [
                                                {
                                                  id: 5143,
                                                  name: "attempts",
                                                  variant: "declaration",
                                                  kind: 1024,
                                                  flags: {},
                                                  sources: [
                                                    {
                                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                      line: 132,
                                                      character: 40,
                                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                                    },
                                                  ],
                                                  type: {
                                                    type: "intrinsic",
                                                    name: "number",
                                                  },
                                                },
                                              ],
                                              groups: [
                                                {
                                                  title: "Properties",
                                                  children: [5143],
                                                },
                                              ],
                                              sources: [
                                                {
                                                  fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                  line: 132,
                                                  character: 38,
                                                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                                },
                                              ],
                                            },
                                          },
                                        },
                                      ],
                                      type: {
                                        type: "intrinsic",
                                        name: "void",
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5144,
                  name: "onReconnectingFailed",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 135,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5145,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 135,
                          character: 26,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                        },
                      ],
                      signatures: [
                        {
                          id: 5146,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 135,
                              character: 26,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                            },
                          ],
                          parameters: [
                            {
                              id: 5147,
                              name: "callback",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "reflection",
                                declaration: {
                                  id: 5148,
                                  name: "__type",
                                  variant: "declaration",
                                  kind: 65_536,
                                  flags: {},
                                  sources: [
                                    {
                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                      line: 135,
                                      character: 37,
                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                    },
                                  ],
                                  signatures: [
                                    {
                                      id: 5149,
                                      name: "__type",
                                      variant: "signature",
                                      kind: 4096,
                                      flags: {},
                                      sources: [
                                        {
                                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                          line: 135,
                                          character: 37,
                                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                        },
                                      ],
                                      parameters: [
                                        {
                                          id: 5150,
                                          name: "data",
                                          variant: "param",
                                          kind: 32_768,
                                          flags: {},
                                          type: {
                                            type: "reflection",
                                            declaration: {
                                              id: 5151,
                                              name: "__type",
                                              variant: "declaration",
                                              kind: 65_536,
                                              flags: {},
                                              children: [
                                                {
                                                  id: 5152,
                                                  name: "attempts",
                                                  variant: "declaration",
                                                  kind: 1024,
                                                  flags: {},
                                                  sources: [
                                                    {
                                                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                      line: 135,
                                                      character: 46,
                                                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                                    },
                                                  ],
                                                  type: {
                                                    type: "intrinsic",
                                                    name: "number",
                                                  },
                                                },
                                              ],
                                              groups: [
                                                {
                                                  title: "Properties",
                                                  children: [5152],
                                                },
                                              ],
                                              sources: [
                                                {
                                                  fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                  line: 135,
                                                  character: 44,
                                                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                                },
                                              ],
                                            },
                                          },
                                        },
                                      ],
                                      type: {
                                        type: "intrinsic",
                                        name: "void",
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5161,
                  name: "setConnected",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 95,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5162,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 95,
                          character: 18,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                        },
                      ],
                      signatures: [
                        {
                          id: 5163,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 95,
                              character: 18,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                            },
                          ],
                          parameters: [
                            {
                              id: 5164,
                              name: "connected",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "boolean",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5165,
                  name: "setConnecting",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 99,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5166,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 99,
                          character: 19,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                        },
                      ],
                      signatures: [
                        {
                          id: 5167,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 99,
                              character: 19,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                            },
                          ],
                          parameters: [
                            {
                              id: 5168,
                              name: "connecting",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "boolean",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5153,
                  name: "setData",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 87,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5154,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 87,
                          character: 13,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                        },
                      ],
                      signatures: [
                        {
                          id: 5155,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 87,
                              character: 13,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                            },
                          ],
                          parameters: [
                            {
                              id: 5156,
                              name: "data",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "unknown",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5157,
                  name: "setExtra",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 91,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5158,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 91,
                          character: 14,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                        },
                      ],
                      signatures: [
                        {
                          id: 5159,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 91,
                              character: 14,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                            },
                          ],
                          parameters: [
                            {
                              id: 5160,
                              name: "extra",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "intrinsic",
                                name: "any",
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5169,
                  name: "setTimestamp",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                      line: 103,
                      character: 4,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                    },
                  ],
                  type: {
                    type: "reflection",
                    declaration: {
                      id: 5170,
                      name: "__type",
                      variant: "declaration",
                      kind: 65_536,
                      flags: {},
                      sources: [
                        {
                          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                          line: 103,
                          character: 18,
                          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                        },
                      ],
                      signatures: [
                        {
                          id: 5171,
                          name: "__type",
                          variant: "signature",
                          kind: 4096,
                          flags: {},
                          sources: [
                            {
                              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                              line: 103,
                              character: 18,
                              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                            },
                          ],
                          parameters: [
                            {
                              id: 5172,
                              name: "timestamp",
                              variant: "param",
                              kind: 32_768,
                              flags: {},
                              type: {
                                type: "union",
                                types: [
                                  {
                                    type: "literal",
                                    value: null,
                                  },
                                  {
                                    type: "intrinsic",
                                    name: "number",
                                  },
                                ],
                              },
                            },
                          ],
                          type: {
                            type: "intrinsic",
                            name: "void",
                          },
                        },
                      ],
                    },
                  },
                  defaultValue: "...",
                },
                {
                  id: 5180,
                  name: "timestamp",
                  variant: "declaration",
                  kind: 1024,
                  flags: {},
                  sources: [
                    {
                      fileName: "hooks/use-listener/use-listener.hooks.ts",
                      line: 75,
                      character: 6,
                      url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L75",
                    },
                  ],
                  type: {
                    type: "union",
                    types: [
                      {
                        type: "literal",
                        value: null,
                      },
                      {
                        type: "intrinsic",
                        name: "number",
                      },
                    ],
                  },
                  defaultValue: "state.timestamp",
                },
              ],
              groups: [
                {
                  title: "Properties",
                  children: [
                    5173, 5178, 5179, 5176, 5177, 5102, 5115, 5131, 5119, 5123, 5105, 5135, 5144, 5161, 5165, 5153,
                    5157, 5169, 5180,
                  ],
                },
              ],
              sources: [
                {
                  fileName: "hooks/use-listener/use-listener.hooks.ts",
                  line: 70,
                  character: 4,
                  url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-listener/use-listener.hooks.ts#L70",
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: 5624,
      name: "useProvider",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "provider/provider.tsx",
          line: 30,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.tsx#L30",
        },
      ],
      signatures: [
        {
          id: 5625,
          name: "useProvider",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Hook to allow reading current context config",
              },
            ],
            blockTags: [
              {
                tag: "@returns",
                content: [],
              },
            ],
          },
          sources: [
            {
              fileName: "provider/provider.tsx",
              line: 30,
              character: 27,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/provider/provider.tsx#L30",
            },
          ],
          type: {
            type: "reference",
            target: 5638,
            name: "ProviderValueType",
            package: "@hyper-fetch/react",
          },
        },
      ],
    },
    {
      id: 5003,
      name: "useQueue",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-queue/use-queue.hooks.ts",
          line: 24,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.hooks.ts#L24",
        },
      ],
      signatures: [
        {
          id: 5004,
          name: "useQueue",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "This hook allows you to monitor and control dispatcher request queues for a given request,\nincluding starting, stopping, pausing, and inspecting pending/in-flight items.",
              },
            ],
            blockTags: [
              {
                tag: "@returns",
                content: [],
              },
            ],
          },
          sources: [
            {
              fileName: "hooks/use-queue/use-queue.hooks.ts",
              line: 24,
              character: 24,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-queue/use-queue.hooks.ts#L24",
            },
          ],
          typeParameter: [
            {
              id: 5005,
              name: "Request",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/request/request.types.ts",
                  qualifiedName: "RequestInstance",
                },
                name: "RequestInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 5006,
              name: "request",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5005,
                name: "Request",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5007,
              name: "options",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: 5008,
                name: "UseQueueOptionsType",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "reference",
            target: 5030,
            typeArguments: [
              {
                type: "reference",
                target: 5005,
                name: "Request",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseQueueReturnType",
            package: "@hyper-fetch/react",
          },
        },
      ],
    },
    {
      id: 5534,
      name: "useSocketState",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
          line: 6,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L6",
        },
      ],
      signatures: [
        {
          id: 5535,
          name: "useSocketState",
          variant: "signature",
          kind: 4096,
          flags: {},
          sources: [
            {
              fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
              line: 6,
              character: 30,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L6",
            },
          ],
          typeParameter: [
            {
              id: 5536,
              name: "DataType",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
            },
            {
              id: 5537,
              name: "Socket",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/sockets/src/socket/socket.types.ts",
                  qualifiedName: "SocketInstance",
                },
                name: "SocketInstance",
                package: "@hyper-fetch/sockets",
              },
            },
          ],
          parameters: [
            {
              id: 5538,
              name: "socket",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5537,
                name: "Socket",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5539,
              name: "__namedParameters",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5617,
                name: "UseSocketStateProps",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "typeOperator",
            operator: "readonly",
            target: {
              type: "tuple",
              elements: [
                {
                  type: "reference",
                  target: 5608,
                  typeArguments: [
                    {
                      type: "reference",
                      target: 5537,
                      name: "Socket",
                      package: "@hyper-fetch/react",
                      refersToTypeParameter: true,
                    },
                    {
                      type: "reference",
                      target: 5536,
                      name: "DataType",
                      package: "@hyper-fetch/react",
                      refersToTypeParameter: true,
                    },
                  ],
                  name: "UseSocketStateType",
                  package: "@hyper-fetch/react",
                },
                {
                  type: "reflection",
                  declaration: {
                    id: 5540,
                    name: "__type",
                    variant: "declaration",
                    kind: 65_536,
                    flags: {},
                    children: [
                      {
                        id: 5561,
                        name: "clearState",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 107,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5562,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 107,
                                character: 16,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                              },
                            ],
                            signatures: [
                              {
                                id: 5563,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 107,
                                    character: 16,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L107",
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5549,
                        name: "setConnected",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 95,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5550,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 95,
                                character: 18,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                              },
                            ],
                            signatures: [
                              {
                                id: 5551,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 95,
                                    character: 18,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L95",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5552,
                                    name: "connected",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "intrinsic",
                                      name: "boolean",
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5553,
                        name: "setConnecting",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 99,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5554,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 99,
                                character: 19,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                              },
                            ],
                            signatures: [
                              {
                                id: 5555,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 99,
                                    character: 19,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L99",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5556,
                                    name: "connecting",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "intrinsic",
                                      name: "boolean",
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5541,
                        name: "setData",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 87,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5542,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 87,
                                character: 13,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                              },
                            ],
                            signatures: [
                              {
                                id: 5543,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 87,
                                    character: 13,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L87",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5544,
                                    name: "data",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "union",
                                      types: [
                                        {
                                          type: "literal",
                                          value: null,
                                        },
                                        {
                                          type: "reference",
                                          target: 5536,
                                          name: "DataType",
                                          package: "@hyper-fetch/react",
                                          refersToTypeParameter: true,
                                        },
                                      ],
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5545,
                        name: "setExtra",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 91,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5546,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 91,
                                character: 14,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                              },
                            ],
                            signatures: [
                              {
                                id: 5547,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 91,
                                    character: 14,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L91",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5548,
                                    name: "extra",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "union",
                                      types: [
                                        {
                                          type: "literal",
                                          value: null,
                                        },
                                        {
                                          type: "reference",
                                          target: {
                                            sourceFileName: "../packages/sockets/src/types/extract.types.ts",
                                            qualifiedName: "ExtractSocketExtraType",
                                          },
                                          typeArguments: [
                                            {
                                              type: "reference",
                                              target: 5537,
                                              name: "Socket",
                                              package: "@hyper-fetch/react",
                                              refersToTypeParameter: true,
                                            },
                                          ],
                                          name: "ExtractSocketExtraType",
                                          package: "@hyper-fetch/sockets",
                                        },
                                      ],
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5557,
                        name: "setTimestamp",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 103,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5558,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 103,
                                character: 18,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                              },
                            ],
                            signatures: [
                              {
                                id: 5559,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 103,
                                    character: 18,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L103",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5560,
                                    name: "timestamp",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "union",
                                      types: [
                                        {
                                          type: "literal",
                                          value: null,
                                        },
                                        {
                                          type: "intrinsic",
                                          name: "number",
                                        },
                                      ],
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                    ],
                    groups: [
                      {
                        title: "Properties",
                        children: [5561, 5549, 5553, 5541, 5545, 5557],
                      },
                    ],
                    sources: [
                      {
                        fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                        line: 86,
                        character: 18,
                        url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L86",
                      },
                    ],
                  },
                },
                {
                  type: "reflection",
                  declaration: {
                    id: 5564,
                    name: "__type",
                    variant: "declaration",
                    kind: 65_536,
                    flags: {},
                    children: [
                      {
                        id: 5565,
                        name: "onConnected",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 120,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5566,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 120,
                                character: 17,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                              },
                            ],
                            signatures: [
                              {
                                id: 5567,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 120,
                                    character: 17,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L120",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5568,
                                    name: "callback",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "reference",
                                      target: {
                                        sourceFileName:
                                          "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                        qualifiedName: "VoidFunction",
                                      },
                                      name: "VoidFunction",
                                      package: "typescript",
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5581,
                        name: "onConnecting",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 129,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5582,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 129,
                                character: 18,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                              },
                            ],
                            signatures: [
                              {
                                id: 5583,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 129,
                                    character: 18,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L129",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5584,
                                    name: "callback",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "reference",
                                      target: {
                                        sourceFileName:
                                          "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                        qualifiedName: "VoidFunction",
                                      },
                                      name: "VoidFunction",
                                      package: "typescript",
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5569,
                        name: "onDisconnected",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 123,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5570,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 123,
                                character: 20,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                              },
                            ],
                            signatures: [
                              {
                                id: 5571,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 123,
                                    character: 20,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L123",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5572,
                                    name: "callback",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "reference",
                                      target: {
                                        sourceFileName:
                                          "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                        qualifiedName: "VoidFunction",
                                      },
                                      name: "VoidFunction",
                                      package: "typescript",
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5573,
                        name: "onError",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 126,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5574,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 126,
                                character: 13,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                              },
                            ],
                            signatures: [
                              {
                                id: 5575,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 126,
                                    character: 13,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                                  },
                                ],
                                typeParameter: [
                                  {
                                    id: 5576,
                                    name: "ErrorType",
                                    variant: "typeParam",
                                    kind: 131_072,
                                    flags: {},
                                    default: {
                                      type: "reference",
                                      target: {
                                        sourceFileName:
                                          "../node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.dom.d.ts",
                                        qualifiedName: "Event",
                                      },
                                      name: "Event",
                                      package: "typescript",
                                    },
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5577,
                                    name: "callback",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "reflection",
                                      declaration: {
                                        id: 5578,
                                        name: "__type",
                                        variant: "declaration",
                                        kind: 65_536,
                                        flags: {},
                                        sources: [
                                          {
                                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                            line: 126,
                                            character: 43,
                                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                                          },
                                        ],
                                        signatures: [
                                          {
                                            id: 5579,
                                            name: "__type",
                                            variant: "signature",
                                            kind: 4096,
                                            flags: {},
                                            sources: [
                                              {
                                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                line: 126,
                                                character: 43,
                                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L126",
                                              },
                                            ],
                                            parameters: [
                                              {
                                                id: 5580,
                                                name: "event",
                                                variant: "param",
                                                kind: 32_768,
                                                flags: {},
                                                type: {
                                                  type: "reference",
                                                  target: 5126,
                                                  name: "ErrorType",
                                                  package: "@hyper-fetch/react",
                                                  refersToTypeParameter: true,
                                                },
                                              },
                                            ],
                                            type: {
                                              type: "intrinsic",
                                              name: "void",
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5585,
                        name: "onReconnecting",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 132,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5586,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 132,
                                character: 20,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                              },
                            ],
                            signatures: [
                              {
                                id: 5587,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 132,
                                    character: 20,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5588,
                                    name: "callback",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "reflection",
                                      declaration: {
                                        id: 5589,
                                        name: "__type",
                                        variant: "declaration",
                                        kind: 65_536,
                                        flags: {},
                                        sources: [
                                          {
                                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                            line: 132,
                                            character: 31,
                                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                          },
                                        ],
                                        signatures: [
                                          {
                                            id: 5590,
                                            name: "__type",
                                            variant: "signature",
                                            kind: 4096,
                                            flags: {},
                                            sources: [
                                              {
                                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                line: 132,
                                                character: 31,
                                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                              },
                                            ],
                                            parameters: [
                                              {
                                                id: 5591,
                                                name: "data",
                                                variant: "param",
                                                kind: 32_768,
                                                flags: {},
                                                type: {
                                                  type: "reflection",
                                                  declaration: {
                                                    id: 5592,
                                                    name: "__type",
                                                    variant: "declaration",
                                                    kind: 65_536,
                                                    flags: {},
                                                    children: [
                                                      {
                                                        id: 5593,
                                                        name: "attempts",
                                                        variant: "declaration",
                                                        kind: 1024,
                                                        flags: {},
                                                        sources: [
                                                          {
                                                            fileName:
                                                              "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                            line: 132,
                                                            character: 40,
                                                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                                          },
                                                        ],
                                                        type: {
                                                          type: "intrinsic",
                                                          name: "number",
                                                        },
                                                      },
                                                    ],
                                                    groups: [
                                                      {
                                                        title: "Properties",
                                                        children: [5593],
                                                      },
                                                    ],
                                                    sources: [
                                                      {
                                                        fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                        line: 132,
                                                        character: 38,
                                                        url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L132",
                                                      },
                                                    ],
                                                  },
                                                },
                                              },
                                            ],
                                            type: {
                                              type: "intrinsic",
                                              name: "void",
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                      {
                        id: 5594,
                        name: "onReconnectingFailed",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 135,
                            character: 4,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5595,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 135,
                                character: 26,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                              },
                            ],
                            signatures: [
                              {
                                id: 5596,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 135,
                                    character: 26,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5597,
                                    name: "callback",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "reflection",
                                      declaration: {
                                        id: 5598,
                                        name: "__type",
                                        variant: "declaration",
                                        kind: 65_536,
                                        flags: {},
                                        sources: [
                                          {
                                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                            line: 135,
                                            character: 37,
                                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                          },
                                        ],
                                        signatures: [
                                          {
                                            id: 5599,
                                            name: "__type",
                                            variant: "signature",
                                            kind: 4096,
                                            flags: {},
                                            sources: [
                                              {
                                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                line: 135,
                                                character: 37,
                                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                              },
                                            ],
                                            parameters: [
                                              {
                                                id: 5600,
                                                name: "data",
                                                variant: "param",
                                                kind: 32_768,
                                                flags: {},
                                                type: {
                                                  type: "reflection",
                                                  declaration: {
                                                    id: 5601,
                                                    name: "__type",
                                                    variant: "declaration",
                                                    kind: 65_536,
                                                    flags: {},
                                                    children: [
                                                      {
                                                        id: 5602,
                                                        name: "attempts",
                                                        variant: "declaration",
                                                        kind: 1024,
                                                        flags: {},
                                                        sources: [
                                                          {
                                                            fileName:
                                                              "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                            line: 135,
                                                            character: 46,
                                                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                                          },
                                                        ],
                                                        type: {
                                                          type: "intrinsic",
                                                          name: "number",
                                                        },
                                                      },
                                                    ],
                                                    groups: [
                                                      {
                                                        title: "Properties",
                                                        children: [5602],
                                                      },
                                                    ],
                                                    sources: [
                                                      {
                                                        fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                                        line: 135,
                                                        character: 44,
                                                        url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L135",
                                                      },
                                                    ],
                                                  },
                                                },
                                              },
                                            ],
                                            type: {
                                              type: "intrinsic",
                                              name: "void",
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                        defaultValue: "...",
                      },
                    ],
                    groups: [
                      {
                        title: "Properties",
                        children: [5565, 5581, 5569, 5573, 5585, 5594],
                      },
                    ],
                    sources: [
                      {
                        fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                        line: 119,
                        character: 20,
                        url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L119",
                      },
                    ],
                  },
                },
                {
                  type: "reflection",
                  declaration: {
                    id: 5603,
                    name: "__type",
                    variant: "declaration",
                    kind: 65_536,
                    flags: {},
                    children: [
                      {
                        id: 5604,
                        name: "setRenderKey",
                        variant: "declaration",
                        kind: 1024,
                        flags: {},
                        sources: [
                          {
                            fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                            line: 177,
                            character: 47,
                            url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L177",
                          },
                        ],
                        type: {
                          type: "reflection",
                          declaration: {
                            id: 5605,
                            name: "__type",
                            variant: "declaration",
                            kind: 65_536,
                            flags: {},
                            sources: [
                              {
                                fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                line: 58,
                                character: 23,
                                url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L58",
                              },
                            ],
                            signatures: [
                              {
                                id: 5606,
                                name: "__type",
                                variant: "signature",
                                kind: 4096,
                                flags: {},
                                sources: [
                                  {
                                    fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                                    line: 58,
                                    character: 23,
                                    url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L58",
                                  },
                                ],
                                parameters: [
                                  {
                                    id: 5607,
                                    name: "renderKey",
                                    variant: "param",
                                    kind: 32_768,
                                    flags: {},
                                    type: {
                                      type: "typeOperator",
                                      operator: "keyof",
                                      target: {
                                        type: "reference",
                                        target: 5608,
                                        typeArguments: [
                                          {
                                            type: "reference",
                                            target: 5537,
                                            name: "Socket",
                                            package: "@hyper-fetch/react",
                                            refersToTypeParameter: true,
                                          },
                                          {
                                            type: "reference",
                                            target: 5536,
                                            name: "DataType",
                                            package: "@hyper-fetch/react",
                                            refersToTypeParameter: true,
                                          },
                                        ],
                                        name: "UseSocketStateType",
                                        package: "@hyper-fetch/react",
                                      },
                                    },
                                  },
                                ],
                                type: {
                                  type: "intrinsic",
                                  name: "void",
                                },
                              },
                            ],
                          },
                        },
                      },
                    ],
                    groups: [
                      {
                        title: "Properties",
                        children: [5604],
                      },
                    ],
                    sources: [
                      {
                        fileName: "helpers/use-socket-state/use-socket-state.hooks.ts",
                        line: 177,
                        character: 45,
                        url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts#L177",
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: 5069,
      name: "useStream",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-stream/use-stream.hooks.ts",
          line: 34,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.hooks.ts#L34",
        },
      ],
      signatures: [
        {
          id: 5070,
          name: "useStream",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "Hook for consuming streaming responses chunk-by-chunk.\nWorks with any request that uses the fetch adapter's ",
              },
              {
                kind: "code",
                text: "`streaming: true`",
              },
              {
                kind: "text",
                text: " option.\n\nProvides both accumulated ",
              },
              {
                kind: "code",
                text: "`text`",
              },
              {
                kind: "text",
                text: " (for LLM/SSE use cases) and raw ",
              },
              {
                kind: "code",
                text: "`chunks`",
              },
              {
                kind: "text",
                text: "\n(for binary streaming / file downloads).",
              },
            ],
          },
          sources: [
            {
              fileName: "hooks/use-stream/use-stream.hooks.ts",
              line: 34,
              character: 25,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-stream/use-stream.hooks.ts#L34",
            },
          ],
          typeParameter: [
            {
              id: 5071,
              name: "T",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/request/request.types.ts",
                  qualifiedName: "RequestInstance",
                },
                name: "RequestInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 5072,
              name: "request",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 5071,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 5073,
              name: "options",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: 5074,
                name: "UseStreamOptionsType",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "reference",
            target: 5077,
            typeArguments: [
              {
                type: "reference",
                target: 5071,
                name: "T",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseStreamReturnType",
            package: "@hyper-fetch/react",
          },
        },
      ],
    },
    {
      id: 4929,
      name: "useSubmit",
      variant: "declaration",
      kind: 64,
      flags: {},
      sources: [
        {
          fileName: "hooks/use-submit/use-submit.hooks.ts",
          line: 29,
          character: 13,
          url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.hooks.ts#L29",
        },
      ],
      signatures: [
        {
          id: 4930,
          name: "useSubmit",
          variant: "signature",
          kind: 4096,
          flags: {},
          comment: {
            summary: [
              {
                kind: "text",
                text: "This hook aims to mutate data on the server. Unlike useFetch, it does not fire automatically -\ncall the returned ",
              },
              {
                kind: "code",
                text: "`submit`",
              },
              {
                kind: "text",
                text: " function to trigger the request (e.g., on button click).",
              },
            ],
            blockTags: [
              {
                tag: "@returns",
                content: [],
              },
            ],
          },
          sources: [
            {
              fileName: "hooks/use-submit/use-submit.hooks.ts",
              line: 29,
              character: 25,
              url: "https://github.com/BetterTyped/hyper-fetch/blob/78808b5f077853b4099132d9e491dbdb66df3d54/packages/react/src/hooks/use-submit/use-submit.hooks.ts#L29",
            },
          ],
          typeParameter: [
            {
              id: 4931,
              name: "RequestType",
              variant: "typeParam",
              kind: 131_072,
              flags: {},
              type: {
                type: "reference",
                target: {
                  sourceFileName: "../packages/core/src/request/request.types.ts",
                  qualifiedName: "RequestInstance",
                },
                name: "RequestInstance",
                package: "@hyper-fetch/core",
              },
            },
          ],
          parameters: [
            {
              id: 4932,
              name: "request",
              variant: "param",
              kind: 32_768,
              flags: {},
              type: {
                type: "reference",
                target: 4931,
                name: "RequestType",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            },
            {
              id: 4933,
              name: "options",
              variant: "param",
              kind: 32_768,
              flags: {
                isOptional: true,
              },
              type: {
                type: "reference",
                target: 4934,
                typeArguments: [
                  {
                    type: "reference",
                    target: 4931,
                    name: "RequestType",
                    package: "@hyper-fetch/react",
                    refersToTypeParameter: true,
                  },
                ],
                name: "UseSubmitOptionsType",
                package: "@hyper-fetch/react",
              },
            },
          ],
          type: {
            type: "reference",
            target: 4949,
            typeArguments: [
              {
                type: "reference",
                target: 4931,
                name: "RequestType",
                package: "@hyper-fetch/react",
                refersToTypeParameter: true,
              },
            ],
            name: "UseSubmitReturnType",
            package: "@hyper-fetch/react",
          },
        },
      ],
    },
  ],
  groups: [
    {
      title: "Type Aliases",
      children: [
        5372, 5383, 5388, 5398, 5393, 5378, 5626, 5634, 5638, 5012, 5272, 5056, 5062, 5265, 4886, 4912, 5181, 5008,
        5030, 5309, 5288, 5291, 5294, 5351, 5617, 5608, 5074, 5077, 4934, 4949, 5450, 5408, 5420, 5438,
      ],
    },
    {
      title: "Variables",
      children: [5620, 5403, 5051, 4928, 5045, 5002],
    },
    {
      title: "Functions",
      children: [
        5621, 5665, 5652, 5497, 5524, 5514, 4924, 5492, 5511, 5505, 5645, 5648, 5501, 5268, 5046, 5184, 4881, 5096,
        5624, 5003, 5534, 5069, 4929,
      ],
    },
  ],
  packageName: "@hyper-fetch/react",
  readme: [
    {
      kind: "text",
      text: '# ⚛️ Hyper Fetch React\n\n<p align="center">\n  <b>React hooks for HyperFetch. Automatic fetching, caching, and real-time updates with full type safety.</b>\n</p>\n\n<p align="center">\n  <a href="https://bettertyped.com/">\n    <img src="https://custom-icon-badges.demolab.com/static/v1?label=&message=BetterTyped&color=333&logo=BT" />\n  </a>\n  <a href="https://github.com/BetterTyped/hyper-fetch">\n    <img src="https://custom-icon-badges.demolab.com/github/stars/BetterTyped/hyper-fetch?logo=star&color=118ab2" />\n  </a>\n  <a href="https://github.com/BetterTyped/hyper-fetch/blob/main/License.md">\n    <img src="https://custom-icon-badges.demolab.com/github/license/BetterTyped/hyper-fetch?logo=law&color=yellow" />\n  </a>\n  <a href="https://www.npmjs.com/package/@hyper-fetch/react">\n    <img src="https://custom-icon-badges.demolab.com/npm/v/@hyper-fetch/react.svg?logo=npm&color=e76f51" />\n  </a>\n  <a href="https://www.npmjs.com/package/@hyper-fetch/react">\n    <img src="https://custom-icon-badges.demolab.com/npm/dm/@hyper-fetch/react?logoColor=fff&logo=trending-up" />\n  </a>\n  <a href="https://github.com/BetterTyped/hyper-fetch">\n    <img src="https://custom-icon-badges.demolab.com/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white" />\n  </a>\n  <a href="https://bundlephobia.com/package/@hyper-fetch/react">\n    <img src="https://custom-icon-badges.demolab.com/bundlephobia/minzip/@hyper-fetch/react?color=64BC4B&logo=package" />\n  </a>\n</p>\n\n## 📖 About\n\n',
    },
    {
      kind: "code",
      text: "`@hyper-fetch/react`",
    },
    {
      kind: "text",
      text: " connects HyperFetch's typed request system to React's component lifecycle. ",
    },
    {
      kind: "code",
      text: "`useFetch`",
    },
    {
      kind: "text",
      text: " triggers\nrequests on mount and re-fetches when dependencies change. ",
    },
    {
      kind: "code",
      text: "`useSubmit`",
    },
    {
      kind: "text",
      text: " gives you a ",
    },
    {
      kind: "code",
      text: "`submit`",
    },
    {
      kind: "text",
      text: " function for mutations\ntriggered by user actions. Both hooks return fully typed ",
    },
    {
      kind: "code",
      text: "`data`",
    },
    {
      kind: "text",
      text: ", ",
    },
    {
      kind: "code",
      text: "`error`",
    },
    {
      kind: "text",
      text: ", and loading states with built-in callbacks.\n\n## 🎯 Key Capabilities\n\n- ⚡ **Data on mount, zero boilerplate** — ",
    },
    {
      kind: "code",
      text: "`useFetch`",
    },
    {
      kind: "text",
      text: " fetches, caches, and types your data automatically\n- 🎯 **Mutations that just work** — ",
    },
    {
      kind: "code",
      text: "`useSubmit`",
    },
    {
      kind: "text",
      text: " handles loading, errors, and success states for form submissions\n- 🔄 **Always fresh data** — Auto-refetch on window focus, polling, and stale-time revalidation built in\n- ✨ **Optimistic updates with rollback** — Update the UI instantly and auto-revert if the request fails\n- 🔮 **Full type safety** — Every hook, callback, response, and error is typed end-to-end with zero ",
    },
    {
      kind: "code",
      text: "`any`",
    },
    {
      kind: "text",
      text: "\n- 🚀 **Instant page loads** — Prefetch data before components mount so users never wait\n- 🔗 **No more useEffect spaghetti** — Dependent requests via ",
    },
    {
      kind: "code",
      text: "`disabled`",
    },
    {
      kind: "text",
      text: " option, no manual orchestration\n- 📡 **SSR out of the box** — Works with Next.js, Remix, and any server-rendered framework\n- 💎 **Skip the state library** — No Redux or Zustand needed for server state — it's all handled\n\n## 🚀 Quick Start\n\n",
    },
    {
      kind: "code",
      text: "```bash\nnpm install @hyper-fetch/core @hyper-fetch/react\n```",
    },
    {
      kind: "text",
      text: "\n\n",
    },
    {
      kind: "code",
      text: '```tsx\nimport { useFetch } from "@hyper-fetch/react";\nimport { getUsers } from "./api";\n\nconst UserList = () => {\n  // Fetches on mount, returns typed data — no useEffect needed\n  const { data, loading, error } = useFetch(getUsers);\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Something went wrong</p>;\n  return (\n    <ul>\n      {data?.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n};\n```',
    },
    {
      kind: "text",
      text: "\n\n## 📚 Documentation\n\n- [Getting Started](https://hyperfetch.bettertyped.com/docs/getting-started/quick-start)\n- [React Overview](https://hyperfetch.bettertyped.com/docs/react/overview)\n- [API Reference](https://hyperfetch.bettertyped.com/api/)\n\n## 💡 Examples\n\n### Fetch with callbacks\n\n",
    },
    {
      kind: "code",
      text: '```tsx\nimport { useFetch } from "@hyper-fetch/react";\n\nconst UserProfile = ({ userId }: { userId: number }) => {\n  // setParams makes the request dynamic — re-fetches when userId changes\n  const { data, loading, error, onSuccess, onError } = useFetch(getUser.setParams({ userId }));\n\n  // Typed callbacks — response shape matches your request definition\n  onSuccess(({ response }) => {\n    console.log("Loaded user:", response.data.name);\n  });\n\n  onError(({ response }) => {\n    console.error("Failed to load user:", response.error);\n  });\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error: {error.message}</p>;\n  return <h1>{data.name}</h1>;\n};\n```',
    },
    {
      kind: "text",
      text: "\n\n### Mutations with useSubmit\n\n",
    },
    {
      kind: "code",
      text: '```tsx\nimport { useSubmit } from "@hyper-fetch/react";\n\nconst CreateUserForm = () => {\n  // useSubmit doesn\'t fire on mount — it waits for you to call submit()\n  const { submit, submitting, onSubmitSuccess, onSubmitError } = useSubmit(createUser);\n\n  // Callbacks fire after each submission with typed response data\n  onSubmitSuccess(({ response }) => {\n    alert(`User ${response.data.name} created!`);\n  });\n\n  onSubmitError(({ response }) => {\n    alert(`Error: ${response.error.message}`);\n  });\n\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    const form = new FormData(e.currentTarget);\n    // Pass typed payload — TypeScript ensures the shape matches your request definition\n    submit({\n      data: { name: form.get("name") as string, email: form.get("email") as string },\n    });\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="name" placeholder="Name" required />\n      <input name="email" placeholder="Email" required />\n      <button type="submit" disabled={submitting}>\n        {submitting ? "Creating..." : "Create User"}\n      </button>\n    </form>\n  );\n};\n```',
    },
    {
      kind: "text",
      text: "\n\n### Dependent requests\n\n",
    },
    {
      kind: "code",
      text: "```tsx\nconst UserPosts = ({ userId }: { userId: number }) => {\n  // First request fetches the user\n  const { data: user } = useFetch(getUser.setParams({ userId }));\n  // Second request waits until user is loaded — no useEffect chains needed\n  const { data: posts } = useFetch(getUserPosts.setParams({ userId }), {\n    disabled: !user,\n  });\n\n  return (\n    <div>\n      <h1>{user?.name}</h1>\n      {posts?.map((post) => (\n        <article key={post.id}>{post.title}</article>\n      ))}\n    </div>\n  );\n};\n```",
    },
    {
      kind: "text",
      text: "\n\n### Optimistic updates with automatic rollback\n\n",
    },
    {
      kind: "code",
      text: '```tsx\nimport { useSubmit } from "@hyper-fetch/react";\n\nconst AddComment = ({ postId }: { postId: number }) => {\n  // setOptimistic runs BEFORE the request — update the list instantly\n  const optimisticAdd = addComment.setParams({ postId }).setOptimistic((request, client) => {\n    const cacheKey = getComments.setParams({ postId });\n    const previous = client.cache.get(cacheKey);\n\n    // Immediately insert the new comment into the cached list\n    const optimisticComment = { id: `temp-${Date.now()}`, text: request.data.text, author: "You" };\n    client.cache.set(cacheKey, {\n      ...previous,\n      data: [...(previous?.data || []), optimisticComment],\n    });\n\n    return {\n      context: { previous },\n      // If the request fails, put the old list back\n      rollback: () => client.cache.set(cacheKey, previous),\n      // On success, refetch to get the real server data\n      invalidate: [cacheKey],\n    };\n  });\n\n  const { submit, submitting, onSubmitError } = useSubmit(optimisticAdd);\n\n  // mutationContext is fully typed from your setOptimistic return\n  onSubmitError(({ mutationContext }) => {\n    console.log("Rolled back — restored", mutationContext?.previous?.data?.length, "comments");\n  });\n\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    const text = new FormData(e.currentTarget).get("text") as string;\n    submit({ data: { text } });\n    e.currentTarget.reset();\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="text" placeholder="Write a comment..." required />\n      <button type="submit" disabled={submitting}>\n        Post\n      </button>\n    </form>\n  );\n};\n```',
    },
    {
      kind: "text",
      text: "\n\n## License\n\n[MIT](https://github.com/BetterTyped/hyper-fetch/blob/main/License.md)",
    },
  ],
  symbolIdMap: {
    "4880": {
      sourceFileName: "../packages/react/src/index.ts",
      qualifiedName: "",
    },
    "4881": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.hooks.ts",
      qualifiedName: "useFetch",
    },
    "4882": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.hooks.ts",
      qualifiedName: "useFetch",
    },
    "4883": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.hooks.ts",
      qualifiedName: "R",
    },
    "4884": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.hooks.ts",
      qualifiedName: "request",
    },
    "4885": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.hooks.ts",
      qualifiedName: "options",
    },
    "4886": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "UseFetchOptionsType",
    },
    "4887": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4888": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.suspense",
    },
    "4889": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.dependencies",
    },
    "4890": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.disabled",
    },
    "4891": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.dependencyTracking",
    },
    "4892": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.revalidate",
    },
    "4893": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.initialResponse",
    },
    "4894": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.keepPreviousData",
    },
    "4895": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.refresh",
    },
    "4896": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.refreshTime",
    },
    "4897": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.refetchBlurred",
    },
    "4898": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.refetchOnBlur",
    },
    "4899": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.refetchOnFocus",
    },
    "4900": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.refetchOnReconnect",
    },
    "4901": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.bounce",
    },
    "4902": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.deepCompare",
    },
    "4903": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4904": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.bounceType",
    },
    "4905": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.bounceTime",
    },
    "4906": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.bounceTimeout",
    },
    "4907": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4908": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.bounceType",
    },
    "4909": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.bounceTime",
    },
    "4910": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.bounceTimeout",
    },
    "4911": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "R",
    },
    "4912": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "UseFetchReturnType",
    },
    "4913": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4914": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.bounce",
    },
    "4915": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4916": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.active",
    },
    "4917": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.reset",
    },
    "4918": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4919": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4920": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type.refetch",
    },
    "4921": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4922": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "__type",
    },
    "4923": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.types.ts",
      qualifiedName: "R",
    },
    "4924": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.utils.ts",
      qualifiedName: "getRefreshTime",
    },
    "4925": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.utils.ts",
      qualifiedName: "getRefreshTime",
    },
    "4926": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.utils.ts",
      qualifiedName: "refreshTime",
    },
    "4927": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.utils.ts",
      qualifiedName: "dataTimestamp",
    },
    "4928": {
      sourceFileName: "../packages/react/src/hooks/use-fetch/use-fetch.constants.ts",
      qualifiedName: "useFetchDefaultOptions",
    },
    "4929": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.hooks.ts",
      qualifiedName: "useSubmit",
    },
    "4930": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.hooks.ts",
      qualifiedName: "useSubmit",
    },
    "4931": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.hooks.ts",
      qualifiedName: "RequestType",
    },
    "4932": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.hooks.ts",
      qualifiedName: "request",
    },
    "4933": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.hooks.ts",
      qualifiedName: "options",
    },
    "4934": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "UseSubmitOptionsType",
    },
    "4935": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4936": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.disabled",
    },
    "4937": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.initialResponse",
    },
    "4938": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.bounce",
    },
    "4939": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.dependencyTracking",
    },
    "4940": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.deepCompare",
    },
    "4941": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4942": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.bounceType",
    },
    "4943": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.bounceTime",
    },
    "4944": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4945": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.bounceType",
    },
    "4946": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.bounceTime",
    },
    "4947": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.bounceTimeout",
    },
    "4948": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "T",
    },
    "4949": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "UseSubmitReturnType",
    },
    "4950": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4951": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.abort",
    },
    "4952": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4953": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4954": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitSuccess",
    },
    "4955": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4956": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4957": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4958": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitError",
    },
    "4959": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4960": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4961": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4962": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitFinished",
    },
    "4963": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4964": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4965": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4966": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitRequestStart",
    },
    "4967": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4968": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4969": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4970": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitResponseStart",
    },
    "4971": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4972": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4973": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4974": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitDownloadProgress",
    },
    "4975": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4976": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4977": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4978": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitUploadProgress",
    },
    "4979": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4980": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4981": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4982": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitAbort",
    },
    "4983": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4984": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4985": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4986": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.onSubmitOfflineError",
    },
    "4987": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4988": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4989": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "callback",
    },
    "4990": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.submit",
    },
    "4991": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.submitting",
    },
    "4992": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.bounce",
    },
    "4993": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4994": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.active",
    },
    "4995": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.reset",
    },
    "4996": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4997": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "4998": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type.refetch",
    },
    "4999": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "5000": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "__type",
    },
    "5001": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.types.ts",
      qualifiedName: "RequestType",
    },
    "5002": {
      sourceFileName: "../packages/react/src/hooks/use-submit/use-submit.constants.ts",
      qualifiedName: "useSubmitDefaultOptions",
    },
    "5003": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.hooks.ts",
      qualifiedName: "useQueue",
    },
    "5004": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.hooks.ts",
      qualifiedName: "useQueue",
    },
    "5005": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.hooks.ts",
      qualifiedName: "Request",
    },
    "5006": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.hooks.ts",
      qualifiedName: "request",
    },
    "5007": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.hooks.ts",
      qualifiedName: "options",
    },
    "5008": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "UseQueueOptionsType",
    },
    "5009": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5010": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.dispatcherType",
    },
    "5011": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.keepFinishedRequests",
    },
    "5012": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "QueueRequest",
    },
    "5013": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5014": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.failed",
    },
    "5015": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.canceled",
    },
    "5016": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.removed",
    },
    "5017": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.success",
    },
    "5018": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.uploading",
    },
    "5019": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.downloading",
    },
    "5020": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.startRequest",
    },
    "5021": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5022": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5023": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.stopRequest",
    },
    "5024": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5025": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5026": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.deleteRequest",
    },
    "5027": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5028": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5029": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "Request",
    },
    "5030": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "UseQueueReturnType",
    },
    "5031": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5032": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.stopped",
    },
    "5033": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.requests",
    },
    "5034": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.dispatcher",
    },
    "5035": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.stop",
    },
    "5036": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5037": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5038": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.pause",
    },
    "5039": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5040": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5041": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type.start",
    },
    "5042": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5043": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "__type",
    },
    "5044": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.types.ts",
      qualifiedName: "T",
    },
    "5045": {
      sourceFileName: "../packages/react/src/hooks/use-queue/use-queue.constants.ts",
      qualifiedName: "useQueueDefaultOptions",
    },
    "5046": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.hooks.ts",
      qualifiedName: "useCache",
    },
    "5047": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.hooks.ts",
      qualifiedName: "useCache",
    },
    "5048": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.hooks.ts",
      qualifiedName: "T",
    },
    "5049": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.hooks.ts",
      qualifiedName: "request",
    },
    "5050": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.hooks.ts",
      qualifiedName: "options",
    },
    "5051": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.constants.ts",
      qualifiedName: "useCacheDefaultOptions",
    },
    "5052": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.constants.ts",
      qualifiedName: "__object",
    },
    "5053": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.constants.ts",
      qualifiedName: "__object.dependencyTracking",
    },
    "5054": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.constants.ts",
      qualifiedName: "__object.initialResponse",
    },
    "5055": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.constants.ts",
      qualifiedName: "__object.deepCompare",
    },
    "5056": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "UseCacheOptionsType",
    },
    "5057": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "__type",
    },
    "5058": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "__type.dependencyTracking",
    },
    "5059": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "__type.initialResponse",
    },
    "5060": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "__type.deepCompare",
    },
    "5061": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "T",
    },
    "5062": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "UseCacheReturnType",
    },
    "5063": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "__type",
    },
    "5064": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "__type.invalidate",
    },
    "5065": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "__type",
    },
    "5066": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "__type",
    },
    "5067": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "cacheKeys",
    },
    "5068": {
      sourceFileName: "../packages/react/src/hooks/use-cache/use-cache.types.ts",
      qualifiedName: "T",
    },
    "5069": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.hooks.ts",
      qualifiedName: "useStream",
    },
    "5070": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.hooks.ts",
      qualifiedName: "useStream",
    },
    "5071": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.hooks.ts",
      qualifiedName: "T",
    },
    "5072": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.hooks.ts",
      qualifiedName: "request",
    },
    "5073": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.hooks.ts",
      qualifiedName: "options",
    },
    "5074": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "UseStreamOptionsType",
    },
    "5075": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type",
    },
    "5076": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.autoStart",
    },
    "5077": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "UseStreamReturnType",
    },
    "5078": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type",
    },
    "5079": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.text",
    },
    "5080": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.chunks",
    },
    "5081": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.streaming",
    },
    "5082": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.done",
    },
    "5083": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.error",
    },
    "5084": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.extra",
    },
    "5085": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.status",
    },
    "5086": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.start",
    },
    "5087": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type",
    },
    "5088": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type",
    },
    "5089": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.abort",
    },
    "5090": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type",
    },
    "5091": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type",
    },
    "5092": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type.reset",
    },
    "5093": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type",
    },
    "5094": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "__type",
    },
    "5095": {
      sourceFileName: "../packages/react/src/hooks/use-stream/use-stream.types.ts",
      qualifiedName: "T",
    },
    "5096": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "useListener",
    },
    "5097": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "useListener",
    },
    "5098": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "ListenerType",
    },
    "5099": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "listener",
    },
    "5100": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "options",
    },
    "5101": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__object",
    },
    "5102": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__object.listen",
    },
    "5103": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__function",
    },
    "5104": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__function",
    },
    "5105": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__object.onEvent",
    },
    "5106": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__function",
    },
    "5107": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__function",
    },
    "5108": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "callback",
    },
    "5109": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__type",
    },
    "5110": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__type",
    },
    "5111": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "response",
    },
    "5112": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__type",
    },
    "5113": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__type.data",
    },
    "5114": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__type.extra",
    },
    "5115": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onConnected",
    },
    "5116": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5117": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5118": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5119": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onDisconnected",
    },
    "5120": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5121": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5122": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5123": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onError",
    },
    "5124": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5125": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5126": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "ErrorType",
    },
    "5127": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5128": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5129": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5130": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "event",
    },
    "5131": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onConnecting",
    },
    "5132": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5133": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5134": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5135": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onReconnecting",
    },
    "5136": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5137": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5138": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5139": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5140": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5141": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5142": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5143": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type.attempts",
    },
    "5144": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onReconnectingFailed",
    },
    "5145": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5146": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5147": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5148": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5149": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5150": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5151": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5152": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type.attempts",
    },
    "5153": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setData",
    },
    "5154": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5155": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5156": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5157": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setExtra",
    },
    "5158": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5159": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5160": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "extra",
    },
    "5161": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setConnected",
    },
    "5162": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5163": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5164": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "connected",
    },
    "5165": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setConnecting",
    },
    "5166": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5167": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5168": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "connecting",
    },
    "5169": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setTimestamp",
    },
    "5170": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5171": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5172": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "timestamp",
    },
    "5173": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.clearState",
    },
    "5174": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5175": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5176": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__object.data",
    },
    "5177": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__object.extra",
    },
    "5178": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__object.connected",
    },
    "5179": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__object.connecting",
    },
    "5180": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.hooks.ts",
      qualifiedName: "__object.timestamp",
    },
    "5181": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.types.ts",
      qualifiedName: "UseListenerOptionsType",
    },
    "5182": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.types.ts",
      qualifiedName: "__type",
    },
    "5183": {
      sourceFileName: "../packages/react/src/hooks/use-listener/use-listener.types.ts",
      qualifiedName: "__type.dependencyTracking",
    },
    "5184": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "useEmitter",
    },
    "5185": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "useEmitter",
    },
    "5186": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "EmitterType",
    },
    "5187": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "emitter",
    },
    "5188": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "options",
    },
    "5189": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__object",
    },
    "5190": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__object.onEmit",
    },
    "5191": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__function",
    },
    "5192": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__function",
    },
    "5193": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "callback",
    },
    "5194": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__type",
    },
    "5195": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__type",
    },
    "5196": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "emitter",
    },
    "5197": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__object.onEmitError",
    },
    "5198": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__function",
    },
    "5199": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__function",
    },
    "5200": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "callback",
    },
    "5201": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__object.emit",
    },
    "5202": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onConnected",
    },
    "5203": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5204": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5205": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5206": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onDisconnected",
    },
    "5207": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5208": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5209": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5210": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onError",
    },
    "5211": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5212": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5213": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "ErrorType",
    },
    "5214": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5215": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5216": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5217": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "event",
    },
    "5218": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onConnecting",
    },
    "5219": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5220": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5221": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5222": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onReconnecting",
    },
    "5223": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5224": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5225": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5226": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5227": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5228": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5229": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5230": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type.attempts",
    },
    "5231": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onReconnectingFailed",
    },
    "5232": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5233": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5234": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5235": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5236": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5237": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5238": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5239": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type.attempts",
    },
    "5240": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setData",
    },
    "5241": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5242": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5243": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5244": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setExtra",
    },
    "5245": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5246": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5247": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "extra",
    },
    "5248": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setConnected",
    },
    "5249": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5250": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5251": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "connected",
    },
    "5252": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setConnecting",
    },
    "5253": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5254": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5255": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "connecting",
    },
    "5256": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setTimestamp",
    },
    "5257": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5258": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5259": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "timestamp",
    },
    "5260": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.clearState",
    },
    "5261": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5262": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5263": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__object.connected",
    },
    "5264": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.hooks.ts",
      qualifiedName: "__object.connecting",
    },
    "5265": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.types.ts",
      qualifiedName: "UseEmitterOptionsType",
    },
    "5266": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.types.ts",
      qualifiedName: "__type",
    },
    "5267": {
      sourceFileName: "../packages/react/src/hooks/use-emitter/use-emitter.types.ts",
      qualifiedName: "__type.dependencyTracking",
    },
    "5268": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.hooks.ts",
      qualifiedName: "useAppManager",
    },
    "5269": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.hooks.ts",
      qualifiedName: "useAppManager",
    },
    "5270": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.hooks.ts",
      qualifiedName: "Client",
    },
    "5271": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.hooks.ts",
      qualifiedName: "client",
    },
    "5272": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "UseAppManagerReturnType",
    },
    "5273": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type",
    },
    "5274": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type.isFocused",
    },
    "5275": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type.isOnline",
    },
    "5276": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type.setOnline",
    },
    "5277": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type",
    },
    "5278": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type",
    },
    "5279": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "isOnline",
    },
    "5280": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type.setFocused",
    },
    "5281": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type",
    },
    "5282": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "__type",
    },
    "5283": {
      sourceFileName: "../packages/react/src/hooks/use-app-manager/use-app-manager.types.ts",
      qualifiedName: "isFocused",
    },
    "5288": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "UseRequestEventsDataMap",
    },
    "5289": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5290": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.unmount",
    },
    "5291": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "UseRequestEventsLifecycleMap",
    },
    "5292": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5293": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.unmount",
    },
    "5294": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "UseRequestEventsPropsType",
    },
    "5295": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5296": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.request",
    },
    "5297": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.dispatcher",
    },
    "5298": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.logger",
    },
    "5299": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.actions",
    },
    "5300": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.setCacheData",
    },
    "5301": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5302": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5303": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "cacheData",
    },
    "5304": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.getIsDataProcessing",
    },
    "5305": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5306": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5307": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "cacheKey",
    },
    "5308": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "T",
    },
    "5309": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "UseRequestEventsActionsType",
    },
    "5310": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5311": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.abort",
    },
    "5312": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5313": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5314": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onSuccess",
    },
    "5315": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5316": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5317": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5318": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onError",
    },
    "5319": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5320": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5321": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5322": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onAbort",
    },
    "5323": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5324": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5325": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5326": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onOfflineError",
    },
    "5327": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5328": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5329": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5330": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onFinished",
    },
    "5331": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5332": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5333": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5334": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onRequestStart",
    },
    "5335": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5336": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5337": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5338": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onResponseStart",
    },
    "5339": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5340": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5341": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5342": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onDownloadProgress",
    },
    "5343": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5344": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5345": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5346": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.onUploadProgress",
    },
    "5347": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5348": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5349": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "callback",
    },
    "5350": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "T",
    },
    "5351": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "UseRequestEventsReturnType",
    },
    "5352": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5353": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.addCacheDataListener",
    },
    "5354": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5355": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5356": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "request",
    },
    "5357": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.clearCacheDataListener",
    },
    "5358": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.addLifecycleListeners",
    },
    "5359": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5360": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5361": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "request",
    },
    "5362": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "requestId",
    },
    "5363": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "optimisticResult",
    },
    "5364": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.removeLifecycleListener",
    },
    "5365": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5366": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5367": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "requestId",
    },
    "5368": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.clearLifecycleListeners",
    },
    "5369": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5370": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5371": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "T",
    },
    "5372": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "CallbackParameters",
    },
    "5373": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5374": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.response",
    },
    "5375": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type.mutationContext",
    },
    "5376": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "Request",
    },
    "5377": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "Resp",
    },
    "5378": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "OnSuccessCallbackType",
    },
    "5379": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5380": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5381": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "params",
    },
    "5382": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "Request",
    },
    "5383": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "OnErrorCallbackType",
    },
    "5384": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5385": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5386": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "params",
    },
    "5387": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "Request",
    },
    "5388": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "OnFinishedCallbackType",
    },
    "5389": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5390": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5391": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "params",
    },
    "5392": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "Request",
    },
    "5393": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "OnStartCallbackType",
    },
    "5394": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5395": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5396": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "data",
    },
    "5397": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "Request",
    },
    "5398": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "OnProgressCallbackType",
    },
    "5399": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5400": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "__type",
    },
    "5401": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "data",
    },
    "5402": {
      sourceFileName: "../packages/react/src/helpers/use-request-events/use-request-events.types.ts",
      qualifiedName: "Request",
    },
    "5403": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.constants.ts",
      qualifiedName: "initialState",
    },
    "5408": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "UseTrackedStateProps",
    },
    "5409": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5410": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.request",
    },
    "5411": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.logger",
    },
    "5412": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.initialResponse",
    },
    "5413": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.dispatcher",
    },
    "5414": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.dependencyTracking",
    },
    "5415": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.deepCompare",
    },
    "5416": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.keepPreviousData",
    },
    "5417": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.disabled",
    },
    "5418": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.revalidate",
    },
    "5419": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "T",
    },
    "5420": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "UseTrackedStateReturn",
    },
    "5421": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5422": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setRenderKey",
    },
    "5423": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5424": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5425": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "renderKey",
    },
    "5426": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setCacheData",
    },
    "5427": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5428": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5429": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "cacheData",
    },
    "5430": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.getStaleStatus",
    },
    "5431": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5432": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5433": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.getIsDataProcessing",
    },
    "5434": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5435": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5436": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "cacheKey",
    },
    "5437": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "T",
    },
    "5438": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "UseTrackedStateType",
    },
    "5439": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5440": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.data",
    },
    "5441": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.error",
    },
    "5442": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.loading",
    },
    "5443": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.status",
    },
    "5444": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.extra",
    },
    "5445": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.success",
    },
    "5446": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.retries",
    },
    "5447": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.responseTimestamp",
    },
    "5448": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.requestTimestamp",
    },
    "5449": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "T",
    },
    "5450": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "UseTrackedStateActions",
    },
    "5451": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5452": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setData",
    },
    "5453": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5454": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5455": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "data",
    },
    "5456": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setError",
    },
    "5457": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5458": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5459": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "error",
    },
    "5460": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setLoading",
    },
    "5461": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5462": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5463": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "loading",
    },
    "5464": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setStatus",
    },
    "5465": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5466": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5467": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "status",
    },
    "5468": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setSuccess",
    },
    "5469": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5470": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5471": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "success",
    },
    "5472": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setExtra",
    },
    "5473": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5474": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5475": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "extra",
    },
    "5476": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setRetries",
    },
    "5477": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5478": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5479": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "retries",
    },
    "5480": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setResponseTimestamp",
    },
    "5481": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5482": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5483": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "timestamp",
    },
    "5484": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.setRequestTimestamp",
    },
    "5485": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5486": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5487": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "timestamp",
    },
    "5488": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type.clearState",
    },
    "5489": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5490": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "__type",
    },
    "5491": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.types.ts",
      qualifiedName: "T",
    },
    "5492": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getShouldClearState",
    },
    "5493": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getShouldClearState",
    },
    "5494": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "mode",
    },
    "5495": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "oldCacheKey",
    },
    "5496": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "newCacheKey",
    },
    "5497": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getDetailsState",
    },
    "5498": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getDetailsState",
    },
    "5499": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "state",
    },
    "5500": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "details",
    },
    "5501": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "isStaleCacheData",
    },
    "5502": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "isStaleCacheData",
    },
    "5503": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "staleTime",
    },
    "5504": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "staleTimestamp",
    },
    "5505": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getValidCacheData",
    },
    "5506": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getValidCacheData",
    },
    "5507": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "T",
    },
    "5508": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "request",
    },
    "5509": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "initialResponse",
    },
    "5510": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "cacheData",
    },
    "5511": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getTimestamp",
    },
    "5512": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getTimestamp",
    },
    "5513": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "timestamp",
    },
    "5514": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getIsInitiallyLoading",
    },
    "5515": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getIsInitiallyLoading",
    },
    "5516": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "T",
    },
    "5517": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__0",
    },
    "5518": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type",
    },
    "5519": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.queryKey",
    },
    "5520": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.dispatcher",
    },
    "5521": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.hasState",
    },
    "5522": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.revalidate",
    },
    "5523": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.disabled",
    },
    "5524": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getInitialState",
    },
    "5525": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "getInitialState",
    },
    "5526": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "T",
    },
    "5527": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__0",
    },
    "5528": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type",
    },
    "5529": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.initialResponse",
    },
    "5530": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.dispatcher",
    },
    "5531": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.request",
    },
    "5532": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.disabled",
    },
    "5533": {
      sourceFileName: "../packages/react/src/helpers/use-tracked-state/use-tracked-state.utils.ts",
      qualifiedName: "__type.revalidate",
    },
    "5534": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "useSocketState",
    },
    "5535": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "useSocketState",
    },
    "5536": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "DataType",
    },
    "5537": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "Socket",
    },
    "5538": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "socket",
    },
    "5539": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__1",
    },
    "5540": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object",
    },
    "5541": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setData",
    },
    "5542": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5543": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5544": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5545": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setExtra",
    },
    "5546": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5547": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5548": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "extra",
    },
    "5549": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setConnected",
    },
    "5550": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5551": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5552": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "connected",
    },
    "5553": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setConnecting",
    },
    "5554": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5555": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5556": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "connecting",
    },
    "5557": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setTimestamp",
    },
    "5558": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5559": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5560": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "timestamp",
    },
    "5561": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.clearState",
    },
    "5562": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5563": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5564": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object",
    },
    "5565": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onConnected",
    },
    "5566": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5567": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5568": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5569": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onDisconnected",
    },
    "5570": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5571": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5572": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5573": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onError",
    },
    "5574": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5575": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5576": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "ErrorType",
    },
    "5577": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5578": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5579": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5580": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "event",
    },
    "5581": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onConnecting",
    },
    "5582": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5583": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5584": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5585": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onReconnecting",
    },
    "5586": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5587": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5588": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5589": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5590": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5591": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5592": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5593": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type.attempts",
    },
    "5594": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.onReconnectingFailed",
    },
    "5595": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5596": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5597": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "callback",
    },
    "5598": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5599": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5600": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "data",
    },
    "5601": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type",
    },
    "5602": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__type.attempts",
    },
    "5603": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object",
    },
    "5604": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__object.setRenderKey",
    },
    "5605": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5606": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "__function",
    },
    "5607": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.hooks.ts",
      qualifiedName: "renderKey",
    },
    "5608": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "UseSocketStateType",
    },
    "5609": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "__type",
    },
    "5610": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "__type.data",
    },
    "5611": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "__type.extra",
    },
    "5612": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "__type.connected",
    },
    "5613": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "__type.connecting",
    },
    "5614": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "__type.timestamp",
    },
    "5615": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "Socket",
    },
    "5616": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "DataType",
    },
    "5617": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "UseSocketStateProps",
    },
    "5618": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "__type",
    },
    "5619": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.types.ts",
      qualifiedName: "__type.dependencyTracking",
    },
    "5620": {
      sourceFileName: "../packages/react/src/helpers/use-socket-state/use-socket-state.constants.ts",
      qualifiedName: "initialSocketState",
    },
    "5621": {
      sourceFileName: "../packages/react/src/provider/provider.tsx",
      qualifiedName: "Provider",
    },
    "5622": {
      sourceFileName: "../packages/react/src/provider/provider.tsx",
      qualifiedName: "Provider",
    },
    "5623": {
      sourceFileName: "../packages/react/src/provider/provider.tsx",
      qualifiedName: "__0",
    },
    "5624": {
      sourceFileName: "../packages/react/src/provider/provider.tsx",
      qualifiedName: "useProvider",
    },
    "5625": {
      sourceFileName: "../packages/react/src/provider/provider.tsx",
      qualifiedName: "useProvider",
    },
    "5626": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "ProviderOptionsType",
    },
    "5627": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type",
    },
    "5628": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.useFetchConfig",
    },
    "5629": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.useSubmitConfig",
    },
    "5630": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.useCacheConfig",
    },
    "5631": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.useQueueConfig",
    },
    "5632": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.useListener",
    },
    "5633": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.useEmitter",
    },
    "5634": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "ProviderProps",
    },
    "5635": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type",
    },
    "5636": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.children",
    },
    "5637": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.config",
    },
    "5638": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "ProviderValueType",
    },
    "5639": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type",
    },
    "5640": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.config",
    },
    "5641": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type.setConfig",
    },
    "5642": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type",
    },
    "5643": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "__type",
    },
    "5644": {
      sourceFileName: "../packages/react/src/provider/provider.types.ts",
      qualifiedName: "newConfig",
    },
    "5645": {
      sourceFileName: "../packages/react/src/utils/deep-equal.utils.ts",
      qualifiedName: "isEmpty",
    },
    "5646": {
      sourceFileName: "../packages/react/src/utils/deep-equal.utils.ts",
      qualifiedName: "isEmpty",
    },
    "5647": {
      sourceFileName: "../packages/react/src/utils/deep-equal.utils.ts",
      qualifiedName: "value",
    },
    "5648": {
      sourceFileName: "../packages/react/src/utils/deep-equal.utils.ts",
      qualifiedName: "isEqual",
    },
    "5649": {
      sourceFileName: "../packages/react/src/utils/deep-equal.utils.ts",
      qualifiedName: "isEqual",
    },
    "5650": {
      sourceFileName: "../packages/react/src/utils/deep-equal.utils.ts",
      qualifiedName: "firstValue",
    },
    "5651": {
      sourceFileName: "../packages/react/src/utils/deep-equal.utils.ts",
      qualifiedName: "secondValue",
    },
    "5652": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "getBounceData",
    },
    "5653": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "getBounceData",
    },
    "5654": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "bounceData",
    },
    "5655": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type",
    },
    "5656": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type.reset",
    },
    "5657": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type",
    },
    "5658": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type",
    },
    "5659": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type.active",
    },
    "5660": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type",
    },
    "5661": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type.reset",
    },
    "5662": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type",
    },
    "5663": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type",
    },
    "5664": {
      sourceFileName: "../packages/react/src/utils/bounce.utils.ts",
      qualifiedName: "__type.active",
    },
    "5665": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "createTrackedProxy",
    },
    "5666": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "createTrackedProxy",
    },
    "5667": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "T",
    },
    "5668": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "K",
    },
    "5669": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "target",
    },
    "5670": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "trackedKeys",
    },
    "5671": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "setRenderKey",
    },
    "5672": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "__type",
    },
    "5673": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "__type",
    },
    "5674": {
      sourceFileName: "../packages/react/src/utils/tracked-proxy.utils.ts",
      qualifiedName: "key",
    },
  },
};
