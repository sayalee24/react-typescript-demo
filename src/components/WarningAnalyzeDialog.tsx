import { usePostTriggerPipelineMutation } from '@src/hooks/reactQueryMutations/usePostTriggerPipelineMutation';
import {
    useDefectFramesTranslations,
    useGlobalTranslations,
    useRecordingSessionsTranslations,
} from '@src/hooks/translations';
import {
    DATA_TEST_SESSIONS_DETAILED_WARNING_NO_BUTTON,
    DATA_TEST_SESSIONS_DETAILED_WARNING_YES_BUTTON,
} from '@src/shared/dataTest/pages/dataTestSessions';
import type { FC } from 'react';

import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { useNotification } from '@src/hooks/useNotification';
import type { DialogProps } from './Dialog/Dialog';
import { Dialog } from './Dialog/Dialog';
import { handleAnalyze } from './RecordingSessionTable/Dialogs/DetailedRecordingSession.utils';
import { Button } from './UI/Buttons/Button';

interface WarningAnalyzeDialogProps extends DialogProps {
    frames: number[];
}

export const WarningAnalyzeDialog: FC<WarningAnalyzeDialogProps> = ({ isOpen, handleClose, frames }) => {
    const { recordingSessionsT } = useRecordingSessionsTranslations();
    const { t } = useGlobalTranslations();
    const triggerPipelineMutation = usePostTriggerPipelineMutation();
    const { defectFramesT } = useDefectFramesTranslations();
    const { newNotification } = useNotification();

    const handleAnalyzeWarning = () => {
        handleAnalyze(triggerPipelineMutation, frames, () =>
            newNotification({
                title: defectFramesT('notifications.analyze_success.title'),
                text: defectFramesT('notifications.analyze_success.text'),
                type: 'success',
            }),
        );
        handleClose();
    };

    return (
        <Dialog isOpen={isOpen} handleClose={handleClose}>
            <div className="flex w-auto flex-col gap-8 p-4 text-center">
                <div className="flex flex-row justify-center">
                    <Dialog.Title>{recordingSessionsT('details.warning_upload_dialog.title')}</Dialog.Title>
                    <ExclamationTriangleIcon className="m-1 h-4 w-4" />
                </div>

                <Dialog.Description>
                    {recordingSessionsT('details.warning_anaylze_dialog.description')}
                </Dialog.Description>

                <div className="mt-4 flex w-full gap-2">
                    <Button
                        className="flex w-full justify-center"
                        design="secondary"
                        onClick={() => handleAnalyzeWarning()}
                        data-test={DATA_TEST_SESSIONS_DETAILED_WARNING_YES_BUTTON}
                    >
                        {t('yes')}
                    </Button>

                    <Button
                        className="flex w-full justify-center"
                        design="delete"
                        onClick={handleClose}
                        data-test={DATA_TEST_SESSIONS_DETAILED_WARNING_NO_BUTTON}
                    >
                        {t('no')}
                    </Button>
                </div>
            </div>
        </Dialog>
    );
};
