require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const knex = require('knex');
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');
const jwt = require('jsonwebtoken');
const app = express();

// ------------------------------------------------------------------------------------

const PORT = process.env.PORT || 9000;

// Database
const knexDb = knex({client: 'pg', connection: 'postgres://localhost/jwt_test'});
const db = bookshelf(knexDb);
db.plugin(securePassword);


// Model
const User = db.Model.extend({
  tableName: 'login_user',
  hasSecurePassword: true
});

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
app.use(passport.initialize());


// Middleware
app.use(passport.initialize());
app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());
// Routes
require('./routes/testRoute')(app);
require('./routes/userRoutes')(app);


app.post('/seedUser', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(401).send('no fields');
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save().then(() => {
    res.send('ok');
  });
});

app.get('/protected', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.send('im protected')
});

app.post('/login', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(401).send('no fields');
  }

  User.forge({email: req.body.email}).fetch().then(result => {
    if (!result) {
      return res.status(400).send('user not found');
    }
    result.authenticate(req.body.password).then(user => {
      const payload = {id: user.id};
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.send(token)
    }).catch(err => {
      return res.status(401).send(err)
    })
  });

});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, () => console.log(`API listening on port: ${PORT}`));

module.exports = app;