const hotelsModel = require("../models/hotels");
const roomsModel = require("../models/rooms");


exports.createHotel = (req,res)=>{
    const hotel = new hotelsModel({
        name:req.body.name,
        city:req.body.cityId,
        address:req.body.address,
        std_rating:req.body.std_rating,
        owner:req.body.owner_id
    })
    hotel.save()

    req.body.rooms.map(r=>{
        const room = new roomsModel({roomType:r.roomType,hotel:hotel._id})
        room.save()
    })
    res.send({status:201,hotel})
}

exports.getHotelsList = async(req,res) => {
     const hotels = await hotelsModel.find({}).populate("city").exec()
     res.send({status:200,hotels})
}

exports.getHotelsListByCity = async(req,res)=>{
    const hotels = await hotelsModel.find({city:req.params.cityId})
    res.send({status:200,hotels})
}