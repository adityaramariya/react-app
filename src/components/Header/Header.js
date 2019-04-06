import React, { Component } from 'react';
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
        <a className="navbar-brand" href="#"><span>HR APP successful</span></a>
        <a className="nav-link navbar-toggler sidebar-toggler navicon-button x" onClick={this.sidebarToggle} href="#">
        </a>
      </header>
    )
  }
}
export default Header;
