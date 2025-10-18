import React from "react";
import HeroVisual from "./HeroVisual";
import HeroCTA from "./HeroCTA";

interface HeroSectionProps {
  onContractClick: () => void;
  onConsultClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onContractClick,
  onConsultClick,
}) => {
  return (
    <section className="w-full flex flex-col items-center overflow-hidden">
      {/* ✅ 画像セクション */}
      <HeroVisual />

      {/* ✅ CTAセクション */}
      <HeroCTA
        onContractClick={onContractClick}
        onConsultClick={onConsultClick}
      />
    </section>
  );
};

export default HeroSection;
