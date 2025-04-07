const express = require("express");
const websiteRouter = express.Router();

const {homePage} = require("../controllers/jobs")

websiteRouter.route("/homepage").get(homePage)

module.exports = websiteRouter