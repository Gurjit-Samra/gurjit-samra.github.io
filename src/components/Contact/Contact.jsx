import React from "react";
import BasicPage from '../../global/components/BasicPage'
import FormComponent from './FormComponent'
import './Contact.css'

function Contact() {
  return (
    <div>
      <BasicPage />
      <section id="contact">
        <FormComponent />
      </section>
      
    </div>
    
  );
}

export default Contact;