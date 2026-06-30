import { fetchData } from "../index.jsx"
import { useState } from "react"

const Event = () => {
    const [event, setEvent] = useState({
        eventName: "",
        eventDate: "",
        eventTime: "",
        eventLocation: "",
        eventDescription: "",
        createdBy: ""
    })
    const {eventName, eventDate, eventTime, eventLocation, eventDescription, createdBy} = event
    const onChange = (e) => setEvent({event, [e.target.name]: e.target.value})
    const onSubmit = (e) => {
        e.preventDefault()
        fetchData('event/createUserEvent', {
            eventName, eventDate, eventTime, eventLocation, eventDescription, createdBy
        },
        "POST"
        )
        .then((data) => {
            if(!data.message) {
                console.log(data)
            }
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card border-secondary p-3 mb-3">
                            <div className="card-header">Event</div>
                                <form onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="eventName" className="form-label">Event Name</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="eventName"
                                        name='eventName'
                                        onChange={onChange}
                                        value={eventName}
                                        required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="eventDate" className="form-label">Event Date</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="eventDate"
                                        name='eventDate'
                                        onChange={onChange}
                                        value={eventDate}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="eventTime" className="form-label">Event Time</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="eventTime"
                                        name='eventTime'
                                        onChange={onChange}
                                        value={eventTime}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="eventLocation" className="form-label">Event Location</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="eventLocation"
                                        name='eventLocation'
                                        onChange={onChange}
                                        value={eventLocation}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="eventDescription" className="form-label">Description</label>
                                        <textarea 
                                        className="form-control" 
                                        id="eventDescription" 
                                        rows="3"
                                        name='eventDescription'
                                        onChnage={onChange}
                                        value={eventDescription}>
                                        </textarea>
                                    </div>
                                <button type="submit" className="btn btn-success">Add</button>
                                </form>
                            </div>
                        </div> {/* shadow */}
                    </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Event