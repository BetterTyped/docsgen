import beautify, { HTMLBeautifyOptions } from "js-beautify";

const options: HTMLBeautifyOptions = {
  unformatted: ["code", "pre", "em", "strong", "span"],
  indent_inner_html: true,
  indent_char: " ",
  indent_size: 2,
  indent_empty_lines: true,
  preserve_newlines: true,
  eol: "\n",
};

export const pretty = (html: string) => {
  return beautify.html(html, options);
};
