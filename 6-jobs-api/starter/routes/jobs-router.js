const express = require("express");
const jobsRouter = express.Router();


const {homePage, getAllJobs, getJob, createJob, updateJob, deleteJob} = require("../controllers/jobs")


jobsRouter.route("/homepage").get(homePage)

jobsRouter.route("/").get(getAllJobs).post(createJob)
jobsRouter.route("/:id").get(getJob)
jobsRouter.route("/:id").patch(updateJob)
jobsRouter.route("/:id").delete(deleteJob)


module.exports = jobsRouter