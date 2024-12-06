import React from "react";
import { renderToString } from "react-dom/server";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { parse } from "node-html-parser";

import { mdxClassName } from "pages/components/mdx";
import { pretty } from "./html.prettify";

/**
 * Processing
 */
const sanitizeHtmlComments = (html: string) => {
  return html.replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g, "");
};

const transformCode = (html: string) => {
  return NodeHtmlMarkdown.translate(html).trim();
};

/**
 * Processing
 */
const changeCodeTags = (html: string) => {
  return html
    .replace(/<pre>(.|\n)*?<\/pre>/g, (match) => {
      return `\n\n${transformCode(match)}\n\n`;
    })
    .replace(/<code>(.|\n)*?<\/code>/g, (match) => {
      return `\n${transformCode(match)}\n`;
    });
};

const parseHtml = (html: string) => {
  return parse(html, {
    voidTag: {
      tags: [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
      ],
      closingSlash: true,
    },
    fixNestedATags: false,
    parseNoneClosedTags: true,
  });
};

const transform = (html: string) => {
  const parsedHtml = parseHtml(html);

  const h1 = parsedHtml.getElementsByTagName("h1") as unknown as HTMLElement[];
  const h2 = parsedHtml.getElementsByTagName("h2") as unknown as HTMLElement[];
  const h3 = parsedHtml.getElementsByTagName("h3") as unknown as HTMLElement[];
  const h4 = parsedHtml.getElementsByTagName("h4") as unknown as HTMLElement[];
  const mdx = parsedHtml.querySelectorAll(`.${mdxClassName}`) as unknown as HTMLElement[];

  let mdxSettings = "";

  // Parse <h> tags to support "On this page" functionality
  [...Array.from(h1), ...Array.from(h2), ...Array.from(h3), ...Array.from(h4)].forEach((node) => {
    node.replaceWith(`\n${transformCode(node.outerHTML)}\n`);
  });

  // Remove nodes with .mdx-settings class name
  Array.from(mdx).forEach((node) => {
    mdxSettings = `${node.innerHTML}\n\n`;
    // clean up the mdx settings from html tree
    node.replaceWith("");
  });

  return mdxSettings + parsedHtml.toString();
};

/**
 * Converting
 */
export const transformMarkdown = (
  component: React.ReactElement,
  options?: {
    prettify?: boolean;
  },
) => {
  const { prettify = true } = options || {};
  // Order matters!!
  const processes = [sanitizeHtmlComments, transform, pretty, changeCodeTags];

  let newHtml = renderToString(component);

  processes.forEach((processing) => {
    newHtml = processing(newHtml);
  });

  if (!prettify) return newHtml;

  return newHtml;
};
