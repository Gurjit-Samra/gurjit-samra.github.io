import React from "react";
import { useState } from "react";
import '../styles/NavbarComponent.css';
import { Link } from 'react-router-dom';
import PositionedMenu from "./NavMenu";

const HamburgerIcon = () => {
    return (
        <div>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
        </div>    
    );
}

const NavItem = (props) => {
    return (
        <div className={props.className}>
        {props.children}
        </div>
    );
};

const NavbarComponent = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(

    <nav className="nav-bar-container">

        <NavItem className="nav-bar-logo">
            <Link to="/Home"><img src="/assets/GS (1).png" alt="Gurjit Samra Logo" /></Link>
        </NavItem>
        
        <NavItem className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onclick={toggleMenu}>
            <PositionedMenu />
        </NavItem>

        <NavItem className="nav-bar-links-container">
            <li><Link className="nav-bar-links" to="/About">About</Link></li>
            <li><Link className="nav-bar-links" to="/Projects">Projects</Link></li>
            <li><Link className="nav-bar-links" to="/Contact">Contact</Link></li>
        </NavItem>

    </nav>
        
    
    );
};

export default NavbarComponent;