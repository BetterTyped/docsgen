/* eslint-disable jsx-a11y/anchor-is-valid */
import { Description, Title } from "@site/src/components";

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
            <div className="absolute inset-0 translate-z-0 dark:bg-blue-500 bg-blue-300 rounded-full blur-[120px] opacity-70" />
            <div className="absolute w-1/4 h-1/4 translate-z-0 dark:bg-blue-400 bg-blue-200 rounded-full blur-[40px]" />
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
                className="dark:fill-blue-700 fill-blue-200"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="inline-flex font-medium bg-clip-text !text-transparent bg-gradient-to-r from-blue-500 to-pink-500 dark:from-blue-500 dark:to-blue-200 pb-3">
                Start today
              </div>
            </div>
            <Title className="h2 bg-clip-text !text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Build with{" "}
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
              Try it for yourself! Start coding for free and upgrade anytime.
            </Description>
            <div>
              <a
                href="https://share-eu1.hsforms.com/1qvuH3v9FQbG6q2oZ-8D7PQ2dk74d"
                className="hover:opacity-70 !no-underline bg-gradient-to-b dark:from-40% dark:from-slate-50 dark:to-slate-200 from-20% from-slate-600 to-slate-900 text-white dark:text-black font-semibold rounded-xl max-w-full border text-center py-3 px-10"
              >
                Contact us <span className="ml-2">💬</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
