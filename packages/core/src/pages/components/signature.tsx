// https://github.com/TypeStrong/typedoc-default-themes/blob/master/src/default/partials/member.signature.title.hbs
import { JSONOutput } from "typedoc";

import { PagePropsType } from "../../types/page.types";
import { getSignature, getSignaturePreview } from "pages/utils";

export type SignatureProps = {
  useArrow?: boolean;
  hideName?: boolean;
};

export const Signature = ({
  useArrow,
  hideName,
  ...props
}: PagePropsType<JSONOutput.SomeReflection> & SignatureProps) => {
  const { reflection, reflectionsTree } = props;

  const signature = getSignature(reflection);

  const signaturePreview = getSignaturePreview({
    reflection: signature || (reflection as JSONOutput.SignatureReflection),
    reflectionsTree,
    useArrow,
    hideName,
  });

  return <>{signaturePreview}</>;
};
