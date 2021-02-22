const dbConfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.mongoose.set('useCreateIndex', true);
db.mongoose.set('useFindAndModify', false);
db.url = dbConfig.url;

db.user = require('./user.model.js')(mongoose);

module.exports = db;
