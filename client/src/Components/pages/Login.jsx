import { fetchData } from "../../index.jsx"
import { Outlet, Link, useNavigate } from "react-router-dom"
import { useState, useContext, Fragment } from "react"
import UserContext from '../../context/userContext.jsx'

const Login = () => {
    
    const navigate = useNavigate()
    const {user, updateUser} = useContext(UserContext)

    const { username, password, email } = user

    const onChange = (e) => updateUser(e.target.name, e.target.value)
    const onSubmit = (e) => {
        e.preventDefault()
        fetchData('/user/login', {
            username,
            password
        },
        "POST"
        )
        .then((data) => {
            
            navigate('/profile')
            console.log(data)
            console.log(data.username)
            console.log(data._id)
        })
        .catch((error) => {
            console.log(`Error! ${error.message}`)
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card border-secondary p-3 mb-3">
                            <div className="card-header">Login</div>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    name='username'
                                    onChange={onChange}
                                    value={username}
                                    required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id='password'
                                    name='password'
                                    onChange={onChange}
                                    value={password}
                                    required
                                    />
                                </div>
                                <input type="submit" className="btn btn-primary" value="Login"/>
                                <div id="loginHelp" className="form-text">No account?</div>
                                <p><Link className="link-opacity-100" to="/register">Register</Link></p>
                            </form>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Login