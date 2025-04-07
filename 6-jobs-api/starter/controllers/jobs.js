const { BadRequest, NotFoundError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");
//const UserSchema = require("../models/User");
const homePage = async (req, res) => {
    res.send("Welcome to our homepage")
}

const getAllJobs = async (req, res) => {
    const userAllJobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt")
    if (!userAllJobs) {
        throw new NotFoundError("User doesn't exist")
    }
    res.status(StatusCodes.OK).json({ userAllJobs, count: userAllJobs.length })
}

const getJob = async (req, res) => {
    const jobId = req.params.id
    // console.log(req.user.userId)
    // console.log(jobId)
    const userTheJob = await Job.findOne({ createdBy: req.user.userId, _id: jobId })
    if (!userTheJob) {
        throw new NotFoundError(`No job with id: ${jobId}`)
    }
    res.status(StatusCodes.OK).json({ job: userTheJob })

    // console.log(myUserJobs)
}

const createJob = async (req, res) => {
    try {
        req.body.createdBy = req.user.userId
        const newJob = await Job.create(req.body)
        // console.log(newJob)
        res.status(StatusCodes.CREATED).json({ newJob })
    } catch (error) {
        console.log(error)
        throw new BadRequest("Failed to create job")

    }
}
/*
// my version
const updateJob = async (req, res) => {
    const jobId = req.params.id
    const newValues = req.body
    console.log(newValues)
    const userTheJob = await Job.findOneAndUpdate({ createdBy: req.user.userId, _id: jobId }, newValues,  { new: true, runValidators: true })
    console.log(userTheJob)
    res.status(StatusCodes.OK).json({msg: "Job Updated", job: userTheJob})
}
*/

const updateJob = async (req, res) => {
    const {
        body: { company, position },
        user: { userId },
        params: { id: jobId }
    } = req

    if (company === "" || position === "") {
        throw new BadRequest("Company and position fields cannot be empty")
    }
    const userTheJob = await Job.findByIdAndUpdate({ createdBy: userId, _id: jobId }, req.body, { new: true, runValidators: true })

    if (!userTheJob) {
        throw new NotFoundError(`No job with id: ${jobId}`)
    }
    res.status(StatusCodes.OK).json(userTheJob)
}


const deleteJob = async (req, res) => {
    const jobId = req.params.id
    await Job.findOneAndDelete({ createdBy: req.user.userId, _id: jobId })
    res.status(StatusCodes.OK).send("Job Deleted")
}

module.exports = {
    homePage,
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}