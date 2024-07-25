import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import type { ComponentProps, FC } from 'react';

export interface OptionProps extends ComponentProps<'li'> {
    label: string;
    value: string | number;
    'data-test'?: string;
}

export const SelectOption: FC<OptionProps> = ({ value, label, 'data-test': dataTest, ref: _ref, ...rest }) => {
    return (
        <Listbox.Option
            className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-hochtief-blue-100 text-hochtief-blue-900' : 'text-gray-900'
                }`
            }
            value={value}
            data-test={`${dataTest}-${label}`}
            {...rest}
        >
            {({ selected }) => (
                <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{label}</span>
                    {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-hochtief-blue-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                    ) : null}
                </>
            )}
        </Listbox.Option>
    );
};
