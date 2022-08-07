import React from "react";
import Logo from './../../assest/flashLogo.png';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <img src={Logo} className="flash-logo" alt="logo" />
                <p className="navbar-text-left">Need For Speed</p>
            </div>
            <div className="navbar-right">
                <p className="navbar-text-right">Like</p>
            </div>
        </div>
    )
}

export default Navbar;