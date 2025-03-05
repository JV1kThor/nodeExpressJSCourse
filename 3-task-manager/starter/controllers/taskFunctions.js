const Task = require("../models/task")

const getAllTasks = (req, res)=> {
    return res.send("all items")
}

const getTask = (req, res)=> {
    const {id} = req.params
    console.log(`the params are ${id}`)
    console.log(req.params)
    return res.status(200).json({"success": true, "id": id})
}

const createTask = async (req, res)=> {
    //const {name} = req.body
    //console.log(name)
    const task = await Task.create(req.body)
    return res.status(201).json({task})
}

const updateTask = (req, res)=> {
    const {name} = req.body
    console.log(name)
    return res.send("task updated")
}

const deleteTask = (req, res)=> {
    const {name} = req.body
    console.log(name)
    return res.send("task deleted")
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}