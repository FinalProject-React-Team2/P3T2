const mongoose = require('mongoose');
console.log("CONNECTION:", process.env.MONGODB_URI)


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/p3t2');

module.exports = mongoose.connection;
// process.env.MONGODB_URI ||
