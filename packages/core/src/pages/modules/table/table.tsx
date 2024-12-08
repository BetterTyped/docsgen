import { JSONOutput } from "typedoc";

import { Code } from "pages/components/code";
import { Type } from "pages/components/type";
import { PagePropsType } from "types/page.types";
import { getCallPreview } from "pages/utils/parsing.utils";
import { getCommentNode } from "pages/handlers/comment";

export const Table = ({
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
    <div className={`api-docs__table-wrapper ${className}`}>
      {title && <div className="api-docs__table-title">{title}</div>}
      <table className="api-docs__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {reflections.map((reflection, index) => {
            const isMethod = "signatures" in reflection;
            const callSignature =
              ("signatures" in reflection &&
                reflection?.signatures &&
                getCallPreview({ signature: reflection.signatures[0], reflectionsTree })) ||
              "";
            const type = "type" in reflection && typeof reflection.type !== "string" ? reflection.type : reflection;

            return (
              <tr className="api-docs__table-row" key={index}>
                <td className="api-docs__table-name">
                  {reflection.name}
                  {isMethod ? callSignature : ""}
                </td>
                <td className="api-docs__table-type">
                  <Code>
                    <Type {...pageProps} reflection={type} />
                  </Code>
                </td>
                <td className="api-docs__table-description">{getCommentNode(reflection)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
