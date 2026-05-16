import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Stats.css';

const Stats = () => {
  const [counters, setCounters] = useState(content.stats.map(() => 0));

  useEffect(() => {
    const timers = content.stats.map((stat, index) => {
      const target = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timers[index]);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
      }, duration / steps);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <section className="stats">
      <div className="stats-container">
        {content.stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="stat-value">
              {stat.value.includes('₹') ? '₹' : ''}
              {Math.round(counters[index])}
              {stat.suffix}
              {stat.value.includes('Cr') ? ' Cr' : ''}
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;