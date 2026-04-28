import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from 'next-intl';

import { BlockManager, getBlocks } from '@/components/templates/block-manager';
import { getPage } from '@/modules/page/api/page.api';
import { getMetadata } from '@/utils/next-metadata';

interface PageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getPage('portfolio', locale);
  if (!page) return {};
  return getMetadata(page);
}

export default async function Page({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const page = await getPage('portfolio', locale);

  if (!page) return notFound();

  return (
    <BlockManager
      blocks={getBlocks(page.block)}
      locale={locale}
      searchParams={resolvedSearchParams}
    />
  );
}
