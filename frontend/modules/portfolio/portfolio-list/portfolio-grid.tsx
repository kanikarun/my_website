import { Locale, useTranslations } from 'next-intl';

import { ArticleCard } from '@/components/molecules/article-card';
import { EmptyState } from '@/components/molecules/empty-state';
import { ROUTES } from '@/config/routes';

import { GetPortfoliosResponse } from '../api/portfolio.interface';

interface Props {
  data: GetPortfoliosResponse['data'];
  locale?: Locale;
  onClear: () => void;
}

export const PortfolioGrid: React.FC<Props> = ({ data, onClear }) => {
  const t = useTranslations('components.portfolio');

  if (!data.length) return <EmptyState onClearFilter={onClear} />;

  return (
    <div className="container pb-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {data.map(x => (
          <ArticleCard key={x.id} {...x} btnText={t('btn-detail')} btnLink={ROUTES.PORTFOLIO_DETAIL(x.id, x.title)} />
        ))}
      </div>
    </div>
  );
};