import React from 'react';
import Button from '../ui/Button';
import { Phone, Edit } from 'lucide-react';

interface MobileCTAProps {
  onConsultClick: () => void;
  onContractClick: () => void;
}

const MobileCTA: React.FC<MobileCTAProps> = ({ onConsultClick, onContractClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-3 z-40">
      <div className="container mx-auto flex gap-3">
        <Button onClick={onConsultClick} variant="primary" size="md" className="w-1/2 !text-base">
          <Phone size={20} /> 無料相談
        </Button>
        <Button onClick={onContractClick} variant="secondary" size="md" className="w-1/2 !text-base">
          <Edit size={20} /> 今すぐ契約
        </Button>
      </div>
    </div>
  );
};

export default MobileCTA;
