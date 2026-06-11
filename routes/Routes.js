const {control, loginControl, middleware ,UserFile} = require("../controllers/ResponseConroller");
const { SendOtp } = require("../controllers/sendOTP");
const { UserDataDB, GetUserData } = require("../controllers/userUploadController");
const verifyToken = require("../middleware/authorization");
const upload = require("../middleware/upload");
const { UserFiles } = require("../middleware/UserFiles");
const router = require("express").Router();



 router.post("/signup",control)
 
 router.get("/signup",control);

 router.get("/signin",loginControl)
 router.post("/signin",loginControl)
//  router.get("/dashboard",verifyToken,middleware)
// router.post("/user",upload.single("photo"),UserFiles,UserFile);

// router.post("/user",upload.single("photo"),UserFiles,UserDataDB);
router.get("/user",upload.single("photo"),GetUserData)

router.get("/otp/:email",SendOtp)

    
 



module.exports= router