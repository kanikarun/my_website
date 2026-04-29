'use client';

import { useEffect } from 'react';

import { updateInsightViewCount } from '@/modules/insights/api/insight.api';

interface Props {
  slug: string;
}

export const InsightViewCounter = ({ slug }: Props) => {
  useEffect(() => {
    updateInsightViewCount(slug);
  }, [slug]);

  return null;
};