import React, {Component} from 'react';
import './Registerstyle.css'
import Login from './Login'
class Register extends Component{
  render(){
    return(
            <div>
                <header className='RegFHead'>
                    <h1>Registration Fourm</h1>
                </header>
                <body>
                    <text className='IUserInfo'>Name</text> <input className= 'UserInput' type='text' placeholder='First Name'/> <input className= 'UserInput' type='text' placeholder='Last Name'/>
                    <br/>
                    <text className='IUserInfo'>E-mail</text> <input className= 'UserInput' type= 'text'/>
                    <br/>
                    <text className='IUserInfo'>Contact Number</text> <input className= 'UserInput' type='text'/>
                    <br/>
                    <text className='IUserInfo'>Address</text> <input className= 'UserInput' type='text'/>
                    <br/>
                    <text className='IUserInfo'>Password</text> <input className= 'UserInput' type='password'/>
                    <br/>
                    <text className='IUserInfo'>Re-password</text> <input className= 'UserInput' type='password'/>
                    <br/>
                    <button className='SubmitButton'>Sign Up</button>
                </body>
                <footer>

                </footer>
            </div>
            
        
        )
    }
}
export default Register