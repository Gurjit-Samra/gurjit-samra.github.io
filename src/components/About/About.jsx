import React from "react";
import BasicPage from "../../global/components/BasicPage";
//import "./About.css";
import "../../global/styles/main.css";
import NavbarComponent from "../../global/components/NavbarComponent";

function About() {
  return (
    <div>
      <BasicPage>
        <div className="about-container">

          <div id="about-picture-container">
            <img
              id="about-pictures"
              src="/assets/gsprofilepic.jpg"
              alt="Gurjit Samra Profile Picture"
            />
          </div>
  
          <div id="about-text-container">
            <p className="about-text">
              Hi there, I’m currently pursuing a computer science degree at the
              University of Calgary. I have been in love with technology ever since I
              was young, from the first iPods to the current Playstation. I’ve loved
              seeing and experiencing firsthand how tech has kept changing the way we
              work, play, and socialize. My passion for technology drives me to learn
              and experiment. I’ve enjoyed being a student in such an innovative field
              and look forward to applying my growing skills towards impactful
              projects.
              <br />
              <br />
              I continue to work on projects in and out of my time at University. I’ve
              collaborated within teams up to 20 people, and have experience using
              communication tools like Trello, Slack and Discord to effectively
              communicate. I am most experienced in HTML, CSS, JavaScript, Java, and
              Python, with an evolving knowledge of other libraries and frameworks
              such as React.js and Three.js. I am currently improving my data science
              skills with the help of Python and Julia.
              <br />
              <br />
              When I am not coding, I love to go on hikes, read great novels, and
              spend time with my family and friends. I am also a huge fan of the
              Ultimate Fighting Championship, and love to train mixed martial arts to
              stay sharp and in shape.
            </p>
          </div>
        </div>
      </BasicPage>
    </div>
  );
}

export default About;