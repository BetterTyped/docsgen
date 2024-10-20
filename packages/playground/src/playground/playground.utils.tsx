import { Highlight, themes } from "prism-react-renderer";

export const RENDER_PREFIX = "render(";

export const transformCode = (code: string, componentName?: string) => {
  if (!componentName) return code;
  if (code.includes(RENDER_PREFIX)) return code;

  return `
render(
${code}
)`;
};

export const highlightLines = (input: string) => {
  const theme = themes.vsDark;
  return (
    <Highlight code={input} theme={theme} language="tsx">
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, lineIndex) => (
            <span key={`line-${lineIndex}`} {...getLineProps({ line })}>
              {line
                .filter((token) => !token.empty)
                .map((token, tokenIndex) => (
                  <span key={`token-${tokenIndex}`} {...getTokenProps({ token })} />
                ))}
              {"\n"}
            </span>
          ))}
        </>
      )}
    </Highlight>
  );
};
