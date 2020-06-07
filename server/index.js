require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// ------------------------------------------------------------------------------------

const app = express();
const PORT = process.env.PORT || 9000;

// Database
const mongoUri = process.env.MONGO_URI;
const ENV = process.env.NODE_ENV;

// if (ENV !== 'test') {
//   mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
// }

// Middleware

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes
require('./routes/testRoute')(app);
require('./routes/userRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, () => console.log(`API listening on port: ${PORT}`));

module.exports = app;