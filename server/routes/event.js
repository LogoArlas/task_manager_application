const express = require("express")
const Event = require("../models/event")
const router = express.Router()
const logger = console

router.get("/", (req, res) => {
    try {
        const event = Event.getEvent()
        res.send(event)
    } catch(err) {
        logger.error(err)
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router