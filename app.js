const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/about',(req,res)=>{
    res.send("Hello World from about");
})
app.get('/signin',(req,res)=>{
    res.send("Hello World from signin");
})
app.get('/signout',(req,res)=>{
    res.send("Hello World from signout");
})
app.listen(3000,()=>{console.log(`Server is running`)});