import type { FC, PropsWithChildren } from 'react';
import { Children, isValidElement } from 'react';

interface WithLabelProps {
    label: string;
}

export const WithLabel: FC<PropsWithChildren<WithLabelProps>> = ({ label, children }) => {
    const childrenArray = Children.toArray(children);

    // This function only works with exactly one child.
    if (childrenArray.length !== 1) {
        throw new Error('WithLabel requires exactly one child.');
    }

    const child = childrenArray[0];

    if (!isValidElement(child)) {
        throw new Error('The passed child is not a valid react element.');
    }

    const { id } = child.props;

    if (!id) {
        throw new Error('The passed child must have an id and a label prop.');
    }

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="mt-1">{children}</div>
        </div>
    );
};
