import React, {Component} from 'react';
import './Registerstyle.css'
class Login extends Component{
  render(){
    return(
            <div>
                <header className='RegFHead'>
                    <h1>Log In Form</h1>
                </header>
                <body className='RegBody'>
                    <text className='IUserInfo'>E-mail</text> <input className= 'UserInput' type= 'text'/>
                    <br/>
                    <text className='IUserInfo'>Password</text> <input className= 'UserInput' type='password'/>
                    <br/>
                    <a href='/'><button className='SubmitButton btn-success'>Login</button></a>
                </body>
                <footer className='RegFFoot'>

                </footer>
            </div>
            
        
        )
    }
}
export default Login;