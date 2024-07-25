import type { PatchDefectFrameRequest } from "@src/models/webservice/request/API/PatchDefectFrameRequest";
import type { UseMutationResult } from "@tanstack/react-query";

export const handleUpload = (
  patchMutation: UseMutationResult<
    unknown,
    unknown,
    {
      defectFrameId: string;
      params: Partial<PatchDefectFrameRequest>;
    },
    unknown
  >,
  framesList: number[] | null,
  renderNotification: () => void
) => {
  if (!framesList) {
    return;
  }

  framesList.forEach((rowData) => {
    patchMutation.mutateAsync({
      defectFrameId: rowData.toString(),
      params: {
        upload_requested: true,
      },
    });
  });
  renderNotification();
};

export const handleAnalyze = (
  triggerPipelineMutation: UseMutationResult<
    unknown,
    unknown,
    {
      framesList: number[];
    },
    unknown
  >,
  frames: number[],
  renderNotification: () => void
) => {
  renderNotification();

  triggerPipelineMutation.mutateAsync({
    framesList: frames,
  });
};
