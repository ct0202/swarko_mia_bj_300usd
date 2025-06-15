import { useMutation } from "@tanstack/react-query";
import adminMaskService from "@/services/adminMaskService";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

export const useUploadMaskImage = () => {
  const axiosPrivate = useAxiosPrivate();

  return useMutation({
    mutationFn: ({ id, file }) => {
      const formData = new FormData();
      formData.append("file", file);
      return adminMaskService.uploadImage(axiosPrivate, id, formData);
    },
  });
};