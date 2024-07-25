import clx from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export const TableBody: FC<PropsWithChildren<ComponentProps<"tbody">>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <tbody className={clx("divide-y bg-white", className)} {...rest}>
      {children}
    </tbody>
  );
};
