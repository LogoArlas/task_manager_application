const express = require("express")
const Event = require("../models/event")
const router = express.Router()

router.get("/", (req, res) => {
    try {
        const event = Event.getEvent()
        res.send(event)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

module.exports = router