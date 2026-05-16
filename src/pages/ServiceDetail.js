import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, DollarSign, FileText, ChevronRight } from 'lucide-react';
import { servicesDetail } from '../data/servicesData';
import './ServiceDetail.css';

const iconMap = {
  FileCheck: '📋',
  Building2: '🏢',
  Zap: '⚡',
  Briefcase: '💼',
  Receipt: '🧾',
  Key: '🔑',
  ShoppingCart: '🛒',
  Globe: '🌍'
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesDetail.find(s => s.id === id);

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service not found</h2>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero-bg"></div>
        <div className="container">
          <motion.div
            className="service-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="back-link">
              <ArrowLeft size={18} /> Back to Home
            </Link>
            <span className="service-icon">{iconMap[service.icon]}</span>
            <h1>{service.hero.title}</h1>
            <p className="service-subtitle">{service.hero.subtitle}</p>
            <p className="service-description">{service.hero.description}</p>
            <div className="service-hero-meta">
              <div className="meta-item">
                <Clock size={18} />
                <span>{service.timeline}</span>
              </div>
              <div className="meta-item">
                <DollarSign size={18} />
                <span>{service.pricing}</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Get Started <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="service-overview section">
        <div className="container">
          <div className="overview-grid">
            <motion.div
              className="overview-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-label">{service.overview.title}</span>
              <p>{service.overview.content}</p>
              <ul className="overview-points">
                {service.overview.points.map((point, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="overview-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Quick Info</h3>
              <div className="quick-info-item">
                <Clock size={18} />
                <div>
                  <span className="label">Processing Time</span>
                  <span className="value">{service.timeline}</span>
                </div>
              </div>
              <div className="quick-info-item">
                <DollarSign size={18} />
                <div>
                  <span className="label">Starting Price</span>
                  <span className="value">{service.pricing}</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary full-width">
                Enquire Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="service-benefits section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Benefits</span>
            <h2 className="section-title">Why Get This Licence?</h2>
          </motion.div>
          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  <CheckCircle size={24} />
                </div>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-eligibility section">
        <div className="container">
          <div className="eligibility-grid">
            <motion.div
              className="eligibility-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Eligibility</span>
              <h2>Who Can Apply?</h2>
              <ul className="eligibility-list">
                {service.eligibility.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="documents-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Documents</span>
              <h2>Required Documents</h2>
              <ul className="documents-list">
                {service.documents.map((doc, index) => (
                  <li key={index}>
                    <FileText size={18} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="service-process section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Process</span>
            <h2 className="section-title">How It Works</h2>
          </motion.div>
          <div className="process-steps">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="process-step-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{String(step.step).padStart(2, '0')}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for expert guidance on {service.title}</p>
            <Link to="/contact" className="btn btn-primary">
              Enquire Now <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;