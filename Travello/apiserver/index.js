// import express module
const express = require("express")

// create an app object
const app = express()
 

const rootRequestHandler = (req,res) =>{
    console.log("request was done")
    res.send("your request was listend")
}


// handling request
app.get("/",rootRequestHandler)

app.get("/products",(req,res)=>{ 
    res.send([{
        id:1,
        name:"p1"
    }])
})


//start app (server)
app.listen(5000,()=>{console.log("server started")})