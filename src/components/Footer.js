import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Dot } from 'lucide-react';
import { content } from '../data/content';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Footer form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <span className="brand-text">InfraLicence</span>
                 <span className="brand-tagline">Consultants & Solutions</span>
              </a>
              <p className="footer-description">
                InfraLicense Consultants & Solutions is a reliable consultancy dedicated to helping
                clients obtain PWD contractor licenses and Electrical contractor licenses, while
                offering complete guidance and support throughout the licensing process.
              </p>
              <div className="footer-social">
                {content.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url || '/'}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Dot size={18} />
                    </a>
                  ))}
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {content.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                {content.serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <ul>
                <li>
                  <Mail size={18} />
                  <a href={`mailto:${content.company.email}`}>{content.company.email}</a>
                </li>
                {content.company.phone && (
                  <li>
                    <Phone size={18} />
                    <a href={`tel:${content.company.phone}`}>{content.company.phone}</a>
                  </li>
                )}
                <li>
                  <MapPin size={18} />
                  <span>{content.company.address}</span>
                </li>
              </ul>
            </div>

            <div className="footer-contact-form">
              <h4>Quick Enquiry</h4>
              <form onSubmit={handleSubmit}>
                <div className="footer-form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="footer-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="footer-form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="footer-form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary footer-form-btn">
                  <Send size={16} /> Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 InfraLicense Consultants & Solutions. All rights reserved.</p>
            <p>Powered by CodeX Tech Innovations & Consultants LLP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;