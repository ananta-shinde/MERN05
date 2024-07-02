const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const multer = require('multer');

const { userModel, isUserExist } = require("./db.config")

const port  = 5000
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.static('uploads'))

const uploadConfig =multer.diskStorage( {
    destination:(req, file, next)=>{
         next(null,"./uploads/")
    },
    filename:(req,file,next)=>{
        next(null,file.originalname)
    }
})

const uploader = multer({ storage: uploadConfig})

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
        res.status(208).send({status:208,message:"user already exist"})
    }else{
        newUser.save()
        res.status(201).send({status:201,_id :newUser._id,name:user.name})
    }
    
})

app.post("/users/signin",async(req,res)=>{
        if(await isUserExist(req.body.email))
        {
           const user = await userModel.findOne({email:req.body.email})
           if(user.password == req.body.password)
           {
              res.send({status:200,_id:user._id,name:user.name})
           }
           else{
             res.send({status:403,message:"Invalid creds"})
           }
        }
        else{
            res.send({status:404,message:"User does not exists"})
        }
})

app.post("/demo/files",uploader.single('file_upload'),(req,res)=>{
    console.log(req.file.path)
    res.send("file uploaded")
})


app.listen(port,()=>{
    console.log("server started at port :"+ port)
})