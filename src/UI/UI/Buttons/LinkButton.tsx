import clx from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { ButtonDesignType } from './ButtonDesignType';

interface LinkButtonProps extends LinkProps {
    design?: ButtonDesignType;
}

export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({
    to,
    design = 'primary',
    className,
    children,
    ...rest
}) => {
    return (
        <Link
            to={to}
            className={clx(
                className,
                'inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
                {
                    ' bg-hochtief-blue-600 text-white shadow-sm hover:bg-hochtief-blue-700 focus:ring-hochtief-blue-500':
                        design === 'primary',
                },
                {
                    'bg-hochtief-blue-100 text-hochtief-blue-700 hover:bg-hochtief-blue-200 focus:ring-hochtief-blue-500':
                        design === 'secondary',
                },
            )}
            {...rest}
        >
            {children}
        </Link>
    );
};
