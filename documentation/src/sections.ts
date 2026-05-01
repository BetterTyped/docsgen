import React from 'react';
import { Book } from 'lucide-react';

export const CoreIcon: React.FC<{ className?: string }> = ({ className }) =>
  React.createElement('svg', { className, viewBox: '0 0 156 156', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    React.createElement('path', {
      fillRule: 'evenodd', clipRule: 'evenodd', fill: 'currentColor',
      d: 'M6 0C2.68629 0 0 2.68629 0 6V150C0 153.314 2.68629 156 6 156H150C153.314 156 156 153.314 156 150V6C156 2.68629 153.314 0 150 0H6ZM122.859 23.4L89.7 54.6L122.859 85.8L132.6 76.6348L109.182 54.6L132.6 32.5653L122.859 23.4Z',
    }),
  );

export const DocusaurusIcon: React.FC<{ className?: string }> = ({ className }) =>
  React.createElement('img', { className, src: '/docsgen/img/docusaurus.png', alt: 'Docusaurus' });


export type Section = {
  label: string;
  description: string;
  dir: string;
  /**
   * @important
   * Names provides backwards compatibility with the old sidebars
   * This way we can add more paths if we rename something
   */
  paths: string[];
  img: React.ComponentType<{ className?: string }>;
  text: string;
  textAction: string;
  textHover: string;
  icon: string;
  iconHover: string;
  border: string;
  borderHover: string;
  category: string;
  featured?: boolean;
  isPackage: boolean;
  isNew?: boolean;
  isPro?: boolean;
} & (
  | {
      isPackage: false;
      package?: string;
    }
  | {
      isPackage: true;
      package: string;
    }
);

/**
 * This sections list must support backward compatibility with the old sidebars and sections
 * To extend it or change the order, you must update the names or the order of these sections in the array
 *
 * @Example Matching of the sidebar and folders are done through the names array, it should include the name of folder
 */
export const sections: Section[] = [
  {
    label: "Getting Started",
    description: "Getting started guides, configuration, and usage documentation",
    isPackage: false,
    dir: "getting-started",
    paths: ["getting-started"],
    img: Book,
    text: "drop-shadow-sm !text-purple-500 dark:!text-purple-400",
    textAction:
      "focus:!text-purple-500 focus:dark:!text-purple-400 active:!text-purple-600 active:dark:!text-purple-300",
    textHover: "hover:!text-purple-500 hover:dark:!text-purple-400",
    icon: "group-hover:shadow-purple-200 dark:group-hover:bg-purple-500 bg-purple-400 dark:bg-purple-500",
    iconHover:
      "group-hover:shadow-purple-200 dark:group-hover:bg-purple-500 group-hover:bg-purple-400 group-hover:dark:bg-purple-500",
    border: "border-purple-500 dark:border-purple-400",
    borderHover: "hover:border-purple-500 hover:dark:border-purple-400",
    category: "Docs",
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
    category: "Docs",
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
    category: "Docs",
  },
  // {
  //   label: "",
  //   description: "",
  //   isPackage: true,
  //   names: [""],
  //   img: ',
  //   text: "drop-shadow-sm !text-orange-500 dark:!text-orange-400",
  //   textAction:
  //     "focus:!text-orange-500 focus:dark:!text-orange-400 active:!text-orange-600 active:dark:!text-orange-300",
  //   textHover: "hover:!text-orange-500 hover:dark:!text-orange-400",
  //   icon: "group-hover:shadow-orange-200 dark:group-hover:bg-orange-500 bg-orange-400 dark:bg-orange-500",
  //   iconHover:
  //     "group-hover:shadow-orange-200 dark:group-hover:bg-orange-500 group-hover:bg-orange-400 group-hover:dark:bg-orange-500",
  //   border: "border-orange-500 dark:border-orange-400",
  //   borderHover: "hover:border-orange-500 hover:dark:border-orange-400",
  // },
  // {
  //   label: "",
  //   description: "",
  //   isPackage: true,
  //   names: [""],
  //   img: '',
  //   text: "drop-shadow-sm !text-purple-500 dark:!text-pink-400",
  //   textAction: "focus:!text-pink-500 focus:dark:!text-pink-400 active:!text-pink-600 active:dark:!text-pink-300",
  //   textHover: "hover:!text-pink-500 hover:dark:!text-pink-400",
  //   icon: "group-hover:shadow-pink-200 dark:group-hover:bg-pink-500 bg-pink-400 dark:bg-pink-500",
  //   iconHover:
  //     "group-hover:shadow-pink-200 dark:group-hover:bg-pink-500 group-hover:bg-pink-400 group-hover:dark:bg-pink-500",
  //   border: "border-pink-500 dark:border-pink-400",
  //   borderHover: "hover:border-pink-500 hover:dark:border-pink-400",
  // },
  // {
  //   label: "",
  //   description: "",
  //   isPackage: true,
  //   names: [""],
  //   img: '',
  //   text: "drop-shadow-sm !text-lime-500 dark:!text-lime-400",
  //   textHover: "hover:!text-lime-500 hover:dark:!text-lime-400",
  //   icon: "group-hover:shadow-lime-200 dark:group-hover:bg-lime-500 bg-lime-400 dark:bg-lime-500",
  //   iconHover:
  //     "group-hover:shadow-lime-200 dark:group-hover:bg-lime-500 group-hover:bg-lime-400 group-hover:dark:bg-lime-500",
  //   border: "border-lime-500 dark:border-lime-400",
  //   borderHover: "hover:border-lime-500 hover:dark:border-lime-400",
  // },
  // {
  //   label: "",
  //   description: "",
  //   isPackage: true,
  //   names: [""],
  //   img: ',
  //   text: "drop-shadow-sm !text-red-500 dark:!text-red-400",
  //   textHover: "hover:!text-red-500 hover:dark:!text-red-400",
  //   icon: "group-hover:shadow-red-200 dark:group-hover:bg-red-500 bg-red-400 dark:bg-red-500",
  //   iconHover:
  //     "group-hover:shadow-red-200 dark:group-hover:bg-red-500 group-hover:bg-red-400 group-hover:dark:bg-red-500",
  //   border: "border-red-500 dark:border-red-400",
  //   borderHover: "hover:border-red-500 hover:dark:border-red-400",
  // },
  // {
  //   label: "",
  //   description: "",
  //   isPackage: true,
  //   names: [""],
  //   img: '',
  //   text: "drop-shadow-sm !text-blue-500 dark:!text-blue-400",
  //   textHover: "hover:!text-blue-500 hover:dark:!text-blue-400",
  //   icon: "group-hover:shadow-blue-200 dark:group-hover:bg-blue-500 bg-blue-400 dark:bg-blue-500",
  //   iconHover:
  //     "hover:group-hover:shadow-blue-200 hover:dark:group-hover:bg-blue-500 hover:bg-blue-400 hover:dark:bg-blue-500",
  //   border: "border-blue-500 dark:border-blue-400",
  //   borderHover: "hover:border-blue-500 hover:dark:border-blue-400",
  // },
];
