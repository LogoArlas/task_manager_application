import { useState } from "react"
import Login from "./Login.jsx"
import Event from '../Event.jsx'
import Task from '../Task.jsx'

const Profile = () => {
    return (
        <div className="container-fluid">
            <p> Profile Page</p>
            <Event />
            <Task />
        </div>
    )
}

export default Profile