import { motion } from "framer-motion";
import { Edit, FileDown, Phone } from "lucide-react";
import React from "react";
import Button from "../ui/Button";

interface HeroCTAProps {
  onContractClick: () => void;
  onConsultClick: () => void;
}

const HeroCTA: React.FC<HeroCTAProps> = ({
  onContractClick,
  onConsultClick,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-navy text-white py-16 sm:py-20 md:py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
      >
        <Button
          onClick={onConsultClick}
          variant="primary"
          size="lg"
          className="bg-gold text-navy font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          <Phone size={24} /> 無料相談を申し込む
        </Button>

        <Button
          onClick={onContractClick}
          variant="secondary"
          size="lg"
          className="bg-navy text-white border border-white font-semibold hover:bg-blue-800 transition-all duration-300"
        >
          <Edit size={24} /> 今すぐ契約する
        </Button>

        <Button
          onClick={() => alert("資料ダウンロードの準備中です")}
          variant="outline"
          size="md"
          className="bg-white/20 text-white border-white font-semibold hover:bg-white/30 transition-all duration-300"
        >
          <FileDown size={24} /> 資料をダウンロード
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroCTA;
