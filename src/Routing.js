import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './Login'
import Registerlogin from './Registerlogin'
import Home from './Home'
import Cart from './cart'

class Routing extends Component{
render(){
    return(
        <Router>
            <Switch>
                <Route exact path= '/' component={Home}/>
                <Route exact path= '/Login' component={Login}/>
                <Route exact path='/Registerlogin' component={Registerlogin}/>
                <Route exact path='/Cart' component={Cart}/>
            </Switch>
        </Router>
    )
}
}
export default Routing;