import React, { useEffect, useRef, useState, useCallback } from "react";
import { FadeIn } from "@site/src/components/fade-in/fade-in";
import { Title } from "@site/src/components";

interface CodeLine {
  text: string;
  type: "frontmatter" | "heading" | "text" | "import" | "empty";
}

interface PreviewBlock {
  appearsAt: number;
  content: React.ReactNode;
}

interface ShowcaseStep {
  label: string;
  code: CodeLine[];
  previewBlocks: PreviewBlock[];
}

const codeClass = "!text-violet-600 !text-xs font-semibold !bg-violet-50 px-1.5 py-0.5 rounded !border-0";

const MethodsTable = () => (
  <div className="w-full rounded-lg border border-slate-200 overflow-hidden">
    <table className="!w-full text-sm" style={{ display: "table", width: "100%" }}>
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Name</th>
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Returns</th>
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-slate-100">
          <td className="px-3 py-2"><code className={codeClass}>send()</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">Promise&lt;Response&gt;</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Execute the request</td>
        </tr>
        <tr className="border-b border-slate-100">
          <td className="px-3 py-2"><code className={codeClass}>abort()</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">void</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Cancel the request</td>
        </tr>
        <tr>
          <td className="px-3 py-2"><code className={codeClass}>clone()</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">Request</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Create a copy</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ParametersTable = () => (
  <div className="w-full rounded-lg border border-slate-200 overflow-hidden">
    <table className="!w-full text-sm" style={{ display: "table", width: "100%" }}>
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Name</th>
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Type</th>
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-slate-100">
          <td className="px-3 py-2">
            <code className={codeClass}>baseUrl</code>
            <span className="ml-1.5 text-[10px] text-red-500 font-medium">required</span>
          </td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">string</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Base URL for all requests</td>
        </tr>
        <tr className="border-b border-slate-100">
          <td className="px-3 py-2"><code className={codeClass}>timeout</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">number</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Request timeout in ms</td>
        </tr>
        <tr>
          <td className="px-3 py-2"><code className={codeClass}>headers</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">HeadersInit</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Default request headers</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ReturnsTable = () => (
  <div className="w-full rounded-lg border border-slate-200 overflow-hidden">
    <table className="!w-full text-sm" style={{ display: "table", width: "100%" }}>
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Property</th>
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Type</th>
          <th className="text-left px-3 py-2 text-slate-500 font-medium text-xs">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-slate-100">
          <td className="px-3 py-2"><code className={codeClass}>data</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">T | null</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Response data</td>
        </tr>
        <tr className="border-b border-slate-100">
          <td className="px-3 py-2"><code className={codeClass}>error</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">Error | null</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Request error</td>
        </tr>
        <tr className="border-b border-slate-100">
          <td className="px-3 py-2"><code className={codeClass}>loading</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">boolean</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Loading state</td>
        </tr>
        <tr>
          <td className="px-3 py-2"><code className={codeClass}>refetch</code></td>
          <td className="px-3 py-2 text-emerald-600 text-xs font-mono">() =&gt; Promise&lt;T&gt;</td>
          <td className="px-3 py-2 text-slate-600 text-xs">Re-run the query</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const steps: ShowcaseStep[] = [
  {
    label: "Methods",
    code: [
      { text: "---", type: "frontmatter" },
      { text: "title: Request", type: "frontmatter" },
      { text: "---", type: "frontmatter" },
      { text: "", type: "empty" },
      { text: "# Request", type: "heading" },
      { text: "", type: "empty" },
      { text: "The Request class handles all HTTP", type: "text" },
      { text: "communication with the server.", type: "text" },
      { text: "", type: "empty" },
      { text: "## Methods", type: "heading" },
      { text: "", type: "empty" },
      { text: "(@import core Request type=methods&display=table)", type: "import" },
    ],
    previewBlocks: [
      {
        appearsAt: 5,
        content: <h1 className="text-2xl font-bold text-slate-800 mb-3">Request</h1>,
      },
      {
        appearsAt: 7,
        content: (
          <p className="text-slate-600 text-[15px] mb-6 leading-relaxed">
            The Request class handles all HTTP communication with the server.
          </p>
        ),
      },
      {
        appearsAt: 10,
        content: <h2 className="text-lg font-bold text-slate-800 mb-4">Methods</h2>,
      },
      {
        appearsAt: 12,
        content: <MethodsTable />,
      },
    ],
  },
  {
    label: "Parameters",
    code: [
      { text: "---", type: "frontmatter" },
      { text: "title: Client", type: "frontmatter" },
      { text: "---", type: "frontmatter" },
      { text: "", type: "empty" },
      { text: "# Client", type: "heading" },
      { text: "", type: "empty" },
      { text: "Create a new client instance to manage", type: "text" },
      { text: "your API connections.", type: "text" },
      { text: "", type: "empty" },
      { text: "## Parameters", type: "heading" },
      { text: "", type: "empty" },
      { text: "(@import core createClient type=parameters&display=table)", type: "import" },
    ],
    previewBlocks: [
      {
        appearsAt: 5,
        content: <h1 className="text-2xl font-bold text-slate-800 mb-3">Client</h1>,
      },
      {
        appearsAt: 7,
        content: (
          <p className="text-slate-600 text-[15px] mb-6 leading-relaxed">
            Create a new client instance to manage your API connections.
          </p>
        ),
      },
      {
        appearsAt: 10,
        content: <h2 className="text-lg font-bold text-slate-800 mb-4">Parameters</h2>,
      },
      {
        appearsAt: 12,
        content: <ParametersTable />,
      },
    ],
  },
  {
    label: "Returns",
    code: [
      { text: "---", type: "frontmatter" },
      { text: "title: useFetch", type: "frontmatter" },
      { text: "---", type: "frontmatter" },
      { text: "", type: "empty" },
      { text: "# useFetch", type: "heading" },
      { text: "", type: "empty" },
      { text: "A React hook for data fetching with", type: "text" },
      { text: "built-in caching and refetching.", type: "text" },
      { text: "", type: "empty" },
      { text: "## Return Type", type: "heading" },
      { text: "", type: "empty" },
      { text: "(@import react useFetch type=returns&display=table)", type: "import" },
    ],
    previewBlocks: [
      {
        appearsAt: 5,
        content: <h1 className="text-2xl font-bold text-slate-800 mb-3">useFetch</h1>,
      },
      {
        appearsAt: 7,
        content: (
          <p className="text-slate-600 text-[15px] mb-6 leading-relaxed">
            A React hook for data fetching with built-in caching and refetching.
          </p>
        ),
      },
      {
        appearsAt: 10,
        content: <h2 className="text-lg font-bold text-slate-800 mb-4">Return Type</h2>,
      },
      {
        appearsAt: 12,
        content: <ReturnsTable />,
      },
    ],
  },
];

const STEP_DURATION = 8000;

const CodeLineRenderer = ({ line, visible }: { line: CodeLine; visible: boolean }) => {
  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(4px)",
    transition: "opacity 0.25s ease, transform 0.25s ease",
  };

  if (line.type === "empty") {
    return <div style={style} className="h-[1.6em]" />;
  }

  if (line.type === "frontmatter") {
    return (
      <div style={style} className="text-slate-400 text-[13px] font-mono">
        {line.text}
      </div>
    );
  }

  if (line.type === "heading") {
    const level = line.text.startsWith("# ") ? "text-[15px] font-bold" : "text-[14px] font-semibold";
    return (
      <div style={style} className={`text-slate-700 ${level}`}>
        {line.text}
      </div>
    );
  }

  if (line.type === "import") {
    return (
      <div style={style} className="relative mt-1">
        <div className="text-[11px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mb-1 tracking-wide">
          Auto-generated from your TypeScript source
        </div>
        <div className="inline-block bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200/60 rounded-md px-2.5 py-1 font-mono text-[12px] text-blue-700 showcase-import-highlight">
          {line.text}
        </div>
      </div>
    );
  }

  return (
    <div style={style} className="text-slate-600 text-[14px] leading-relaxed">
      {line.text}
    </div>
  );
};

