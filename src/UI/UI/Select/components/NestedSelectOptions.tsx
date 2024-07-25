import { Listbox, Transition } from '@headlessui/react';
import clx from 'classnames';
import type { ComponentProps, FC } from 'react';
import { Fragment } from 'react';
import type { NestedOptionProps } from './NestedSelectOption';
import { NestedSelectOption } from './NestedSelectOption';

interface SelectOptionsProps extends ComponentProps<'ul'> {
    options: NestedOptionProps[];
    'data-test'?: string;
}

export const NestedSelectOptions: FC<SelectOptionsProps> = ({
    className,
    options,
    'data-test': dataTest,
    ref: _ref,
    ...rest
}) => {
    return (
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options
                className={clx(
                    className,
                    'absolute top-12 z-10 max-h-60  overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 scrollbar-hide focus:outline-none',
                )}
                {...rest}
            >
                {options.map(({ value, label, level, ...rest }) => (
                    <NestedSelectOption
                        key={value}
                        value={value}
                        label={label}
                        level={level}
                        data-test={dataTest}
                        {...rest}
                    />
                ))}
            </Listbox.Options>
        </Transition>
    );
};
