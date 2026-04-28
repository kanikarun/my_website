import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { StepCard } from '@/components/organisms/step-card';
import { StepCardProps } from '@/components/organisms/step-card/interface';
import { cn } from '@/lib/utils';

export interface TemplateStepCardProps extends StepCardProps {
  sectionTitle: SectionTitleProps;
  bgColor?: 'Gray' | 'White';
}

export const TemplateStepCard: React.FC<TemplateStepCardProps> = ({ sectionTitle, bgColor, ...rest }) => {
  return (
    <div className={cn({ 'not-dark:bg-gray-50': bgColor === 'Gray' }, { 'dark:bg-black': bgColor === 'White' })}>
      <div className="container space-y-9 py-8 md:py-16">
        {sectionTitle && <SectionTitle {...sectionTitle} />}
        <StepCard {...rest} />
      </div>
    </div>
  );
};