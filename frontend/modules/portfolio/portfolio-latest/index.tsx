import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { ArticleCard } from '@/components/molecules/article-card';
import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/routes';
import { Link } from '@/i18n/navigation';

import { getPortfolios } from '../api/portfolio.api';

interface PortfolioLatestProps {
  sectionTitle?: SectionTitleProps;
  locale?: Locale;
}

export const PortfolioLatest: React.FC<PortfolioLatestProps> = async props => {
  const { sectionTitle, locale } = props;
  const [t, { data }] = await Promise.all([
    getTranslations('components.portfolio'),
    getPortfolios({ page: 1, pageSize: 2, locale })
  ]);

  if (!data.length) return null;

  return (
    <div className="dark:bg-black py-8 lg:py-16">
      <div className="container  space-y-9 flex flex-col">
        {sectionTitle && <SectionTitle {...sectionTitle} />}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          {data.map(x => (
            <ArticleCard {...x} key={x.id} btnText={t('btn-detail')} btnLink={ROUTES.PORTFOLIO_DETAIL(x.id, x.title)} />
          ))}
        </div>

        <Button size="2xl" asChild className="mx-auto">
          <Link href={ROUTES.PORTFOLIO}>{t('btn-more')}</Link>
        </Button>
      </div>
    </div>
  );
};