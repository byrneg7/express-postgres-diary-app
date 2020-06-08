const knex = require('knex');
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');

const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];

const knexDb = knex(config);
const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = {db};