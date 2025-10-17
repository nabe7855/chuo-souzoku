
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { CheckCircle } from 'lucide-react';

const ReasonSection: React.FC = () => {
  const reasons = [
    {
      title: 'なぜ33万円でできるのか？',
      description: '各分野の専門家がチームを組むことで、業務を効率化。士業ごとに個別依頼するより、時間も費用も大幅に削減できるからです。',
    },
    {
      title: '完全非対面で完結',
      description: 'Zoom、LINE、お電話、郵送を活用し、ご契約から手続き完了までご来所不要です。全国どこにお住まいでもご依頼いただけます。',
    },
    {
      title: 'シンプルな料金体系',
      description: '「結局いくらかかるか分からない」という不安を解消。実費を除き、追加報酬は一切いただかない明朗会計をお約束します。',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="あんしん相続パックが選ばれる理由" subtitle="Why Choose Us" />
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6">
              <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-left leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonSection;
