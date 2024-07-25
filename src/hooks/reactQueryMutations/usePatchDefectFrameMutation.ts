import type { PatchDefectFrameRequest } from '@src/models/webservice/request/API/PatchDefectFrameRequest';
import { queryClient } from '@src/shared/queryClient/queryClient';
import { patchDefectFrame } from '@src/webservice/API/patchDefectFrame';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ReactQueryKeys } from '../reactQuery/query.utils';

export const usePatchDefectFrameMutation = () => {
    return useMutation<unknown, unknown, { defectFrameId: string; params: Partial<PatchDefectFrameRequest> }>({
        mutationKey: [ReactQueryKeys.UPDATE_DEFECT_FRAME],
        mutationFn: async ({ params, defectFrameId }) => {
            try {
                const response = await patchDefectFrame(defectFrameId, params);
                return response;
            } catch (error) {
                if (error instanceof AxiosError) {
                    throw error;
                }

                throw error;
            }
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.DEFECT_FRAMES] });
        },
    });
};
