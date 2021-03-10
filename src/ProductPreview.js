import React, { Component } from 'react';
import './Registerstyle.css'
import Logo from './image/Body.PNG'
class productprev extends Component {
    render() {
        return (
            <div className='page'>
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
                <body>
                    <div class="card" style={{ height: '30rem', width: '70rem' }}>
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">This is product preview page</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='prevBtn'>
                                <a href="#" class="btn btn-primary">Buy</a>
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </body>

                <footer className='RegFFoot'>

                </footer>

            </div>


        )
    }
}
export default productprev