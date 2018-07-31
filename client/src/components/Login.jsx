import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                    <h1>Log in</h1>
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <a href="app.html"><button type="button" className="btn btn-primary btn-submit">Submit</button></a>
                        </form>
                    </div>
                <div className="other-logins">
                    <div className="facebook">
                        <a href="app.html"><button type="button" className="btn btn-lg">Login with Facebook</button></a>
                    </div>
                    <div className="google">
                        <a href="app.html"><button type="button" className="btn btn-lg">Login with Google</button></a>
                    </div>            
                </div>
            </div>    
        )    
    }
}

export default Login;