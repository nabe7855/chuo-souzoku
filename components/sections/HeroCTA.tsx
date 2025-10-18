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
    <section className="w-full bg-gradient-to-b from-blue-900 to-navy py-10 sm:py-14 md:py-20 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6"
      >
        {/* 無料相談 */}
        <Button
          onClick={onConsultClick}
          variant="primary"
          size="lg"
          className="bg-gold text-navy font-semibold hover:bg-yellow-400 transition-all duration-300 w-72 md:w-auto"
        >
          <Phone size={24} /> 無料相談を申し込む
        </Button>

        {/* 契約ボタン */}
        <Button
          onClick={onContractClick}
          variant="secondary"
          size="lg"
          className="bg-navy text-white border border-white font-semibold hover:bg-blue-800 transition-all duration-300 w-72 md:w-auto"
        >
          <Edit size={24} /> 今すぐ契約する
        </Button>

        {/* 資料ダウンロード */}
        <Button
          onClick={() => alert("資料ダウンロードの準備中です")}
          variant="outline"
          size="md"
          className="bg-white/20 text-white border-white font-semibold hover:bg-white/30 transition-all duration-300 w-72 md:w-auto"
        >
          <FileDown size={24} /> 資料をダウンロード
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroCTA;
