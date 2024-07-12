const { mongoose } = require("../db.config");
exports.userModel = mongoose.model("user",{
    name:String,
    email:String,
    password:String,
   })