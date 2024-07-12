const { mongoose } = require("../db.config");


exports.citiesModel = mongoose.model("city",{
    name:String,
    pincode:String
})

