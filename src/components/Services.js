import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileCheck, Building2, Zap, Briefcase, Receipt, Key, ShoppingCart, Globe, ArrowRight, Star, FileText, FileSignature
} from 'lucide-react';
import { content } from '../data/content';
import './Services.css';

const iconMap = {
  FileCheck, Building2, Zap, Briefcase, Receipt, Key, ShoppingCart, Globe, FileText, FileSignature
};

const Services = () => {
  const coreServices = content.services.filter(s => s.type === 'core');
  const supportiveServices = content.services.filter(s => s.type === 'supportive');

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Comprehensive Services to Support Your Projects</h2>
          <p className="section-subtitle">
            Comprehensive solutions for PWD licensing, documentation, and infrastructure
            project support to ensure smooth and compliant project execution.
          </p>
        </motion.div>

        <div className="services-section">
          <motion.div
            className="section-subheader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Star size={20} />
            <h3>Core Services</h3>
          </motion.div>
          <div className="core-services-horizontal">
            {coreServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || FileCheck;
              return (
                <motion.div
                  key={service.id}
                  className="service-card-horizontal core"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="horizontal-card-content">
                    <div className="horizontal-icon">
                      <IconComponent size={32} />
                    </div>
                    <div className="horizontal-text">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  <Link to={`/services/${service.id}`} className="service-link">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="services-section">
          <motion.div
            className="section-subheader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FileCheck size={20} />
            <h3>Documentation & Eligibility Support</h3>
          </motion.div>
          <div className="supportive-services-horizontal">
            {supportiveServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || FileCheck;
              return (
                <motion.div
                  key={service.id}
                  className="service-card-horizontal supportive"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="horizontal-card-content">
                    <div className="horizontal-icon supportive-icon">
                      <IconComponent size={32} />
                    </div>
                    <div className="horizontal-text">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  <Link to={`/services/${service.id}`} className="service-link">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="services-section">
          <motion.div
            className="section-subheader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ShoppingCart size={20} />
            <h3>GEM Services</h3>
          </motion.div>
          <div className="core-services-horizontal">
            <motion.div
              className="service-card-horizontal"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="horizontal-card-content">
                <div className="horizontal-icon">
                  <ShoppingCart size={32} />
                </div>
                <div className="horizontal-text">
                  <h3 className="service-title">GEM Services</h3>
                  <p className="service-description">
                    Government e-Marketplace (GeM) is the Government of India's online portal where government departments buy products and services from registered sellers.
                  </p>
                </div>
              </div>
              <Link to="/services/gem-services" className="service-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="services-section">
          <motion.div
            className="section-subheader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FileText size={20} />
            <h3>Tender Bidding Services</h3>
          </motion.div>
          <div className="core-services-horizontal">
            <motion.div
              className="service-card-horizontal tender"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="horizontal-card-content">
                <div className="horizontal-icon tender-icon">
                  <FileText size={32} />
                </div>
                <div className="horizontal-text">
                  <h3 className="service-title">Tender Bidding Services</h3>
                  <p className="service-description">
                    End-to-end tender bidding support including GeM registration, vendor enrolment, bid submission, and post-bid follow-up for government and private tenders.
                  </p>
                </div>
              </div>
              <Link to="/tender-services" className="service-link">
                View All Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;