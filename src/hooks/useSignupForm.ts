import { useMutation } from 'react-query';
import { post, signupValidationScheme } from '@utils';

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
      post('signup', { email, password, surname, name }),
    {
      onSuccess: (res) => {
        console.log(res?.data);
      },
      onError: (err) => {
        console.log(err);
      }
    }
  );

  const onSubmit = ({ email, password, surname, name }: SignupParams) =>
    mutate({ email, password, surname, name });

  return { initialValues, onSubmit, isLoading, validationScheme: signupValidationScheme };
};

export default useSignupForm;
