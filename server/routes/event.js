const express = require("express")
const Event = require("../models/event")
const router = express.Router()

router
    .post("/createEvent", async (req, res) => {
      try {
          const event = await Event.createEvent(req.body.eventName, req.body.eventDate, req.body.eventTime, req.body.eventLocation,
          req.body.event.Description, req.body.userId)
          res.send({...event, userId: undefined})
      } catch(error) {
          res.status(401).send({message: error.message})
      }
})

    .get('/getEvent', async (req, res) => {
        try {
            const event = await Event.getEvent(req.body.eventName)
            res.send({...event, userId: undefined})
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

    .put('/update', async (req, res) => {
        try {
            const event = await Event.updateEventLocation(req.body.id, req.body.eventLocation)
            res.send({...event, user: undefined})
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await Event.deleteEvent(req.body.id)
            res.send({success: 'Event deleted'})
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

module.exports = router