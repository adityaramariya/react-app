import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component{
    render(){
        return(
        <form className="container centeredBox">
            <div className="card-group loginBox">
                <div className="card">
                    <p className="lead">
                        Now the work doesn't seem like work, No stress, No question, First time everything <span> automated </span> in the new ERA of <span> HR  </span>
                        <small> HR APP </small>
                    </p>
                </div>
                <div className="card">
                    <div for="username">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fas fa-user-tie"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div for="password">
                        <div className="input-group">
                                <span className="input-group-addon">
                                    <i class="fas fa-lock"></i>
                                </span>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                pattern=".{5,}"
                                required
                            />
                        </div>
                    </div>
                    <div className="btnLinkWrapper">
                        <Link to='/'>Login</Link>
                        <Link to='sign-up' >Sign Up</Link>
                    </div>

                </div>
            </div>
        </form>
        )
    }
}

export default Login;