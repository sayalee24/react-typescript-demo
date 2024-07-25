import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

interface RadioButtonProps extends Omit<ComponentProps<'input'>, 'className'> {
    label?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
    ({ id, checked, onChange, label, ...rest }, ref) => {
        const radioButton = (
            <input
                ref={ref}
                id={id}
                type="radio"
                checked={checked}
                onChange={onChange}
                className="peer h-4 w-4 border-gray-300 text-hochtief-blue-500 focus:ring-hochtief-blue-500 disabled:cursor-not-allowed disabled:border-gray-100"
                {...rest}
            />
        );

        if (label) {
            return (
                <div className="flex items-center">
                    {radioButton}

                    <label
                        htmlFor={id}
                        className="ml-3 min-w-0 flex-1 text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:text-gray-300"
                    >
                        {label}
                    </label>
                </div>
            );
        }

        return radioButton;
    },
);
