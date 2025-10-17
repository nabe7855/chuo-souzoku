
import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Phone, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onConsultClick: () => void;
}


const CTASection: React.FC<CTASectionProps> = ({ onConsultClick }) => {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="container mx-auto px-6">
        <Card className="bg-white/90 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            まずは無料相談から
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            相続に関するお悩み、まずはお聞かせください。<br/>
            専門家が親身に対応し、最適な解決策をご提案します。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button onClick={onConsultClick} variant="primary" size="lg">
              <Phone size={28} /> 無料相談を予約する
            </Button>
            <Button onClick={() => alert('LINE公式アカウント準備中です')} variant="secondary" size="lg" className="bg-green-500 hover:bg-green-600 focus:ring-green-500">
              <MessageSquare size={28} /> LINEで気軽に相談
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
