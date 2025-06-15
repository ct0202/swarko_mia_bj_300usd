import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../../../services/adminUserService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useDeleteUser = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteUser(axios, id),
    onSuccess: () => queryClient.invalidateQueries(['admin-users']),
  });
};
