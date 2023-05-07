import { FC, memo, useState } from 'react';
import { Image } from '@atoms';
import { PostModel } from '@models';
import { CreatePostForm, Modal } from '@molecules';
import { Button } from '@atoms';
import { useDeletePost, useHasPerrmision } from '@hooks';
import styles from './post.module.scss';

type PostType = {
  post: PostModel;
};

const Post: FC<PostType> = ({ post }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const { onDelete, isLoading } = useDeletePost();
  const hasPermission = useHasPerrmision(post?.belongsToId);

  return (
    <article className={styles.post}>
      <p className={styles.post_date}>
        {post?.createdAt ? new Date(post?.createdAt).toLocaleString() : ''}
      </p>
      <div className={styles.post_body}>
        <div className={styles.post_info}>
          <Image source={post?.belongsTo?.image} />
          <p className={styles.post_username}>
            {post.belongsTo?.name} {post.belongsTo?.surname}
          </p>
        </div>
        <div className={styles.post_content}>
          <h2 className={styles.post_title}>{post.title}</h2>
          <p className={styles.post_description}>{post?.description}</p>
        </div>
        <Modal visible={showModal} onClose={() => setShowModal(false)}>
          <CreatePostForm post={post} onSubmitPost={() => setShowModal(false)} />
        </Modal>
        {hasPermission && <Button onClick={() => setShowModal(true)} title="Edit" />}
        {hasPermission && post?.id && (
          <Button onClick={() => onDelete({ id: post.id })} title="Delete" disabled={isLoading} />
        )}
      </div>
    </article>
  );
};

export default memo(Post);
