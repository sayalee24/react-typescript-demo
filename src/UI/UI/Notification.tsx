import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import {
    DATA_TEST_NOTIFICATION_CLOSE_BUTTON as CLOSE_BUTTON,
    DATA_TEST_NOTIFICATION_TEXT as TEXT,
    DATA_TEST_NOTIFICATION_TITLE as TITLE,
} from '@src/shared/dataTest/components/dataTestNotification';
import type { Dispatch, FC, SetStateAction } from 'react';
import { Fragment } from 'react';
import { LoadingAnimation } from './LoadingAnimation';

export interface NotificationProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    type: 'success' | 'error' | 'neutral' | 'loading';
    title: string;
    text: string;
    'data-test'?: string;
}

export const Notification: FC<NotificationProps> = ({ open, setOpen, type, title, text, 'data-test': dataTest }) => {
    return (
        <Transition
            show={open}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="opacity-0 translate-y-0 translate-x-2"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                data-test={dataTest}
            >
                <div className="p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            {type === 'success' && (
                                <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                            )}

                            {type === 'error' && <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />}

                            {type === 'neutral' && (
                                <InformationCircleIcon className=" h-6 w-6 text-hochtief-blue-400" aria-hidden="true" />
                            )}

                            {type === 'loading' && <LoadingAnimation className="h-6 w-6" />}
                        </div>

                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p data-test={TITLE} className="text-sm font-medium text-gray-900">
                                {title}
                            </p>

                            <p data-test={TEXT} className="mt-1 text-sm text-gray-500">
                                {text}
                            </p>
                        </div>

                        <div className="ml-4 flex flex-shrink-0">
                            <button
                                type="button"
                                data-test={CLOSE_BUTTON}
                                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-hochtief-blue-500 focus:ring-offset-2"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <span className="sr-only">Close</span>

                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};
