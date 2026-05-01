/* eslint-disable react/no-array-index-key */
import { Particles } from "@site/src/components/particles";
import { Highlighter, HighlighterItem } from "@site/src/components/highlighter";
import { FadeIn } from "@site/src/components/fade-in/fade-in";
import { Description, Title } from "@site/src/components";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { FileText, RefreshCw, Layers, Settings, Code2, BookOpen } from "lucide-react";

const features = [
  {
    name: "Always Up-to-Date",
    description: "Docs auto-update when you change code. Rename a parameter, add a method - the docs reflect it on the next build.",
    icon: RefreshCw,
  },
  {
    name: "@import Directive",
    description: "Embed live API fragments - method tables, parameter lists, type definitions - directly in your hand-written MDX.",
    icon: FileText,
  },
  {
    name: "Monorepo Support",
    description: "Generate docs for every package in a monorepo with cross-package type linking and a shared index page.",
    icon: Layers,
  },
  {
    name: "Fully Customizable",
    description: "Control output with mapper functions, page templates, JSDoc tags, and per-package configuration.",
    icon: Settings,
  },
  {
    name: "TypeDoc Powered",
    description: "Built on TypeDoc for reliable TypeScript parsing. Supports generics, overloads, decorators, and complex type hierarchies.",
    icon: Code2,
  },
  {
    name: "MDX Generation",
    description: "Generates clean MDX files with frontmatter, sidebar metadata, and Docusaurus-compatible category files.",
    icon: BookOpen,
  },
];

