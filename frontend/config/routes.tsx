import _slugify from 'slugify';

const slugify = (name: string) => _slugify(name, { lower: true, remove: /[*+~.()'"!:@]/g, strict: true });

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  SERVICE: '/services',
  INSIGHT: '/insights',
  INSIGHT_DETAIL: (slug: string) => `/insights/${slug}`,
  ODOO_ERP: 'odoo-erp',
  PORTFOLIO: '/portfolios',
  PORTFOLIO_DETAIL: (id: number, title: string) => `/portfolios/${id}/${slugify(title)}`
};