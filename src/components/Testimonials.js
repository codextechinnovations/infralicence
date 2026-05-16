import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { content } from '../data/content';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % content.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? content.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Clients Feedback & Reviews</h2>
        </motion.div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-quote-icon">
                  <Quote size={32} />
                </div>
                <p className="testimonial-text">
                  {content.testimonials[currentIndex].text}
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {content.testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{content.testimonials[currentIndex].name}</h4>
                    <span>{content.testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {content.testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;