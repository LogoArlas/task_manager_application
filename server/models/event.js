const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    eventName: {type: String, required: true},
    eventDate: {
        month: {type: String},
        day: {type: String},
        year: {type: String}
    },
    eventTime: {type: String},
    eventLocation: {type: String},
    eventDescription: {type: String},
    createdBy: {type: mongoose.Schema.Types.ObjectId,
    ref: "User"}
})

const Event = mongoose.model("Event", eventSchema)

//create an event document
async function createUserEvent(eventName, month, day, year, eventTime, eventLocation, eventDescription, createdBy) {

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
        createdBy: userId
    })

    return newEvent._doc
}

async function getUserEvent(eventName, createdBy) {
    const userEvent = await Event.find({eventName: eventName, createdBy: createdBy})
    if(!userEvent) throw Error('Event not found for current user')
    
    return userEvent._doc
}

async function updateEventLocation(id, eventLocation) {
    const event = await Event.findByIdAndUpdate(id, {$set: {taskDescription: taskDescription}}, {returnDocument: 'after'})
    return event._doc
}

async function deleteEvent(id) {
    await Event.deleteOne({"_id": id})
}

async function getAllEvents(createdBy) {
    const allEvents = await Event.find({createdby: createdBy})
    return allEvents._doc
}

module.exports = { createUserEvent, getUserEvent, updateEventLocation, deleteEvent }

//fake database
/*const event = [
    {
        "eventName": "event1",
        "eventDate": {
            "month": "June",
            "day": "4",
            "year": "2026"
        },
        "eventTime": "12:00am",
        "eventLocation": "eventAddress",
        "eventDescription": "This is an event description.",
        "createdBy": "6a2df12be3fc063b13cf3e52"
}
]

*/