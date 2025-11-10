import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ['ca', 'es', 'en'],
  },
  bootstrap(app: StrapiApp) {
    // No custom bootstrap logic yet.
  },
};

