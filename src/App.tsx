import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TransactionList } from './components/TransactionList';

function App() {
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <TransactionList />
        </div>
      </QueryClientProvider>

  );
}

export default App;
