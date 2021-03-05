import React, {Component} from 'react';
import './Registerstyle.css'
import RegisterLogin from './Registerlogin'
class Register extends Component{
  render(){
    return(
            <div>
                <header className='RegFHead'>
                    <h1>Log In Fourm</h1>
                </header>
                <body className='RegBody'>
                    <text className='IUserInfo'>E-mail</text> <input className= 'UserInput' type= 'text'/>
                    <br/>
                    <text className='IUserInfo'>Password</text> <input className= 'UserInput' type='password'/>
                    <br/>
                    <button className='SubmitButton'>Login</button>
                </body>
                <footer className='RegFFoot'>

                </footer>
            </div>
            
        
        )
    }
}
export default Register