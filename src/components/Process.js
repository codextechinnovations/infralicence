import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Search, CheckCircle } from 'lucide-react';
import { content } from '../data/content';
import './Process.css';

const Process = () => {
  const processIcons = [FileText, Send, Search, CheckCircle];

  return (
    <section className="process section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Step-by-Step Guidance</h2>
          <p className="section-subtitle">
            Step-by-step guidance to secure PWD licenses and manage infrastructure projects efficiently.
          </p>
        </motion.div>

        <div className="process-steps">
          {content.process.map((step, index) => (
            <motion.div
              key={step.step}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="step-number">{String(step.step).padStart(2, '0')}</div>
              <div className="step-icon">
                {React.createElement(processIcons[index], { size: 32 })}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {step.details && (
                <ul className="step-details">
                  {step.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;