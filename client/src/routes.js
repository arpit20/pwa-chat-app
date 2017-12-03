import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import MainLayout from './layouts/main-layout';
import UserViewContainer from './containers/UserViewContainer';
import UserDetailContainer from './containers/UserDetailContainer';
import LoginContainer from './containers/LoginContainer';


export const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LoginContainer}></Route>
            <Route path="/user"  component={MainLayout}></Route>
            <Route path="/userview" component={UserViewContainer}></Route>
            <Route path="/userdetails" component={UserDetailContainer}></Route>
         </Switch> 
    </BrowserRouter>
)

