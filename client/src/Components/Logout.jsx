import { useContext } from "react"
import { Outlet, Link, useNavigate } from "react-router-dom"
import UserContext from '../context/userContext.jsx'

const Logout = () => {
    const navigate = useNavigate()
    const { user, updateUser } = useContext(UserContext)

    const onClick = (e) => {
        e.preventDefault()
        updateUser("authenticated", false)
        navigate('/login')
    }
    return (
        <div className="container">
            
            <button onClick={onClick} className="btn btn-primary">Logout</button>
        
        </div>
    )
}

export default Logout