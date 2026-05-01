import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";
import fs from "fs";
import { importer, type PackageOptions } from "@docsgen/core";
import plugin from "@docsgen/docusaurus";

import docsVersions from "./versions.json";

const getVersions = () => {
  const latestVersion = docsVersions[0] || "v0.0.0";
  const latestMajor = latestVersion[1];
  const versionsCount = Number(latestMajor) + 1;
  const versions: Record<string, { label?: string; path?: string; noIndex?: boolean }> = {
    current: { label: `v${latestMajor}.0.0`, path: "" },
  };

  Array(versionsCount)
    .fill(0)
    .forEach((_, index) => {
      const version = index + 1;

      if (versionsCount === version) {
        versions.current = {
          label: `v${version}.0.0`,
          path: "",
        };
      } else {
        versions[`v${version}.0.0`] = {
          noIndex: true,
        };
      }
    });

  return versions;
};

const apiDocs = "api";
const apiDocsDir = "docs/api";

const getPackagesList = (): PackageOptions[] => {
  const dirPath = path.join(__dirname, "../packages");
  const result: string[] = fs
    .readdirSync(dirPath)
    .filter((p) => ![".DS_Store", "css"].includes(p))
    .map((filePath) => {
      return path.join(dirPath, filePath);
    });

  return result
    .filter((item) => !item.includes("tokens"))
    .map((dir) => {
      const dirName = dir.split("/").pop() as string;
      const title = dirName;

      if (["hooks", "ui"].includes(dirName)) {
        return {
          title,
          dir,
          entryPath: "src/index.ts",
          tsconfigDir: dir,
          addPackagePage: false,
          generateMdx: true,
          outDir: `docs/${dirName}`,
          // If we generate mdx for the ui components, we need to put them in tabs
          fileNameMapper: dirName === "ui" ? ({ isComponent }) => (isComponent ? "props" : undefined) : undefined,
          excludeCategories: ["Namespaces"],
          orderCategories: {
            Enums: 901,
            Functions: 902,
            Hooks: 903,
            Interfaces: 904,
            Types: 905,
            Variables: 906,
          },
        };
      }

      return {
        title,
        dir,
        entryPath: "src/index.ts",
        tsconfigDir: dir,
      };
    });
};

/**
 * *****
 * Configs
 * *****
 */

const config: Config = {
  title: "docsgen",
  tagline: "Take the docsgen.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://bettertyped.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docsgen/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BetterTyped", // Usually your GitHub org/user name.
  projectName: "docsgen", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },

  future: {
    faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: false,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    {
      src: "/docsgen/js/theme.js",
      async: false,
    },
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          lastVersion: "current",
          versions: getVersions(),
          sidebarCollapsible: false,
          sidebarCollapsed: false,
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/BetterTyped/docsgen/tree/main/documentation",
          admonitions: {
            keywords: ["secondary", "success", "learn", "important"],
          },
          remarkPlugins: [
            importer({
              packageRoute: apiDocs,
              apiDir: apiDocsDir,
            }),
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/BetterTyped/docsgen/tree/main/documentation",
          include: ["**/*.{md,mdx}"],
          exclude: ["**/.*"],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    "@orama/plugin-docusaurus-v3",
    "@docusaurus/theme-live-codeblock",
    async function tailwindPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
          postcssOptions.plugins.push(require("tailwindcss"));
          // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docsgen/docusaurus",
      {
        id: apiDocs,
        outDir: `docs/api`,
        packages: getPackagesList(),
        generateMdx: true,
        addMonorepoPage: false,
        addPackagePage: false,
        logLevel: "trace",
        pages: {
          component: {
            intro: false,
          },
        },
      } satisfies Parameters<typeof plugin>[1],
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    navbar: {
      title: "",
      logo: {
        alt: "docsgen Logo",
        src: "branding/logo-black.svg",
        className: "dark:invert",
      },
      items: [
        {
          position: "left",
          label: "Documentation",
          to: "/docs/getting-started",
          activeBaseRegex: `/docs/`,
        },
        {
          position: "left",
          label: "Guides",
          to: "/docs/guides/getting-started",
          activeBaseRegex: `/docs/guides/`,
        },
        {
          position: "left",
          label: "Api",
          to: "/docs/api/getting-started",
          activeBaseRegex: `/docs/api/`,
        },
        {
          position: "left",
          label: "Showcase",
          to: "/docs/showcase",
          activeBaseRegex: `/docs/showcase/`,
        },
        {
          position: "left",
          label: "Blog",
          to: "/blog",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "custom-starButton",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/getting-started",
            },
            {
              label: "License",
              to: "/license",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docsgen",
            },
            {
              label: "Github",
              href: "https://github.com/BetterTyped/docsgen",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} docsgen.`,
    },
  } satisfies Preset.ThemeConfig,
};

// eslint-disable-next-line import/no-default-export
export default config;
