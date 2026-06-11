const { UploadFile } = require("../models/userUplodfileSchema");

const UserDataDB= async (req,res) =>{
    try {
        console.log(req.file);
    const usersDB = new UploadFile({
       fname: req.body.fname,
       age: req.body.age,
       Email:req.body.Email,
       photo:req.file.filename,
    });
        const result = await usersDB.save();
          res.json({
            message:"User Saved Successfully",
            data :result
          })
    } catch (error) {
        console.log(error)
    }
}
const GetUserData = async (req,res) =>{
        const users = await UploadFile.find();
        res.json(users);
}
module.exports = {UserDataDB, GetUserData};