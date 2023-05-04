import Router from '@routers';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@utils';
import { Layout } from '@molecules';
import { AuthContextProvider } from '@contexts';

const App = (): JSX.Element => (
  <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router />
      </Layout>
    </QueryClientProvider>
  </AuthContextProvider>
);

export default App;
