import React from "react";
import type { Props } from "@theme/DocsRoot";
import DocsRootOriginal from "@theme-original/DocsRoot";
import { PackageProvider } from "@site/src/contexts/package-context";

// eslint-disable-next-line import/no-default-export, @typescript-eslint/naming-convention
export default function DocsRoot(props: Props): JSX.Element {
  return (
    <PackageProvider>
      <DocsRootOriginal {...props} />
    </PackageProvider>
  );
}
