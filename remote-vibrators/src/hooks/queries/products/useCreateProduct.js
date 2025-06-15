import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../../../services/adminProductService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useCreateProduct = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createProduct(axios, data),
    onSuccess: () => queryClient.invalidateQueries(['admin-products']),
  });
};