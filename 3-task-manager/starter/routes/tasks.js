const express = require("express"); 
const router = express.Router();
const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require("../controllers/taskFunctions");

router.get("/", getAllTasks)
router.post("/", createTask)
//router.rout("/").get(getAllTasks).post(postTask)
router.get("/:id", getTask)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)
//router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;

