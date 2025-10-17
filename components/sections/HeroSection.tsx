
import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { motion } from 'framer-motion';
import { Phone, FileDown, Edit } from 'lucide-react';

interface HeroSectionProps {
  onContractClick: () => void;
  onConsultClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContractClick, onConsultClick }) => {
  return (
    <section className="relative bg-navy text-white min-h-screen flex items-center justify-center py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{backgroundImage: "url('https://picsum.photos/1600/1200?grayscale&blur=2')"}}
      ></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge>顧客満足度93.4％</Badge>
            <Badge>14年連続トラブル0</Badge>
            <Badge>明確料金33万円</Badge>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4">
            生前から、もしもの後まで。<br className="hidden md:block" />家族を守るワンストップ相続支援
          </h1>
          <p className="text-xl md:text-3xl mb-10 text-gold font-semibold">
            相続の不安、まるごとお任せ33万円<span className="text-lg">(税込)</span>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button onClick={onConsultClick} variant="primary" size="lg">
              <Phone size={24} /> 無料相談を申し込む
            </Button>
            <Button onClick={onContractClick} variant="secondary" size="lg">
              <Edit size={24} /> 今すぐ契約する
            </Button>
            <Button onClick={() => alert('資料ダウンロードの準備中です')} variant="outline" className="bg-white/20 text-white border-white backdrop-blur-sm" size="md">
              <FileDown size={24} /> 資料をダウンロード
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
