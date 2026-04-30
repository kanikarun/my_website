/**
 * insight controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::insight.insight', ({ strapi }) => ({
  async increaseViewCount(ctx) {
    try {
      const { slug } = (ctx as any).request.params;

      const entries: any[] = await (strapi as any).entityService.findMany('api::insight.insight', {
        limit: 1,
        fields: ['views'],
        filters: { slug }
      });

      if (entries.length) {
        const [{ id = 0, views }] = entries;
        await (strapi as any).db
          .query('api::insight.insight')
          .update({ where: { id }, data: { views: parseInt(views || 0) + 1 } });
      }

      return { message: 'ok' };
    } catch (err) {
      ctx.throw(400);
    }
  }
}));
