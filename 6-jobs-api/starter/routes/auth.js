
const express = require("express");
const authRouter = express.Router();

const {login, register} = require("../controllers/auth")

authRouter.route("/login").post(login)
authRouter.post("/register", register)

module.exports = authRouter