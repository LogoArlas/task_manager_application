const express = require("express")
const Task = require("../models/task")
const router = express.Router()

router
    .post('/createTask', async (req, res) => {
    try {
        const task = await Task.getTask(req.body.taskName, req.body.taskDescription, req.body.userId)
        res.send(task)
    } catch(error) {
        res.status(401).send({message: error.message})
    }
})

    .get('/getTask', async (req, res) => {
    try {
        const task = await Task.getTask(req.body.taskName)
        res.send(task)
    } catch(error) {
        res.status(401).send({message: error.message})
    }
})

    .put('/update', async (req, res) => {
    try {
        const task = await Task.updateTaskName(req.body.id, req.body.eventName)
        res.send(task)
    } catch(error) {
        res.status(401).send({message: error.message})
    }
})

    .delete('/delete', async (req, res) => {
    try {
        await Task.deleteEvent(req.body.id)
        res.send({success: 'Task deleted'})
    } catch(error) {
        res.status(401).send({message: error.message})
     }
    })

module.exports = router