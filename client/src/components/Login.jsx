import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                    
                    <div className="login-form">
                        <span>Login</span>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="  Enter email"></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="  Password"></input>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <div className="form-button">
                                <a href="/Results"><button type="button" className="btn"><span role="img" aria-label="beers clinking">🍻 </span>Submit <span role="img" aria-label="beers clinking">🍻</span></button></a>
                            </div>
                            
                        </form>
                    </div>
            </div>    
        )    
    }
}

export default Login;