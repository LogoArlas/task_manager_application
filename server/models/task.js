const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    taskName: {type: String, unquie: true, required: true},
    taskDescription: {type: String},
    userId:[
        {type: mongoose.Schema.Types.ObjectId,
        ref: "User", required: true}]
})

const Task = mongoose.model("Task", taskSchema)

async function createTask(taskName, taskDescription) {
    const task = await getTask(taskName)
    if(task) throw Error('Task name already in use')
    const newTask = await Task.create({
    taskName: taskName,
    taskDescription: taskDescription,
    userId: userId
    })
    return newTask._doc
}

async function getTask(taskName) {
    const userTask = await getTaskWithName(taskName)
    if(userTask) {
        return userTask._doc
    } else {
        throw Error('Task not found')
    }
}

async function updateTaskDescription(id, taskDescription) {
    const task = await Task.findByIdAndUpdate(id, {Description}, {new: true})
  return task._doc
}  

async function deleteTask(id) {
  await Task.deleteOne({"_id": id})
};

async function getTaskWithName(taskName) {
    const taskWithName = await Task.find({taskName: eventName}).populate('userId').exec();
    console.log("Current user's task with requested name", taskWithName.userId.taskName);
    return taskWithName.userId.taskName
}

module.export = { createTask, getTask, updateTaskDescription, deleteTask }
