'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from '@/components/ui/empty';
import NoResultsImage from '@/public/icons/no-results.svg';

export const EmptyState: React.FC<{ onClearFilter?: () => void }> = ({ onClearFilter }) => {
  const t = useTranslations('components.empty-state');

  return (
    <Empty className="container border border-gray-300 dark:border-navy-blue border-dashed">
      <EmptyHeader>
        <NoResultsImage />
        <EmptyTitle className="text-xl">{t('title')}</EmptyTitle>
        <EmptyDescription className="text-base">{t('description')}</EmptyDescription>
      </EmptyHeader>
      {Boolean(onClearFilter) && (
        <EmptyContent className="flex-row justify-center gap-2">
          <Button onClick={onClearFilter}>{t('button')}</Button>
        </EmptyContent>
      )}
    </Empty>
  );
};