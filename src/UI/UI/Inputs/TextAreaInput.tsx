import type { ComponentProps, FC } from 'react';

interface TextAreaInputProps extends ComponentProps<'textarea'> {
    id: ComponentProps<'input'>['id'];
    name: ComponentProps<'input'>['name'];
    label: string;
}

export const TextAreaInput: FC<TextAreaInputProps> = ({ id, name, label, ...rest }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="mt-1">
                <textarea
                    {...rest}
                    name={name}
                    id={id}
                    className="block w-full resize-none rounded-md border-gray-300 text-sm shadow-sm focus:border-hochtief-blue-500 focus:ring-hochtief-blue-500"
                />
            </div>
        </div>
    );
};
