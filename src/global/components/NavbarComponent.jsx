import React from "react";
import '../styles/NavbarComponent.css';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

    return(
    <section id="desktop-nav">
        <div className="nav-bar-container">
            <div className="nav-bar-logo">
                <Link to="/Home"><img src="/assets/GS.png" alt="Gurjit Samra Logo" /></Link>
            </div>
            <div className="nav-bar-links-container">
                <li><Link className="nav-bar-links" to="/About">About</Link></li>
                <li><Link className="nav-bar-links" to="/Projects">Projects</Link></li>
                <li><Link className="nav-bar-links" to="/Contact">Contact</Link></li>
            </div>
        </div>
    </section>
    );
};

export default NavbarComponent;