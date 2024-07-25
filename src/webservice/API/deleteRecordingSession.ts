import { axiosRestAPI } from "@src/shared/axios/axiosRestAPI";
import type { AxiosResponse } from "axios";

export const deleteRecordingSession = (recordingSessionId: string) =>
  axiosRestAPI.delete<{}, AxiosResponse>(
    `/recording_session/${recordingSessionId}`
  );
