import { PagePropsType } from "types/page.types";
import { Definition } from "./definition";
import { Import } from "./import";
import { Npm } from "./npm";

export const Details = (props: PagePropsType) => {
  return (
    <>
      <Import {...props} />
      <Definition {...props} />
      <Npm {...props} />
    </>
  );
};
