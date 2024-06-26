const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27017/travello_db")

exports.userModel = mongoose.model("user",{
     name:String,
     email:String,
     password:String,
    })

exports.isUserExist = async(email)=>{
      const user = await this.userModel.findOne({email:email})
     
      if(user!= null)
      {
          return true
      }else{
          return false
      }
}
