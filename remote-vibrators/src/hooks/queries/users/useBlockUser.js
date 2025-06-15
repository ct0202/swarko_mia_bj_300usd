import { useMutation, useQueryClient } from '@tanstack/react-query';
import { blockUser } from '../../../services/adminUserService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useBlockUser = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => blockUser(axios, id),
    onSuccess: () => queryClient.invalidateQueries(['admin-users']),
  });
};