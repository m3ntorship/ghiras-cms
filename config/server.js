module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: env('STRAPI_ADMIN_PATH','/admin'),
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6f8f19e77a2846fd0368028cac880707'),
    },
  },
});
