import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct } from '../../../services/adminProductService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useDeleteProduct = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteProduct(axios, id),
    onSuccess: () => queryClient.invalidateQueries(['admin-products']),
  });
};
