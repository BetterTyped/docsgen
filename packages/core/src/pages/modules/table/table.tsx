import { JSONOutput } from "typedoc";

import { Code } from "pages/components/code";
import { Type } from "pages/components/type";
import { PagePropsType } from "types/page.types";
import { getCommentNode } from "pages/handlers/comment";
import { getSignaturePreview } from "pages/utils";

export const Table = ({
  reflections,
  reflectionsTree,
  pageProps,
  title,
  className = "",
  hideType = false,
}: {
  reflections: JSONOutput.SomeReflection[];
  reflectionsTree: JSONOutput.ProjectReflection[];
  pageProps: PagePropsType;
  title?: string;
  className?: string;
  hideType?: boolean;
}) => {
  return (
    <div className={`api-docs__table-wrapper ${className}`}>
      {title && <div className="api-docs__table-title">{title}</div>}
      <table className="api-docs__table">
        <thead>
          <tr>
            <th>Name</th>
            {!hideType && <th>Type</th>}
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {reflections.map((reflection, index) => {
            const isMethod = "signatures" in reflection;
            const name =
              "signatures" in reflection && reflection?.signatures
                ? getSignaturePreview({
                    reflection: reflection.signatures[0],
                    reflectionsTree,
                    useArrow: true,
                    hideGenerics: true,
                    hideParamTypes: true,
                    hideReturns: true,
                  })
                : reflection.name;
            const type = "type" in reflection && typeof reflection.type !== "string" ? reflection.type : reflection;

            return (
              <tr className="api-docs__table-row" key={index}>
                {isMethod ? (
                  <td className="api-docs__table-type">
                    <Code>{name}</Code>
                  </td>
                ) : (
                  <td className="api-docs__table-name">{name}</td>
                )}
                {!hideType && (
                  <td className="api-docs__table-type">
                    <Code>
                      <Type {...pageProps} reflection={type} />
                    </Code>
                  </td>
                )}
                <td className="api-docs__table-description">{getCommentNode(reflection)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
