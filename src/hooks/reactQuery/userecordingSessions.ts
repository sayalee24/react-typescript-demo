import type { GetRecordingSessionsRequest } from "@src/models/webservice/request/API/GetRecordingSessionsRequest";
import { getRecordingSessions } from "@src/webservice/API/getRecordingSessions";
import { useQuery } from "@tanstack/react-query";
import { useNotification } from "../useNotification";
import { handleQueryError, ReactQueryKeys } from "./query.utils";

export const useRecordingSessions = (
  params: Partial<GetRecordingSessionsRequest> = {},
  queryOptions = {}
) => {
  const { newNotification } = useNotification();

  return useQuery({
    queryKey: [ReactQueryKeys.SESSIONS, ...Object.values(params)],
    queryFn: async () => (await getRecordingSessions(params)).data,
    onError: handleQueryError(newNotification),
    ...queryOptions,
  });
};
