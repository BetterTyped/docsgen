/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { PagePropsType } from "../../types/page.types";
import { Code } from "./code";

export type ImportProps = {
  className?: string;
};

// prettier-ignore
const open = "\{";
// prettier-ignore
const close = "\}";

export const Import: React.FC<PagePropsType & ImportProps> = (props) => {
  const { reflection, npmName, packageOptions, className = "" } = props;
  const { showImports = true } = packageOptions;

  if (!showImports) return null;

  return (
    <div className={`api-docs__import api-docs__details ${className}`}>
      <div className="api-docs__label">Import</div>
      <div className="api-docs__info">
        <Code>
          import {open} {reflection.name} {close} from "{npmName}"
        </Code>
      </div>
    </div>
  );
};
