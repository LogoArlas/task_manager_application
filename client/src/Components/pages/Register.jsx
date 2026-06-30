import { fetchData } from "../../index.jsx"
import { useState } from "react"
import { Outlet, Link, useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    })

    const { username, password, email } = user
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault()
        fetchData('/user/register', {
            username,
            password,
            email
        },
        "POST"
        )
        .then((data) => {
            if(!data.message) {
                navigate('/profile')
                console.log(data)
            }
        })
        .catch((error) => {
            console.log(`Error! ${error.message}`)
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card border-secondary p-3 mb-3">
                            <div className="card-header">Register</div>
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
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    id='email'
                                    name='email'
                                    onChange={onChange}
                                    value={email}
                                    placeholder="example@task.com" 
                                    aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <input type="submit" className="btn btn-primary" value="Register"/>
                                <div id="registerHelp" className="form-text">Already have an account?</div>
                                <p><Link className="link-opacity-100" to="/login">Login</Link></p>
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

export default Register