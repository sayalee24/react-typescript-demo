import clx from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export const TableRow: FC<PropsWithChildren<ComponentProps<"tr">>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <tr className={clx("", className)} {...rest}>
      {children}
    </tr>
  );
};
