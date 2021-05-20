import React, { useState } from 'react'
import { icons } from 'react-icons'
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
                            <Link className="navbar-brand ml-5 mt-3" to="/">
                                <img src={logo} alt="gadget" />
                            </Link>
                        </li>
                        <li className="nav-item "style = {{marginLeft : "380px"}}>

                            <form className="form-inline w-100 my-lg-0">
                                <div className="form-group w-100 input-group has-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cari Gadget"
                                        style={{ borderRadius: "5px", fontSize: "15px", padding: "20px", paddingLeft: "50px", width: "700px" }}
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        onSubmit={<Link to="/result"></Link>}
                                    />
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