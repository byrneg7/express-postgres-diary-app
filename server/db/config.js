const knex = require('knex');
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');

var environment = process.env.NODE_ENV || 'development';
var config = require('../../knexfile')[environment];

const knexDb = knex(config);
const db = bookshelf(knexDb);
db.plugin(securePassword);

module.exports = {db};