import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import BrowserOnly from "@docusaurus/BrowserOnly";

function StarButtonNavbarItem() {
  return (
    <BrowserOnly fallback={<div className="h-9 w-[130px]" />}>
      {() => {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { GitHubStarButton } = require("@site/src/components/star-button/star-button");
        return <GitHubStarButton owner="BetterTyped" repo="docsgen" variant="navbar" />;
      }}
    </BrowserOnly>
  );
}

const CustomComponentTypes = {
  ...ComponentTypes,
  "custom-starButton": StarButtonNavbarItem,
};

export default CustomComponentTypes;
