import type { ComponentProps } from "react";
import { forwardRef } from "react";

interface CheckboxProps extends Omit<ComponentProps<"input">, "className"> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, checked, onChange, label, ...rest }, ref) => {
    const checkBox = (
      <input
        ref={ref}
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer h-4 w-4 rounded border-gray-300 text-hochtief-blue-500 focus:ring-hochtief-blue-500 disabled:cursor-not-allowed disabled:border-gray-100"
        {...rest}
      />
    );

    if (label) {
      return (
        <div className="flex items-center">
          {checkBox}

          <label
            htmlFor={id}
            className="ml-3 min-w-0 flex-1 text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:text-gray-300"
          >
            {label}
          </label>
        </div>
      );
    }

    return checkBox;
  }
);
