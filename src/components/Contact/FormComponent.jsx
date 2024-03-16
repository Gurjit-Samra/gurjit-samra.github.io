import React, { useState } from 'react';
import  {useRef} from 'react';
import './contact-form-stylesheet.css'
import emailjs from '@emailjs/browser';



const FormComponent = () => {

    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        reason: '',
        message: '',
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
                    alert('Email sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        companyName: '',
                        reason: '',
                        message: '',
                    });
                },
                (error) => {
                    alert('Email failed to send', error);
                },
            );
    };

    return (
        <div className="form-container">
            <h2>Let's Connect</h2>
            <form className="form" onSubmit={handleSubmit} >
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
                    <option value="general">General inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                </select>
    

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit" id='submitButton'>Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;