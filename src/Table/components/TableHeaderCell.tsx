import clx from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export const TableHeaderCell: FC<PropsWithChildren<ComponentProps<"th">>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <th
      scope="col"
      className={clx(
        (className =
          "sticky top-0 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-2 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter first-of-type:pl-8 last-of-type:pr-8"),
        className
      )}
      {...rest}
    >
      {children}
    </th>
  );
};
