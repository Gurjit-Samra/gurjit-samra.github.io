import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);



function openContactForm() {
    document.getElementById("contactForm").style.display = "block";
    if (window.location.pathname == "/index.html") {
      document.getElementById("hero-text-and-button-container").style.visibility = "hidden";
      document.getElementById("hero-visuals-container").style.visibility = "hidden";
    } else if (window.location.pathname == "/about.html") {
      document.getElementById("about-picture-container").style.visibility = "hidden";
      document.getElementById("about-text-container").style.visibility = "hidden";
    }
  }

function closeContactForm() {
    document.getElementById("contactForm").style.display = "none";
    if (window.location.pathname == "/index.html") {
      document.getElementById("hero-text-and-button-container").style.visibility = "visible";
      document.getElementById("hero-visuals-container").style.visibility = "visible";
    } else if (window.location.pathname == "/about.html") {
      document.getElementById("about-picture-container").style.visibility = "visible";
      document.getElementById("about-text-container").style.visibility = "visible";
    }
  }

function submitThenClose(){
    document.getElementById("contactForm").style.display = "none";
    if (window.location.pathname == "/index.html") {
      document.getElementById("hero-text-and-button-container").style.visibility = "visible";
      document.getElementById("hero-visuals-container").style.visibility = "visible";
    } else if (window.location.pathname == "/about.html") {
      document.getElementById("about-picture-container").style.visibility = "visible";
      document.getElementById("about-text-container").style.visibility = "visible";
    }
    alert("Thank you for your submission! Gurjit still has to code the backend to make this work. Please check back later.");
  }