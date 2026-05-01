/* eslint-disable @typescript-eslint/no-var-requires */
import { Book, FlaskConical } from "lucide-react";

import { CoreIcon, DocusaurusIcon, Section } from "./sections";

export const guides: Section[] = [
  {
    label: "Getting Started",
    description: "Overview of the available integrations",
    isPackage: false,
    dir: "getting-started",
    paths: ["getting-started"],
    img: Book,
    text: "drop-shadow-sm !text-indigo-500 dark:!text-indigo-400",
    textAction:
      "focus:!text-indigo-500 focus:dark:!text-indigo-400 active:!text-indigo-600 active:dark:!text-indigo-300",
    textHover: "hover:!text-indigo-500 hover:dark:!text-indigo-400",
    icon: "group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 bg-indigo-400 dark:bg-indigo-500",
    iconHover:
      "group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 group-hover:bg-indigo-400 group-hover:dark:bg-indigo-500 group-hover:!bg-opacity-40",
    border: "border-indigo-500 dark:border-indigo-400",
    borderHover: "hover:border-indigo-500 hover:dark:border-indigo-400",
    category: "Guides",
  },
  {
    label: "Docsgen",
    description: "Core engine for TypeDoc parsing, React page rendering, and MDX generation",
    isPackage: true,
    package: "core",
    dir: "core",
    paths: ["core"],
    img: CoreIcon,
    text: "drop-shadow-sm !text-sky-500 dark:!text-sky-400",
    textAction: "focus:!text-sky-500 focus:dark:!text-sky-400 active:!text-sky-600 active:dark:!text-sky-300",
    textHover: "hover:!text-sky-500 hover:dark:!text-sky-400",
    icon: "group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 bg-sky-400 dark:bg-sky-500",
    iconHover:
      "group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 group-hover:bg-sky-400 group-hover:dark:bg-sky-500",
    border: "border-sky-500 dark:border-sky-400",
    borderHover: "hover:border-sky-500 hover:dark:border-sky-400",
    category: "Guides",
  },
  {
    label: "Docusaurus Plugin",
    description: "Docusaurus plugin that integrates docsgen into the build lifecycle",
    isPackage: true,
    package: "docusaurus",
    dir: "docusaurus",
    paths: ["docusaurus"],
    img: DocusaurusIcon,
    text: "drop-shadow-sm !text-yellow-500 dark:!text-yellow-400",
    textAction:
      "focus:!text-yellow-500 focus:dark:!text-yellow-400 active:!text-yellow-600 active:dark:!text-yellow-300",
    textHover: "hover:!text-yellow-500 hover:dark:!text-yellow-400",
    icon: "group-hover:shadow-yellow-200 dark:group-hover:bg-yellow-500 bg-yellow-400 dark:bg-yellow-500",
    iconHover:
      "group-hover:shadow-yellow-200 dark:group-hover:bg-yellow-500 group-hover:bg-yellow-400 group-hover:dark:bg-yellow-500",
    border: "border-yellow-500 dark:border-yellow-400",
    borderHover: "hover:border-yellow-500 hover:dark:border-yellow-400",
    category: "Guides",
  },
];
