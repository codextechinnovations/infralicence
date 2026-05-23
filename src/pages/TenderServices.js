import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, FileText, Search, FileCheck, Users, ClipboardList, BarChart3, MessageSquare, ChevronRight } from 'lucide-react';
import './TenderServices.css';

const iconMap = {
  'tender-information': Search,
  'tender-bidding-solution': FileText,
  'gem-complete-registration': FileCheck,
  'online-vendor-registration': Users,
  'tender-awarded-results': BarChart3,
  'pre-post-bid-followup': ClipboardList,
};

const tenderServices = [
  {
    id: 'tender-information',
    title: 'Tender Information',
    description: 'Get detailed information on upcoming and active tenders across various government departments and sectors.',
    points: [
      'Access to active and upcoming tenders from multiple departments',
      'Detailed tender analysis and eligibility assessment',
      'Deadline tracking and notification alerts',
      'Document checklist for each tender',
      'Bid value and estimated cost analysis'
    ]
  },
  {
    id: 'tender-bidding-solution',
    title: 'Tender Bidding Solution',
    description: 'Complete bidding support including document preparation, submission, and bid management for competitive tenders.',
    points: [
      'End-to-end bid preparation and submission',
      'Document compilation and verification',
      'Bid pricing strategy assistance',
      'Technical and financial bid preparation',
      'Online submission support on GeM and e-procurement portals'
    ]
  },
  {
    id: 'gem-complete-registration',
    title: 'GeM Complete Registration',
    description: 'Complete registration assistance on Government e-Marketplace (GeM) portal for selling to government buyers.',
    points: [
      'GeM seller registration and profile creation',
      'Product catalog listing and categorization',
      'Document upload and verification support',
      'GeM compliance and audit preparation',
      'Bid submission and order management guidance'
    ]
  },
  {
    id: 'online-vendor-registration',
    title: 'Online Vendor Registration',
    description: 'Hassle-free online vendor registration on various government portals for tender participation.',
    points: [
      'Registration on e-procurement portals across India',
      'Vendor profile creation and KYC documentation',
      'Digital signature certificate (DSC) integration',
      'Portal navigation and bid submission training',
      'Multi-portal account management support'
    ]
  },
  {
    id: 'tender-awarded-results',
    title: 'Tender Awarded Results',
    description: 'Track and access tender awarded results to stay informed about market trends and competitor activities.',
    points: [
      'Access to tender awarded results across departments',
      'Analysis of awarded bid values and vendors',
      'Market trend and competitor activity reports',
      'Historical tender data for strategic planning',
      'Custom alerts for relevant awarded tenders'
    ]
  },
  {
    id: 'pre-post-bid-followup',
    title: 'Pre / Post-Bid Follow-up',
    description: 'Dedicated follow-up support before and after bid submission to ensure smooth processing and query resolution.',
    points: [
      'Pre-bid meeting representation and query resolution',
      'Follow-up with tendering authorities on bid status',
      'Post-bid documentation and clarification support',
      'Bid evaluation monitoring and updates',
      'Grievance redressal assistance if needed'
    ]
  }
];

const TenderServices = () => {
  return (
    <main className="tender-services-page">
      <Helmet>
        <title>Tender Bidding Services | InfraLicence</title>
        <meta name="description" content="End-to-end tender bidding support including GeM registration, vendor enrolment, bid submission, and post-bid follow-up for government and private tenders." />
        <meta property="og:title" content="Tender Bidding Services | InfraLicence" />
        <meta property="og:description" content="End-to-end tender bidding support including GeM registration, vendor enrolment, bid submission, and post-bid follow-up for government and private tenders." />
        <meta property="og:url" content="https://infralicence.in/tender-services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://infralicence.in/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://infralicence.in/tender-services" />
        <meta name="twitter:title" content="Tender Bidding Services | InfraLicence" />
        <meta name="twitter:description" content="End-to-end tender bidding support including GeM registration, vendor enrolment, bid submission, and post-bid follow-up." />
        <meta name="twitter:image" content="https://infralicence.in/logo512.png" />
        <link rel="canonical" href="https://infralicence.in/tender-services" />
      </Helmet>

      <section className="tender-hero">
        <div className="tender-hero-bg"></div>
        <div className="container">
          <motion.div
            className="tender-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="back-link">
              <ArrowLeft size={18} /> Back to Home
            </Link>
            <span className="tender-hero-icon">
              <FileText size={40} />
            </span>
            <h1>Tender Bidding Services</h1>
            <p className="tender-hero-subtitle">
              End-to-end tender bidding support including GeM registration, vendor enrolment, bid submission, and post-bid follow-up for government and private tenders.
            </p>
            <p className="tender-hero-desc">
              Our comprehensive tender services help contractors and businesses navigate the complex government tendering process with ease. From finding the right opportunities to submitting winning bids and following up, we provide expert guidance at every step.
            </p>
            <div className="tender-hero-stats">
              <div className="tender-stat">
                <span className="tender-stat-value">6+</span>
                <span className="tender-stat-label">Specialized Services</span>
              </div>
              <div className="tender-stat">
                <span className="tender-stat-value">All</span>
                <span className="tender-stat-label">Government Portals</span>
              </div>
              <div className="tender-stat">
                <span className="tender-stat-value">End-to-End</span>
                <span className="tender-stat-label">Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="tender-list section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Tender Services</span>
            <h2 className="section-title">Choose Your Tender Service</h2>
            <p className="section-subtitle">
              Select the service that matches your requirements and let our experts handle the rest.
            </p>
          </motion.div>
          <div className="tender-grid">
            {tenderServices.map((service, index) => {
              const Icon = iconMap[service.id] || FileText;
              return (
                <motion.div
                  key={service.id}
                  className="tender-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="tender-card-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="tender-card-title">{service.title}</h3>
                  <p className="tender-card-desc">{service.description}</p>
                  <ul className="tender-card-points">
                    {service.points.slice(0, 4).map((point, i) => (
                      <li key={i}>
                        <ChevronRight size={14} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/contact?service=${service.id}`} className="btn btn-primary tender-card-btn">
                    Enquire Now <ChevronRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tender-cta section">
        <div className="container">
          <motion.div
            className="tender-cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="tender-cta-icon">
              <MessageSquare size={36} />
            </span>
            <h2>Need Help Choosing?</h2>
            <p>Contact us and we'll help you identify the right tender service for your business needs.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Talk to Our Experts <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TenderServices;
