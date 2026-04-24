import { fetchAPI } from '@/strapi';

import * as I from './client.interface';

export function getClient(type?: I.ClientType): Promise<I.ClientsResponse> {
  const filters = type ? { type: { $eq: type } } : {};
  return fetchAPI('/clients', { filters, populate: '*', sort: ['ordering:desc'], pagination: { limit: 500 } });
}
