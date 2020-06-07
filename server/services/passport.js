const passport = require('passport');
const passportJwt = require('passport-jwt');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const User = require('../models/User').User;
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const strategy = new JwtStrategy(opts, (payload, next) => {
  User.forge({id: payload.id}).fetch().then(res => {
    next(null, res)
  });
});

passport.use(strategy);

module.exports = {passport};