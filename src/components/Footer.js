import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { content } from '../data/content';
import { submitEnquiry } from '../services/api';
import './Footer.css';

const socialIcons = {
  facebook: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  twitter: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  youtube: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
};

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await submitEnquiry({ ...formData, source: 'footer' });
      setStatus({ type: 'success', message: 'Thank you! We will get back to you shortly.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setLoading(false);
    }
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
                InfraLicence Consultants & Solutions is a reliable consultancy dedicated to helping
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
                      {socialIcons[social.icon]?.({ size: 18 })}
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
                {status.message && (
                  <div className={`footer-form-status ${status.type}`}>
                    {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    <span>{status.message}</span>
                  </div>
                )}
                <button type="submit" className="btn btn-primary footer-form-btn" disabled={loading}>
                  {loading ? <Loader2 size={16} className="spin" /> : <Send size={16} />}
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 InfraLicence Consultants & Solutions. All rights reserved.</p>
            <p>Powered by CodeX Tech Innovations & Consultants LLP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;