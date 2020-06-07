const userController = require('../controllers/userController');

module.exports = app => {
  app.post('/register', userController.registerUser);
  app.post('/login', userController.loginUser);
};

