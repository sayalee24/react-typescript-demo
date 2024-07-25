import clx from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export const TableFooter: FC<PropsWithChildren<ComponentProps<"tfoot">>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <tfoot className={clx("", className)} {...rest}>
      {children}
    </tfoot>
  );
};
