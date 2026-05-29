import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { content } from '../data/content';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contact" className="cta section">
      <div className="cta-background">
        <div className="cta-shape"></div>
      </div>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-label" style={{ color: 'var(--white)' }}>Get In Touch</span>
          <h2 className="cta-title">Connect with Us for Hassle-Free PWD Licensing and Project Guidance</h2>
          <p className="cta-subtitle">
            Reach out to our experts for seamless licensing support and efficient project management.
          </p>

          <div className="cta-actions">
            <a href="/contact" className="btn btn-primary">
              Discover more
              <ArrowRight size={18} />
            </a>
            <div className="cta-contact-info">
              <a href={`tel:${content.company.phone}`} className="cta-contact-item">
                <Phone size={20} />
                <span>{content.company.phone}</span>
              </a>
              <a href={`mailto:${content.company.email}`} className="cta-contact-item">
                <Mail size={20} />
                <span>{content.company.email}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;