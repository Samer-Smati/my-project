const config = require("../config/auth.config");
const db = require("../models/index");
const User = db.user; 
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
exports.teacherBoard = (req, res) => {
    res.status(200).send("Teacher Content.");
  };  

exports.gestionaireBoard = (req, res) => {
    res.status(200).send("Gestionaire Content.");
  };
  
exports.studentBoard = (req, res) => {
    res.status(200).send("Student Content.");
  }; 

exports.allUsers = (req, res) => {
    User.find()
    .populate("roles", "-__v") 
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send(user);  
    });
};
exports.deleteUser = (req, res) => {
  console.log( req.body.email)  
  User.findOneAndRemove({email: req.body.email}, (err, user) => {
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
        message: "User successfully deleted",
    };
    return res.status(200).send(response);  
});
}; 

exports.updateUser = (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname, 
    email: req.body.email,
    formation: req.body.formation,
    product: req.body.product, 
    number: req.body.number, 
    password: bcrypt.hashSync(req.body.password, 8)
  });
  User.findOne({email: req.body.email})
  .populate("roles", "-__v") 
  .exec((err, olduser) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    console.log(olduser)
  });
};