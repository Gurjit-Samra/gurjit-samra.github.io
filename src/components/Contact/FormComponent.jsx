import React, { useState } from 'react';
import './contact-form-stylesheet.css'


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
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="form">
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