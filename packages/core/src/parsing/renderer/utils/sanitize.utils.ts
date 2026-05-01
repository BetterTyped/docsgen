const replaceCurlyBrackets = (html: string) => {
  return html.replaceAll(/\{/g, "&#125;").replaceAll(/\}/g, "&#123;");
};

const replaceBrackets = (html: string) => {
  // eslint-disable-next-line no-useless-escape
  return html.replaceAll(/\</g, "&lt;").replaceAll(/\>/g, "&gt;");
};

export const sanitizeString = (value: string) => {
  const processes = [replaceCurlyBrackets, replaceBrackets];

  let newValue = value;

  processes.forEach((processing) => {
    newValue = processing(newValue);
  });
  return newValue;
};
