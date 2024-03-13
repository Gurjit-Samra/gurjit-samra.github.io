import React from "react";
import "./NavbarComponent.css";
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

    return(
    <section id="desktop-nav">
        <div className="nav-bar-container">
            <div className="nav-bar-logo">
                <Link to="/"><img src="/assets/GS.png" alt="Gurjit Samra Logo" /></Link>
            </div>
            <div className="nav-bar-links-container">
                <li><Link className="nav-bar-links" to="/pages/about">About</Link></li>
                <li><Link className="nav-bar-links" to="/pages/projects">Projects</Link></li>
                <li><Link className="nav-bar-links" to="/pages/contact">Contact</Link></li>
            </div>
        </div>
    </section>
    );
};

export default NavbarComponent;