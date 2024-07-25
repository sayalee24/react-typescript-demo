import clx from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export const TableCell: FC<PropsWithChildren<ComponentProps<"td">>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <td
      className={clx(
        "p-2 text-xs first-of-type:pl-8 last-of-type:pr-8",
        className
      )}
      {...rest}
    >
      {children}
    </td>
  );
};
