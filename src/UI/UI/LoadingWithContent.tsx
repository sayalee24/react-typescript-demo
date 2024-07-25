import type { FC, PropsWithChildren } from 'react';
import { LoadingAnimation } from './LoadingAnimation';

export type LoadingWithContentProps = {
    isLoading: boolean;
};

const LoadingWithContent: FC<PropsWithChildren<LoadingWithContentProps>> = ({ isLoading, children }) => {
    return <>{isLoading ? <LoadingAnimation /> : <>{children}</>}</>;
};

export default LoadingWithContent;
