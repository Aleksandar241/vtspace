import { useCallback } from 'react';
import { Button } from '@atoms';
import { post, get } from '@utils';

const App = (): JSX.Element => {
  const login = useCallback(async () => {
    const res = await post('login', {
      email: 'vasica241@gmail.com',
      password: '12345678'
    });
  }, []);

  const getPosts = useCallback(async () => {
    const posts = await get('posts');
    console.log(posts);
  }, []);

  const logout = useCallback(async () => {
    await post('logout');
  }, []);

  return (
    <div>
      {}
      <Button title="Login" onClick={login} />
      <Button title="Logout" onClick={logout} />
      <Button title="Get posts" onClick={getPosts} />
    </div>
  );
};

export default App;
