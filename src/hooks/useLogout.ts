import { useMutation } from 'react-query';
import useAuth from './useAuth';
import { post } from '@utils';

const useLogout = () => {
  const { setToken } = useAuth();
  const { mutate } = useMutation(async () => post('logout'), {
    onSuccess: () => setToken(null),
    onError: (err) => {
      console.log(err);
    }
  });

  return { logout: mutate };
};

export default useLogout;
