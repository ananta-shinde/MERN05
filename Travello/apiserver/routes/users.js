const express = require("express")
const { getUsersList, createUser, updateUserById, getUserById, signinUser } = require("../controller/users")
const userRoutes = express.Router()

userRoutes.get("",getUsersList)

userRoutes.post("",createUser)

userRoutes.put("/:id",updateUserById)
userRoutes.get("/:id",getUserById)

userRoutes.post("/signin",signinUser)


module.exports = userRoutes



