import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { sections } from "./src/sections";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [{ type: "autogenerated", dirName: "documentation" }],
  ...sections.reduce((acc, section) => {
    acc[section.dir] = [{ type: "autogenerated", dirName: section.label.toLowerCase() }];
    return acc;
  }, {})
  // translations: [{ type: "autogenerated", dirName: "translations" }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

// eslint-disable-next-line import/no-default-export
export default sidebars;
