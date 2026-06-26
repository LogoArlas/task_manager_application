const Login = () => {
    return(
        <div>
        <div className="card border-secondary mb-3">
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
                <input type="submit" className="btn btn-primary" value="Register"/>
                <div id="loginHelp" className="form-text">Create an account.</div>
                <p><a class="link-opacity-100" href="#">Register</a></p>
            </form>
        </div>
        <div className="card-footer text-body-secondary">Footer</div>
        </div>
    )
}

export default Login