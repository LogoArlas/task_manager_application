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
        const task = await Task.getUserTask(req.body.taskName, req.body.createdBy)
        res.send(task)
    } catch(error) {
        res.status(401).send({message: error.message})
    }
})

    .put('/updateTaskName', async (req, res) => {
    try {
        const task = await Task.updateTaskName(req.body.id, req.body.taskName)
        res.send(task)
    } catch(error) {
        res.status(401).send({message: error.message})
    }
})

    .delete('/deleteTask', async (req, res) => {
    try {
        await Task.deleteTask(req.body.id)
        res.send({success: 'Task deleted'})
    } catch(error) {
        res.status(401).send({message: error.message})
     }
    })

module.exports = router