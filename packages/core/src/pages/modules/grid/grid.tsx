import { JSONOutput } from "typedoc";

import { Code } from "pages/components/code";
import { Type } from "pages/components/type";
import { PagePropsType } from "types/page.types";
import { getCallPreview } from "pages/utils/parsing.utils";
import { getCommentNode } from "pages/handlers/comment";

export const Grid = ({
  reflections,
  reflectionsTree,
  pageProps,
  title,
  className = "",
}: {
  reflections: JSONOutput.SomeReflection[];
  reflectionsTree: JSONOutput.ProjectReflection[];
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
          ("signatures" in reflection &&
            reflection?.signatures &&
            getCallPreview({ signature: reflection?.signatures?.[0], reflectionsTree })) ||
          "";
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
            <div className="api-docs__grid-description">{getCommentNode(reflection)}</div>
          </div>
        );
      })}
    </div>
  );
};
