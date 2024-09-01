import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import CartBtn from './buttons/CartBtn'



export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-4">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="product">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">About</NavLink>
                            </li>  <li className="nav-item">
                                <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </li>

                        </ul>
                        <NavLink className="navbar-brand mx-auto fw-bold fs-3 ms-5" to="/">APPLE MART</NavLink>
                        <Login />
                        <Signup />
                        <CartBtn />
                    </div>
                    {/* <NavLink className="navbar-brand  fw-bold "  to="/"><span className=' heading my-5 '>APPLE MART</span></NavLink>
                <Login />
                <Signup />
                <CardBtn /> */}


                </div>
            </nav>


        </>
    )
}
