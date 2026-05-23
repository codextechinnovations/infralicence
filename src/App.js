import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import TenderServices from './pages/TenderServices';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
 
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>InfraLicence | Consultants & Solutions - PWD Licensing Experts</title>
        <meta name="description" content="Expert PWD licensing, contractor registration, and infrastructure compliance services in Karnataka, India. We simplify the process for Class 1, 2, 3, and 4 contractors." />
      </Helmet>
      <main>
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Process />
        <CTA />
      </main>
    </motion.div>
  );
};
 
function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/services" element={<Home />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/tender-services" element={<TenderServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}
 
export default App;
