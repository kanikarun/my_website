import { Metadata } from 'next';
import { Locale } from 'next-intl';

import { siteConfig } from '@/config/site-config';
import { getPortfolios } from '@/modules/portfolio/api/portfolio.api';
import { PortfolioList } from '@/modules/portfolio/portfolio-list';

interface PageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export const metadata: Metadata = {
  title: `Portfolio | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default async function Page({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { type, page } = await searchParams;

  const data = await getPortfolios({
    locale,
    type: typeof type === 'string' ? type : undefined,
    page: typeof page === 'string' ? +page : 1,
  });

  return <PortfolioList locale={locale} data={data} />;
}
