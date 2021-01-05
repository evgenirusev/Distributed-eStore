import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserLoggedIn } from "../../services/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if (!isUserLoggedIn()) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        return <Component {...props} />
    }} />
)