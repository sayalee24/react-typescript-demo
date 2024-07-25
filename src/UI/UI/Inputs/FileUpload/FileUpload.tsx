import { useGlobalTranslations } from '@src/hooks/translations';
import { formatBytes } from '@src/shared/utils/formatBytes';
import clx from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useRef, useState } from 'react';
import { SelectedFile } from './SelectedFile';

const handleShowFileInput = (files: File[], multiple: boolean | undefined) => {
    if (multiple) {
        return true;
    }

    return files.length === 0;
};

interface FileUploadProps extends ComponentProps<'input'> {
    label: string;
    id: ComponentProps<'input'>['id'];
    name: ComponentProps<'input'>['name'];
    acceptedFileTypes: string[];
    'data-test'?: string;
}

export const FileUpload: FC<FileUploadProps> = ({
    label,
    id,
    name,
    multiple,
    acceptedFileTypes,
    size = 10,
    'data-test': dataTest,
    ...rest
}) => {
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { t } = useGlobalTranslations();

    const showFileInput = handleShowFileInput(files, multiple);

    const handleFileInputChange = () => {
        setFiles([...(fileInputRef.current?.files || [])]);
    };

    const handleRemoveFile = (fileToRemove: File) => {
        const files = fileInputRef.current?.files;

        if (!files) {
            return;
        }

        const filesList = [...files].filter(file => file !== fileToRemove);

        const dataTransfer = new DataTransfer();

        filesList.forEach(file => dataTransfer.items.add(file));

        fileInputRef.current.files = dataTransfer.files;

        setFiles(filesList);
    };

    return (
        <>
            <label
                htmlFor={id}
                className={clx(
                    'flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5 transition-opacity duration-1000',
                    { 'hidden opacity-0': !showFileInput },
                    { 'opacity-100': showFileInput },
                )}
                data-test={dataTest}
            >
                <div className="space-y-1 text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <div className="flex text-sm text-gray-600">
                        <div className="relative cursor-pointer rounded-md bg-white font-medium text-hochtief-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-hochtief-blue-500 focus-within:ring-offset-2 hover:text-hochtief-blue-500">
                            <span>{label}</span>

                            <input
                                ref={fileInputRef}
                                id={id}
                                name={name}
                                type="file"
                                className="sr-only"
                                multiple={multiple}
                                size={size}
                                {...rest}
                                onChange={handleFileInputChange}
                            />
                        </div>
                    </div>

                    <p className="text-xs text-gray-500">
                        {t('file-upload.hint', { accept: acceptedFileTypes.join(', '), size: formatBytes(size) })}
                    </p>
                </div>
            </label>

            <div
                className={clx(
                    'flex flex-col gap-2 transition-opacity',
                    { 'hidden opacity-0': files.length === 0 },
                    { 'opacity-100': files.length !== 0 },
                )}
            >
                <p className="text-sm">{t('file-upload.selected-files', { count: files.length })}</p>

                {files.map(file => (
                    <SelectedFile key={file.name} file={file} handleRemoveFile={handleRemoveFile} />
                ))}
            </div>
        </>
    );
};
