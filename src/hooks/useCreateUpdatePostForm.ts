import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { post, put, queryClient } from '@utils';
import { PostModel, Roles } from '@models';
import { postsPath, postsKey } from '@constants';

type PostSubmitType = Pick<PostModel, 'belongsToId' | 'id' | 'title' | 'description'>;

type UseCreateUpdatePostFormReturn = {
  onSubmit: ({ id, title, description, belongsToId }: PostModel) => void;
  isLoading: boolean;
  initialValues: PostModel;
};

const methodFactory = (id?: string | null) => (id ? put : post);

const postCallback = ({ id, title, description, belongsToId }: PostSubmitType) => {
  const callback = methodFactory(id);
  const url = id ? id : '';

  return callback(`${postsPath}/${url}`, { id, title, description, belongsToId });
};

const initialValues: PostModel = {
  id: null,
  createdAt: null,
  title: '',
  description: '',
  belongsToId: null,
  belongsTo: {
    id: null,
    name: null,
    surname: null,
    image: null,
    role: Roles.STUDENT
  }
};

const useCreateUpdatePostForm = (): UseCreateUpdatePostFormReturn => {
  const { mutate, isLoading } = useMutation(
    async ({ id, title, description, belongsToId }: PostSubmitType) =>
      postCallback({ id, title, description, belongsToId }),
    {
      onSuccess: () => queryClient.invalidateQueries(postsKey),
      onError: (err: any) => {
        toast(err?.message ?? 'Ups. Nesto nije kako treba');
      }
    }
  );

  const onSubmit = ({ id, title, description, belongsToId }: PostSubmitType) =>
    mutate({ id, title, description, belongsToId });

  return { onSubmit, isLoading, initialValues };
};

export default useCreateUpdatePostForm;
