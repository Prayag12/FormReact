import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
import whey from './image/wheyProtien.jpg'
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
                            <a href=''><button className='Homebutton btn-success'>Cart</button></a>
                            <a href='/Login'><button className='Homebutton btn-success'>Login</button></a>
                            <a href='/'><button className='Homebutton btn-success'>Sign Up</button></a>
                        </div>
                    </div>
                    <div className='main'>
                        <div className='row'>
                            <a href=''><h4 className='Nav'>Home</h4></a>
                            <a href=''><h4 className='Nav'>What's New</h4></a>
                            <a href=''><h4 className='Nav'>Products</h4></a>
                            <a href=''><h4 className='Nav'>About</h4></a>
                            <a href=''><h4 className='Nav'>Contact</h4></a>
                        </div>
                        <div className='row'>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={whey} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Protein powder</h5>
                                    <p class="card-text">Something something.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                
                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="..." alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Gainer</h5>
                                    <p class="card-text">something something.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                
                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="..." alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Creatine</h5>
                                    <p class="card-text">Something something.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                
                            </div>

                        </div>
                        <div className='row'>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="..." alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Protein powder</h5>
                                    <p class="card-text">Something something.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                
                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="..." alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Gainer</h5>
                                    <p class="card-text">something something.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                
                            </div>
                            <div class="card" style={{ width: '18rem' }}>
                                <img class="card-img-top" src="..." alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Creatine</h5>
                                    <p class="card-text">Something something.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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