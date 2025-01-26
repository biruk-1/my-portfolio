import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-form">
          <form>
            <div>
              <label htmlFor="name" className="contact-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="contact-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-input"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="contact-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="contact-textarea"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="contact-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;