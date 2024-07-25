import type { GetRecordingSessionsRequest } from "@src/models/webservice/request/API/GetRecordingSessionsRequest";
import type { GetRecordingSessionsResponse } from "@src/models/webservice/response/API/GetRecordingSessionsResponse";
import { axiosRestAPI } from "@src/shared/axios/axiosRestAPI";
import { getISODateStringFromDate } from "@src/shared/date/getISODateStringFromDate";
import type { AxiosResponse } from "axios";

export const getRecordingSessions = ({
  start_timestamp,
  start_date_range,
  stop_timestamp,
  stop_date_range,
  ...rest
}: Partial<GetRecordingSessionsRequest> = {}) =>
  axiosRestAPI.get<
    GetRecordingSessionsResponse,
    AxiosResponse<GetRecordingSessionsResponse>,
    Partial<GetRecordingSessionsRequest>
  >("/recording_session", {
    params: {
      ...rest,
      start_timestamp: start_timestamp
        ? getISODateStringFromDate(start_timestamp)
        : undefined,
      start_date_range: start_date_range
        ? getISODateStringFromDate(start_date_range)
        : undefined,
      stop_timestamp: stop_timestamp
        ? getISODateStringFromDate(stop_timestamp)
        : undefined,
      stop_date_range: stop_date_range
        ? getISODateStringFromDate(stop_date_range)
        : undefined,
    },
  });
