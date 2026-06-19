import React, { createElement } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Clock, DollarSign, FileText, ChevronRight, Globe, Building2, FileCheck, Zap, Briefcase, Receipt, Key, ShoppingCart, FileSignature } from 'lucide-react';
import { servicesDetail } from '../data/servicesData';
import './ServiceDetail.css';

const iconMap = {
  FileCheck,
  Building2,
  Zap,
  Briefcase,
  Receipt,
  Key,
  ShoppingCart,
  FileText,
  FileSignature,
  Globe
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
    <main className="service-detail-page">
      <Helmet>
        <title>{service.title} | InfraLicence</title>
        <meta name="description" content={service.hero.description} />
        <meta property="og:title" content={`${service.title} | InfraLicence`} />
        <meta property="og:description" content={service.hero.description} />
        <meta property="og:url" content={`https://infralicence.in/services/${service.id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://infralicence.in/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://infralicence.in/services/${service.id}`} />
        <meta name="twitter:title" content={`${service.title} | InfraLicence`} />
        <meta name="twitter:description" content={service.hero.description} />
        <meta name="twitter:image" content="https://infralicence.in/logo512.png" />
        <link rel="canonical" href={`https://infralicence.in/services/${service.id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.hero.description,
            "provider": {
              "@type": "Organization",
              "name": "InfraLicence",
              "url": "https://infralicence.in/"
            },
            "areaServed": {
              "@type": "State",
              "name": "Karnataka",
              "addressCountry": "IN"
            },
            "url": `https://infralicence.in/services/${service.id}`
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://infralicence.in/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://infralicence.in/services" },
              { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://infralicence.in/services/${service.id}` }
            ]
          })}
        </script>
      </Helmet>
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
            <span className="service-icon">{createElement(iconMap[service.icon], { size: 32 })}</span>
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

      {service.id === 'kpwd-licence' && (
        <section className="service-classes section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Available Classes</span>
              <h2 className="section-title">Choose Your Contractor Class</h2>
              <p className="section-subtitle">Select the class that matches your financial capacity and experience to see detailed requirements.</p>
            </motion.div>
            <div className="classes-grid">
              {[
                { id: 'kpwd-class-1', title: 'Class 1', desc: 'Mega projects, High Solvency' },
                { id: 'kpwd-class-2', title: 'Class 2', desc: 'Medium projects, Mid Solvency' },
                { id: 'kpwd-class-3', title: 'Class 3', desc: 'Small projects, Low Solvency' },
                { id: 'kpwd-class-4', title: 'Class 4', desc: 'Entry level, Minimal Solvency' },
              ].map((cls, index) => (
                <motion.div 
                  key={cls.id}
                  className="class-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{cls.title}</h3>
                  <p>{cls.desc}</p>
                  <Link to={`/services/${cls.id}`} className="btn btn-outline full-width">
                    View Details <ChevronRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {service.relatedService && (
        <section className="service-related section">
          <div className="container">
            <motion.div
              className="related-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="related-header">
                <Globe size={24} />
                <span className="section-label">Special Provision</span>
              </div>
              <h2>{service.relatedService.title}</h2>
              <p>{service.relatedService.description}</p>
              <ul className="related-points">
                {service.relatedService.points.map((point, index) => (
                  <li key={index}>
                    <CheckCircle size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link to={`/services/out-of-state`} className="btn btn-primary">
                Learn More <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

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
    </main>
  );
};

export default ServiceDetail;
