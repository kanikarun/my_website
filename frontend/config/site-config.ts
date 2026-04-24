import { env } from '@/env.mjs';

export const siteConfig = {
  name: 'OneWorld Software',
  title: 'Software Development Company',
  description:
    'OneWorld is a software, mobile app and web development company in Cambodia. We design and develop solutions across several technologies to fit your business demands.',
  url: env.NEXT_PUBLIC_SITE_URL || 'https://oneworldsoftware.com',
  ogImage: 'https://oneworldsoftware.com/images/banner.jpg',
  telegram: 'https://t.me/oneworldtechnology',
  email: 'info@oneworldcambodia.com',
  address:
    'OneWorld Information Technology Co., Ltd No. 336C st 93 Corner 282, Boeung Kengkong 1 Commune, Boeung Kengkong District, Phnom Penh, Cambodia 12211',
  keywords: ['Oneworld', 'software development', 'Cambodia', 'web app', 'mobile app', 'digital solution']
};