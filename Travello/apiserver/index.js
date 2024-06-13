// import express module
const express = require("express")
const appData = require("./data.json")
// create an app object
const app = express()

app.get("/",(req,res)=>{
      
})

app.get("/products",(req,res)=>{
    console.log(req.query)
    console.log(req.params)
    res.send(appData.products)
})

app.get("/products/:id",(req,res)=>{
    
    res.send(appData.products.find(p=>p.id==req.params.id))
})


//start app (server)
app.listen(5000,()=>{console.log("server started")})