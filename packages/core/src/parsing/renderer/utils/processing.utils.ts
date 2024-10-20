import React from "react";
import { renderToString } from "react-dom/server";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { parse } from "node-html-parser";
import pretty from "pretty";

import { mdxClassName } from "pages/components/mdx";

/**
 * Processing
 */
const sanitizeHtmlComments = (html: string) => {
  return html.replace(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g, "");
};

/**
 * Processing
 */
const changePreTags = (html: string) => {
  return html.replace(
    // eslint-disable-next-line prefer-regex-literals
    new RegExp(/<pre>(.|\n)*?<\/pre>/, "g"),
    (match) => `\n\n${NodeHtmlMarkdown.translate(match).trim()}\n\n`,
  );
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
  const code = parsedHtml.getElementsByTagName("CODE") as unknown as HTMLElement[];
  const mdx = parsedHtml.querySelectorAll(`.${mdxClassName}`) as unknown as HTMLElement[];

  let mdxSettings = "";

  // Parse <h> tags to support "On this page" functionality
  [...Array.from(h1), ...Array.from(h2), ...Array.from(h3), ...Array.from(h4)].forEach((node) => {
    node.replaceWith(`\n${NodeHtmlMarkdown.translate(node.outerHTML).trim()}\n`);
  });

  // Parse <code> tags to support code syntax like: < > { } [ ] ( ) etc
  Array.from(code).forEach((node) => {
    if (node.parentElement?.tagName === "PRE") return;
    node.replaceWith(`\n${NodeHtmlMarkdown.translate(node.outerHTML).trim()}\n`);
  });
  // Parse <code> tags to support code syntax like: < > { } [ ] ( ) etc
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
  const processes = [sanitizeHtmlComments, transform, changePreTags];

  let newHtml = renderToString(component);

  processes.forEach((processing) => {
    newHtml = processing(newHtml);
  });

  if (!prettify) return newHtml;

  return pretty(newHtml);
};
