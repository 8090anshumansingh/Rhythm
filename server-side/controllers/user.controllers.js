import User from "../models/user.model.js";
import All from "../models/All Songs.model.js";

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
      likedSongs:[]
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
              res.status(200).json({data:data , msg:"login"});
            } else {
              res.status(200).json({data:NULL,msg:"incorrect password or username"});
            }
          });
        } else {
          res.status(200).json({msg:"incorrect username"});
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const likeSong = (req, res) => {
  try {
    
    User.find({_id:req.body.userId}, function (err, data) {
      if (err) {
        
         console.log(err);
      } else {
         

           data[0].likedSongs.push(req.body.id);            

        data[0].save();
        res.status(200).send("song liked");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const dislikeSong = (req, res) => {
  try {
    
    User.find({_id:req.body.userId}, function (err, data) {
      if (err) {
        
         console.log(err);
      } else {
         
             var index= data[0].likedSongs.indexOf(req.body.id);
             data[0].likedSongs.splice(index,1);
                      

        data[0].save();
        res.status(200).send("song disliked");
      }
    });
  } catch (e) {
    console.log(e);
  }
};


export const getAllLiked = (req, res) => {
  try {
    
    User.find({_id:req.body.userId}, function (err, data) {
      if (err) {
        
         console.log(err);
      } else {
         
        //  console.log(data[0].likedSongs);
         
         res.status(200).json(data[0].likedSongs);
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const  getSongFromId = async (req, res) => {
  try {
    var tt =[];
    // console.log(req.body.userId);
   User.find({_id:req.body.userId}, function (err, data) {
      if (err) {
        
         console.log(err);
      } else {

        All.find({}, function (err1,data1){
           data[0].likedSongs.forEach((e) => {
              var found= data1[0].tracks.find(t => t.id===e);
               tt.push(found);
              
           });
          //  console.log(tt);
           res.status(200).json(tt);
        });
        
       
        
      }
    });
   
   
  } catch (e) {
    console.log(e);
  }
};
