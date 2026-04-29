import { Locale } from 'next-intl';

import { IArrayResponse, IAttribute, IDataAttribute, Image, Meta } from '@/strapi';

export interface GetTeamMembersResponse {
  meta: Meta;
  data: {
    id: number;
    name: string;
    position: string;
    bio?: string;
    image: string;
  }[];
}

interface ITeamMember {
  name: string;
  position: string;
  bio?: string;
  image: Image;
  locale: Locale;
  localizations: IArrayResponse<ITeamMember>;
}

export type TeamMemberAttribute = IAttribute<ITeamMember>;
export type TeamMembersResponse = IArrayResponse<ITeamMember>;
export type TeamMemberResponse = IDataAttribute<ITeamMember>;