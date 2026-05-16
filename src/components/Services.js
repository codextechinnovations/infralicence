import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileCheck, Building2, Zap, Briefcase, Receipt, Key, ShoppingCart, Globe, ArrowRight
} from 'lucide-react';
import { content } from '../data/content';
import './Services.css';

const iconMap = {
  FileCheck, Building2, Zap, Briefcase, Receipt, Key, ShoppingCart, Globe
};

const Services = () => {
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

        <div className="services-grid">
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FileCheck;
            return (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <IconComponent size={28} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={`/services/${service.id}`} className="service-link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/contact" className="btn btn-primary">
            View All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;