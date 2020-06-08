require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const app = express();
const morgan = require('morgan');

// ------------------------------------------------------------------------------------

const PORT = process.env.PORT || 9000;

// Database
require('./db/config');

// Passport
const passport = require('./services/passport').passport;
app.use(passport.initialize());

// Middleware
app.use(morgan(':method :url :status :response-time ms - :res[content-length]\n'));
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

// Routes
require('./routes/userRoutes')(app);

app.get('/protected', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.send('im protected')
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