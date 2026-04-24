import { IArrayResponse, IAttribute, IDataAttribute, Image } from '@/strapi';

export type ClientType = 'Company' | 'Individual';

interface IClient {
  name: string;
  link: string;
  ordering: number;
  image?: Image;
  imageDark?: Image;
  type: ClientType;
}

export type ClientAttribute = IAttribute<IClient>;
export type ClientsResponse = IArrayResponse<IClient>;
export type ClientResponse = IDataAttribute<IClient>;
