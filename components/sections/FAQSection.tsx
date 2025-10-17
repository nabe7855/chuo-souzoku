
import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FAQS } from '../../constants';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem: React.FC<{ item: { question: string, answer: string }, index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-semibold text-navy">{item.question}</span>
        <ChevronDown
          className={`w-6 h-6 text-navy transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="よくあるご質問" subtitle="FAQ" />
        <div className="max-w-4xl mx-auto">
          {FAQS.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
