import type { DialogProps } from "@src/components/Dialog/Dialog";
import { Dialog } from "@src/components/Dialog/Dialog";
import { Button } from "@src/components/UI/Buttons/Button";
import { useDeleteRecordingSessionMutation } from "@src/hooks/reactQueryMutations/useDeleteRecordingSessionMutation";
import { usePatchRecordingSessionMutation } from "@src/hooks/reactQueryMutations/usePatchRecordingSessionMutation";
import {
  useGlobalTranslations,
  useRecordingSessionsTranslations,
} from "@src/hooks/translations";
import { useNotification } from "@src/hooks/useNotification";
import type { RecordingSessionAnalytics } from "@src/models/API/RecordingSessionAnalytics";
import {
  DATA_TEST_SESSIONS_DELETED_SUCCESS_NOTIFICATION,
  DATA_TEST_SESSIONS_DELETE_CANCEL_BUTTON,
  DATA_TEST_SESSIONS_DELETE_DIALOG,
  DATA_TEST_SESSIONS_DELETE_SUBMIT_BUTTON,
} from "@src/shared/dataTest/pages/dataTestSessions";
import type { FC } from "react";

interface DeleteRecordingSessionDialogProps extends DialogProps {
  recordingSession: RecordingSessionAnalytics;
}

export const DeleteRecordingSessionDialog: FC<
  DeleteRecordingSessionDialogProps
> = ({ recordingSession, isOpen, handleClose }) => {
  const { newNotification } = useNotification();
  const { t } = useGlobalTranslations();
  const { recordingSessionsT } = useRecordingSessionsTranslations();
  const deleteRecordingSessionMutation = useDeleteRecordingSessionMutation();
  const patchRecordingSessionMutation = usePatchRecordingSessionMutation();

  const handleDelete = async () => {
    await deleteRecordingSessionMutation.mutateAsync({
      recordingSessionId: recordingSession.id.toString(),
    });

    handleClose();

    newNotification({
      title: recordingSessionsT("delete.notifications.success.title"),
      text: recordingSessionsT("delete.notifications.success.text"),
      type: "success",
      "data-test": DATA_TEST_SESSIONS_DELETED_SUCCESS_NOTIFICATION,
    });
  };

  return (
    <Dialog isOpen={isOpen} handleClose={handleClose}>
      <div className="w-80 p-4" data-test={DATA_TEST_SESSIONS_DELETE_DIALOG}>
        <Dialog.Title>
          {recordingSessionsT("delete.dialog.title", {
            recordingSession: recordingSession.id,
          })}
        </Dialog.Title>
        <Dialog.Description>
          {recordingSessionsT("delete.dialog.description")}
        </Dialog.Description>
        <div className="mt-4 flex w-full gap-2">
          <Button
            className="flex w-full justify-center"
            design="secondary"
            onClick={handleClose}
            data-test={DATA_TEST_SESSIONS_DELETE_CANCEL_BUTTON}
          >
            {t("cancel")}
          </Button>

          <Button
            className="flex w-full justify-center"
            design="delete"
            onClick={handleDelete}
            data-test={DATA_TEST_SESSIONS_DELETE_SUBMIT_BUTTON}
            isLoading={
              deleteRecordingSessionMutation.isLoading ||
              patchRecordingSessionMutation.isLoading
            }
          >
            {t("delete")}
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
