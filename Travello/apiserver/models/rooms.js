const { Schema } = require("mongoose");
const { mongoose } = require("../db.config");

const roomsModel = mongoose.model("room",{
    roomType:String,
    hotel:{type:Schema.Types.ObjectId,ref:"hotel"}
})

module.exports = roomsModel