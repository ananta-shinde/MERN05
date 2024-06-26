const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const { userModel, isUserExist } = require("./db.config")
const port  = 5000
const app = express()
app.use(bodyParser.json())
app.use(cors())

// api home
app.get("/",(req,res)=>{
    console.log("reuqest received")
    res.send("reuest completed")
})

// get user's list
app.get("/users",async(req,res)=>{
    const users = await userModel.find({})
    res.send({users})
})

// get user by id
app.get("/users/:id",async(req,res)=>{
    const user = await userModel.findById(req.params.id)
    res.send({user})
})

// update user by id
app.put("/users/:id",async(req,res)=>{
    const user = await userModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({user})
})

// create new user
app.post("/users",async(req,res)=>{
    const newUser = new userModel(req.body)
    console.log(isUserExist(req.body.email))
    if(await isUserExist(req.body.email)){
        res.send({message:"user already exist"})
    }else{
        newUser.save()
        res.send(newUser)
    }
    
})


app.listen(port,()=>{
    console.log("server started at port :"+ port)
})