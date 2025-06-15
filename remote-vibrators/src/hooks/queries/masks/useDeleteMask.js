import { useMutation, useQueryClient } from "@tanstack/react-query";
import adminMaskService from "@/services/adminMaskService";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export const useDeleteMask = () => {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => adminMaskService.remove(axiosPrivate, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["admin-masks"]);
    },
  });
};