'use client';

import { Locale } from 'next-intl';

import { GetInsightsResponse } from '../api/insight.interface';
import { InsightGrid } from './insight-grid';

interface Props {
  locale: Locale;
  data: GetInsightsResponse;
}

export const InsightList: React.FC<Props> = ({ data, locale }) => {
  return (
    <div className="py-16">
      <InsightGrid initialData={data} locale={locale} />
    </div>
  );
};