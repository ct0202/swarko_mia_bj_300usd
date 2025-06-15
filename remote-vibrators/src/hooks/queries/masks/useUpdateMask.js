import { useMutation, useQueryClient } from "@tanstack/react-query";
import adminMaskService from "@/services/adminMaskService";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export const useUpdateMask = () => {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => adminMaskService.update(axiosPrivate, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["admin-masks"]);
    },
  });
};