const express = require("express")
const Event = require("../models/event")
const router = express.Router()

router
    .post('/createUserEvent', async (req, res) => {
      try {
          const event = await Event.createUserEvent(req.body.eventName, req.body.eventDate,
          req.body.eventTime, req.body.eventLocation, req.body.eventDescription, req.body.createdBy)
          res.send(event)
      } catch(error) {
          res.status(401).send({message: error.message})
      }
})

    .get('/getUserEvent', async (req, res) => {
        try {
            const event = await Event.getUserEvent(req.body.eventName, req.body.createdBy)
            res.send(event)
        } catch(error) {
            res.status(401).send({message: error.message})
        }
    })

    .put('/updateEventLocation', async (req, res) => {
        try {
            const event = await Event.updateEventLocation(req.body.id, req.body.eventLocation)
            res.send(event)
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