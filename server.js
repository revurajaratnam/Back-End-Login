const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const multer = require("multer")
app.use(express.json())
app.use(express.urlencoded({extended: true}));
const routers = require('./routes/Routes');
const connectDb = require('./database/dbconnect');





app.use(cors())
// app.use(express.static("public"));
app.use(routers)




app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
})


