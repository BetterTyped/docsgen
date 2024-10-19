import { useState } from "react";
import Editor from "react-simple-code-editor";
import { LiveError, LivePreview } from "react-live";

import { PlaygroundComponentProps } from "playground/playground.types";
import { highlightLines } from "playground/playground.utils";

export const ShowMore = ({ code, setState }: PlaygroundComponentProps) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const CodeEditor = Editor?.default || Editor;

  return (
    <>
      <div className="api-playground__presentation">
        <LivePreview className="api-playground__preview" />
      </div>

      <div className="api-playground__label">
        Live edit example <span className="api-playground__indicator" />
      </div>
      <LiveError className="api-playground__error" />
      <div className="api-playground__editor">
        <button type="button" onClick={toggleShowMore} className="api-playground__more">
          {showMore ? "Show less" : "Show more"}
        </button>
        {!showMore && <div className="api-playground__backdrop" />}
        <CodeEditor
          value={code}
          onValueChange={setState}
          className={`${showMore ? "api-playground__show-more" : "api-playground__show-less"} api-playground__editor`}
          highlight={highlightLines}
          padding={20}
          tabSize={4}
        />
      </div>
    </>
  );
};
