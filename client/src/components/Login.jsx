import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                    <h1>Log in</h1>
                    <div class="login-form">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <a href="app.html"><button type="button" class="btn btn-primary btn-submit">Submit</button></a>
                        </form>
                    </div>
                <div class="other-logins">
                    <div class="facebook">
                        <a href="app.html"><button type="button" class="btn btn-lg">Login with Facebook</button></a>
                    </div>
                    <div class="google">
                        <a href="app.html"><button type="button" class="btn btn-lg">Login with Google</button></a>
                    </div>            
                </div>
            </div>    
        )    
    }
}

export default Login;