// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/blog'
  },

  production: {
    client: 'postgresql',
    connection: process.env.NOD_ENV
  }

};
