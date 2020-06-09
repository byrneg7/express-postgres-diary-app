exports.up = function (knex) {
  try {
    return knex.schema.createTable('login_user', t => {
      t.increments('id').unsigned().primary();
      t.string('email').notNullable().unique();
      t.string('password_digest').notNullable()
    })
  } catch (err) {
    console.log(err)
  }
};

exports.down = function (knex) {
  return knex.schema.dropTable('login_user');
};
