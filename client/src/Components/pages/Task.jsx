import { useState } from 'react';
import { fetchData } from "../../index.jsx"

const Task = () => {
    const [task, setTask] = useState({
        taskName:"",
        taskDescription:"",
        createdBy:""
    })
    const {taskName, taskDescription, createdBy} = task
    const onChange = (e) => setTask({task, [e.target.name]: e.target.value})
    const onSubmit =(e) => {
        e.preventDefault()
        fetchData('/task/createUserTask', {
            taskName,
            taskDescription,
            createdBy
        },
        "POST"
        )
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(`Error! ${error.message}`)
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card border-secondary p-3 mb-3">
                            <div className="card-header">Task</div>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="taskName" className="form-label">Task Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="taskName"
                                    name='taskName'
                                    onChange={onChange}
                                    value={taskName}
                                    required
                                    />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="taskDescription" className="form-label">Description</label>
                                    <textarea 
                                    className="form-control" 
                                    id="taskDescription" 
                                    rows="3"
                                    name='taskDescription'
                                    onChange={onChange}
                                    value={taskDescription}>
                                    </textarea>
                                </div>
                                <button type="submit" className="btn btn-success">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Task