"use client";

import { useQuery } from "@tanstack/react-query";
import { Locale } from "next-intl";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

import { Pagination } from "@/components/molecules/pagination";
import { QK } from "@/config/query-key";

import { getPortfolios } from "../api/portfolio.api";
import { GetPortfoliosResponse } from "../api/portfolio.interface";
import { PortfolioGrid } from "./portfolio-grid";
import { PortfolioTabs } from "./portfolio-tabs";

interface Props {
  locale: Locale;
  data: GetPortfoliosResponse;
}

export const PortfolioList: React.FC<Props> = ({ data: initialData, locale = "en" }) => {
  const [type, setType] = useQueryState("type", parseAsString.withDefault("All"));
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const { data = initialData } = useQuery({
    queryKey: [QK.PORTFOLIOS, type, locale, page],
    queryFn: () => getPortfolios({ locale, type, page }),
    placeholderData: prev => prev,
  });

  const { total = 0, pageSize = 6 } = data?.meta?.pagination ?? {};

  function handleTypeChange(t: string) {
    setType(t);
    setPage(1);
  }

  function clearQuery() {
    setType("All");
    setPage(1);
  }

  return (
    <div className="py-16 space-y-9 dark:bg-black">
      <PortfolioTabs value={type} onValueChange={handleTypeChange} />
      <PortfolioGrid data={data?.data ?? []}  onClear={clearQuery} />
      <Pagination
        total={total}
        limit={pageSize}
        offset={(page - 1) * pageSize}
        onPageChange={setPage}
      />
    </div>
  );
};
