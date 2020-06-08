const knex = require('knex');
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');

const config = require('./knexfile');

const knexDb = knex(config);
const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = {db};