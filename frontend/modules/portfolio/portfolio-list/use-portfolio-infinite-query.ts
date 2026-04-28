import { useInfiniteQuery } from "@tanstack/react-query";
import { Locale } from "next-intl";

import { QK } from "@/config/query-key";

import { getPortfolios } from "../api/portfolio.api";
import { GetPortfoliosResponse } from "../api/portfolio.interface";

interface Options {
  initialData?: GetPortfoliosResponse;
  locale?: Locale;
  type?: string;
}

export const usePortfolioInfiniteQuery = ({
  initialData,
  type,
  locale,
}: Options) => {
  return useInfiniteQuery<GetPortfoliosResponse, Error>({
    initialPageParam: 1,
    initialData: initialData
      ? { pages: [initialData], pageParams: [1] }
      : undefined,
    // Keep previous data while fetching
    placeholderData: (prev) => prev,
    queryKey: [QK.PORTFOLIOS, type, locale],
    queryFn: ({ pageParam = 1 }) => {
      return getPortfolios({ locale, type, page: pageParam as number });
    },
    getNextPageParam: (lastPage) => {
      const { page, pageSize, total } = lastPage.meta.pagination;
      return page * pageSize < total ? page + 1 : undefined;
    },
  });
};
