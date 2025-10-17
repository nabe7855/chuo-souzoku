
import React from 'react';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div
      className={`text-center mb-12 md:mb-16 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy mb-2">{title}</h2>
      <p className="text-gold-dark font-semibold text-lg md:text-xl">{subtitle}</p>
      <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;
