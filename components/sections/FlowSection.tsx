
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';
import { Phone, Edit, Send, FileCheck } from 'lucide-react';

interface FlowSectionProps {
  onContractClick: () => void;
}

const FlowStep: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="bg-gold text-white rounded-full p-4 mb-4">{icon}</div>
    <h3 className="font-bold text-lg text-navy mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

const FlowSection: React.FC<FlowSectionProps> = ({ onContractClick }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="ご契約までの流れ" subtitle="Process Flow" />
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-8 text-center">① 無料相談から</h3>
            <div className="relative flex flex-col items-center space-y-8">
              <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gray-300 -translate-x-1/2"></div>
              <FlowStep icon={<Phone size={24} />} title="STEP 1: お申し込み" description="お電話またはフォームからご予約ください。" delay={0} />
              <FlowStep icon={<Edit size={24} />} title="STEP 2: 無料相談" description="専門家が現状を伺い、最適なプランを提案します。" delay={0.2} />
              <FlowStep icon={<FileCheck size={24} />} title="STEP 3: ご契約" description="内容にご納得いただけたら契約手続きに進みます。" delay={0.4} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FlowSection;
