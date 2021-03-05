import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './Login'
import Registerlogin from './Registerlogin'

class Routing extends Component{
render(){
    return(
        <Router>
            <Switch>
                <Route exact path= '/' component={Registerlogin}/>
                <Route exact path= '/Login' component={Login}/>
            </Switch>
        </Router>
    )
}
}
export default Routing;