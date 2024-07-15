const { Schema } = require("mongoose");
const { mongoose } = require("../db.config");

const hotelsModel = mongoose.model("hotel",{
    name:String,
    address:String,
    std_rating:Number,
    city:{type:Schema.Types.ObjectId,ref:"city"},
    owner : {type:Schema.Types.ObjectId,ref:"user"},
    images:Array
})

module.exports = hotelsModel