import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
class cart extends Component {
    render() {
        return (
            <div className='page'>
            <div className='row top'>
                <div className='logo col-sm-9'>
                    <a href='/'><img src={Logo} style={{ height: 100, width: 450, marginTop: 30 }} /></a>
                </div>
                <div className='btns col-sm'>
                    <a href='/Login'><button className='Homebutton btn-success'>Login</button></a>
                    <a href='/Registerlogin'><button className='Homebutton btn-success'>Sign Up</button></a>
                    
                </div>
            </div>
            <body>
                
            
            </body>

            <footer className='RegFFoot'>

            </footer>

        </div>


        )
    }
}
export default cart