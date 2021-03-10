import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
class Register extends Component {
    render() {
        return (
            <div className='row top'>
                <div className='logo col-sm-9'>
                    <img src={Logo} style={{ height: 100, width: 450, marginTop: 30 }} />
                </div>
                <div className='btns col-sm'>
                    <a href='/Cart'><button className='Homebutton btn-success'>Cart</button></a>
                    <a href='/Login'><button className='Homebutton btn-success'>Login</button></a>
                    <a href='/Registerlogin'><button className='Homebutton btn-success'>Sign Up</button></a>
                </div>


                <footer className='RegFFoot'>

                </footer>
            </div >


        )
    }
}
export default Register