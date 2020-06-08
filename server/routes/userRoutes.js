const userController = require('../controllers/userController');
const passport = require('../services/passport').passport;

module.exports = app => {
  app.post('/api/register', userController.registerUser);
  app.post('/api/login', userController.loginUser);
  app.get('/api/user', passport.authenticate('jwt', {session: false}), userController.fetchUser);
};

