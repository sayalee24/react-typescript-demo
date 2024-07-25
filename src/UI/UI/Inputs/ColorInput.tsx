import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

interface ColorInputProps extends ComponentProps<'input'> {
    id: ComponentProps<'input'>['id'];
    name: ComponentProps<'input'>['name'];
    label: string;
}

export const ColorInput = forwardRef<HTMLInputElement, ColorInputProps>(({ id, name, label, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="mt-1 overflow-hidden rounded-md border-gray-300 shadow-sm">
                <input
                    ref={ref}
                    {...rest}
                    name={name}
                    id={id}
                    className="block h-9 w-full text-sm shadow-sm"
                    type="color"
                />
            </div>
        </div>
    );
});
