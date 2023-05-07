import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@utils';
import { Layout } from '@molecules';
import { AuthContextProvider } from '@contexts';
import Router from '@routers';
import 'react-toastify/dist/ReactToastify.min.css';

const App = (): JSX.Element => (
  <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router />
        <ToastContainer />
      </Layout>
    </QueryClientProvider>
  </AuthContextProvider>
);

export default App;
