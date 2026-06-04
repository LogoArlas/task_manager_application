const express = require("express")
const Task = require("../models/task")
const router = express.Router()
const logger = console

router.get("/", (req, res) => {
    try {
        const task = Task.getTask()
        res.send(task)
    } catch(err) {
        logger.error(err)
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router