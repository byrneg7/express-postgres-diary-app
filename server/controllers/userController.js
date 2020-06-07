const jwt = require('jsonwebtoken');
const User = require('../models/User').User;

const registerUser = (req, res) => {
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
};

const loginUser = (req, res) => {
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
      res.send({access_token: token})
    }).catch(err => {
      return res.status(401).send(err)
    })
  });
};

module.exports = {
  registerUser,
  loginUser
};