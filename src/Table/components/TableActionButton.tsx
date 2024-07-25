import type { ComponentProps, FC, PropsWithChildren } from "react";

export const TableActionButton: FC<
  PropsWithChildren<ComponentProps<"button">>
> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      type="button"
      className="flex items-center gap-2 rounded bg-white p-2 hover:bg-gray-100"
    >
      {children}
    </button>
  );
};
