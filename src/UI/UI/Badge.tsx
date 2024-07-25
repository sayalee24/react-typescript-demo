import { GRADE_COLORS } from '@src/shared/const/gradeColors';
import clx from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

type BadgeDesignType = 'default' | 'light' | 'dark';

interface BadgeProps extends ComponentProps<'span'> {
    design?: BadgeDesignType;
    backgroundColor?: string;
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
    design = 'default',
    className,
    children,
    backgroundColor = undefined,
    ...rest
}) => {
    if (backgroundColor) {
        return (
            <span
                className={clx(className, 'inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium', {
                    'text-white':
                        backgroundColor === GRADE_COLORS.BLUE ||
                        backgroundColor === GRADE_COLORS.GREEN ||
                        backgroundColor === GRADE_COLORS.RED,
                })}
                style={{ backgroundColor }}
            >
                {children}
            </span>
        );
    }

    return (
        <span
            className={clx(
                className,
                'inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium',
                { 'bg-hochtief-blue-100  text-hochtief-blue-800': design === 'default' },
                { 'bg-hochtief-blue-100 text-hochtief-blue-800': design === 'light' },
                { 'bg-hochtief-blue-800 text-hochtief-blue-100': design === 'dark' },
            )}
            {...rest}
        >
            {children}
        </span>
    );
};
