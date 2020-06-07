// const mongoose = require('mongoose');
// require('dotenv').config();
//
// before(done => {
//   mongoose.connect(process.env.MONGO_TEST_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//   mongoose.connection
//     .once('open', () => done())
//     .on('error', console.error.bind(console, 'connection error'));
// });
//
// beforeEach(done => {
//   const { basecouriers } = mongoose.connection.collections;
//   basecouriers.drop()
//     .then(() => basecouriers.createIndex({ 'location.coordinates': '2dsphere' }))
//     .then(() => done())
//     .catch(() => done())
// });
