// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + '/db/migrations',
  },
};