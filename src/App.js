import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const TenderServices = lazy(() => import('./pages/TenderServices'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));
 
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>InfraLicence | Consultants & Solutions - PWD Licensing Experts</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a PWD Contractor License?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A PWD Contractor License certifies that a contractor is eligible to undertake government and civil infrastructure projects."
                }
              },
              {
                "@type": "Question",
                "name": "How many classes of PWD Contractor Licenses are there?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are typically three classes: Class 1 for large projects, Class 2 for medium projects, and Class 3 for small projects."
                }
              },
              {
                "@type": "Question",
                "name": "Who can apply for a PWD Contractor License?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Individuals, firms, or companies with technical and financial capability can apply for a PWD Contractor License."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to get a PWD license?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The duration varies based on documentation and approvals, usually ranging from a few weeks to a couple of months."
                }
              },
              {
                "@type": "Question",
                "name": "Can out-of-state contractors apply for a license in Karnataka?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, special provisions allow out-of-state contractors to apply with simplified procedures and additional support."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for a PWD Contractor License?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common documents include proof of identity, financial statements, technical credentials, and prior work experience."
                }
              }
            ]
          })}
        </script>
        <meta name="description" content="Expert PWD licensing, contractor registration, and infrastructure compliance services in Karnataka, India. We simplify the process for Class 1, 2, 3, and 4 contractors." />
        <meta property="og:title" content="InfraLicence | Consultants & Solutions - PWD Licensing Experts" />
        <meta property="og:description" content="Expert PWD licensing, contractor registration, and infrastructure compliance services in Karnataka, India. We simplify the process for Class 1, 2, 3, and 4 contractors." />
        <meta property="og:url" content="https://infralicence.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://infralicence.in/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://infralicence.in/" />
        <meta name="twitter:title" content="InfraLicence | Consultants & Solutions - PWD Licensing Experts" />
        <meta name="twitter:description" content="Expert PWD licensing, contractor registration, and infrastructure compliance services in Karnataka, India." />
        <meta name="twitter:image" content="https://infralicence.in/logo512.png" />
        <link rel="canonical" href="https://infralicence.in/" />
      </Helmet>
      <main>
        <Hero />
        <Stats />
        <Services />
        <Features />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
      </main>
    </motion.div>
  );
};
 
function App() {
  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://infralicence.in/#organization",
                "name": "InfraLicence",
                "url": "https://infralicence.in/",
                "logo": "https://infralicence.in/logo512.png",
                "image": "https://infralicence.in/logo512.png",
                "description": "Expert PWD licensing, contractor registration, and infrastructure compliance services in Karnataka, India.",
                "email": "info@infralicence.in",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Karnataka",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://infralicence.in/#website",
                "url": "https://infralicence.in/",
                "name": "InfraLicence | Consultants & Solutions",
                "description": "Expert PWD licensing, contractor registration, and infrastructure compliance services in Karnataka, India.",
                "publisher": { "@id": "https://infralicence.in/#organization" }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://infralicence.in/#localbusiness",
                "name": "InfraLicence Consultants & Solutions",
                "url": "https://infralicence.in/",
                "logo": "https://infralicence.in/logo512.png",
                "image": "https://infralicence.in/logo512.png",
                "description": "Expert PWD licensing, contractor registration, and infrastructure compliance services in Karnataka, India.",
                "email": "info@infralicence.in",
                "areaServed": {
                  "@type": "State",
                  "name": "Karnataka",
                  "addressCountry": "IN"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Karnataka",
                  "addressCountry": "IN"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                "parentOrganization": { "@id": "https://infralicence.in/#organization" }
              }
            ]
          })}
        </script>
      </Helmet>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />
      <div id="main-content">
        <Suspense fallback={<div className="page-loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/services" element={<Home />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/tender-services" element={<TenderServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}
 
export default App;
