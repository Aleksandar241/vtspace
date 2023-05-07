import { FC } from 'react';
import { useQuery } from 'react-query';
import { get } from '@utils';
import { Post } from '@molecules';
import { PostModel } from '@models';
import { postsKey, postsPath } from '@constants';

import styles from './post_list.module.scss';

const PostList: FC = (): JSX.Element => {
  const { data, isLoading } = useQuery(postsKey, () => get(postsPath));
  const posts: PostModel[] = data?.data;

  return (
    <section>
      {posts?.map((post) => (
        <Post key={post?.id} post={post}/>
      ))}
    </section>
  );
};

export default PostList;
