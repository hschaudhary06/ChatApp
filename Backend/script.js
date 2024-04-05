const express = require('express');
const db = require('./database');

const app = express();


app.use((req,res,next)=>{
    console.log("hello");
    next();
})


app.get('/',(req,res) => {
    db();
    res.send("hello how are you");
});

app.get("/profile/:username",(req,res)=>{
    res.send(`Hello, ${req.params.username} this side`);
})

app.listen(3000);