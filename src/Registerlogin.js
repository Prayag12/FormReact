import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
class Register extends Component {
    render() {
        return (
            <div className='form'>
                <div className='logo'>
                    <a href='/'><img src={Logo} style={{ height: 100, width: 450, marginTop: 30 }} /></a>
                </div>
                <div className="card crds RegFHead" style={{ width: '35rem', borderRadius: '30px' }}>
                    <h5 className='card-header RegFHead' style={{backgroundColor:'yellow', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', paddingTop: '50px'}}>Registration Form</h5>
                    <div className="card-body">
                       

                        <body className='RegBody'>
                            <text className='IUserInfo'>Name</text> <input className='UserInput' type='text' placeholder='First Name' /> <input className='UserInput' type='text' placeholder='Last Name' />
                            <br />
                            <text className='IUserInfo'>E-mail</text> <input className='UserInput' type='text' />
                            <br />
                            <text className='IUserInfo'>Contact Number</text> <input className='UserInput' type='text' />
                            <br />
                            <text className='IUserInfo'>Address</text> <input className='UserInput' type='text' />
                            <br />
                            <text className='IUserInfo'>Password</text> <input className='UserInput' type='password' />
                            <br />
                            <text className='IUserInfo'>Re-password</text> <input className='UserInput' type='password' />
                            <br />
                            <a href='/Login'><button className='Nav' style={{marginRight:'15%', marginTop:'45px'}}>Sign Up</button></a>



                        </body>


                    </div>
                </div>




                <footer className='RegFFoot'>

                </footer>
            </div>


        )
    }
}
export default Register