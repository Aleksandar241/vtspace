import { FC, memo, useState } from 'react';
import { PostModel } from '@models';
import { CreatePostForm, Modal } from '@molecules';
import { Button } from '@atoms';
import { useDeletePost } from '@hooks';
import styles from './post.module.scss';

type PostType = {
  post: PostModel;
};

const Post: FC<PostType> = ({ post }): JSX.Element => {
  const { onDelete, isLoading } = useDeletePost();
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {post?.title}
      {post?.description}
      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <CreatePostForm post={post} onSubmitPost={() => setShowModal(false)} />
      </Modal>
      <Button onClick={() => setShowModal(true)} title="Edit" />
      {post?.id && post?.belongsToId && (
        <Button onClick={() => onDelete({ id: post.id })} title="Delete" disabled={isLoading} />
      )}
    </div>
  );
};

export default memo(Post);
