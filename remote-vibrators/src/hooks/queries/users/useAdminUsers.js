import { useQuery } from '@tanstack/react-query';
import { getAdminUsers } from '../../../services/adminUserService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useAdminUsers = () => {
  const axios = useAxiosPrivate();
  return useQuery({ queryKey: ['admin-users'], queryFn: () => getAdminUsers(axios) });
};
