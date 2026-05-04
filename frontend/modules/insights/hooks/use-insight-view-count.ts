'use client';

import { useEffect } from 'react';

import { updateInsightViewCount } from '@/modules/insights/api/insight.api';

interface Props {
  id: number;
}

export const InsightViewCounter = ({ id }: Props) => {
  useEffect(() => {
    updateInsightViewCount(id);
  }, [id]);

  return null;
};