import clx from 'classnames';
import type { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react';
import { Children, createElement } from 'react';

interface HeadlineProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    size?: 'small' | 'medium' | 'large';
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Headline: FC<PropsWithChildren<HeadlineProps>> = ({
    size = 'medium',
    level = 'h1',
    className,
    children,
    ...rest
}) => {
    const childrenArray = Children.toArray(children);

    // This function only works with exactly one child.
    if (childrenArray.length !== 1) {
        throw new Error('Headline requires exactly one child.');
    }

    // This function only works with a string child.
    if (typeof childrenArray[0] !== 'string') {
        throw new Error('The passed child is not a string.');
    }

    const enhancedClassName = clx(
        className,
        'font-medium',
        { 'text-base leading-5': size === 'small' },
        { 'text-lg leading-6': size === 'medium' },
        { 'text-xl leading-7': size === 'large' },
    );

    return createElement(level, { ...rest, className: enhancedClassName }, children);
};
