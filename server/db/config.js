const knex = require('knex');
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');

const knexDb = knex({client: 'pg', connection: 'postgres://localhost/jwt_test'});
const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = {db};