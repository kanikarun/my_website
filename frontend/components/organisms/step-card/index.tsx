import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { StepCardProps } from './interface';

export const StepCard: React.FC<StepCardProps> = ({ data, variant }) => {
  return (
    <div
      className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', {
        'lg:grid-cols-3': variant === 'Three Column',
        'xl:grid-cols-4': variant === 'Four Column',
        'lg:grid-cols-3 xl:grid-cols-5': variant === 'Five Column'
      })}
    >
      {data.map((x, i) => {
        return (
          <Card key={x.title} className="py-5 relative dark:bg-navy-blue/50">
            <CardHeader>
              <h1 className="mb-2 text-5xl font-black opacity-10">{`${i + 1}`.padStart(2, '0')}</h1>
              <CardTitle className="font-semibold text-lg lg:text-xl">{x.title}</CardTitle>
              <CardDescription className="text-sm lg:text-base">{x.description}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};