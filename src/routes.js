import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './Login';
import Registerlogin from './Registerlogin';
import Home from './Home'

class Routes extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/register' component={Registerlogin}/>
                    <Route exact path='/home' component={Home}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;