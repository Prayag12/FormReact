import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Registerstyle.css'

import Login from './Login'
import Registerlogin from './Registerlogin'
import Home from './Home'
import Cart from './cart'
import Productprev from './ProductPreview'
import reactModal from './reactModal'

class Routing extends Component{
render(){
    return(
        <Router>
            <Switch>
                <Route className='Nav' exact path= '/' component={Home}/>
                <Route exact path= '/Login' component={Login}/>
                <Route exact path='/Registerlogin' component={Registerlogin}/>
                <Route exact path='/Cart' component={Cart}/>
                <Route exact path='/Productpreview' component={Productprev}/>
                <Route exact path='/reactModal' component={reactModal}/>
            </Switch>
        </Router>
    )
}
}
export default Routing;