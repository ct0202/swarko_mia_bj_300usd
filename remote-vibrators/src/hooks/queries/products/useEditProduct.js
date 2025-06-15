import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../../../services/adminProductService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useEditProduct = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateProduct(axios, id, data),
    onSuccess: () => queryClient.invalidateQueries(['admin-products']),
  });
};