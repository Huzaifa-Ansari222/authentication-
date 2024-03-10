// Development = node.js + React server 
// Production = node.js + Static

const express = require ('express');
const app = express()

app.get('/',(req,res)=>{
    res.send("server worki.ng");
})

app.listen(5000,( )=>{
    console.log("Listing at port :5000");
})