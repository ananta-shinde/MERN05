const { userModel } = require("../models/users")


exports.getUsersList = async(req,res)=>{
    const users = await userModel.find({})
    res.send({users})
}

exports.createUser = async(req,res)=>{
    const newUser = new userModel(req.body)
    console.log(isUserExist(req.body.email))
    if(await isUserExist(req.body.email)){
        res.status(208).send({status:208,message:"user already exist"})
    }else{
        newUser.save()
        res.status(201).send({status:201,_id :newUser._id,name:user.name})
    }
    
}

exports.updateUserById = async(req,res)=>{
    const user = await userModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({user})
}

exports.getUserById = async(req,res)=>{
    const user = await userModel.findById(req.params.id)
    res.send({user})
}

exports.isUserExist = async(email)=>{
    const user = await this.userModel.findOne({email:email})
   
    if(user!= null)
    {
        return true
    }else{
        return false
    }
}


exports.signinUser = async(req,res)=>{
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
}

