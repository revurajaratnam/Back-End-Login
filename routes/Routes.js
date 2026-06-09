const {control, loginControl, middleware} = require("../controllers/ResponseConroller");
const verifyToken = require("../middleware/authorization");

const router = require("express").Router();

 router.post("/signup",control)
 
 router.get("/signup",control);

 router.get("/signin",loginControl)
 router.post("/signin",loginControl)
//  router.get("/dashboard",verifyToken,middleware)

    
 



module.exports= router