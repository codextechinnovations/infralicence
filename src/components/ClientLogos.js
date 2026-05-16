import React from 'react';
import { motion } from 'framer-motion';
import './ClientLogos.css';

const ClientLogos = () => {
  const logos = Array(8).fill(null);

  return (
    <section className="client-logos">
      <div className="container">
        <motion.div
          className="logos-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="logos-title">Trusted by 25,000+ world-class brands and organizations of all sizes</p>
        </motion.div>

        <div className="logos-track">
          <div className="logos-slide">
            {logos.map((_, index) => (
              <div key={index} className="logo-item">
                <div className="logo-placeholder">
                  <span>Logo {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="logos-slide">
            {logos.map((_, index) => (
              <div key={index + 8} className="logo-item">
                <div className="logo-placeholder">
                  <span>Logo {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;