'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export interface NavigationProps {
  progress?: number;
  navigator: {
    prev: string;
    next: string;
  };
}

export const NavigationBtn: React.FC<NavigationProps> = props => {
  const { progress, navigator } = props;
  const className =
    'group border-primary size-14 shrink-0 rounded-full border-2 hover:bg-primary/5 hover:cursor-pointer';

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-3 lg:flex">
        <button className={cn(className, navigator.prev)}>
          <ChevronLeftIcon className="group-hover:text-primary text-primary m-auto" />
        </button>
        <Progress
          hidden={progress === undefined}
          value={progress}
          className={cn(
            'h-1 grow bg-gray-300 dark:bg-gray-300/30',
            navigator.prev // used `navigator.prev` className here so that when the nav button hide it will got hide as well
          )}
          color="primary"
        />
        <button className={cn(className, navigator.next)}>
          <ChevronRightIcon className="group-hover:text-primary text-primary m-auto" />
        </button>
      </div>
    </div>
  );
};