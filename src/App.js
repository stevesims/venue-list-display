import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

import Venues from './Venues';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Venues />
    </QueryClientProvider>
  );
}

export default App;
