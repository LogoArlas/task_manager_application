const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    eventName: {type: String, required: true},
    eventDate: {type: String},
    eventTime: {type: String},
    eventLocation: {type: String},
    eventDescription: {type: String},
    createdBy: {type: mongoose.Schema.Types.ObjectId,
    ref: "User"}
})

const Event = mongoose.model("Event", eventSchema)

//create an event document
async function createUserEvent(eventName, eventDate, eventTime, eventLocation, eventDescription, createdBy) {

    const newEvent = await Event.create({
        eventName: eventName,
        eventDate: eventDate,
        eventTime: eventTime,
        eventLocation: eventLocation,
        eventDescription: eventDescription,
        createdBy: createdBy
    })

    return newEvent._doc
}

async function getUserEvent(eventName, createdBy) {
    const userEvent = await Event.find({eventName: eventName, createdBy: createdBy}).exec()
    if(!userEvent) throw Error('Event not found for current user')
    
    return userEvent._doc
}

async function updateEventName(id, eventName) {
    const event = await Event.findByIdAndUpdate(id, {$set: {eventName: eventName}}, {returnDocument: 'after'})
    return event._doc
}

async function deleteEvent(id) {
    await Event.deleteOne({"_id": id})
}

async function getAllEvents(createdBy) {
    const allEvents = await Event.find({createdby: createdBy})
    return allEvents._doc
}

module.exports = { createUserEvent, getUserEvent, updateEventName, deleteEvent }

//fake database
/*const event = [
    {
        "eventName": "event1",
        "eventDate": "June.4,2026",
        "eventTime": "12:00am",
        "eventLocation": "eventAddress",
        "eventDescription": "This is an event description.",
        "createdBy": "6a2df12be3fc063b13cf3e52"
}
]

*/