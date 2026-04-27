import { Props as SectionTitleProps } from '@/components/molecules/section-title';
import { ClientMarquee } from '@/components/organisms/client/misc';
import { ClientLogoProps } from '@/components/templates/block-manager/strapi.interface';

export interface TemplateClientProps {
  sectionTitle?: SectionTitleProps;
  client_label?: string;
  logo?: ClientLogoProps[];
}

export const TemplateClient: React.FC<TemplateClientProps> = ({ sectionTitle, client_label, logo }) => {
  if (!logo?.length) return null;

  return (
    <div className="py-6 border-y border-border dark:bg-black">
      <div className="container flex lg:flex-row flex-col items-center space-y-6 lg:space-y-0">
        {(sectionTitle?.title || client_label) && (
          <h5 className="max-w-xs text-sm sm:text-base text-center lg:text-left w-full font-semibold">
            {sectionTitle?.title || client_label}
          </h5>
        )}
        <ClientMarquee data={logo} />
      </div>
    </div>
  );
};
