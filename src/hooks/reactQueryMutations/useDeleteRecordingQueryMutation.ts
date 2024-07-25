import { queryClient } from "@src/shared/queryClient/queryClient";
import { deleteRecordingSession } from "@src/webservice/API/deleteRecordingSession";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ReactQueryKeys } from "../reactQuery/query.utils";

export const useDeleteRecordingSessionMutation = () => {
  return useMutation<unknown, unknown, { recordingSessionId: string }>({
    mutationKey: [ReactQueryKeys.DELETE_SESSIONS],
    mutationFn: async ({ recordingSessionId }) => {
      try {
        const response = await deleteRecordingSession(recordingSessionId);
        return response;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw error;
        }

        throw error;
      }
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.SESSIONS] });
    },
  });
};
