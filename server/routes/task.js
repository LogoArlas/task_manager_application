const express = require("express")
const Task = require("../models/task")
const router = express.Router()

router.get("/", (req, res) => {
    try {
        const task = Task.getTask()
        res.send(task)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

module.exports = router