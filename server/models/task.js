const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    taskName: {type: String, required: true},
    taskDescription: {type: String},
    createdBy:
        {type: mongoose.Schema.Types.ObjectId,
        ref: "User"}
})

const Task = mongoose.model("Task", taskSchema)

async function createUserTask(taskName, taskDescription, createdBy) {

    const newTask = await Task.create({
    taskName: taskName,
    taskDescription: taskDescription,
    createdBy: createdBy
    })
    return newTask._doc
}

async function getUserTask(taskName, createdBy) {
    const userTask = await Task.find({"taskName": taskName, "createdBy": createdBy}).exec()
    if(!userTask) throw Error('Task not found')

    return userTask._doc
        
}

async function updateTaskName(id, taskName) {
    const task = await Task.findByIdAndUpdate(id, {$set: {taskName: taskName}}, {returnDocument: 'after'})
  return task._doc
}  

async function deleteTask(id) {
  await Task.deleteOne({"_id": id})
};

async function getAllTasks(createdBy) {
    return await Task.findById({createdBy}).exec()
}

module.exports = { createUserTask, getUserTask, updateTaskName, deleteTask }
