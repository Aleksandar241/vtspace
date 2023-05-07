import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { post, signupValidationScheme } from '@utils';
import { signupPath } from '@constants';

type SignupParams = {
  email: string;
  password: string;
  name: string;
  surname: string;
};

type SignupFormParams = SignupParams & {
  confirmPassword: string;
};

const initialValues: SignupFormParams = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  surname: ''
};

type UseSignupFormReturn = {
  initialValues: SignupFormParams;
  onSubmit: ({ email, password }: SignupParams) => void;
  isLoading: boolean;
  validationScheme: unknown;
};

const useSignupForm = (): UseSignupFormReturn => {
  const { mutate, isLoading } = useMutation(
    async ({ email, password, surname, name }: SignupParams) =>
      post(signupPath, { email, password, surname, name }),
    {
      onSuccess: (res) => {
        toast(res?.data || 'Verifikacioni mejl je poslat');
      },
      onError: (err: any) => {
        toast(err.response?.data?.msg || err?.response?.data || 'Ups. Nesto nije kako treba');
      }
    }
  );

  const onSubmit = ({ email, password, surname, name }: SignupParams) =>
    mutate({ email, password, surname, name });

  return { initialValues, onSubmit, isLoading, validationScheme: signupValidationScheme };
};

export default useSignupForm;
