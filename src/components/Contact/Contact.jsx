import React, { useEffect, useRef } from "react";
import BasicPage from '../../global/components/BasicPage'
import FormComponent from './FormComponent'
import './Contact.css'

function Contact() {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div >
      <BasicPage />
      <section id="contact">
        <div id="calendly"
          ref={calendlyRef}
          className="calendly-inline-widget"
          data-url="https://calendly.com/gurjitsamra-business/30min?hide_gdpr_banner=1"
          style={{ minWidth: '320px', marginTop: '2rem', height: '1000px', borderRadius: '8px', marginBottom: '2rem' }}
        ></div>
      </section>
    </div>
  );
}

export default Contact;