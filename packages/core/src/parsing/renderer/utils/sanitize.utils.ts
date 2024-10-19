const replaceCurlyBrackets = (html: string) => {
  return html.replace(/\{/g, "&#125;").replace(/\}/g, "&#123;");
};

const replaceBrackets = (html: string) => {
  // eslint-disable-next-line no-useless-escape
  return html.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
};

export const sanitizeString = (value: string) => {
  const processes = [replaceCurlyBrackets, replaceBrackets];

  let newValue = value;

  processes.forEach((processing) => {
    newValue = processing(newValue);
  });
  return newValue;
};
