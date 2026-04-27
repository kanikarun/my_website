import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { FeatureCard } from '@/components/organisms/feature-card';
import { FeatureCardProps } from '@/components/organisms/feature-card/interface';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export interface TemplateFeatureCardProps extends FeatureCardProps {
  sectionTitle?: SectionTitleProps;
  btnText?: string;
  btnLink?: string;
}

export const TemplateFeatureCard: React.FC<TemplateFeatureCardProps> = props => {
  const { sectionTitle, data, variant, btnText, btnLink } = props;
  const isEnabledBtn = btnText && btnText;

  return (
    <div className="dark:bg-black">
      <div className="flex flex-col container space-y-9 py-8 md:py-16">
        {sectionTitle && <SectionTitle {...sectionTitle} />}
        <FeatureCard data={data} variant={variant} />
        {isEnabledBtn && (
          <Button className="self-center" size="2xl" asChild>
            <Link href={btnLink || '#'}>{btnText}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};