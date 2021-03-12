import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
class Login extends Component {
    render() {
        return (
            <div className='form'>
                <div className='logo'>
                    <a href='/'><img src={Logo} style={{height: 100, width: 450, marginTop: 30}}/></a>
                </div>
                <div className="card crds" style={{ width: '30rem', borderRadius: '30px' }}>
                <h5 className='card-header RegFHead' style={{backgroundColor:'yellow', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', paddingTop: '50px'}}>LogIn Form</h5>
                    <div className="card-body">
                      {/*<header className='RegFHead'>
                            <h1 className='Regtitle'>Log In Form</h1>
        </header>*/}
                        <body className='RegBody'>
                            <text className='IUserInfo'>E-mail</text> <input className='UserInput' type='text' />
                            <br />
                            <text className='IUserInfo'>Password</text> <input className='UserInput' type='password' />
                            <br />

                        </body>

                        <a href=''><text className='accountText'>forgot password?</text></a>
                        <a href='/'><button className='Nav' style={{marginLeft:'42%'}}>Login</button></a>
                        <br/>
                        <br/>
                        <a href=''><text className='accountText'>don't have an account?</text></a>
                        <br/>
                        <a href='/Registerlogin'><button className='Nav' style={{marginLeft:'41%'}}>SignUp</button></a>
                       
                    </div>
                </div>
                <footer className='RegFFoot'>

                </footer>
            </div>


        )
    }
}
export default Login;