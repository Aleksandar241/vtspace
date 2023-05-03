import { RouterProvider } from 'react-router-dom';
import router from '@router';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@utils';

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />;
  </QueryClientProvider>
);

export default App;
