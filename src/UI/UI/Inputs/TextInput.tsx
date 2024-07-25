import type { ComponentProps, FC } from 'react';

interface TextInputProps extends ComponentProps<'input'> {
    id: ComponentProps<'input'>['id'];
    name: string;
    label: string;
}

export const TextInput: FC<TextInputProps> = ({ id, name, label, ...rest }) => {
    return (
        <div>
            <label htmlFor={id} className="flex text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="mt-1">
                <input
                    name={name}
                    id={id}
                    {...rest}
                    className="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-hochtief-blue-500 focus:ring-hochtief-blue-500"
                />
            </div>
        </div>
    );
};
