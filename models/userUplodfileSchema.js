const moongose = require("mongoose");

const UserFileSchema = moongose.Schema({
    fname:String,
    age:Number,
    Email:String,
    photo:String,
});

const UploadFile = moongose.model("NewUser",UserFileSchema);


module.exports = {UploadFile}