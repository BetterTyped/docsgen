import React from "react";

export type CodeProps = {
  fenced?: boolean;
};

export const Code: React.FC<{ children: React.ReactNode } & CodeProps> = ({ children, fenced = true }) => {
  const Heading = fenced ? "pre" : React.Fragment;
  return (
    <div className="api-docs__pre">
      <Heading>
        <code className="language-tsx">{children}</code>
      </Heading>
    </div>
  );
};
