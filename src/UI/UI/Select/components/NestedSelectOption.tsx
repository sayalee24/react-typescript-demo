import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import type { ComponentProps, FC } from 'react';

export interface NestedOptionProps extends ComponentProps<'li'> {
    level: number;
    label: string;
    value: string | number;
    'data-test'?: string;
}

export const NestedSelectOption: FC<NestedOptionProps> = ({
    value,
    label,
    'data-test': dataTest,
    level,
    ref: _ref,
    ...rest
}) => {
    return (
        <Listbox.Option
            className={({ active }) =>
                `relative cursor-default select-none py-2 pr-4 ${
                    active ? 'bg-hochtief-blue-100 text-hochtief-blue-900' : 'text-gray-900'
                }`
            }
            style={{ paddingLeft: `calc(${level * 1.5}rem + 2.5rem)` }}
            value={value}
            {...rest}
        >
            {({ selected }) => (
                <>
                    <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        data-test={`${dataTest}-${label}`}
                    >
                        {label}
                    </span>
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
