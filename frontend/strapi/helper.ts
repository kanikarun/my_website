import { Locale } from 'next-intl';

import { IArrayResponse } from './interface';

interface LocaleAttribute {
  locale: string;
}

export function getAttributes<T extends LocaleAttribute>(x: IArrayResponse<T>, locale: Locale) {
  return x.data.find(y => y.attributes.locale === locale);
}