'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export const queryClient = new QueryClient();

export const TanstackProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};
