import { Title } from "@site/src/components";
import { Cards } from "./cards";

export const Modules = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text !text-transparent bg-gradient-to-r from-blue-500 to-pink-500 pb-3">
                Explore the packages
              </div>
            </div>
            <Title wrapperClass="h2 bg-clip-text !text-transparent bg-gradient-to-r from-slate-600/60 via-slate-800 to-slate-600/60 pb-4">
              Everything you need
            </Title>
            <p className="text-lg text-slate-400">
              A modular toolkit for generating, embedding, and maintaining TypeScript documentation
              that stays in sync with your codebase.
            </p>
          </div>

          <div className="relative mb-20">
            <Cards />
          </div>
        </div>
      </div>
    </section>
  );
};
