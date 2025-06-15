import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMask } from '../../../services/adminMaskService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useCreateMask = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createMask(axios, data),
    onSuccess: () => queryClient.invalidateQueries(['admin-masks']),
  });
};
