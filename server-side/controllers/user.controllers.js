import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
const saltRounds = 12;

export const registerUser = (req, res) => {
  try {
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var newName = fname + " " + lname;
    const newUser = {
      name: newName,
      email: req.body.email,
      password: req.body.password,
    };
    bcryptjs.hash(req.body.password, saltRounds, function (err, hash) {
      newUser.password = hash;
      User.create(newUser, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(data);
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
};
export const loginUser = (req, res) => {
  try {
    User.findOne({ email: req.body.email }, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        if (data !== undefined && data !== null) {
          bcryptjs.compare(req.body.password, data.password, function (
            err,
            result
          ) {
            if (result) {
              res.status(200).send("login");
            } else {
              res.send("incorrect password or username");
            }
          });
        } else {
          res.send("incorrect Username");
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
};
