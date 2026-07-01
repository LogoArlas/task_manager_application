import { useContext } from "react"
import Login from "./Login.jsx"
import Event from '../Event.jsx'
import Task from '../Task.jsx'
import UserContext from '../../context/userContext.jsx'
import Logout from '../Logout.jsx'

const Profile = () => {
    const { user } = useContext(UserContext)
    console.log(user)
    return (
        <div className="container-fluid">
            <p> Profile Page { user.username }</p>
            <Event />
            <Task />
        </div>
    )
}

export default Profile