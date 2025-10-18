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
    <section className="relative w-full overflow-hidden flex flex-col">
      {/* ✅ HeroVisual: 背景画像部分（高さは自動） */}
      <HeroVisual />

      {/* ✅ HeroCTA: 常に下に続く */}
      <HeroCTA
        onContractClick={onContractClick}
        onConsultClick={onConsultClick}
      />
    </section>
  );
};

export default HeroSection;
