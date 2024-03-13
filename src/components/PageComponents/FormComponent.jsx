import React, { useState } from 'react';


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
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;