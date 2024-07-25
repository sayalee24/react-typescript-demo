import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import type { FC, PropsWithChildren } from 'react';

interface SelectButtonProps {
    selectButtonRef: React.RefObject<HTMLButtonElement>;
}

export const SelectButton: FC<PropsWithChildren<SelectButtonProps>> = ({ selectButtonRef, children }) => {
    return (
        <Listbox.Button
            ref={selectButtonRef}
            className="relative w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm shadow-sm focus:border-hochtief-blue-500 focus:outline-none focus:ring-1 focus:ring-hochtief-blue-500"
        >
            <span className="block truncate">{children}</span>

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
        </Listbox.Button>
    );
};
