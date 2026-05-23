import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Award, Clock } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot"></span>
             Trusted Licensing Consultants
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

          <motion.p
            className="hero-subtitle-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            From KPWD & CPWD contractor registration to electrical licensing, MSME, GST, and DSC services -
            we handle all your government documentation needs under one roof with guaranteed processing support.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="/contact" className="btn btn-primary">
              Get Free Consultation
              <ArrowRight size={18} />
            </a>
            <a href="/services" className="btn btn-secondary">
              Explore Services
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
              <span>98% Success Rate</span>
            </div>
            <div className="feature-item">
              <Shield size={20} />
              <span>Transparent Pricing</span>
            </div>
            <div className="feature-item">
              <Clock size={20} />
              <span>10+ Years Experience</span>
            </div>
            <div className="feature-item">
              <Award size={20} />
               <span>100+ Clients</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-floating-card floating-6">
            <div className="floating-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Eligibility Check</span>
          </div>

          <div className="hero-floating-card floating-7">
            <div className="floating-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span>Compliance Assistance</span>
          </div>

          <div className="hero-floating-card floating-8">
            <div className="floating-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span>Fast-Track Approval</span>
          </div>

          <div className="hero-floating-card floating-9">
            <div className="floating-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span>Application Drafting</span>
          </div>

          <div className="hero-floating-card floating-10">
            <div className="floating-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <span>Online Application</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;