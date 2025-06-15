import { useMutation, useQueryClient } from "@tanstack/react-query";
import adminMaskService from "@/services/adminMaskService";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export const useAddStepToMask = () => {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, step }) => adminMaskService.addStep(axiosPrivate, id, step),
    onSuccess: () => {
      queryClient.invalidateQueries(["admin-mask"]);
    },
  });
};
