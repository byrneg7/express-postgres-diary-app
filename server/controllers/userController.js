const User = require('../models/User').User;
const makeJwt = require('../helpers/sendJwt').makeJwt;

const registerUser = (req, res) => {
  const {email, password} = req.body.user;
  User.where({email}).fetch({require: false})
    .then(result => {
      if (result) {
        return res.status(422).send({error: 'Email already taken'})
      } else {
        const user = new User({email, password});
        user.save()
          .then(user => res.send({access_token: makeJwt(user)}))
          .catch(err => {
            return res.status(401).send(err)
          })
      }
    })
};

const loginUser = (req, res) => {
  const {email, password} = req.body.user;

  User.forge({email}).fetch({require: false}).then(result => {
    if (!result) {
      return res.status(404).send('user not found');
    }
    result.authenticate(password)
      .then(user => res.send({access_token: makeJwt(user)}))
      .catch(err => {
        return res.status(401).send(err)
      })
  });
};

const fetchUser = (req, res) => res.send(req.user);

module.exports = {
  registerUser,
  loginUser,
  fetchUser
};