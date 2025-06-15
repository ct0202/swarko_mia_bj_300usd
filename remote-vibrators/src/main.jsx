import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// REACT-QUERY IMPORTS
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App.jsx';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NODE_ENV } from './config/config.js';

if (NODE_ENV === 'production'){
  disableReactDevTools();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },}
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
