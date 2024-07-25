import type { PatchRecordingSessionRequest } from "@src/models/webservice/request/API/PatchRecordingSessionRequest";
import { queryClient } from "@src/shared/queryClient/queryClient";
import { patchRecordingSession } from "@src/webservice/API/patchRecordingSession";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ReactQueryKeys } from "../reactQuery/query.utils";

export const usePatchRecordingSessionMutation = () => {
  return useMutation<
    unknown,
    unknown,
    {
      recordingSessionId: string;
      params: Partial<PatchRecordingSessionRequest>;
    }
  >({
    mutationKey: [ReactQueryKeys.UPDATE_SESSIONS],
    mutationFn: async ({ params, recordingSessionId }) => {
      try {
        const response = await patchRecordingSession(
          recordingSessionId,
          params
        );
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
