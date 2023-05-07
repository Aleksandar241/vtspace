import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { post, loginValidationScheme } from '@utils';
import useAuth from './useAuth';
import { loginPath } from '@constants';

type LoginParams = {
  email: string;
  password: string;
};

const initialValues: LoginParams = {
  email: '',
  password: ''
};

type UseLoginFormReturn = {
  initialValues: LoginParams;
  onSubmit: ({ email, password }: LoginParams) => void;
  isLoading: boolean;
  validationScheme: unknown;
};

const useLoginForm = (): UseLoginFormReturn => {
  const { setUser } = useAuth();

  const { mutate, isLoading } = useMutation(
    async ({ email, password }: LoginParams) => post(loginPath, { email, password }),
    {
      onSuccess: (res) => setUser(res?.data),
      onError: (err: any) => {
        toast(err.response?.data?.msg || err?.response?.data || 'Ups. Nesto nije kako treba');
      }
    }
  );

  const onSubmit = ({ email, password }: LoginParams) => mutate({ email, password });
  return { initialValues, onSubmit, isLoading, validationScheme: loginValidationScheme };
};

export default useLoginForm;
