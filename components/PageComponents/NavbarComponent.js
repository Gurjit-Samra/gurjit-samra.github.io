import React from "react";

const NavbarComponent = () => {

    return(
    <section id="desktop-nav">
        <div className="nav-bar-container">
            <div className="nav-bar-logo">
                <a href="/pages/index.html">
                    <img src="/assets/GS.png" alt="Gurjit Samra Logo" />
                </a>
            </div>
            <div className="nav-bar-links-container">
                <a className="nav-bar-links" href="/pages/about.html">
                    About
                </a>
                <a className="nav-bar-links" href="/pages/projects.html">
                    Projects
                </a>
                <a className="nav-bar-links" id="contact-nav" onClick={openContactForm}>
                    Contact
                </a>
            </div>
        </div>
    </section>
    );
};

export default NavbarComponent;