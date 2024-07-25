import { queryClient } from '@src/shared/queryClient/queryClient';
import { postTriggerPipeline } from '@src/webservice/API/postTriggerPipeline';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ReactQueryKeys } from '../reactQuery/query.utils';

export const usePostTriggerPipelineMutation = () => {
    return useMutation<unknown, unknown, { framesList: number[] }>({
        mutationKey: [ReactQueryKeys.ANALYZE_DEFECT_FRAME],
        mutationFn: async ({ framesList }) => {
            try {
                const response = await postTriggerPipeline({ frame_list: framesList });
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
