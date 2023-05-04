import { useMutation } from 'react-query';
import { post, loginValidationScheme } from '@utils';
import useAuth from './useAuth';

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
  const { setToken } = useAuth();

  const { mutate, isLoading } = useMutation(
    async ({ email, password }: LoginParams) => post('login', { email, password }),
    {
      onSuccess: (res) => setToken(res?.data?.token),
      onError: (err) => {
        console.log(err);
      }
    }
  );

  const onSubmit = ({ email, password }: LoginParams) => mutate({ email, password });
  return { initialValues, onSubmit, isLoading, validationScheme: loginValidationScheme };
};

export default useLoginForm;
