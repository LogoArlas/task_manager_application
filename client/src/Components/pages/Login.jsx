const Login = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card border-secondary p-3 mb-3">
                            <div className="card-header">Login</div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    name='username'
                                    required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id='password'
                                    required
                                    />
                                </div>
                                <input type="submit" className="btn btn-primary" value="Login"/>
                                <div id="loginHelp" className="form-text">No account?</div>
                                <p><a className="link-opacity-100" href="#">Register</a></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Login