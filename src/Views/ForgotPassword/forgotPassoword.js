import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ForgotPassword extends Component{
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
                        <div className="form-caption">Forgot Password</div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fas fa-user-tie"></i>
                            </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="username"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="btnLinkWrapper">
                            <Link className="btn btn-primary btn-lg btn-block" to='sign-up' >Send password reset</Link>
                        </div>
                        <div className="btnLinkWrapper">
                            <Link to='/' className="btn-link">Log in</Link>
                            <Link className="btn-link" to='sign-up' >Sign Up</Link>
                        </div>

                    </div>
                </div>
            </form>
        )
    }
}
export default ForgotPassword;