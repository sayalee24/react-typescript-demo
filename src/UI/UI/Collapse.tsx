import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import clx from 'classnames';
import type { FC } from 'react';

interface CollapseProps {
    title: string;
    panel: JSX.Element;
}

export const Collapse: FC<CollapseProps> = ({ title, panel }) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-hochtief-blue-500 focus-visible:ring-opacity-75">
                        <span>{title}</span>
                        <ChevronUpIcon className={clx('h-5 w-5 text-gray-400', { 'rotate-180 transform': open })} />
                    </Disclosure.Button>

                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="text-sm text-gray-500">{panel}</Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};
