import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
    this.classList.toggle('open');
  }
  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }
  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }
  render() {
   return (
      <header className="app-header navbar navbar-inverse">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"><span>HR APP</span></a>
        {/*<a className="nav-link navbar-toggler sidebar-toggler navicon-button x" onClick={this.sidebarToggle} href="#">*/}
        {/*</a>*/}
          <nav className='navigation--wrapper'>
              <div className="main--navigation">
                  <ul>
                      <li><Link to='/features'>Features</Link></li>
                      <li><Link to='/features'>Employee</Link></li>
                      <li><Link to='/features'>Features</Link></li>
                  </ul>
              </div>
              <div className="secondary--navigation">
                  <ul>
                      <li><Link to='/' className='btn btn-link'>Log In</Link></li>
                      <li><Link to='/sign-up' className='btn btn-primary'>Create an Account</Link></li>
                  </ul>
              </div>
          </nav>
      </header>
    )
  }
}
export default Header;
