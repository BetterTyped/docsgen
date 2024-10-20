/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
import React, { useLayoutEffect, useState } from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import Editor from "react-simple-code-editor";
import reactElementToJSXString from "react-element-to-jsx-string";

import { highlightLines, transformCode } from "./playground.utils";
import { ShowMore } from "./variants/show-more";
import { Switch } from "./variants/switch";
import { PlaygroundStory } from "./playground.types";

export const Playground = <T extends PlaygroundStory<any>>({
  story,
  transformComponentName = "Example",
  type = "switch",
  customRender,
  tabs = 4,
}: {
  story: T;
  transformComponentName?: string;
  type?: "more" | "switch";
  tabs?: number;
  customRender?: (props: {
    editor: (props: Partial<(typeof Editor)["prototype"]["props"]>) => React.ReactNode;
    preview: (props: Parameters<typeof LivePreview>[0]) => React.ReactNode;
    error: (props: Parameters<typeof LiveError>[0]) => React.ReactNode;
  }) => React.ReactNode | JSX.Element;
}) => {
  const { args, render, components } = story;
  const [code, setCode] = useState<string>("");

  const [stringifiedCode, setStringifiedCode] = useState<string>(code);

  const setState = (value: string) => {
    if (value) {
      setStringifiedCode(value);
    } else {
      setStringifiedCode(code);
    }
  };

  useLayoutEffect(() => {
    // Name components
    if (components) {
      Object.entries(components).forEach(([key, component]) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        component.displayName = key;
      });
    }

    const newCode = reactElementToJSXString(render(args as any), {
      tabStop: tabs,
    });

    setCode(newCode);
  }, [render, args, tabs, components]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const CodeEditor = Editor?.default || Editor;

  return (
    <div className={`api-playground api-playground__${customRender ? "custom" : type}`}>
      <LiveProvider code={transformCode(stringifiedCode, transformComponentName)} scope={components} noInline>
        {!customRender && type === "more" ? (
          <ShowMore code={stringifiedCode} setState={setState} />
        ) : (
          <Switch code={stringifiedCode} setState={setState} />
        )}
        {customRender &&
          customRender({
            preview: (props) => <LivePreview className="api-playground__preview" {...props} />,
            error: (props) => <LiveError className="api-playground__error" {...props} />,
            editor: (props) => (
              <CodeEditor
                className="api-playground__editor"
                highlight={highlightLines}
                padding={20}
                tabSize={4}
                value={stringifiedCode}
                onValueChange={setState}
                {...props}
              />
            ),
          })}
      </LiveProvider>
    </div>
  );
};
