import { Transition } from '@headlessui/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';
import { Fragment, useState } from 'react';

interface MapBoundariesInfoBoxProps {
    info: string;
}

export const MapBoundariesInfoBox: FC<MapBoundariesInfoBoxProps> = ({ info }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="z-10 flex items-center justify-between pl-2">
            <div
                className="relative inline cursor-help"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >
                <InformationCircleIcon className="h-4 w-4" />

                <Transition
                    as={Fragment}
                    show={showInfo}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="absolute left-8 top-0 w-auto rounded-md border border-gray-300 bg-white p-1 shadow-sm">
                        {info}
                    </div>
                </Transition>
            </div>
        </div>
    );
};
