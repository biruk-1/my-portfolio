import React, { useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lhy77gp",
        "template_yusmg3x",
        formData,
        "7tddNPOadYV9KigoR"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
          console.error("Email error:", error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Have a question or just want to say hi? I'd love to hear from you.
        </p>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="contact-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="contact-button">
                Send Message
              </button>
            </div>
          </form>
          {status && <p className="contact-status">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
