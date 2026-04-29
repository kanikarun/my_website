import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from 'next-intl';

import { ROUTES } from '@/config/routes';
import { siteConfig } from '@/config/site-config';
import { getPortfolioDetail } from '@/modules/portfolio/api/portfolio.api';
import { PortfolioDetail } from '@/modules/portfolio/portfolio-detail';
import { revalidateCache } from '@/strapi';

interface PageProps {
  params: Promise<{ locale: Locale; slug: string[] }>;
  searchParams: Promise<never>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const portfolio = await getPortfolioDetail(+slug[0], locale);

  if (!portfolio) {
    return {
      title: siteConfig.title,
      description: siteConfig.description,
      openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }],
        type: 'article'
      }
    };
  }

  const { title, description, image } = portfolio.data;
  const canonical = `${siteConfig.url}${ROUTES.PORTFOLIO_DETAIL(+slug[0], title)}`;

  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords,
    alternates: { canonical },
    openGraph: {
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.title
        }
      ],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage]
    }
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { locale, slug } = await params;
  revalidateCache(await searchParams);

  const data = await getPortfolioDetail(+slug[0], locale);
  if (!data) return notFound();

  return <PortfolioDetail {...data} />;
}