const jwt = require('jsonwebtoken');

const makeJwt = user => {
  const payload = {id: user.id};
  return jwt.sign(payload, process.env.JWT_SECRET);
};

module.exports = {
  makeJwt
};