const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI)


mongoose.connect( 'mongodb://127.0.0.1:27017/p3t2');

module.exports = mongoose.connection;
// process.env.MONGODB_URI ||