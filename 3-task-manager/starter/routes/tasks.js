const express = require("express"); 
const router = express.Router();
const {getAll} = require("../controllers/taskFunctions");

router.route("/v1").get(getAll)

module.exports = router;

