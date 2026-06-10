const {control, loginControl, middleware ,UserFile} = require("../controllers/ResponseConroller");
const verifyToken = require("../middleware/authorization");

const router = require("express").Router();

 router.post("/signup",control)
 
 router.get("/signup",control);

 router.get("/signin",loginControl)
 router.post("/signin",loginControl)
//  router.get("/dashboard",verifyToken,middleware)
router.post("/user",UserFile);

    
 



module.exports= router