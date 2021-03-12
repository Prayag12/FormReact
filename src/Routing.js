import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Registerstyle.css'

import Login from './Login'
import Registerlogin from './Registerlogin'
import Home from './Home'
import Cart from './cart'
import Productprev from './ProductPreview'
import reactModal from './reactModal'
import WhatsNew from './WhatsNew'
import Product from './Product'
import About from './About'
import Contact from './Contact'

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
                <Route exact path='/WhatsNew' component={WhatsNew}/>
                <Route exact path='/Product' component={Product}/>
                <Route exact path='/About' component={About}/>
                <Route exact path='/Contact' component={Contact}/>
            </Switch>
        </Router>
    )
}
}
export default Routing;