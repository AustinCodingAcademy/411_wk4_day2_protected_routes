import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

let checkAuth=()=> {
    let loggedIn = cookie.parse(document.cookie)['loggedIn'];
    return loggedIn? true: false;
}

let ProtectedRoute = ({ component: Component, ...rest }) => {    
    let loggedIn = checkAuth();    
    return (
        <Route {...rest}
            render={(props) => {
                return (loggedIn
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/login', fromLocation: props.location.pathname }} />
                )
            }} />
    )
};

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router;

