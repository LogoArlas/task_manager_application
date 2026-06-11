const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    taskName: {type: String, unquie: true, required: true},
    taskDescription: {type: String},
    userId: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }]
})

const Task = mongoose.model("Task", taskSchema)

async function createTask(taskName, taskDescription) {
    const newTask = await Task.create({
    taskName: taskName,
    taskDescription: taskDescription,
    userId: userId
    })
    return newTask._doc
}

async function getTask() {
    if(!task) throw Error('Task not found')

    return task._doc
}

async function updateTaskName() {
    const task = await Task.findByIdAndUpdate(id, {password}, {new: true})
  return task._doc
}

async function deleteTask(id) {
  await Task.deleteOne({"_id": id})
};

module.export = { createTask, getTask, updateTaskName, deleteTask }

//fake database
/* const task = [
    {
        taskName: "task",
        taskDescription: "This is a task description.",
        userId: 1
    }
]

function getTask() {
    return task;
}

module.exports = { getTask }*/