import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className="not-found-page">
      <Helmet>
        <title>404 - Page Not Found | InfraLicence</title>
        <meta name="description" content="The page you are looking for does not exist. Return to InfraLicence home page." />
        <meta property="og:title" content="404 - Page Not Found | InfraLicence" />
        <meta property="og:description" content="The page you are looking for does not exist." />
        <meta property="og:url" content="https://infralicence.in/404" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://infralicence.in/logo512.png" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="container">
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="not-found-code">404</span>
          <h1>Page Not Found</h1>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={18} /> Go Home
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <ArrowLeft size={18} /> Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
