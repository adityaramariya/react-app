import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component{
    render()
    {
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
                        <div className="form-caption">Try it free. No credit card needed.</div>
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
                            <div className="flex justify-content-between">
                                <label htmlFor="Password">Password</label>
                                <div className="toolTip--container">
                                    <label htmlFor="requirements">Requirements</label>
                                    <div className="tooltip tooltip-bottom">
                                        <div className="tooltip-inner">
                                            Must be a minimum of 8 characters, contain a capital letter, a lowercase letter,
                                            and a numerical digit.
                                        </div>
                                    </div>
                                </div>

                            </div>
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


                        <div for="password"  className='form-group'>
                            <div className="flex justify-content-between">
                                <label htmlFor="Password">Confirm Password</label>
                            </div>
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
                            <Link to='/dashboard' className="btn btn-primary btn-lg btn-block">Start Now</Link>
                        </div>
                        <div className="text-center">
                            <Link className="btn-link btn" to='/' >Already have an account? Log in</Link>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Signup;