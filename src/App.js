import React, {Component} from 'react';
import './style.css'
class Fourm extends Component{
  render(){
    return(
      <div className='Welcome' >
        <header>
        <h1 className= 'title'>Please fill the form below</h1>
        </header>
        <body className='body'>
        <text className= 'info'>Name</text>
        <input
        className='txtField'
        type='text'
        />
        <br/>
        <text className= 'info'>E-mail ID</text>
        <input
        className='txtField'
        type='text'
        />
        <br/>
        <text className= 'info'>Contact Number</text>
        <input
        className='txtField'
        type='text'
        />
        <br/>
        <text className= 'info'>Address</text>
        <input
        className='txtField'
        type='text' 
        />
        <br/>
        <text className= 'info'>Password</text>
        <input
        className='txtField'
        type='password'
        />
         <br/>
         <text className= 'info'>Re-enter Password</text>
        <input
        className='txtField'
        type='password'
        />
        <br/>
        <button className='submitButton'>Submit</button>
        </body>
      </div>  
    )
  }
}
export default Fourm