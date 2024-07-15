const express = require("express")
const { getCitiesList, createCity, getHotelsListByCity } = require("../controller/cities")
const { model } = require("mongoose")
const citiesRoutes = express.Router()

citiesRoutes.get("",getCitiesList)
citiesRoutes.post("",createCity)


module.exports = citiesRoutes
