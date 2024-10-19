/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Title } from "@site/src/components/title";
import { Particles } from "@site/src/components/particles";
import { Description } from "@site/src/components";
import Link from "@docusaurus/Link";
import { useClipboard, useIsMounted, useWindowSize } from "@reins/hooks";
import { useState } from "react";
import { Badge } from "@site/src/components/badge/badge";
import { Copy, Star } from "lucide-react";

const installationCommand = "npx create @reins/app@latest";

const reactLogo = "/icons/react.svg";
const stylexLogo = "/icons/stylex.svg";
const hfLogo = "/icons/hf.svg";

const items = [
  { src: reactLogo, name: "React" },
  { src: stylexLogo, name: "Stylex" },
  { src: hfLogo, name: "HyperFetch" },
];

export const Hero = () => {
  const isMounted = useIsMounted();
  const [done, setDone] = useState(false);
  const [width] = useWindowSize();

  const { copy } = useClipboard({
    onSuccess: () => {
      setDone(true);
      setTimeout(() => {
        if (isMounted) {
          setDone(false);
        }
      }, 1000);
    },
    onError: () => {},
  });

  return (
    <section className="relative w-[100vw] h-fit md:h-[calc(100vh-88px)] max-w-[100vw] text-center">
      {/* Illustration */}
      <div className="absolute w-[100vw] h-full pointer-events-none overflow-hidden p-10 opacity-20" aria-hidden="true">
        <div className="absolute left-1/4 -translate-x-1/2 bottom-0 -z-10">
          {/* <Glow /> */}
        </div>
      </div>
      {/* Particles animation */}
      <Particles className="absolute inset-0 -z-10" quantity={width > 767 ? 40 : 30} />

      {/* Hero content */}
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center h-full px-6">

        <div className="text-5xl md:text-7xl lg:text-[5rem] font-bold !text-pink-500 mb-4">
          Docsgen
        </div>
        <Title
          as="h1"
          size="none"
          className="text-4xl md:text-6xl lg:text-[3.5rem]"
          wrapperClass="mt-3 md:mb-4 mb-0 md:mt-6 w-[800px] max-w-[90vw] text-[44px] !text-transparent text-center leading-[1.1] md:!leading-[1.3]"
        >
          Generate docs from your typescript code
        </Title>
        <Description
          size="none"
          className="mb-3 md:mb-8 text-lg md:text-lg lg:text-2xl text-slate-300 dark:text-[#ababab] text-center !leading-[1.28]"
        >
         Easy to{" "}
          <span className="text-black dark:text-white" style={{ fontSize: "inherit" }}>
            integrate
          </span>{" "}
         and compatible with{" "}
          <span className="text-black dark:text-white" style={{ fontSize: "inherit" }}>
            Docusaurus
          </span>
          .
        </Description>
        <div className="flex mb-3 md:mb-10 mt-2 md:mt-6 gap-4 md:gap-8 flex-wrap justify-center">
          {items.map((item, index) => (
            <div key={index} className="flex gap-1 md:gap-2 items-start text-sm md:text-md">
              <img src={item.src} alt={item.name} className="w-4 h-4 md:w-6 md:h-6 dark:invert" />
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4 md:mt-10 flex-col md:flex-row justify-center mb-8">
          <Link
            to="docs/documentation"
            className="!no-underline bg-gradient-to-br justify-center from-blue-500 via-blue-600 to-blue-500 text-white font-semibold rounded-xl p-[2px] max-w-full text-left text-sm md:text-md py-3 px-5 md:py-3 md:px-10 flex items-start hover:from-blue-400 hover:to-blue-400 dark:hover:from-blue-100 dark:hover:to-blue-100 hover:text-white dark:hover:text-black transition-all"
          >
            Get Started
          </Link>
          <div className="relative">
            <button
              type="button"
              onClick={() => copy(installationCommand)}
              className="group btn-sm inline-flex items-start !px-5 !py-3 w-fit shiny-btn"
            >
              {!done && (
                <span className="text-sm group-hover:dark:text-white group-hover:text-black transition duration-150 ease-in-out">
                  some command
                </span>
              )}
              {done && <span className="text-sm">Copied to clipboard!</span>}
              <Copy className="w-[15px] ml-2 fill-blue-500 transition duration-150 ease-in-out" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
