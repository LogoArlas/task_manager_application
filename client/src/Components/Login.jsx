const Login = () => {
    return(
        <div>
            <form>
                <div class="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    name='username'
                    required
                    />
                </div>
                <div class="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id='password'
                    required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
        </div>
    )
}

export default Login