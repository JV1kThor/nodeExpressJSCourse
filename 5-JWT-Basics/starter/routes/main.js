const express = require("express");
const path = require("path");
const router = express.Router()
const {login, dashboard} = require("../controllers/main")

//router.post("/login", login)
router.route("/login").post(login)

const {authenticationMiddleware} = require("../middleware/auth")

// router.get("/dashboard", dashboard)
router.route("/dashboard").get(authenticationMiddleware, dashboard)


module.exports = router