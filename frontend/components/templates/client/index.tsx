import { Props as SectionTitleProps } from '@/components/molecules/section-title';
import { ClientListAll, ClientListByType } from '@/components/organisms/client';
import { getClient } from '@/modules/client/api/client.api';
import { ClientType } from '@/modules/client/api/client.interface';

export interface TemplateClientProps {
  sectionTitle?: SectionTitleProps;
  type?: ClientType;
}

export const TemplateClient: React.FC<TemplateClientProps> = async ({ sectionTitle, type }) => {
  const data = await getClient(type);

  if (!data?.data?.length) return null;

  const Component = type ? ClientListByType : ClientListAll;
  return <Component sectionTitle={sectionTitle} data={data} />;
};
