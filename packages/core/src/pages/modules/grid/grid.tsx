import { JSONOutput } from "typedoc";

import { Code } from "pages/components/code";
import { Type } from "pages/components/type";
import { PagePropsType } from "types/page.types";
import { getCallPreview } from "pages/utils/parsing.utils";
import { getCommentText } from "pages/handlers/comment";

export const Grid = ({
  reflections,
  pageProps,
  title,
  className = "",
}: {
  reflections: JSONOutput.SomeReflection[];
  pageProps: PagePropsType;
  title?: string;
  className?: string;
}) => {
  return (
    <div className={`api-docs__grid ${className}`}>
      {title && <div className="api-docs__grid-title">{title}</div>}
      {reflections.map((reflection, index) => {
        const isMethod = "signatures" in reflection;
        const callSignature =
          ("signatures" in reflection && reflection?.signatures && getCallPreview(reflection?.signatures?.[0])) || "";
        const type = "type" in reflection && typeof reflection.type !== "string" ? reflection.type : reflection;

        return (
          <div className="api-docs__grid-row" key={index}>
            <div className="api-docs__grid-name">
              {reflection.name}
              {isMethod ? callSignature : ""}
            </div>
            <div className="api-docs__grid-type">
              <Code>
                <Type {...pageProps} reflection={type} />
              </Code>
            </div>
            <div className="api-docs__grid-description">{getCommentText(reflection)}</div>
          </div>
        );
      })}
    </div>
  );
};
