require("dotenv").config()
    const nodemailer =require('nodemailer')

const traspotor = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.my_email,
        pass:process.env.password,
    }
})

module.exports ={traspotor}