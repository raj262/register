import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Demo from '../components/auth/Demo';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Blogs from '../components/blogs/Blogs';
import Create from '../components/crud/Create';
import Read from '../components/crud/read/Read';


function AppRouter() {
    return (
        <Fragment>
            <Switch>
           
           
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />  
                    <Route exact path="/blogs" component={Blogs} />    
                    <Route exact path="/" component={Create} />
                    <Route exact path="/demo" component={Demo} />  
                    <Route exact path="/read" component={Read} />   
            </Switch>
        </Fragment>
    )
}

export default AppRouter
