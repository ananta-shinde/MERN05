const { citiesModel } = require("../models/cities")

exports.getCitiesList = async(req,res)=>{
   const cities = await citiesModel.find({})
   res.send({status:200,cities})
}

exports.createCity = async(req,res)=>{
    const newCity = new citiesModel(req.body)
    newCity.save()
    res.send({status:200,city:newCity})
}