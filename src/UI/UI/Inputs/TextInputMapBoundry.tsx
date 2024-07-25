import type { ComponentProps, FC } from 'react';
import { MapBoundariesInfoBox } from '../InfoBox/MapBoundariesInfoBox';

interface TextInputMapBoundryProps extends ComponentProps<'input'> {
    id: ComponentProps<'input'>['id'];
    name: ComponentProps<'input'>['name'];
    label: string;
    info: string;
}

export const TextInputMapBoundry: FC<TextInputMapBoundryProps> = ({ id, name, label, ...rest }) => {
    return (
        <div>
            <label htmlFor={id} className="flex text-sm font-medium text-gray-700">
                {label}
                {rest.info && <MapBoundariesInfoBox info={rest.info} />}
            </label>

            <div className="mt-1">
                <input
                    name={name}
                    id={id}
                    className="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-hochtief-blue-500 focus:ring-hochtief-blue-500"
                    {...rest}
                />
            </div>
        </div>
    );
};
