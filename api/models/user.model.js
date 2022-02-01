const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: {type:String,required:true},
    lastname: {type:String,required:true},
    formation: String, 
    product: String, 
    number: String,         
    email: {type:String,required:true,unique:true},
    password: String,
    roles: [ 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;