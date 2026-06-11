const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    eventName: {type: String, unquie: true, required: true},
    eventDate: {
        month: {type: String},
        day: {type: String},
        year: {type: String}
    },
    eventTime: {type: String},
    eventLocation: {type: String},
    eventDescription: {type: String},
    userId: {type: mongoose.Schema.Types.ObjectId,
    ref: "User", required: true}
})

const Event = mongoose.model("Event", eventSchema)

async function createEvent(eventName, eventDate, eventTime, eventLocation, eventLocation, eventDescription, userId) {
    const eventName = await getEventName()
    if(eventName) throw Error('Event name already in use')

    const newEvent = await Event.create({
        eventName: eventName,
        eventDate: {
            month: month,
            day: day,
            year: year
        },
        eventTime: eventTime,
        eventLocation: eventLocation,
        eventDescription: eventDescription,
        userId: userId
    })

    return newEvent._doc
}

async function getEvent(eventName) {
    if(!event) throw Error('Event not found')
    
    return event._doc
}

async function updateEventLocation(id, eventLocation) {
    const event = await Event.findByIdAndUpdate(id, {password}, {new: true})
    return event._doc
}

async function deleteEvent(id) {
    await Event.deleteOne({"_id": id})
    return event._doc
}

async function getUserId() {

}

module.exports = { createEvent, getEvent, updateEventLocation, deleteEvent }

//fake database
/*const event = [
    {
        eventName: "event",
        eventDate: {
            month: "June",
            day: 4,
            year:2026
        },
        eventTime: "12:00am",
        eventLocation: "eventAddress",
        eventDescription: "This is an event description.",
        userId: 1
    }
]

function getEvent() {
    return event;
}

module.exports = { getEvent }*/