import { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Showcase } from "./showcase";
import { Summary } from "./summary";
import { CallToAction } from "./call-to-action";
import { Modules } from "./modules/modules";
import { Clients } from "./clients";
import { Sponsors } from "./sponsors/sponsors";

export const Landing = () => {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Docs that live with your code" description={siteConfig.tagline}>
      <div className="w-[100vw] max-w-[100vw]" style={{ contain: "layout" }}>
        <div className="relative z-2">
          <Hero />
          <Clients />
          <HowItWorks />
          <Showcase />
          <Modules />
          <Summary />
          <Sponsors />
          <CallToAction />
        </div>
      </div>
    </Layout>
  );
};
