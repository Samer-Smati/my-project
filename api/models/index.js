const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.models"); 

db.ROLES = ["superadmin", "teacher", "gestionaire","student"];

module.exports = db; 