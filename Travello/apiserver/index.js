const express = require("express")
const bodyParser = require("body-parser")
const { userModel } = require("./db.config")
const port  = 5000
const app = express()
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    console.log("reuqest received")
    res.send("reuest completed")
})

app.get("/users",async(req,res)=>{
    const users = await userModel.find({})
    res.send({users})
})
app.get("/users/:id",async(req,res)=>{
    const user = await userModel.findById(req.params.id)
    res.send({user})
})
app.put("/users/:id",async(req,res)=>{
    const user = await userModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({user})
})
app.post("/users",async(req,res)=>{
    // userdata = { name:"Ananta",email:"dssds",password:123456}
    const newUser = new userModel(req.body)
    newUser.save()
    res.send(newUser)
})


app.listen(port,()=>{
    console.log("server started at port :"+ port)
})