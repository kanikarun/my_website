import { Locale } from 'next-intl';
import React from 'react';

import { Props as SectionTitleProps } from '@/components/molecules/section-title';
import { getInsights } from '@/modules/insights/api/insight.api';
import { InsightList } from '@/modules/insights/insight-list';

export interface TemplateInsightProps {
  sectionTitle?: SectionTitleProps;
  variant: 'All';
  searchParams?: any;
  locale: Locale;
}

export const TemplateInsight: React.FC<TemplateInsightProps> = async ({ variant, searchParams, ...rest }) => {
  switch (variant) {
    case 'All':
    default:
      return <InsightListServer locale={rest.locale} searchParams={searchParams} />;
  }
};

const InsightListServer: React.FC<{ locale: Locale; searchParams?: any }> = async props => {
  const { locale, searchParams } = props;
  const data = await getInsights({ ...searchParams, page: 1, locale });
  return <InsightList locale={locale} data={data} />;
};