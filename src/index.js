import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import appRoute from './appRoute'
import './scss/style.scss';
import './scss/app.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <App />, document.getElementById('root')
// );

ReactDOM.render(
    <BrowserRouter>
        <Route component={appRoute}></Route>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
