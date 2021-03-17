const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.userSchema = new Schema({
      firstName : String,
      lastName :  String,
      email : String,
      dob : {type : Date },
      bio : String,
});