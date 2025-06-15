import { useQuery } from '@tanstack/react-query';
import { getAdminProducts } from '../../../services/adminProductService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useAdminProducts = () => {
  const axios = useAxiosPrivate();
  return useQuery({ queryKey: ['admin-products'], queryFn: () => getAdminProducts(axios) });
};