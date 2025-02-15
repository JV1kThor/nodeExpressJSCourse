const express = require("express");
const router = express.Router();


const {
    peopleGet,
    peopleGetID,
    peoplePost,
    peoplePut,
    peopleDelete
} = require("../controllers/people")


router.get("/", peopleGet)

router.get("/:id", peopleGetID)

router.post("/", peoplePost)

router.put("/:id", peoplePut)

router.delete("/:id", peopleDelete)

module.exports = router