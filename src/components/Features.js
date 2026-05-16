import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Shield, Clock, FileText, Users } from 'lucide-react';
import { content } from '../data/content';
import './Features.css';

const Features = () => {
  const featureIcons = [CheckCircle, Award, Shield, Clock, FileText, Users];

  return (
    <section id="about" className="features section">
      <div className="container">
        <div className="features-grid">
          <motion.div
            className="features-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>We Are Your Trusted Infra & Licensing Partner</h2>
            <p className="features-intro">
              We are a dedicated consultancy helping businesses and contractors navigate
              PWD licensing and infrastructure compliance with expertise, efficiency, and integrity.
            </p>

            <div className="features-list">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="feature-icon-wrapper">
                    {React.createElement(featureIcons[index], { size: 20 })}
                  </div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="features-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="features-image-wrapper">
              <div className="features-image">
                <div className="features-stats-overlay">
                  <div className="overlay-stat">
                    <span className="overlay-stat-value">25,000+</span>
                    <span className="overlay-stat-label">Trusted Clients</span>
                  </div>
                </div>
              </div>
              <div className="experience-badge">
                <span className="exp-years">10+</span>
                <span className="exp-label">Years of Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;