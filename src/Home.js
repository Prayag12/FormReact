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


class Home extends Component {
    render() {
        return (
            <div className='page'>
                <header>
                    <div className='row top'>
                        <div className='logo col-sm-9'>
                            <img src={Logo} style={{ height: 100, width: 450, marginTop: 30 }} />
                        </div>
                        <div className='btns col-sm'>
                            <a href='/Cart'><button type="button" class="btn btn-outline-warning" style={{ borderStyle: 'hidden' }}><FiShoppingCart /></button></a>
                            <a href='/Login'><button type="button" class="btn btn-outline-warning">Login</button></a>
                            <a href='/Registerlogin'><button type="button" class="btn btn-outline-warning">Sign Up</button></a>
                        </div>
                    </div>
                    <div className='main'>
                        <div className='row'>
                            <div class="input-group col-sm-6" style={{marginTop: '15px', marginLeft: '15px'}}>
                                <div class="form-outline">
                                    <input type="search" id="form1" class="form-control" placeholder='Search' />

                                </div>
                                <button type="button" class="btn btn-warning" style={{height: '38px'}}>
                                    <i class="fas fi-search"><FiSearch/></i>
                                </button>
                            </div>

                            <div className='row Navbar col-sm-6'>
                                <a href='/'><h4 className='Nav--active'>Home</h4></a>
                                <a href=''><h4 className='Nav'>What's New</h4></a>
                                <a href=''><h4 className='Nav'>Products</h4></a>
                                <a href=''><h4 className='Nav'>About</h4></a>
                                <a href=''><h4 className='Nav'>Contact</h4></a>
                            </div>
                        </div>
                        {/*}                       <div>
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={amino} alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={gainer} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={amino1} alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
        </div> */}
                        <div className='row'>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={whey} alt="Card image cap" style={{ height: '350px' }} />
                                <div class="card-body">
                                    <h5 class="card-title">Protein powder</h5>
                                    <p class="card-text">Something something.</p>
                                    <MyVerticallyCenteredModal />

                                </div>

                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={gainer} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Gainer</h5>
                                    <p class="card-text">something something.</p>
                                    <MyVerticallyCenteredModal />
                                </div>

                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={Creatine} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Creatine</h5>
                                    <p class="card-text">Something something.</p>
                                    <MyVerticallyCenteredModal />
                                </div>

                            </div>

                        </div>
                        <div className='row'>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={amino} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Protein powder</h5>
                                    <p class="card-text">Something something.</p>
                                    <MyVerticallyCenteredModal />
                                </div>

                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={preworkout} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Gainer</h5>
                                    <p class="card-text">something something.</p>
                                    <MyVerticallyCenteredModal />
                                </div>

                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top1" src={amino1} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title" style={{ paddingTop: '50px' }}>Creatine</h5>
                                    <p class="card-text">Something something.</p>
                                    <MyVerticallyCenteredModal />
                                </div>

                            </div>

                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        ...
      </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
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
export default Home