export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('STRAPI_USERS_PERMISSIONS_JWT_SECRET', env('JWT_SECRET')),
    },
  },
});
