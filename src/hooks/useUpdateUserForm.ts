import { useMutation } from 'react-query';
import { put, queryClient } from '@utils';
import { UserModel, Roles } from '@models';
import { toast } from 'react-toastify';

type UserSubmitType = Pick<UserModel, 'image' | 'name' | 'surname' | 'id'>;

type UseCreateUpdatePostFormReturn = {
  onSubmit: ({ id, image, name, surname }: UserModel) => void;
  isLoading: boolean;
  initialValues: UserModel;
};

const initialValues: UserModel = {
  id: null,
  name: '',
  surname: '',
  image: null,
  role: Roles.STUDENT,
  email: null
};

const useUpdateUserForm = (): UseCreateUpdatePostFormReturn => {
  const { mutate, isLoading } = useMutation(
    async ({ id, image, name, surname }: UserSubmitType) =>
      put('user', { id, image, name, surname }),
    {
      onSuccess: () => queryClient.invalidateQueries('user'),
      onError: (err: any) => {
        toast(err?.message ?? 'Ups. Nesto nije kako treba');
      }
    }
  );

  const onSubmit = ({ id, image, name, surname }: UserSubmitType) =>
    mutate({ id, image, name, surname });

  return { onSubmit, isLoading, initialValues };
};

export default useUpdateUserForm;
