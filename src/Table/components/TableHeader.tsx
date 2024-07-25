import clx from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export const TableHeader: FC<PropsWithChildren<ComponentProps<"thead">>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <thead className={clx("bg-gray-50", className)} {...rest}>
      {children}
    </thead>
  );
};
