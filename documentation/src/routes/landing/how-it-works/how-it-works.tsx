import React, { useEffect, useRef, useState } from "react";
import { FadeIn } from "@site/src/components/fade-in/fade-in";
import { Title } from "@site/src/components";
import { ScanSearch, MessageSquareCode, LayoutTemplate, Paintbrush, Puzzle } from "lucide-react";

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  hoverBorder: string;
  code: React.ReactNode;
}

const c = {
  keyword: "text-purple-400",
  type: "text-emerald-400",
  iface: "text-yellow-300",
  prop: "text-blue-300",
  string: "text-amber-300",
  punct: "text-slate-500",
  comment: "text-slate-600",
  fn: "text-blue-400",
  tag: "text-red-400",
  attr: "text-violet-300",
  variable: "text-slate-300",
  special: "text-pink-400",
};

const hl = "-mx-4 px-4 bg-white/[0.04] rounded";

const steps: Step[] = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Zero manual API docs",
    description:
      "Point docsgen at your TypeScript source and it extracts every type, interface, class, and function automatically. You never write or update API reference pages by hand again.",
    accent: "text-blue-500",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    hoverBorder: "hover:border-blue-400/60",
    code: (
      <>
        <div className={c.comment}>{"// Your source code"}</div>
        <div className={hl}>
          <span className={c.keyword}>export </span>
          <span className={c.keyword}>interface </span>
          <span className={c.iface}>Client</span>
          <span className={c.punct}>{" {"}</span>
        </div>
        <div>
          <span className={c.punct}>{"  "}</span>
          <span className={c.prop}>baseUrl</span>
          <span className={c.punct}>: </span>
          <span className={c.type}>string</span>
          <span className={c.punct}>;</span>
        </div>
        <div>
          <span className={c.punct}>{"  "}</span>
          <span className={c.prop}>timeout</span>
          <span className={c.punct}>?: </span>
          <span className={c.type}>number</span>
          <span className={c.punct}>;</span>
        </div>
        <div>
          <span className={c.punct}>{"  "}</span>
          <span className={c.fn}>send</span>
          <span className={c.punct}>(</span>
          <span className={c.variable}>req</span>
          <span className={c.punct}>: </span>
          <span className={c.iface}>Request</span>
          <span className={c.punct}>): </span>
          <span className={c.iface}>{"Promise<Response>"}</span>
          <span className={c.punct}>;</span>
        </div>
        <div className={c.punct}>{"}"}</div>
        <div className="h-2" />
        <div className={c.comment}>{"↓  Full type reflection generated"}</div>
      </>
    ),
  },
  {
    number: "02",
    icon: MessageSquareCode,
    title: "Comments become docs",
    description:
      "Your TSDoc comments flow directly into the final documentation. We extended the TSDoc format with custom tags and badges so you can enrich your API docs without leaving your source code.",
    accent: "text-violet-500",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    hoverBorder: "hover:border-violet-400/60",
    code: (
      <>
        <div className={c.comment}>{"/**"}</div>
        <div className={`${c.comment} ${hl}`}>{" * Sends the request to the server."}</div>
        <div className={`${c.comment} ${hl}`}>{" * @remarks Retries up to 3 times on failure"}</div>
        <div className={`${c.comment} ${hl}`}>{" * @badge beta"}</div>
        <div className={`${c.comment} ${hl}`}>{" * @badge server-only"}</div>
        <div className={c.comment}>{" */"}</div>
        <div>
          <span className={c.keyword}>async </span>
          <span className={c.fn}>send</span>
          <span className={c.punct}>{"("}</span>
          <span className={c.variable}>req</span>
          <span className={c.punct}>{": "}</span>
          <span className={c.iface}>Request</span>
          <span className={c.punct}>{"): "}</span>
          <span className={c.iface}>{"Promise<Response>"}</span>
        </div>
        <div className="h-2" />
        <div className={c.comment}>{"↓  Descriptions, badges & tags in your docs"}</div>
      </>
    ),
  },
  {
    number: "03",
    icon: LayoutTemplate,
    title: "Arrange it your way",
    description:
      "Control the layout, ordering, and structure of every page. Use page templates, mapper functions, and configuration to make docs fit your project, not the other way around.",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-400/60",
    code: (
      <>
        <div className={c.comment}>{"// Full control over structure"}</div>
        <div className={c.punct}>{"{"}</div>
        <div>
          <span className={c.punct}>{"  "}</span>
          <span className={c.prop}>pages</span>
          <span className={c.punct}>{": {"}</span>
        </div>
        <div className={hl}>
          <span className={c.punct}>{"    "}</span>
          <span className={c.prop}>class</span>
          <span className={c.punct}>{": "}</span>
          <span className={c.iface}>ClassTemplate</span>
          <span className={c.punct}>,</span>
        </div>
        <div className={hl}>
          <span className={c.punct}>{"    "}</span>
          <span className={c.prop}>function</span>
          <span className={c.punct}>{": "}</span>
          <span className={c.iface}>FunctionTemplate</span>
          <span className={c.punct}>,</span>
        </div>
        <div>
          <span className={c.punct}>{"  },"}</span>
        </div>
        <div>
          <span className={c.punct}>{"  "}</span>
          <span className={c.prop}>sidebar</span>
          <span className={c.punct}>{": { "}</span>
          <span className={c.prop}>category</span>
          <span className={c.punct}>{": "}</span>
          <span className={c.string}>{'"API"'}</span>
          <span className={c.punct}>{" }"}</span>
        </div>
        <div className={c.punct}>{"}"}</div>
      </>
    ),
  },
  {
    number: "04",
    icon: Paintbrush,
    title: "Style it your way",
    description:
      "Every generated element has CSS classes you can override. Swap built-in components for your own, theme with your design system, or restyle individual sections - your docs, your brand.",
    accent: "text-pink-500",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/20",
    hoverBorder: "hover:border-pink-400/60",
    code: (
      <>
        <div className={c.comment}>{"/* Override any generated element */"}</div>
        <div>
          <span className={c.tag}>.api-docs__table </span>
          <span className={c.punct}>{"{"}</span>
        </div>
        <div className={hl}>
          <span className={c.punct}>{"  "}</span>
          <span className={c.prop}>border-radius</span>
          <span className={c.punct}>{": "}</span>
          <span className={c.string}>12px</span>
          <span className={c.punct}>;</span>
        </div>
        <div className={hl}>
          <span className={c.punct}>{"  "}</span>
          <span className={c.prop}>background</span>
          <span className={c.punct}>{": "}</span>
          <span className={c.string}>var(--your-bg)</span>
          <span className={c.punct}>;</span>
        </div>
        <div className={c.punct}>{"}"}</div>
        <div className="h-2" />
        <div className={c.comment}>{"// Or replace entire components"}</div>
        <div>
          <span className={c.keyword}>{"const "}</span>
          <span className={c.fn}>MyMethodCard</span>
          <span className={c.punct}>{" = ("}</span>
          <span className={c.variable}>props</span>
          <span className={c.punct}>{") => ("}</span>
        </div>
        <div className={hl}>
          <span className={c.punct}>{"  "}</span>
          <span className={c.tag}>{"<Card "}</span>
          <span className={c.attr}>variant</span>
          <span className={c.punct}>{"="}</span>
          <span className={c.string}>{'"glass"'}</span>
          <span className={c.tag}>{">"}</span>
          <span className={c.punct}>{"..."}</span>
          <span className={c.tag}>{"</Card>"}</span>
        </div>
        <div className={c.punct}>{")"}</div>
      </>
    ),
  },
];

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeIn delay={index * 0.1} translateY={30} className="h-full">
      <div
        ref={ref}
        className={`
          group relative rounded-2xl border border-slate-200 bg-white h-full
          overflow-hidden transition-colors duration-300 flex flex-col
          ${step.hoverBorder}
        `}
      >
        <div className="p-6 md:p-8 flex flex-col flex-1">
          {/* Step number + icon */}
          <div className="flex items-center gap-3 mb-5">
            <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${step.accentBg} ${step.accentBorder} border`}>
              <step.icon className={`w-5 h-5 ${step.accent}`} />
            </div>
            <span className={`text-xs font-bold tracking-widest uppercase ${step.accent}`}>
              Step {step.number}
            </span>
          </div>

          {/* Title + description */}
          <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
          <p className="text-[15px] text-slate-500 leading-relaxed mb-6">{step.description}</p>

          {/* Code preview */}
          <div
            className={`
              rounded-xl bg-slate-900 p-4 font-mono text-[12px] leading-relaxed [&_div]:text-[12px] [&_span]:text-[12px]
              transition-all duration-500 overflow-hidden flex-1 whitespace-pre
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
          >
            {step.code}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export const HowItWorks = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-blue-50 via-transparent to-violet-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex font-medium bg-clip-text !text-transparent bg-gradient-to-r from-blue-500 to-pink-500 pb-3">
              How it works
            </div>
            <Title wrapperClass="h2 bg-clip-text !text-transparent bg-gradient-to-r from-slate-600/60 via-slate-800 to-slate-600/60 pb-4">
              From source code to docs
            </Title>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We start with a full TypeScript reflection of your project, enhance it with
              purpose-built components, and give you complete control over the result.
            </p>
          </div>
        </FadeIn>

        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[260px] bottom-[100px] w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -z-10" />

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
