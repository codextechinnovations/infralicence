import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            Trusted PWD Licensing Consultancy
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building the Future of
            <span className="highlight"> Infra and Licensing Solutions</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide expert consultancy and innovative solutions to streamline infrastructure
            development and licensing processes, helping businesses build smarter, faster, and stronger.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="/contact" className="btn btn-primary">
              Discover more
              <ArrowRight size={18} />
            </a>
            <a href="/services" className="btn btn-secondary">
              Our Services
            </a>
          </motion.div>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="feature-item">
              <CheckCircle size={20} />
              <span>End-to-End Support</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Transparent Pricing</span>
            </div>
            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Expert Guidance</span>
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

export default Hero;