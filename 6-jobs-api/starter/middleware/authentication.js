const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {  UnauthenticatedError } = require("../errors/index"); //vwe can skip index because by default node search in the index

const authenticationMiddleware = async (req, res, next) => {
    // console.log(req.headers.authorization)
    const userAuth = req.headers.authorization
    if (!userAuth || !userAuth.startsWith("Bearer")) {
        throw new UnauthenticatedError("Authentication invalid")
    }
    const token = userAuth.split(" ")[1]
    // console.log(token)

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId: payload.userId, name: payload.name}
        console.log("I found the user")
        next()
    } catch (error) {
        throw new UnauthenticatedError("Authentication invalid - JWT compromised")
    }
}

module.exports = authenticationMiddleware;