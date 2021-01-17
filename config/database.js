module.exports = ({ env }) => {

console.log('---->',env('DATABASE_HOST'))
console.log('---->',env('DATABASE_SRV'))
console.log('---->',env('DATABASE_PORT'))
console.log('---->',env('DATABASE_NAME'))
console.log('---->',env('DATABASE_USERNAME'))
console.log('---->',env('DATABASE_PASSWORD'))

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          host: env('DATABASE_HOST', 'localhost'),
          srv: env.bool('DATABASE_SRV', true),
          port: env.int('DATABASE_PORT', 27017),
          database: env('DATABASE_NAME', 'strapi'),
          username: env('DATABASE_USERNAME', ''),
          password: env('DATABASE_PASSWORD', ''),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
          ssl: env.bool('DATABASE_SSL', true),
        },
      },
    },
  }
};
