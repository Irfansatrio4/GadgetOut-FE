import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import logo from '../assets/img/GadgetOut.png'


function Navbar() {
    
    return (
        <div>
            <nav
                className="navbar navbar-desktop navbar-expand"
                style={{ zIndex: "2" }}
            >
                <div className="d-flex collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className=" navbar-nav  d-flex align-items-start">
                        <li className="nav-item ">
                            <Link className="navbar-brand ml-5" to="/">
                                <img src={logo} alt="gadget" />
                            </Link>
                        </li>
                        <li className="nav-item "style = {{marginLeft : "250px"}}>

                            <form className="form-inline w-100 my-lg-0">
                                <div className="form-group w-100 input-group has-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cari Gadget"
                                        style={{ borderRadius: "40px", fontSize: "15px", padding: "20px", paddingLeft: "50px", width: "550px" }}
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        onSubmit={<Link to="/result"></Link>}
                                    />
                                    <button type="submit" className="btn-search">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar