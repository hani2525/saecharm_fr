import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { RouterObj } from './RouterInfo';

const Router = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={RouterObj} />
    </QueryClientProvider>
  );
};

export default Router;
