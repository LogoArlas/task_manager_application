import {useState} from 'react';

const Task = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="taskName" className="form-label">Task Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="taskName"
                            required
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="taskDescription" className="form-label">Description</label>
                            <textarea 
                            className="form-control" 
                            id="taskDescription" 
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

export default Task