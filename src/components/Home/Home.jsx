import React from "react";
import BasicPage from '../../global/components/BasicPage'
import './Home.css';
import NavbarComponent from "../../global/components/NavbarComponent";

function Home() {
    
  return (
    <div>
      <NavbarComponent />
      <section id="hero">

        <div className="hero-container">
          <div id="hero-text-and-button-container">
            <h1 className="titles">Gurjit Samra</h1>
            <a to="/Contact"><button className="contact-button">Get in touch</button></a>
          </div>
        </div>

        <div id="hero-visuals-container">

          <div className="hero-picture-container">
            <img
              id="hero-picture"
              src="/assets/gsprofilepic.jpg"
              alt="Gurjit Samra Profile Picture"
            />
          </div>

          <div className="socials-container">
            <a target="”_blank”" href="https://github.com/Gurjit-Samra">
              <img className="icons" src="/assets/github.png" alt="Github Icon" />
            </a>
            <a target="”_blank”" href="https://www.linkedin.com/in/gurjit-samra/">
              <img
                className="icons"
                src="/assets/linkedin.png"
                alt="LinkedIn Icon"
              />
            </a>
          </div>

        </div>

      </section>
  </div>
    );
}

export default Home;