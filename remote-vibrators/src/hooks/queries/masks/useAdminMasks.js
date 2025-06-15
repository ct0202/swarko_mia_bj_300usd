import { useQuery } from '@tanstack/react-query';
import { getAdminMasks } from '../../../services/adminMaskService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useAdminMasks = () => {
  const axios = useAxiosPrivate();
  return useQuery({ queryKey: ['admin-masks'], queryFn: () => getAdminMasks(axios) });
};
