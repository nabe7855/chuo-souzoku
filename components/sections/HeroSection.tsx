import { motion } from "framer-motion";
import { Edit, FileDown, Phone } from "lucide-react";
import React from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

interface HeroSectionProps {
  onContractClick: () => void;
  onConsultClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onContractClick,
  onConsultClick,
}) => {
  return (
    <section className="relative bg-navy text-white min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* 背景レイヤー */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://picsum.photos/1600/1200?grayscale&blur=3')",
        }}
      ></div>
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm"></div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* バッジ */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge>顧客満足度93.4％</Badge>
            <Badge>14年連続トラブル0</Badge>
            <Badge>明確料金33万円</Badge>
          </div>

          {/* タイトル */}
          <h1
            className="
              font-serif font-bold
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl
              leading-relaxed md:leading-snug
              mb-8 mx-auto max-w-[22ch]
            "
          >
            <span className="block mb-2">生前から、もしもの後まで。</span>
            <span className="block mb-2">家族を守る</span>
            <span className="block">ワンストップ相続支援</span>
          </h1>

          {/* サブコピー */}
          <p className="text-base sm:text-lg md:text-2xl mb-10 text-gold font-semibold">
            相続の不安、まるごとお任せ33万円
            <span className="text-sm">(税込)</span>
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button onClick={onConsultClick} variant="primary" size="lg">
              <Phone size={24} /> 無料相談を申し込む
            </Button>
            <Button onClick={onContractClick} variant="secondary" size="lg">
              <Edit size={24} /> 今すぐ契約する
            </Button>
            <Button
              onClick={() => alert("資料ダウンロードの準備中です")}
              variant="outline"
              className="bg-white/20 text-white border-white backdrop-blur-sm hover:bg-white/30"
              size="md"
            >
              <FileDown size={24} /> 資料をダウンロード
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
