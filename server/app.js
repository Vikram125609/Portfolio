const express = require("express");
const app = express();

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
app.listen(3000,()=>{console.log(`Server is running`)});