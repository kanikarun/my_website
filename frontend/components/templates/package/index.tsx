import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';

import { PackageCard, PackageCardProps } from './package-card';

export interface TemplatePackageProps {
  sectionTitle?: SectionTitleProps;
  items: PackageCardProps[];
  packageItems: PackageCardProps[];

}

export const TemplatePackage = (props: TemplatePackageProps) => {
  const { sectionTitle, packageItems } = props;

  return (
    <div className="py-8 lg:py-16 bg-white dark:bg-black">
      <div className="container space-y-9">
        {sectionTitle && <SectionTitle className="text-center [&_h2]:mx-auto" {...sectionTitle} />}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
          {packageItems.map(x => (
            <PackageCard key={x.title} {...x} color={sectionTitle?.taglineColor as never} />
          ))}
        </div>
      </div>
    </div>
  );
};