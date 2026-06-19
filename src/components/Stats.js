import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Stats.css';

const Stats = () => {
  const [counters, setCounters] = useState(content.stats.map(() => 0));
  const rafIdRef = useRef(null);
  const countersRef = useRef(counters);

  useEffect(() => {
    countersRef.current = counters;
  }, [counters]);

  useEffect(() => {
    const targets = content.stats.map((stat) =>
      parseInt(stat.value.replace(/[^0-9]/g, '')) || 0
    );
    const duration = 2000;
    const startTimeRef = { current: null };

    const animate = (timestamp) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      let changed = false;

      const nextCounters = targets.map((target, index) => {
        const nextValue = Math.round(target * progress);
        if (nextValue !== countersRef.current[index]) {
          changed = true;
        }
        return nextValue;
      });

      if (changed) {
        setCounters(nextCounters);
      }

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);

    const cleanupId = rafIdRef.current;
    return () => {
      if (cleanupId) cancelAnimationFrame(cleanupId);
    };
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
              {counters[index]}
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
