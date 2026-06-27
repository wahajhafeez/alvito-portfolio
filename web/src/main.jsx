import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import './index.css';
import App from './App.jsx';
import { queryClient } from '@/lib/queryClient';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(15, 15, 30, 0.92)',
            border: '1px solid rgba(255, 255, 255, 0.10)',
            color: '#e2e8f0',
            backdropFilter: 'blur(20px)',
          },
        }}
      />
    </QueryClientProvider>
  </StrictMode>
);
