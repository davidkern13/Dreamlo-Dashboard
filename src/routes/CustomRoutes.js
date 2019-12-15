import React from 'react'

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute'

import Login from '../containers/Login/Login';
import Dashboard from '../containers/Dashboard/Dashboard';
import Leadboard from '../containers/LeadBoard/Leadboard';

function CustomRoute(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <PrivateRoute>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path={"/leadboard"} component={Leadboard}/>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    )
}
export default CustomRoute;