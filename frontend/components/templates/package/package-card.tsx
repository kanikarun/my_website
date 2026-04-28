import { getTranslations } from 'next-intl/server';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export interface PackageCardProps {
  tagline?: string;
  title: string;
  description: string;
  btnText?: string;
  btnLink?: string;
  isRecommend?: boolean;
  color: 'Primary' | 'Purple';
}

export const PackageCard: React.FC<PackageCardProps> = async props => {
  const { tagline, title, description, btnText, btnLink, isRecommend, color = 'Primary' } = props;
  const isPrimaryColor = color === 'Primary';
  const t = await getTranslations('components.package');

  return (
    <div
      className={cn('h-fit rounded-xl', isPrimaryColor ? { 'bg-primary': isRecommend } : { 'bg-purple': isRecommend })}
    >
      <p className="text-center text-white p-1 text-sm" hidden={!isRecommend}>
        {t('recommended')}
      </p>
      <Card
        className={cn(
          // `#1b2f40` is equivalence to bg-navy-blue/80
          'dark:bg-[#1b2f40] text-center border',
          isPrimaryColor ? { 'border-primary': isRecommend } : { 'border-purple': isRecommend }
        )}
      >
        <CardHeader className="space-y-4">
          <div>
            <span>{tagline}</span>
            <CardTitle className="text-lg lg:text-xl font-semibold">{title}</CardTitle>
          </div>
          <CardDescription className="text-sm lg:text-base">{description}</CardDescription>
          <CardContent hidden={!btnText}>
            <Button
              asChild
              size="xl"
              className={cn({ 'bg-purple text-primary-foreground hover:bg-purple/80': !isPrimaryColor })}
            >
              <Link href={btnLink || '#'}>{btnText}</Link>
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};