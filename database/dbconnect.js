const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
const dns = require('dns')
dns.setServers(['4.4.4.4','8.8.8.8'])
const connectDb=mongoose.connect(MONGO_URL)
.then(()=> console.log(`Successfully connected to MongoDB`))
.catch((err)=> console.log(`Connection error:`,err))

module.exports = connectDb;