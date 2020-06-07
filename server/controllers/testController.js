const testController = (req, res, next) => {
  res.json({info: 'Node.js, Express, and Postgres API'});
  next();
};

module.exports = {testController};
