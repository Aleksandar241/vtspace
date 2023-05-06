import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { del, queryClient } from '@utils';
import { postsPath, postsKey } from '@constants';
import { PostModel } from '@models';

type DeleteProps = Pick<PostModel, 'id'>;

type UseDeletePropsReturn = {
  onDelete: ({ id }: DeleteProps) => void;
  isLoading: boolean;
};

const useDeletePost = (): UseDeletePropsReturn => {
  const { mutate, isLoading } = useMutation(
    async ({ id }: DeleteProps) => del(`${postsPath}/${id}`),
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(postsKey);
        toast(res?.data ?? 'Uspesno ste izbrisali post');
      },
      onError: (err: any) => {
        toast(err?.message ?? 'Ups. Nesto nije kako treba');
      }
    }
  );

  const onDelete = ({ id }: DeleteProps) => mutate({ id });

  return { onDelete, isLoading };
};

export default useDeletePost;
