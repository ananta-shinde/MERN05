const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27017/travello_db")

exports.userModel = mongoose.model("user",{
     name:String,
     email:String,
     password:String,
    })


