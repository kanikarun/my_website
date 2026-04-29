import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Locale } from "next-intl";

import { siteConfig } from "@/config/site-config";
import { getInsightDetail } from "@/modules/insights/api/insight.api";
import { InsightsDetail } from "@/modules/insights/insight-detail";
import { getStrapiMedia, revalidateCache } from "@/strapi";

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>;
  searchParams: Promise<never>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const insight = await getInsightDetail(slug, locale);

  if (!insight) {
    return {
      title: siteConfig.title,
      description: siteConfig.description,
      openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.title,
          },
        ],
        type: "article",
      },
    };
  }

  const { title, description, image } = insight;
  const canonical = `${siteConfig.url}/insights/${slug}`;

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
          url: image?.data?.attributes?.url || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: [image?.data?.attributes?.url || siteConfig.ogImage],
    },
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { locale, slug } = await params;
  revalidateCache(await searchParams);

  const insight = await getInsightDetail(slug, locale);
  if (!insight) return notFound();

  return (
    <InsightsDetail
      title={insight.title}
      content={insight.content}
      image={getStrapiMedia(insight.image)}
      createdAt={insight.createdAt}
      slug={slug}
    />
  );
}
