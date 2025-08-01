import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      message: '',
      isError: false,
      isSubmitting: true
    });

    fetch('https://formspree.io/f/xrbllywr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to send message');
        setFormStatus({
          message: 'Thank you! Your message has been sent successfully.',
          isError: false,
          isSubmitting: false
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        setFormStatus({
          message: error.message || 'Something went wrong. Please try again.',
          isError: true,
          isSubmitting: false
        });
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="details">
                <h3>Location</h3>
                <p>Jaipur, Rajasthan</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="details">
                <h3>Email</h3>
                <p>utsavgupta2611@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="details">
                <h3>Phone</h3>
                <p>+91-9509490962</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/utsavgupta26/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/UtsavG2611" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus.message && (
                <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;