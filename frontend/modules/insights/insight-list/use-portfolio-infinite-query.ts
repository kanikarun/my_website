import { useInfiniteQuery } from '@tanstack/react-query';
import { Locale } from 'next-intl';

import { QK } from '@/config/query-key';

import { getInsights } from '../api/insight.api';
import { GetInsightsResponse } from '../api/insight.interface';

interface Options {
  initialData?: GetInsightsResponse;
  locale?: Locale;
}

export const useInsightInfiniteQuery = ({ initialData, locale }: Options) => {
  return useInfiniteQuery<GetInsightsResponse, Error>({
    initialPageParam: 1,
    initialData: initialData ? { pages: [initialData], pageParams: [1] } : undefined,
    // Keep previous data while fetching
    placeholderData: prev => prev,
    queryKey: [QK.INSIGHTS, locale],
    queryFn: ({ pageParam = 1 }) => {
      return getInsights({ locale, page: pageParam as number });
    },
    getNextPageParam: lastPage => {
      const { page, pageSize, total } = lastPage.meta.pagination;
      return page * pageSize < total ? page + 1 : undefined;
    }
  });
};