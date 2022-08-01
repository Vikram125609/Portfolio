const mongoose = require('mongoose');
const express = require("express");
const cookieParser = require('cookie-parser')
const app = express();
const dotenv = require('dotenv');
const router = require('./router/auth');
dotenv.config({path:"./config.env"});
require('./Database/Connection');
app.use(express.json());
app.use(cookieParser());
app.use(require('./router/auth'));
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/signin',(req,res)=>{
    res.send("Hello World from signin");
})
app.get('/signout',(req,res)=>{
    res.send("Hello World from signout");
})
app.listen(process.env.PORT,()=>{console.log(`Server is running`)});