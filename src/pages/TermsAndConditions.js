import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './TermsAndConditions.css';

const sections = [
  {
    title: 'Our Role',
    points: [
      'InfraLicence is a private consultancy and documentation support service.',
      'We help clients understand requirements, prepare documents, submit applications, and coordinate follow-up where applicable.',
      'We do not issue licences, registrations, approvals, sanctions, or government certificates.'
    ]
  },
  {
    title: 'No Government Affiliation',
    points: [
      'InfraLicence is not a government department, government agency, statutory authority, or public office.',
      'We are not affiliated with KPWD, CPWD, the Electrical Inspectorate, GST authorities, MSME authorities, or any other government body unless expressly stated in writing.',
      'Any references to government departments on this website are only to describe the services for which we provide consultancy support.'
    ]
  },
  {
    title: 'Approval Disclaimer',
    points: [
      'All approvals, licences, renewals, registrations, rejections, objections, and timelines are solely decided by the concerned government authority.',
      'Submission through us does not mean approval is guaranteed.',
      'Approval depends on government rules, eligibility, document correctness, technical scrutiny, policy changes, and authority-level decisions.'
    ]
  },
  {
    title: 'Client Responsibility',
    points: [
      'Clients must provide accurate, complete, and authentic documents and information.',
      'Clients are responsible for reviewing drafts, declarations, applications, and submitted details before final submission.',
      'InfraLicence is not responsible for delays or rejection caused by incorrect, incomplete, forged, expired, or misleading information provided by the client.'
    ]
  },
  {
    title: 'Fees And Payments',
    points: [
      'Consultancy charges cover our support services only unless otherwise agreed in writing.',
      'Government fees, challans, statutory payments, taxes, inspection fees, penalties, and third-party charges are separate unless specifically included.',
      'Paid consultancy fees are generally non-refundable once work has started, except where we explicitly confirm otherwise.'
    ]
  },
  {
    title: 'Timelines',
    points: [
      'Any time estimate shown on the website or shared by our team is an indicative estimate only.',
      'Actual timelines may vary based on department workload, inspections, objections, portal issues, holidays, and policy changes.',
      'We are not liable for delays caused by government authorities or third-party dependencies.'
    ]
  },
  {
    title: 'Limitation Of Liability',
    points: [
      'InfraLicence will not be liable for any indirect, incidental, consequential, regulatory, or business losses arising from rejection, delay, or cancellation by a government authority.',
      'Our maximum liability, if any, is limited to the consultancy fee actually paid to us for the specific service in question.'
    ]
  },
  {
    title: 'Updates',
    points: [
      'Requirements, fees, and procedures may change without notice based on government rules and circulars.',
      'We may update these Terms & Conditions at any time by publishing the revised version on this website.'
    ]
  }
];

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      <Helmet>
        <title>Terms & Conditions | InfraLicence</title>
        <meta
          name="description"
          content="Read the Terms & Conditions for InfraLicence consultancy services, including our non-government status and approval disclaimer."
        />
      </Helmet>

      <section className="terms-hero">
        <div className="terms-hero-bg"></div>
        <div className="container">
          <motion.div
            className="terms-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Legal</span>
            <h1>Terms & Conditions</h1>
            <p>
              InfraLicence provides consultancy and documentation support services only. All government approvals are subject to the independent decision of the relevant authority.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="terms-content section">
        <div className="container">
          <motion.div
            className="terms-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              By using this website or engaging our services, you agree to the following terms. Please read them carefully before proceeding with any application, consultation, or payment.
            </p>
          </motion.div>

          <div className="terms-sections">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="terms-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h2>{section.title}</h2>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
