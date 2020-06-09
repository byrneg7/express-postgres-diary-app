require('dotenv').config();

console.log('*** knexfile ***');

console.log(__dirname + '/server/db/migrations');
console.log(process.env.DATABASE_URL);

console.log('*** knexfile ***');

module.exports = {
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL_TEST,
    migrations: {
      directory: __dirname + '/server/db/migrations',
    },
  },
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/server/db/migrations',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/server/db/migrations',
    },
  }
};