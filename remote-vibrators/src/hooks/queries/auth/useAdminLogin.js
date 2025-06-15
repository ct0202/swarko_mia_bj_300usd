import { useMutation } from '@tanstack/react-query';
import { adminLogin } from '../../../services/adminAuthService';
import useAxiosPrivate from '../../useAxiosPrivate';

export const useAdminLogin = () => {
  const axios = useAxiosPrivate();
  return useMutation({ mutationFn: (data) => adminLogin(axios, data) });
};