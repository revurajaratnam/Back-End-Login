const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    confirmpassword:{
        type:String,
        required:true,
         minlength:8
    },
    uname:{
        type:String,
        required:true,
    },
});

const User = mongoose.model('User',userSchema)
module.exports = User;