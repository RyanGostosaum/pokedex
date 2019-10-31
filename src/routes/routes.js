import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"

import { PrivateRoute } from '../components/PrivateRoute';
function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes