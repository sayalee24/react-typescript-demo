import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import clx from 'classnames';
import type { Device } from '@src/models/API/Device';

export type Tab = {
    name: string;
    component: (devices: Device[]) => ReactNode;
};

const basicButtonClasses =
    'relative inline-flex items-center gap-2 border border-transparent px-4 py-2 text-sm font-medium drop-shadow-md focus:outline-none hover:bg-hochtief-blue-700 hover:text-white';
const button = 'shadow-sm hover:bg-hochtief-blue-700 focus:ring-0 hover:text-white';
const primaryActive = 'bg-hochtief-blue-600 text-white';
const notActive = 'bg-slate-100';

type SwitchProps = {
    tabState: number;
    setTabState: Dispatch<SetStateAction<number>>;
    tabs: Tab[];
};

const Switch: FC<SwitchProps> = ({ tabState: representationState, setTabState: setRepresentationState, tabs }) => {
    return (
        <div className="left hidden absolute z-[1]">
            {tabs.map((tab, index) => {
                const isFirst = index === 0;
                const isLast = index === tabs.length - 1;

                return (
                    <button
                        key={index}
                        className={clx(
                            basicButtonClasses,
                            {
                                'rounded-l-md': isFirst,
                                'rounded-r-md': isLast,
                            },
                            button,
                            representationState === index ? primaryActive : notActive,
                        )}
                        onClick={() => setRepresentationState(index)}
                    >
                        {tab.name}
                    </button>
                );
            })}
        </div>
    );
};

export default Switch;
