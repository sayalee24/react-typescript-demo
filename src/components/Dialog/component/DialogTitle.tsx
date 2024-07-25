import { Headline } from "@src/components/UI/Text/Headline";
import type { FC, PropsWithChildren } from "react";

export const DialogTitle: FC<PropsWithChildren> = ({ children }) => {
  return <Headline>{children}</Headline>;
};
