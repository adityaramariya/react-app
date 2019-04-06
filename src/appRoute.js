import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Login from './Views/Login/Login';
import SignUp from './Views/Signup/Signup';


// Global Components used in theme
import Buttons from './Views/Components/Buttons/Button';



class appRoute extends Component{
    render(){
        return(

            <BrowserRouter>
                <Route exact={true} path='/' component={ Login } />
                <Route path='/sign-up' component={ SignUp } />

                {/*Global Components used in theme*/}

                <Route path='/buttons' component={ Buttons } />
            </BrowserRouter>
        )
    }
}

export default appRoute;