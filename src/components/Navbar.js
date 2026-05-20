import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { content } from '../data/content';
import { servicesDetail } from '../data/servicesData';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services', hasDropdown: true },
    { label: 'Contact', url: '/contact' }
  ];

  const serviceSubItems = servicesDetail.filter(s => !s.id.includes('kpwd-class-')).slice(0, 6);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">InfraLicence</span>
             <span className="brand-tagline">Consultants & Solutions</span>
          </Link>

            <div className="navbar-top">
              <a href={`mailto:${content.company.email}`} className="navbar-contact">
                <Mail size={16} />
                <span>{content.company.email}</span>
              </a>
              {content.company.phone && (
                <a href={`tel:${content.company.phone}`} className="navbar-contact">
                  <Phone size={16} />
                  <span>{content.company.phone}</span>
                </a>
              )}
            </div>

          <div className="navbar-menu">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="nav-item"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={item.url} className="nav-link">
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </Link>
                {item.hasDropdown && activeDropdown === item.label && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {serviceSubItems.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="dropdown-item"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link to="/services" className="dropdown-item view-all">
                      View All Services
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu-header">
              <span className="brand-text">InfraLicence</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.url}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {serviceSubItems.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="mobile-nav-link sub-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="mobile-menu-contact">
              <a href={`mailto:${content.company.email}`} className="mobile-contact-item">
                <Mail size={18} />
                <span>{content.company.email}</span>
              </a>
              <a href={`tel:${content.company.phone}`} className="mobile-contact-item">
                <Phone size={18} />
                <span>{content.company.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;