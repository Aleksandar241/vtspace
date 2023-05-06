import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import useAuth from './useAuth';
import { post } from '@utils';
import { logoutPath } from '@constants';

const useLogout = () => {
  const { setToken } = useAuth();
  const { mutate } = useMutation(async () => post(logoutPath), {
    onSuccess: () => setToken(null),
    onError: (err: any) => {
      toast(err?.message ?? 'Ups. Nesto nije kako treba');
    }
  });

  return { logout: mutate };
};

export default useLogout;
