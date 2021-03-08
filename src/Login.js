import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
class Login extends Component {
    render() {
        return (
            <div className='form'>
                <div className='logo'>
                    <img src={Logo} style={{height: 100, width: 450, marginTop: 30}}/>
                </div>
                <div class="card" style={{ width: '30rem', borderRadius: '30px' }}>
                <h5 className='card-header RegFHead' style={{backgroundColor:'yellow', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', paddingTop: '50px'}}>LogIn Form</h5>
                    <div class="card-body">
                      {/*<header className='RegFHead'>
                            <h1 className='Regtitle'>Log In Form</h1>
        </header>*/}
                        <body className='RegBody'>
                            <text className='IUserInfo'>E-mail</text> <input className='UserInput' type='text' />
                            <br />
                            <text className='IUserInfo'>Password</text> <input className='UserInput' type='password' />
                            <br />

                        </body>


                        <a href='/'><button className='SubmitButton btn-success'>Login</button></a>
                       
                    </div>
                </div>
                <footer className='RegFFoot'>

                </footer>
            </div>


        )
    }
}
export default Login;