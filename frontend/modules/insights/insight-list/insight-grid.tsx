import { Locale, useTranslations } from "next-intl";

import { ArticleCard } from "@/components/molecules/article-card";
import { EmptyState } from "@/components/molecules/empty-state";
import { XInfiniteScroll } from "@/components/molecules/infinite-scroll";
import { ROUTES } from "@/config/routes";

import { GetInsightsResponse } from "../api/insight.interface";
import { useInsightInfiniteQuery } from "./use-portfolio-infinite-query";

interface Props {
  initialData: GetInsightsResponse;
  locale?: Locale;
}

export const InsightGrid: React.FC<Props> = ({ initialData, locale }) => {
  const t = useTranslations("components.insight");

  const q = useInsightInfiniteQuery({ initialData, locale });
  const results = q.data?.pages.flatMap((page) => page.data) ?? [];
  const dataLength =
    q.data?.pages.reduce((acc, page) => acc + page.data.length, 0) ?? 0;

  if (!results.length) return <EmptyState />;

  return (
    <XInfiniteScroll
      dataLength={dataLength}
      next={q.fetchNextPage}
      hasMore={!!q.hasNextPage}
    >
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-3">
        {results.map((x) => (
          <ArticleCard
            key={x.id}
            title={x.title}
            image={x.image}
            description={x.description}
            btnText={t("btn-detail")}
            btnLink={ROUTES.INSIGHT_DETAIL(x.id, x.title)}
          />
        ))}
      </div>
    </XInfiniteScroll>
  );
};
