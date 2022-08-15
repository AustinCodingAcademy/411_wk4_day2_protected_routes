
/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.
Remember to export the component at the end
*/


import React from 'react'
// import { Routes, Route, Navigate } from 'react-router' 
// Perguntar pro RObert pq ele mudou e tirou o navigate
import { Routes, Route} from 'react-router' 
import { Navigate } from "react-router-dom"

import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here COMECAR A CHECAR 


const checkAuth = () => {
    // return true
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
  };

// Check the cookies for a cookie called "loggedIn"

const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;
  
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/" /> )
    );
  };
  
// Write ProtectedRoute function here


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/car/:id" element={<Car/>} />
        </Routes>
    );
};

export default Router;