import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
import whey from './image/wheyProtien.jpg'
import gainer from './image/mpgainer.jpg'
import Creatine from './image/evlCreatine.jpg'
import amino from './image/BCAA.jpg'
import preworkout from './image/mpPreworkout.jpg'
import amino1 from './image/mpAmino1.jpg'
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
                            <a href='/Cart'><button className='Homebutton btn-success'>Cart</button></a>
                            <a href='/Login'><button className='Homebutton btn-success'>Login</button></a>
                            <a href='/Registerlogin'><button className='Homebutton btn-success'>Sign Up</button></a>
                        </div>
                    </div>
                    <div className='main'>
                        <div className='row'>
                            <a href='/Home'><h4 className='Nav'>Home</h4></a>
                            <a href=''><h4 className='Nav'>What's New</h4></a>
                            <a href=''><h4 className='Nav'>Products</h4></a>
                            <a href=''><h4 className='Nav'>About</h4></a>
                            <a href=''><h4 className='Nav'>Contact</h4></a>
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
                                <img class="card-img-top" src={whey} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Protein powder</h5>
                                    <p class="card-text">Something something.</p>
                                    <a href="/Productpreview" class="btn btn-primary">View Product</a>
                                </div>

                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={gainer} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Gainer</h5>
                                    <p class="card-text">something something.</p>
                                    <a href="/Productpreview" class="btn btn-primary">View Product</a>
                                </div>

                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={Creatine} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Creatine</h5>
                                    <p class="card-text">Something something.</p>
                                    <a href="/Productpreview" class="btn btn-primary">View Product</a>
                                </div>

                            </div>

                        </div>
                        <div className='row'>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={amino} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Protein powder</h5>
                                    <p class="card-text">Something something.</p>
                                    <a href="/Productpreview" class="btn btn-primary">View Product</a>
                                </div>

                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={preworkout} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Gainer</h5>
                                    <p class="card-text">something something.</p>
                                    <a href="/Productpreview" class="btn btn-primary">View Product</a>
                                </div>

                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={amino1} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Creatine</h5>
                                    <p class="card-text">Something something.</p>
                                    <a href="/Productpreview" class="btn btn-primary">View Product</a>
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