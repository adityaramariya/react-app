import React, { Component } from 'react';

import {BrowserRouter, Route } from 'react-router-dom';

import Full from './containers/Full/Full';

import Dashboard from './Dashboard/Dashboard';




// Global Components used in theme
import Buttons from './Views/Components/Buttons/Button';
import Cards from './Views/Components/Cards/Cards';
import Forms from './Views/Components/Forms/Forms';
//import Modals from './Views/Components/Modals/Modals';
import SocialButtons from './Views/Components/SocialButtons/SocialButtons';
import Switches from './Views/Components/Switches/Switches';
import Tables from './Views/Components/Tables/Tables';
//import Tabs from './Views/Components/Tabs/Tabs';


 import Login from './Views/Login/Login';
 import SignUp from './Views/Signup/Signup';
 import ForgotPassword from './Views/ForgotPassword/forgotPassoword'


class appRoute extends Component{
    render(){
        return(



            <switch>

                <Route exact={true} path='/' component={ Login }/>
                <Route exact={true} path='/sign-up' component={ SignUp }/>
                <Route exact={true} path='/forgot-password' component={ ForgotPassword }/>

                <Route exact={true} path='/dashboard/' name='dashboard' component={Full} />



















                {/*<Route exact={true} path='/' component={ Login } />*/}
                {/*<Route path='/sign-up' component={ SignUp } />*/}

                {/*Global Components used in theme*/}

                <Route path='/buttons' component={ Buttons } />
                <Route path='/cards' component={ Cards } />
                <Route path='/forms' component={ Forms } />
                {/*<Route path='/modals' component={ Modals } />*/}
                <Route path='/social-buttons' component={ SocialButtons } />
                <Route path='/switches' component={ Switches } />
                <Route path='/tabels' component={ Tables } />
                {/*<Route path='/dashboard' component={ Dashboard } />*/}
                {/*<Route path='/tabs' component={ Tabs } />*/}
            </switch>
        )
    }
}

export default appRoute;