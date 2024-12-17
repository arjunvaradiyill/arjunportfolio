import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [emailContent, setEmailContent] = useState("");

  const handleChange = (event) => {
    setEmailContent(event.target.value);
  };

  return (
    <section className="contact-me-section">
      <div className="contact-me-container">
        <h2>Contact Me</h2>
        <p>If you have any questions or want to get in touch, feel free to send me an email.</p>

        <form action={`mailto:arjunvaradiyil203@gmail.com`} method="POST" enctype="text/plain">
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={emailContent}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
