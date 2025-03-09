const Task = require("../models/task")
const asyncWraper = require("../middleware/async")
const {createCustomError} = require("../errors/custom-error")

const getAllTasks = asyncWraper(async (req, res)=> {
        const allTasks = await Task.find({})

        return res.status(200).json({"tasks": allTasks})
        // return res.status(200).json({success: true, amount: allTasks.length, tasks: allTasks}) options
    })

const getTask = asyncWraper(async (req, res, next)=> {
        const {id: taskID} = req.params
        const currentTask = await Task.findOne({_id: taskID})
        if (!currentTask) {
            /*const error = new Error("Not found");
            error.status = 404;
            return next(error)
            // return res.status(404).json({success:false, msg: `no task with id ${taskID}`}) 
        */
            return next(createCustomError(`no task with id ${taskID}`, 404))
        }
        console.log(`the params are ${taskID}`)
        console.log(req.params)
        return res.status(200).json({"success": true, "task": currentTask})
})

const createTask = asyncWraper(async (req, res)=> {
        const task = await Task.create(req.body)
        return res.status(201).json({task})
    //const {name} = req.body
    //console.log(name)
    
})


const deleteTask = asyncWraper(async (req, res, next)=> {

        const {id: taskID} = req.params
        const currentTask = await Task.findOneAndDelete({_id: taskID})
        if (!currentTask) {
            return next(createCustomError(`no task with id ${taskID}`, 404))
        }
        return res.status(200).json({"success": true, "deleted task": currentTask}) 
        //usually one just send a simple res.status(200).send()
        //or a simple json response res.status(200).json({success: true, currentTask: null})
})

const updateTask = asyncWraper(async (req, res, next)=> {
        const {id: taskID} = req.params
        const new_data = req.body
        console.log(new_data)
        const currentTask = await Task.findOneAndUpdate({_id: taskID}, new_data, {new: true, runValidators: true})
        // const currentTask = await Task.findOneAndUpdate({_id: taskID}, new_data, {new: true, runValidators: true, overwrite: true}) 
        // use overwrite with put to delete the attributes that are not updated 
        if (!currentTask) {
            return next(createCustomError(`no task with id ${taskID}`, 404))
        }
        return res.status(200).json({success: true, msg: "ura task updated", task: currentTask})      
})

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}