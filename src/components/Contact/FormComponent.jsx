import React, { useState } from 'react';
import  {useRef} from 'react';
import './contact-form-stylesheet.css'
import emailjs from '@emailjs/browser';



const FormComponent = () => {

    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        message: '',
        submitted: false,
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data here
        emailjs
            .sendForm(
                'service_ml1nkzh',
                'template_6gad0dj',
                e.target, {
                publicKey: 'GiI9SJnznVcHa__fJ', 
            })
            .then(
                ()=>{
                    setFormData({
                        name: '',
                        email: '',
                        reason: '',
                        message: '',
                        submitted: true,
                    });
                },
                (error) => {
                    alert('Email failed to send', error);
                },
            );
    };

    return (
        <div className={`form-container${formData.submitted ? ' submitted' : ''}`}>
            <h1 id='title'>Let's Connect !</h1>
            <form className='form' onSubmit={handleSubmit} >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                
                <label htmlFor="reason">Reason for contacting:</label>
                <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    >
                    <option value="">Select a reason</option>
                    <option value="network">Network</option>
                    <option value="feedback">Feedback</option>
                    <option value="insternship">Internship</option>
                </select>
    

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                />
                <div className='button-container'>
                    <label id="submit-label">Send</label>
                    <button type="submit" id='submitButton' ><img src="../../../assets/emailicon.png" className='email-icon'/></button>
                </div>
                
            </form>
            <div className='thank-you'>
                <h1>Thank     You.</h1>
            </div>
            <div className='info-prompt'>
                <p>I will be in touch.<br></br>Shortly!</p>
            </div>
        </div>
    );
};

export default FormComponent;