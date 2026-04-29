import { Locale } from 'next-intl';

import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { TeamMembers } from '@/modules/team-member';
import { getTeamMembers } from '@/modules/team-member/api/team-member.api';

export interface TemplateTeamProps {
  sectionTitle?: SectionTitleProps;
  locale?: Locale;
}

export const TemplateTeam: React.FC<TemplateTeamProps> = async ({ sectionTitle, locale }) => {
  const data = await getTeamMembers(locale);

  if (!data.data.length) return null;

  return (
    <div className="dark:bg-black">
      <div className="container py-8 space-y-9 lg:py-16">
        {sectionTitle && <SectionTitle {...sectionTitle} />}
        <TeamMembers data={data} />
      </div>
    </div>
  );
};