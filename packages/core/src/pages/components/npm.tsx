import React from "react";

import { PagePropsType } from "../../types/page.types";

export type NpmProps = {
  className?: string;
};

export const Npm: React.FC<PagePropsType & NpmProps> = (props) => {
  const { npmName, className = "" } = props;

  return (
    <div className={`api-docs__npm api-docs__details ${className}`}>
      <div className="api-docs__label">Package</div>
      <div className="api-docs__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500" width="25px" height="25px">
          <path d="M0 0h2500v2500H0z" fill="#c00" />
          <path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff" />
        </svg>
      </div>
      <div className="api-docs__info">
        <a href={`https://www.npmjs.com/package/${npmName}`}>{npmName}</a>
      </div>
    </div>
  );
};
