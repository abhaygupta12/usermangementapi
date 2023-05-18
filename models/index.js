// const mongoose= require('mongoose');
// const {MONGODB_URI} = require('../config');

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const MONGODB_URI = process.env.MONGODB_URI; // Access the MongoDB URI from the environment variables


// mongoose.connect(MONGODB_URI);

mongoose.connection.on('connected',()=>{
    console.log("connected")
})
mongoose.connection.on('error',()=>{
    console.log("some error",error)
})
// mongoose.connect('mongodb://localhost:27017/sampleapp',{useNewUrlParser:true},(error)=>{
//     if(!error)
//     {
//         console.log("connected....")
//     }
//     else{
//         console.log('Error while connecting to database '+error)
//     }
// })

const user= require('./user.model');