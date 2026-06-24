const Register = () => {
    return (
        <div>
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
            </form>
        </div>
    )
}

export default Register