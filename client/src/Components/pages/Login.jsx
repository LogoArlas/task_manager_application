import { fetchData } from "../../index.jsx"
import { Output, Link } from "react-router-dom"
import useState from "react"

const Login = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const { username, password } = user
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})
    const onSubmit = (e) => {
        e.preventDefault()
        fetchData('/user/login', {
            username,
            password
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