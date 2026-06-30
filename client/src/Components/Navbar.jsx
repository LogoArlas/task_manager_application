import { Outlet, Link } from "react-router-dom"
import { useContext, Fragment } from "react"
import UserContext from '../context/userContext.jsx'

const Navbar = () => {
    
    const { user } = useContext(UserContext)
    console.log(user.username)

    const authenticated = (
        <Fragment>
            <div className="nav-item">Welcome {user.username}</div>
        </Fragment>
    )
    const guest = (
        <Fragment>
            <div className="nav-item">Not Logged in</div>
        </Fragment>
    )
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand">Task Manager</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            { user.authenticated ? authenticated: guest }
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar