const User = require("../models/RegisterSchema");
    require("dotenv").config();
    const sc = process.env.Secret_key;
    const jwt = require("jsonwebtoken");
    const control = (req,res) =>{
        res.send("Registration is successful");
        const signUp = new User(req.body)
        signUp.save();
        console.log(req.body);
    }

    const loginControl = async (req,res) =>{
            
      try {
        const {uname , password} = req.body;
        console.log(uname);
            console.log(password);
            console.log(req.body);
            console.log(req.headers);
        const exit = await User.findOne({uname});
        if(!exit){
            return res.send("User Name is not found6")
        }
        const exit1 = await User.findOne({password})
        if(exit1.password !== password){
         return res.send("Invalid Password")
        }
        const payload = {
          userId: exit1._id,
          userName : exit1.uname,
        }
        const token = jwt.sign(payload,"new key",{expiresIn:'10s'});

        return res.status(200).json({
          message:"success",
          token: token,
          user : {uname: uname}
        });
        
      } catch (error) {
        res.send(error)
        return res.status(500).json({message: "Server error",error: error.message})
      }
    }

    const middleware = (req,res) => {
      res.json({
        message:"Welcome Dashboard",
        user: req.user,
      })
    }


    module.exports = {control ,loginControl,middleware}