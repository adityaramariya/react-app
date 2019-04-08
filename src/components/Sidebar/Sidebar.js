import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    handleClick(e) {
        e.preventDefault();
        e.target.parentElement.classList.toggle('open');
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    }

    // secondLevelActive(routeName) {
    //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    // }
    render() {
        // var headerData = JSON.parse(localStorage.getItem('HEADER_DATA'));
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    {/*static list in sidebar*/}
                    <ul className="nav">
                        <li className={this.activeRoute("/components")}>
                            <a className="nav-link nav-dropdown-toggle" href="#"
                               onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Components</a>
                            <ul className="nav-dropdown-items">
                                <li className="nav-item">
                                    <Link to={'/components/buttons'} className="nav-link" activeClassName="active"><i
                                        className="icon-puzzle"></i> Buttons</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/components/social-buttons'} className="nav-link"
                                          activeClassName="active"><i className="icon-puzzle"></i> Social Buttons</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/components/cards'} className="nav-link" activeClassName="active"><i
                                        className="icon-puzzle"></i> Cards</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/components/modals'} className="nav-link" activeClassName="active"><i
                                        className="icon-puzzle"></i> Modals</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/components/switches'} className="nav-link" activeClassName="active"><i
                                        className="icon-puzzle"></i> Switches</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/components/tables'} className="nav-link" activeClassName="active"><i
                                        className="icon-puzzle"></i> Tables</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/components/tabs'} className="nav-link" activeClassName="active"><i
                                        className="icon-puzzle"></i> Tabs</Link>
                                </li>

                                <li className={this.activeRoute("/forms")}>
                                    <Link to={'/forms'} className="nav-link" activeClassName="active"><i
                                        className="icon-note"></i> Forms</Link>
                                </li>
                                <li className={this.activeRoute("/icons")}>
                                    <Link to={'/icons'} className="nav-link" activeClassName="active"><i
                                        className="icon-star"></i> Icons</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={this.activeRoute("/components")}>
                            <a className="nav-link nav-dropdown-toggle" href="#"
                               onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i>Employee</a>
                            <ul className="nav-dropdown-items">
                                <li className="nav-item">
                                    <Link to={'/components/buttons'} className="nav-link" activeClassName="active"><i
                                        className="icon-puzzle"></i> Payroll</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/components/social-buttons'} className="nav-link"
                                          activeClassName="active"><i className="icon-puzzle"></i>Chat</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/components/social-buttons'} className="nav-link"
                                          activeClassName="active"><i className="icon-puzzle"></i>Attendance</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/components/social-buttons'} className="nav-link"
                                          activeClassName="active"><i className="icon-puzzle"></i>Leaves</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/components/social-buttons'} className="nav-link"
                                          activeClassName="active"><i className="icon-puzzle"></i>Awards</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/components/social-buttons'} className="nav-link"
                                          activeClassName="active"><i className="icon-puzzle"></i>Feedback</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* <ul className="nav navbar-nav hidden-md-down">
                            {headerData && headerData.map(function (headerNavLink) {
                            return (
                                  <li className="nav-item" key={headerNavLink.linkName}>
                                    <a className="nav-link" href={headerNavLink.linkTo}><i className="icon-speedometer"></i>  {headerNavLink.linkName}</a>
                                  </li>
                              )
                            })}
                      </ul>*/}
                </nav>
            </div>
        )
    }
}

export default Sidebar;