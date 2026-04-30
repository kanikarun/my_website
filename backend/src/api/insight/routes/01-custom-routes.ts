export default {
  routes: [
    {
      method: "POST",
      path: "/insights/:slug/views-count",
      handler: "insight.increaseViewCount",
      // https://github.com/strapi/strapi/pull/14266
      config: { auth: { scope: ["api::insight.insight.findOne"] } },
    },
  ],
};