const PreviewBlockRenderer = ({ block, visibleLines }: { block: PreviewBlock; visibleLines: number }) => {
  const isVisible = visibleLines >= block.appearsAt;

  return (
    <div
      className="w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {block.content}
    </div>
  );
};

export const Showcase = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scheduleNext = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setIsTransitioning(true);
      timerRef.current = setTimeout(() => {
        setVisibleLines(0);
        setActiveStep((prev) => (prev + 1) % steps.length);
        setIsTransitioning(false);
      }, 400);
    }, STEP_DURATION);
  }, [clearTimer]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const totalLines = steps[activeStep].code.length;
    let current = 0;
    setVisibleLines(0);

    const lineInterval = setInterval(() => {
      current += 1;
      setVisibleLines(current);
      if (current >= totalLines) {
        clearInterval(lineInterval);
      }
    }, 120);

    scheduleNext();

    return () => {
      clearInterval(lineInterval);
      clearTimer();
    };
  }, [activeStep, isVisible, scheduleNext, clearTimer]);

  const handleStepClick = (index: number) => {
    if (index === activeStep) return;
    clearTimer();

    setIsTransitioning(true);
    timerRef.current = setTimeout(() => {
      setVisibleLines(0);
      setActiveStep(index);
      setIsTransitioning(false);
    }, 400);
  };

  const currentStep = steps[activeStep];

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex font-medium bg-clip-text !text-transparent bg-gradient-to-r from-blue-500 to-pink-500 pb-3">
              See it in action
            </div>
            <Title wrapperClass="h2 bg-clip-text !text-transparent bg-gradient-to-r from-slate-600/60 via-slate-800 to-slate-600/60 pb-4">
              One directive. Live docs.
            </Title>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Write a single <code className="!text-pink-500 !bg-pink-50 !border !border-pink-200/50 px-1.5 py-0.5 rounded text-sm font-mono">@import</code> in your MDX
              and get always-current API documentation rendered on every build.
            </p>
          </div>
        </FadeIn>

        {/* Step selector pills */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-2 mb-10">
            {steps.map((step, index) => (
              <button
                key={step.label}
                type="button"
                onClick={() => handleStepClick(index)}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${activeStep === index
                    ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-md shadow-blue-500/20"
                    : "text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200"
                  }
                `}
              >
                {step.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Main showcase panel */}
        <FadeIn delay={0.15} translateY={40}>
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center px-4 py-2.5 border-b border-slate-100 bg-slate-50/80">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-6 text-xs text-slate-400">
                  <span className="font-medium text-slate-600">Source</span>
                  <span className="w-px h-3 bg-slate-200" />
                  <span className="font-medium text-slate-600">Preview</span>
                </div>
              </div>
              <div className="w-[42px]" />
            </div>

            {/* Content split */}
            <div className="grid md:grid-cols-2 min-h-[380px]">
              {/* Left: Code editor */}
              <div className="relative border-r border-slate-100 p-6 md:p-8 bg-white">
                <div className="space-y-0.5">
                  {currentStep.code.map((line, index) => (
                    <CodeLineRenderer
                      key={`${activeStep}-${index}`}
                      line={line}
                      visible={!isTransitioning && index < visibleLines}
                    />
                  ))}
                  {/* Blinking cursor */}
                  <div
                    style={{
                      opacity: !isTransitioning && visibleLines >= currentStep.code.length ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <span className="showcase-cursor" />
                  </div>
                </div>
              </div>

              {/* Right: Preview */}
              <div className="relative p-6 md:p-8 bg-slate-50/50">
                <div
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transition: "opacity 0.35s ease",
                  }}
                >
                  {currentStep.previewBlocks.map((block, index) => (
                    <PreviewBlockRenderer
                      key={`${activeStep}-preview-${index}`}
                      block={block}
                      visibleLines={visibleLines}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-[2px] bg-slate-100 relative overflow-hidden">
              <div
                key={activeStep}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-violet-500 showcase-progress"
                style={{ animationDuration: `${STEP_DURATION}ms` }}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
