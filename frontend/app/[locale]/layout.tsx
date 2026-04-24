import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { FacebookPixel } from '@/components/molecules/facebook-pixel';
import ScrollToTop from '@/components/molecules/scroll-to-top';
import { siteConfig } from '@/config/site-config';
import { env } from '@/env.mjs';
import { routing } from '@/i18n/routing';
import { fontSans, fontSansKh } from '@/lib/fonts';
import { Footer } from '@/modules/navigation/footer';
import { Header } from '@/modules/navigation/header';

import { Provider } from './provider';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
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
        alt: siteConfig.title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Readonly<Props>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} ${fontSansKh.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="OneWorld Website" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
      </head>
      <body>
        <NextIntlClientProvider>
          <Provider>
            <Header locale={locale} />
            {children}
            <Footer locale={locale} />
            <ScrollToTop />
            <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
            <FacebookPixel />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}