import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

import Venues from './Venues';

import './App.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Venues />
    </QueryClientProvider>
  );
}

export default App;
