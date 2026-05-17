import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Shield, Clock, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: Clock },
    { value: '25,000+', label: 'Clients Served', icon: Users },
    { value: '₹1,766 Cr', label: 'Processed Value', icon: TrendingUp },
    { value: '98%', label: 'Success Rate', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To simplify government licensing processes and empower businesses to access infrastructure opportunities with ease and confidence.'
    },
    {
      icon: Shield,
      title: 'Vision',
      description: 'To become the most trusted consultancy partner for PWD licensing and infrastructure compliance across India.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of professionalism and deliver results that exceed client expectations.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Every client is important to us. We provide personalized solutions tailored to specific business requirements.'
    }
  ];

  const team = [
    { name: 'Expert Consultants', role: 'PWD Licensing Specialists', count: '15+' },
    { name: 'Documentation Experts', role: 'Compliance Professionals', count: '10+' },
    { name: 'Support Team', role: 'Dedicated Account Managers', count: '24/7' }
  ];

  const achievements = [
    'Successfully processed 25,000+ PWD licenses',
    '98% first-time approval rate',
    'Pan-India service coverage',
    'Average processing time 40% faster than industry',
    '100+ government department tie-ups'
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">About InfraLicense</span>
            <h1>Your Trusted Partner for PWD Licensing & Infrastructure Solutions</h1>
            <p>
              We are a dedicated consultancy helping businesses and contractors navigate PWD licensing
              and infrastructure compliance with expertise, efficiency, and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-stats section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon size={32} />
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Story</span>
              <h2>Building Trust Since 2015</h2>
              <p>
                InfraLicense Consultants & Solutions was founded with a vision to simplify the complex
                world of PWD licensing and government approvals. Over the years, we have grown to become
                a leading name in infrastructure licensing consultancy.
              </p>
              <p>
                Our team of experienced professionals brings together decades of expertise in government
                documentation, PWD regulations, and infrastructure compliance. We understand that each
                client has unique requirements, and we tailor our services accordingly.
              </p>
              <p>
                What sets us apart is our commitment to transparency, efficiency, and customer satisfaction.
                We don't just process applications; we build lasting relationships with our clients.
              </p>
            </motion.div>
            <motion.div
              className="achievements-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Our Achievements</h2>
              <ul className="achievements-list">
                {achievements.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </motion.div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Expert Professionals at Your Service</h2>
            <p className="section-subtitle">
              Our team comprises dedicated professionals with extensive experience in government
              documentation and PWD licensing procedures.
            </p>
          </motion.div>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="team-count">{member.count}</span>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-why section">
        <div className="container">
          <div className="why-grid">
            <motion.div
              className="why-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Why Choose Us</span>
              <h2>Experience the InfraLicence Difference</h2>
              <div className="why-features">
                <div className="why-feature">
                  <CheckCircle size={20} />
                  <div>
                    <h4>End-to-End Support</h4>
                    <p>From document preparation to licence approval, we handle everything</p>
                  </div>
                </div>
                <div className="why-feature">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Transparent Pricing</h4>
                    <p>No hidden fees. What you see is what you pay</p>
                  </div>
                </div>
                <div className="why-feature">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Expert Guidance</h4>
                    <p>Industry veterans guiding you through every step</p>
                  </div>
                </div>
                <div className="why-feature">
                  <CheckCircle size={20} />
                  <div>
                    <h4>Quick Processing</h4>
                    <p>Faster approvals with our streamlined processes</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="why-cta"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Ready to Get Started?</h3>
              <p>Contact us today for a free consultation</p>
              <a href="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;