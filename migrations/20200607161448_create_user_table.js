exports.up = function (knex) {
  return knex.schema.createTable('login_user', t => {
    t.increments('id').unsigned().primary();
    t.string('email').notNullable().unique();
    t.string('password_digest').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('login_user');
};
