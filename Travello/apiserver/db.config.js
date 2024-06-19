const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/travello_db")

exports.productModel = mongoose.model("Product",{ name:String,price:Number})

exports.hotelModel = mongoose.model("Hotel",{ 
    name:String,
    rent:Number,
    isActive:Boolean,
    address:String
})

exports.cityModel = mongoose.model("City",{
    name:String
})


