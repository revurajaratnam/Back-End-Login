const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(express.json())
app.use(express.urlencoded({extended: true}));
const routers = require('./routes/Routes');
const connectDb = require('./database/dbconnect');



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
// app.use(express.static("public"));
app.use("/uploads",express.static("uploads"))
app.use(routers)




app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
})


