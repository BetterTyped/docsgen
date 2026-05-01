/* eslint-disable jsx-a11y/anchor-is-valid */
import { Description, Title } from "@site/src/components";
import Link from "@docusaurus/Link";

export const CallToAction = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="relative px-8 py-12 md:py-20 overflow-hidden">
          {/* Radial gradient */}
          <div
            className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square max-w-[80vw]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-blue-300 rounded-full blur-[120px] opacity-70" />
            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-blue-200 rounded-full blur-[40px]" />
          </div>
          {/* Blurred shape */}
          <div
            className="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stopColor="#556bf7" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="fill-blue-200"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="inline-flex font-medium bg-clip-text !text-transparent bg-gradient-to-r from-blue-500 to-pink-500 pb-3">
                Get started
              </div>
            </div>
            <Title className="h2 bg-clip-text !text-transparent bg-gradient-to-r from-slate-600/60 via-slate-800 to-slate-600/60 pb-4">
              Try{" "}
              <span
                className="font-bold bg-clip-text bg-gradient-to-r !text-transparent from-blue-600 to-pink-500"
                style={{
                  fontSize: "inherit",
                }}
              >
                Docsgen
              </span>
            </Title>
            <Description className="text-lg text-slate-400 mb-8">
              Open source and free. Set up in minutes, keep your docs accurate forever.
            </Description>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/docs/getting-started"
                className="hover:opacity-70 !no-underline bg-gradient-to-b from-20% from-slate-600 to-slate-900 text-white font-semibold rounded-xl max-w-full border text-center py-3 px-10"
              >
                Read the docs
              </Link>
              <a
                href="https://github.com/BetterTyped/docsgen"
                className="hover:opacity-70 !no-underline bg-white text-slate-800 font-semibold rounded-xl max-w-full border border-slate-300 text-center py-3 px-10"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
