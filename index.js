const collection=require('./models/index');
var cors = require('cors');
const express= require('express');
const bodyparser= require('body-parser');
// const process = require("dotenv");
require('dotenv').config();
const application= express();


// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const UserController= require('./controllers/user');
const port = process.env.PORT || 5000; // When hosting on heroku the port is generally stored as environment varibale..
application.use(bodyparser.json());
application.use(bodyparser.urlencoded({extended:true}))
application.use(cors());

application.get("/",(req,res)=>{
    res.render("<h1>Welcome to Sample App </h1>");
})

application.use("/user/api",UserController);
application.use(express.static("build"));
application.listen(port,()=>{
    console.log('server started on port number 3000');
})