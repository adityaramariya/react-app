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
                    <div className="form-caption">Login to get started</div>
                    <div for="username" className='form-group'>
                        <label htmlFor="email">Email</label>
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
                    <div for="password"  className='form-group'>
                        <label htmlFor="Password">Password</label>
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

                    <div className="flex align-content-between">
                        <div className="checkbox">
                            <label htmlFor="remember--me">
                                <input type="checkbox" name='remember' id='remember--me' />
                                Remember me
                            </label>

                            <label htmlFor="requirements">
                                <Link to='forgot-password' className="btn-link">Forgot Password</Link>
                            </label>
                        </div>
                    </div>
                    <div className="btnLinkWrapper">
                        <Link to='/' className="btn btn-primary btn-lg btn-block">Login</Link>
                    </div>
                    <div className="text-center">
                        <Link className="btn-link btn" to='sign-up' >Sign Up</Link>
                    </div>
                </div>
            </div>
        </form>
        )
    }
}

export default Login;