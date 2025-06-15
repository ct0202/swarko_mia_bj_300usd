import { useMutation } from '@tanstack/react-query';
import { adminRegister } from '../../../services/adminAuthService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useAdminRegister = () => {
  const axios = useAxiosPrivate();
  return useMutation({ mutationFn: (data) => adminRegister(axios, data) });
};