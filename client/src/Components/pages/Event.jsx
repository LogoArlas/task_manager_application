const Event = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="eventName" className="form-label">Event Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="eventName"
                            required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="eventDate" className="form-label">Event Date</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="eventDate"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="eventTime" className="form-label">Event Time</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="eventTime"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="eventLocation" className="form-label">Event Location</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="eventLocation"
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="eventDescription" className="form-label">Description</label>
                            <textarea 
                            className="form-control" 
                            id="eventDescription" 
                            rows="3">
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Add</button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Event