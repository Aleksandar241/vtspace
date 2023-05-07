import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import useAuth from './useAuth';
import { post } from '@utils';
import { logoutPath } from '@constants';

const useLogout = () => {
  const { setUser } = useAuth();
  const { mutate } = useMutation(async () => post(logoutPath), {
    onSuccess: () => setUser(null),
    onError: (err: any) => {
      toast(err.response?.data?.msg || err?.response?.data || 'Ups. Nesto nije kako treba');
    }
  });

  return { logout: mutate };
};

export default useLogout;
