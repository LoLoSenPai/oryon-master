import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactComponent.css';

function ContactComponent() {

    useEffect(() => {
        // Configure the email service using your service ID
        emailjs.init(process.env.REACT_APP_EMAILJS_ACCESS_TOKEN);

        // Add an event listener to the contact form
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // Get the form data
            const formData = new FormData(event.target);
            const name = formData.get('full-name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Create the email object using the template ID and the form data
            const emailData = {
                from_name: name,
                message: message,
                email_id: email
            };

            // Send the email using the email.js API
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, emailData)
            .then(function(response) {
                alert('Your message was sent successfully!');
                // Reset the form
                form.reset();
            }, function(error) {
                alert('There was an error sending your email.');
            });
        });

    }, []);

    return (
        <form id="contact-form">
            <h2 className="form-title">Contact Us</h2>
            <div className="form-group">
                <label htmlFor="full-name">Full Name:</label>
                <input type="text" className="form-control" id="full-name" name="full-name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-form-submit">Send</button>
        </form>
    );
}

export default ContactComponent;
