import { cn } from '@/lib/utils';

export interface Props {
  tagline?: string;
  title?: string;
  description?: string;
  className?: string;
  taglineColor?: 'Primary' | 'Purple' | 'Teal';
}

export const SectionTitle: React.FC<Props> = ({ tagline, title, description, className, taglineColor }) => {
  return (
    <div className={cn('space-y-3', className)}>
      <span
        className={cn('text-primary md:text-lg font-semibold', {
          'text-purple': taglineColor === 'Purple',
          'text-teal': taglineColor === 'Teal'
        })}
      >
        {tagline}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold max-w-lg">{title}</h2>
      <p className="text-lg sm:text-xl">{description}</p>
    </div>
  );
};