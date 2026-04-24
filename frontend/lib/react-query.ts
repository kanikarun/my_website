import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30_000
    }
    // mutations: {
    //   onError: e => toastErrorMessage(e)
    // }
  }
});

/**
 * @ref https://tanstack.com/query/v4/docs/reference/QueryClient/#queryclientremovequeries
 */
export function resetQueryCache(key?: string[]) {
  queryClient.resetQueries({ queryKey: key });
}
export function invalidateQueryCache(key: string[]) {
  queryClient.invalidateQueries({ queryKey: key });
}

export async function invalidateQuery() {
  await queryClient.invalidateQueries();
  await queryClient.refetchQueries();
}