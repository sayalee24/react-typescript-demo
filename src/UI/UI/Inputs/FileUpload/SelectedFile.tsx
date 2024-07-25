import { XMarkIcon } from '@heroicons/react/24/outline';
import { formatBytes } from '@src/shared/utils/formatBytes';
import type { FC } from 'react';

interface FileProps {
    file: File;
    handleRemoveFile: (fileToRemove: File) => void;
}

export const SelectedFile: FC<FileProps> = ({ file, handleRemoveFile }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-end gap-2">
                <div className="text-sm">{file.name}</div>
                <div className="text-xs text-gray-400">{formatBytes(file.size, 0)}</div>
            </div>
            <button type="button" className="rounded p-2 hover:bg-gray-100" onClick={() => handleRemoveFile(file)}>
                <XMarkIcon className="h-4 w-4" />
            </button>
        </div>
    );
};
