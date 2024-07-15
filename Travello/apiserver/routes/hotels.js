const express = require("express")
const { createHotel, getHotelsList, getHotelsListByCity } = require("../controller/hotels")

const  hotelsRoutes = express.Router()

hotelsRoutes.post("",createHotel)
hotelsRoutes.get("",getHotelsList)
hotelsRoutes.get("/:cityId",getHotelsListByCity)



module.exports = hotelsRoutes