import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
import whey from './image/wheyProtien.jpg'
import gainer from './image/mpgainer.jpg'
import Creatine from './image/evlCreatine.jpg'
import amino from './image/BCAA.jpg'
import preworkout from './image/mpPreworkout.jpg'
import amino1 from './image/mpAmino1.jpg'
import MyVerticallyCenteredModal from './reactModal.js';
import { FiShoppingCart } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';


class Whatsnew extends Component {
    render() {
        return (
            <div className='page'>
                <header>
                    <div className='row top'>
                        <div className='logo col-sm-9'>
                            <img src={Logo} style={{ height: 100, width: 450, marginTop: 30 }} />
                        </div>
                        <div className='btns col-sm'>
                            <a href='/Cart'><button type="button" className="btn btn-warning" style={{ borderStyle: 'hidden' }}><FiShoppingCart /></button></a>
                            <a href='/Login'><button type="button" className="btn btn-outline-warning">Login</button></a>
                            <a href='/Registerlogin'><button type="button" className="btn btn-outline-warning">Sign Up</button></a>
                        </div>
                    </div>
                    <div className='main'>
                        <div className='row'>
                            <div className="input-group col-sm-6" style={{marginTop: '15px', marginLeft: '15px'}}>
                                <div className="form-outline">
                                    <input type="search" id="form1" className="form-control" placeholder='Search' />

                                </div>
                                <button type="button" className="btn btn-warning" style={{height: '38px'}}>
                                    <i className="fas fi-search"><FiSearch/></i>
                                </button>
                            </div>

                            <div className='row Navbar col-sm-6'>
                                <a href='/'><h4 className='Nav'>Home</h4></a>
                                <a href='/Whatsnew'><h4 className='Nav'>What's New</h4></a>
                                <a href='/Product'><h4 className='Nav'>Products</h4></a>
                                <a href='/About'><h4 className='Nav'>About</h4></a>
                                <a href='/Contact'><h4 className='Nav'>Contact</h4></a>
                            </div>
                        </div>
                       

                       
                        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        ...
      </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        )
    }
}
export default Whatsnew