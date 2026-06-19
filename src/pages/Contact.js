import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { content } from '../data/content';
import { servicesDetail } from '../data/servicesData';
import { submitEnquiry, ConfigurationError } from '../services/api';
import './Contact.css';
 
const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
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
      await submitEnquiry({ ...formData, source: 'contact' });
      setStatus({ type: 'success', message: 'Thank you! We will get back to you within 24 hours.' });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      const configMessage = 'Form submissions are not configured yet. Please email us at info@infralicence.in or try again later.';
      setStatus({ type: 'error', message: err instanceof ConfigurationError ? configMessage : 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact Us | InfraLicence - PWD Licensing Experts</title>
        <meta name="description" content="Get in touch with InfraLicence for expert guidance on PWD licensing, contractor registration, and infrastructure compliance. Free consultation available." />
        <meta property="og:title" content="Contact Us | InfraLicence - PWD Licensing Experts" />
        <meta property="og:description" content="Get in touch with InfraLicence for expert guidance on PWD licensing, contractor registration, and infrastructure compliance. Free consultation available." />
        <meta property="og:url" content="https://infralicence.in/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://infralicence.in/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://infralicence.in/contact" />
        <meta name="twitter:title" content="Contact Us | InfraLicence - PWD Licensing Experts" />
        <meta name="twitter:description" content="Get in touch with InfraLicence for expert guidance on PWD licensing and contractor registration." />
        <meta name="twitter:image" content="https://infralicence.in/logo512.png" />
        <link rel="canonical" href="https://infralicence.in/contact" />
      </Helmet>
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Get In Touch</span>
            <h1>Let's Discuss Your Requirements</h1>
            <p>
              Have questions about PWD licensing or need expert guidance? Reach out to our
              team of professionals and get the answers you need.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-info section">
        <div className="container">
          <div className="info-grid">
            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <h3>Phone</h3>
              <p>Call us for immediate assistance</p>
              <a href={`tel:${content.company.phone}`}>{content.company.phone}</a>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <h3>Email</h3>
              <p>Send us your queries anytime</p>
              <a href={`mailto:${content.company.email}`}>{content.company.email}</a>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <h3>Working Hours</h3>
              <p>We are available</p>
              <span>{content.company.workingHours}</span>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <h3>Location</h3>
              <p>Visit our office</p>
              <span>{content.company.address}</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-form-section section">
        <div className="container">
          <div className="form-grid">
            <motion.div
              className="form-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Send Message</span>
              <h2>Get Free Consultation</h2>
              <p>
                Fill out the form and our team will get back to you within 24 hours
                with a customized solution for your requirements.
              </p>

              <div className="form-features">
                <div className="form-feature">
                  <MessageSquare size={20} />
                  <span>Expert guidance</span>
                </div>
                <div className="form-feature">
                  <Clock size={20} />
                  <span>Quick response</span>
                </div>
                <div className="form-feature">
                  <Send size={20} />
                  <span>Free consultation</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {servicesDetail.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                    <option disabled>── Tender Services ──</option>
                    <option value="tender-information">Tender Information</option>
                    <option value="tender-bidding-solution">Tender Bidding Solution</option>
                    <option value="gem-complete-registration">GeM Complete Registration</option>
                    <option value="online-vendor-registration">Online Vendor Registration</option>
                    <option value="tender-awarded-results">Tender Awarded Results</option>
                    <option value="pre-post-bid-followup">Pre / Post-Bid Follow-up</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <span>{status.message}</span>
                  </div>
                )}
                <button type="submit" className="btn btn-primary full-width" disabled={loading}>
                  {loading ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-services section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Services</span>
            <h2 className="section-title">How Can We Help You?</h2>
          </motion.div>
          <div className="services-preview">
            {servicesDetail.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                className="service-preview-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{service.title}</h3>
                <p>{service.hero.subtitle}</p>
                <a href={`/services/${service.id}`}>Learn more</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
