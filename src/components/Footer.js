import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Dot } from 'lucide-react';
import { content } from '../data/content';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <span className="brand-text">InfraLicence</span>
                <span className="brand-tagline">Consultancy & Solutions</span>
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
                <li>
                  <Phone size={18} />
                  <a href={`tel:${content.company.phone}`}>{content.company.phone}</a>
                </li>
                <li>
                  <MapPin size={18} />
                  <span>{content.company.address}</span>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Subscribe for Updates</h4>
              <p>Subscribe for updates on PWD licensing, projects, and expert tips.</p>
              <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="input-wrapper">
                  <Mail size={18} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send size={18} />
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
            <p>Powered by <a href="https://crypticalsoftware.com" target="_blank" rel="noopener noreferrer">Cryptical Software</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;