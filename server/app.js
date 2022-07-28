const mongoose = require('mongoose');
const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});

require('./Database/Connection');

app.use(express.json());
app.use(require('./router/auth'));

// Middleware
const middleware = (req,res,next) => {
    console.log(`This is middleware`);
    next();
}

app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/about',middleware,(req,res)=>{
    res.send("Hello World from about");
})
app.get('/signin',(req,res)=>{
    res.send("Hello World from signin");
})
app.get('/signout',(req,res)=>{
    res.send("Hello World from signout");
})
app.listen(process.env.PORT,()=>{console.log(`Server is running`)});