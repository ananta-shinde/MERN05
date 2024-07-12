const mongoose =require("mongoose")
mongoose.connect("mongodb://localhost:27017/travello_db")

module.exports = mongoose