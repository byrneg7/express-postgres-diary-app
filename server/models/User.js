const db = require('../db/config').db;

const User = db.Model.extend({
  tableName: 'login_user',
  hasSecurePassword: true
});

module.exports = {User};