const express = require("express");
const router = express.Router();

const {homepage, register} = require("../controllers/jobs-controllers")

router.route("/jobs").get(homepage)
router.route("/jobs/register").get(register)

module.exports = router