import React from 'react';

function ContactForm() {

  // JSX
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-content">
        <h2 className="mb-5">Contact Me</h2>
        <form id="contact-form">
          <div className="contact-name">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="contact-email">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" />
          </div>
          <div className="contact-message">
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