export const Summary = () => {
  return (
    <section className="relative pb-20">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-20">
          <div className="">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <div className="relative">
                <div className="sticky top-0">
                  <FadeIn>
                    <div className="inline-flex font-medium bg-clip-text !text-transparent bg-gradient-to-r from-blue-500 to-pink-500 pb-3">
                      Living documentation
                    </div>
                  </FadeIn>
                  <h2 className="h2 pb-2 flex justify-center flex-col md:flex-row gap-2">
                    <FadeIn delay={0.05}>
                      <Title as="span" size="lg">
                        Write once.
                      </Title>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <Title as="span" size="lg">
                        Stay current.
                      </Title>
                    </FadeIn>
                  </h2>
                </div>
              </div>
              <FadeIn delay={0.15}>
                <p className="text-lg text-slate-400">
                  You write the narrative. The code provides the details. Docsgen bridges the gap so your documentation
                  never falls out of sync.
                </p>
              </FadeIn>
            </div>
          </div>
          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl pointer-events-none opacity-50"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  className="fill-blue-300"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 - Living Docs */}
              <FadeIn className="w-[100%] overflow-hidden md:col-span-12" translateY={40}>
                <Link to="/docs/getting-started" className="!no-underline">
                  <HighlighterItem>
                    <div className="relative bg-slate-50 h-full rounded-[inherit] z-20 overflow-hidden">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div
                          className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 bg-blue-300 rounded-full blur-[120px] opacity-70" />
                          <div className="absolute w-1/4 h-1/4 translate-z-0 bg-blue-200 rounded-full blur-[40px]" />
                        </div>
                        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                          <div className="mb-5">
                            <div>
                              <Title
                                size="none"
                                wrapperClass="inline-flex flex-wrap font-bold pb-1"
                                className="text-3xl"
                              >
                                Docs that never go stale
                              </Title>
                              <Description size="none">
                                Your hand-written guides stay accurate because the technical details - method tables,
                                parameter types, return values - are pulled directly from your TypeScript source on
                                every build.
                              </Description>
                            </div>
                          </div>
                          <div>
                            <div className="btn-sm text-slate-800 hover:text-black transition duration-150 ease-in-out group relative">
                              <span className="relative inline-flex items-center">
                                Learn more{" "}
                                <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                  →
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="relative w-full md:w-1/2 overflow-hidden p-6 md:p-8">
                          <div className="bg-slate-900 rounded-xl p-5 text-xs font-mono text-slate-300 leading-relaxed">
                            <div className="text-slate-500 text-xs">{"// your-docs/request.mdx"}</div>
                            <div className="mt-2">
                              <span className="text-blue-400 text-xs">## Methods</span>
                            </div>
                            <div className="mt-1 text-xs whitespace-nowrap">
                              <span className="text-pink-400 text-xs">{"(@import core Request "}</span>
                              <span className="text-pink-500 text-xs">{"type=methods&display=table)"}</span>
                            </div>
                            <div className="mt-3 text-slate-500 text-xs">{"// Auto-generated on build"}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                </Link>
              </FadeIn>
              {/* Box #2 - Type Safety */}
              <FadeIn className="w-[100%] overflow-hidden md:col-span-7" translateY={40} delay={0.1}>
                <Link to="/docs/core" className="!no-underline">
                  <HighlighterItem>
                    <div className="relative bg-slate-50 h-full rounded-[inherit] z-20 overflow-hidden">
                      <div className="flex flex-col">
                        <div
                          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 bg-slate-300 rounded-full blur-[80px]" />
                        </div>
                        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                          <div>
                            <Title size="none" wrapperClass="inline-flex flex-wrap font-bold pb-1" className="text-2xl">
                              Built on TypeDoc
                            </Title>
                            <Description size="none" className="text-slate-400">
                              Parses your TypeScript with full type resolution - generics, overloads,
                              cross-package references, complex type hierarchies. If TypeScript understands it,
                              docsgen documents it.
                            </Description>
                          </div>
                        </div>
                        <div className="relative w-full overflow-hidden md:pb-8 -mt-2 px-6 md:px-8">
                          <div className="bg-slate-900 rounded-xl p-5 text-sm font-mono text-slate-300 leading-relaxed">
                            <div className="text-slate-500">{"// TypeDoc → Docsgen"}</div>
                            <div className="mt-2">
                              <span className="text-pink-400">{"interface "}</span>
                              <span className="text-blue-300">{"Request"}</span>
                              <span className="text-slate-400">{"<T>"}</span>
                              <span>{" {"}</span>
                            </div>
                            <div className="ml-4">
                              <span className="text-emerald-400">send</span>
                              <span className="text-slate-400">{"(data: T): "}</span>
                              <span className="text-blue-300">Promise</span>
                              <span className="text-slate-400">{"<Response>"}</span>
                            </div>
                            <div>{"}"}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                </Link>
              </FadeIn>
              {/* Box #3 - Open Source */}
              <FadeIn className="w-[100%] overflow-hidden md:col-span-5" translateY={40} delay={0.2}>
                <a href="https://github.com/BetterTyped/docsgen" className="!no-underline">
                  <HighlighterItem>
                    <div className="relative bg-slate-50 h-full rounded-[inherit] z-20 overflow-hidden">
                      <div className="flex flex-col">
                        <div
                          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                          aria-hidden="true"
                        >
                          <div className="absolute inset-0 translate-z-0 bg-slate-300 rounded-full blur-[80px]" />
                        </div>
                        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                          <div>
                            <Title size="none" wrapperClass="inline-flex flex-wrap font-bold pb-1" className="text-2xl">
                              Open source
                            </Title>
                            <Description size="none" className="text-slate-400">
                              Apache-2.0 licensed. Contribute, raise issues, and submit pull requests on GitHub.
                            </Description>
                          </div>
                        </div>
                        <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                          <img
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                            src={useBaseUrl("/img/feature-image-03.png")}
                            width={230}
                            height={230}
                            alt="Feature 03"
                          />
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                </a>
              </FadeIn>
            </Highlighter>
          </div>

          {/* Features list */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="flex items-center space-x-2 mb-1">
                  <feature.icon className="w-4 h-4 text-blue-500" />
                  <h6 className="font-medium text-slate-900">{feature.name}</h6>
                </div>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
