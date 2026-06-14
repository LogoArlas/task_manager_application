const express = require("express")
const Task = require('../models/task')
const router = express.Router()

router
    .post('/createUserTask', async (req, res) => {
    try {
        const task = await Task.createUserTask(req.body.taskName, req.body.taskDescription, req.body.createdBy)
        res.send(task)
    } catch(error) {
        res.status(401).send({message: error.message})
    }
})

    .get('/getUserTask', async (req, res) => {
    try {
        const task = await Task.getTask(req.body.taskName, req.body.createdBy)
        res.send(task)
    } catch(error) {
        res.status(401).send({message: error.message})
    }
})

    .put('/updateTaskDescription', async (req, res) => {
    try {
        const task = await Task.updateTaskDescription(req.body.id, req.body.taskDescription)
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