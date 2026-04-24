import { Koh_Santepheap, Nunito_Sans } from 'next/font/google';

export const fontSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--ow-font-sans',
  weight: ['300', '400', '600', '700', '800', '900']
});

export const fontSansKh = Koh_Santepheap({
  subsets: ['khmer'],
  weight: ['300', '400', '700'],
  variable: '--ow-font-sans-kh'
});