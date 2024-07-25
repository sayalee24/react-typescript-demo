import type { GetAnalyzeGeoJSONDefectFramesRequest } from '@src/models/webservice/request/API/GetAnalyzeGeoJSONDefectFramesRequest';
import { getAnalyzeGeoJSONDefectFrames } from '@src/webservice/API/getAnalyzeGeoJSONDefectFrames';
import { useQuery } from '@tanstack/react-query';
import { ReactQueryKeys } from './query.utils';

export const useAnalyzeGeoJSONDefectFrames = (params: GetAnalyzeGeoJSONDefectFramesRequest, queryOptions = {}) => {
    return useQuery({
        queryKey: [ReactQueryKeys.GEO_JSON_DEFECT_FRAMES_ANALYZE, ...Object.values(params)],
        queryFn: async () => (await getAnalyzeGeoJSONDefectFrames(params)).data,
        ...queryOptions,
    });
};
