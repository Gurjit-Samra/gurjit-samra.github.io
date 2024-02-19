function openContactForm() {
    document.getElementById("contactForm").style.display = "block";
  }
  
  function closeContactForm() {
    document.getElementById("contactForm").style.display = "none";
  }

  function submitThenClose(){
    document.getElementById("contactForm").style.display = "none";
    alert("Thank you for your submission! Gurjit still has to code the backend to make this work. Please check back later.");
  }