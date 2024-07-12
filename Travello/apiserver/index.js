const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const multer = require('multer');
const userRoutes = require("./routes/users");
const citiesRoutes = require("./routes/cities");

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
app.use("/users",userRoutes)
app.use("/cities",citiesRoutes)


app.post("/demo/files",uploader.single('file_upload'),(req,res)=>{
    console.log(req.file.path)
    res.send("file uploaded")
})


app.listen(port,()=>{
    console.log("server started at port :"+ port)
})