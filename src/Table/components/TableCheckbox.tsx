import { Checkbox } from "@src/components/UI/Inputs/Checkbox";
import type { FC, HTMLProps } from "react";
import { useEffect, useRef } from "react";

interface TableCheckboxProps extends HTMLProps<HTMLInputElement> {
  indeterminate?: boolean;
}

export const TableCheckbox: FC<TableCheckboxProps> = ({
  indeterminate,
  ref: _ref,
  ...rest
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (indeterminate === undefined || !checkboxRef.current) {
      return;
    }

    checkboxRef.current.indeterminate = !rest.checked && indeterminate;
  }, [indeterminate, checkboxRef]);

  return <Checkbox ref={checkboxRef} {...rest} />;
};
