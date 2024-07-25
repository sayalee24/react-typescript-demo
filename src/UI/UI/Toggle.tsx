import { Switch } from '@headlessui/react';
import clx from 'classnames';
import type { ComponentProps, FC } from 'react';

interface ToggleProps extends ComponentProps<'button'> {
    enabled: boolean;
    onChange: () => void;
}

export const Toggle: FC<ToggleProps> = ({ enabled, onChange, value: _value, ref: _ref, ...rest }) => {
    return (
        <Switch
            checked={enabled}
            onChange={onChange}
            className={clx(
                'focus:ring-hochtbg-hochtief-blue-500 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
                { 'bg-hochtief-blue-600': enabled },
                { 'bg-gray-200': !enabled },
            )}
            {...rest}
        >
            <span
                aria-hidden="true"
                className={clx(
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                    { 'translate-x-5': enabled },
                    { 'translate-x-0': !enabled },
                )}
            />
        </Switch>
    );
};
