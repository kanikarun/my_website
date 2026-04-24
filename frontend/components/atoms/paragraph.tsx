import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ParagraphTitleProps {
  variant: 'h1' | 'h2' | 'h3';
  text: string;
  isLeading?: boolean;
  color?: string;
}

/**
 * @deprecated use `SectionTitle` in molecules instead
 */
export const ParagraphTitle: React.FC<ParagraphTitleProps> = props => {
  const { variant, text, isLeading, color } = props;

  return (
    <h1
      className={cn(
        { 'text-gray-900': color === 'black', 'text-white': color === 'white' },
        { 'text-2xl font-extrabold md:text-3xl ': variant === 'h1' },
        { 'text-2xl font-bold text-gray-900': variant === 'h2' },
        { 'text-xl font-bold ': variant === 'h3' },
        { 'leading-normal': isLeading },
        'dark:text-white'
      )}
    >
      {text}
    </h1>
  );
};

interface ParagraphBodyProps {
  children: ReactNode | string;
  isLeading?: boolean;
}

export const ParagraphBody: React.FC<ParagraphBodyProps> = props => {
  const { children: text, isLeading } = props;

  return (
    <p
      className={cn('text-base dark:text-white lg:text-lg', {
        'leading-normal': isLeading
      })}
    >
      {text}
    </p>
  );
};