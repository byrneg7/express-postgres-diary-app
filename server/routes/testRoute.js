const {testController} = require('../controllers/testController');

module.exports = app => {
  app.get('/', (req, res, next) => {
    testController(req, res, next)
  })
};
