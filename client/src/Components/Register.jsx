const Register = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-mx">
                    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card border-secondary p-3 mb-3">
                            <div className="card-header">Register</div>
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
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    id='email'
                                    placeholder="example@task.com" 
                                    aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <input type="submit" className="btn btn-primary" value="Register"/>
                                <div id="registerHelp" className="form-text">Already have an account?</div>
                                <p><a class="link-opacity-100" href="#">Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register