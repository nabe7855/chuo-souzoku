import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
        className="flex flex-col md:flex-row justify-center items-center gap-6"
      >
        {/* 無料相談ボタン（画像版） */}
        <button
          onClick={onConsultClick}
          className="transition-transform hover:scale-105 focus:outline-none"
        >
          <Image
            src="/無料相談.png" // ← publicフォルダ直下に配置
            alt="無料相談を申し込む"
            width={300}
            height={100}
            priority
            unoptimized
          />
        </button>

        {/* 契約ボタン（画像版） */}
        <button
          onClick={onContractClick}
          className="transition-transform hover:scale-105 focus:outline-none"
        >
          <Image
            src="/契約ボタン.png" // ← publicフォルダ直下に配置
            alt="今すぐ契約する"
            width={300}
            height={100}
            priority
            unoptimized
          />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroCTA;
