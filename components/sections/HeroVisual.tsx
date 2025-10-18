import React from "react";

const HeroVisual: React.FC = () => {
  return (
    <div className="w-screen overflow-hidden bg-navy flex justify-center">
      <img
        src="/ハローセクション.png"
        alt="相続支援ヒーローセクション"
        className="
          w-full h-auto 
          object-contain 
          max-w-none
        "
      />
    </div>
  );
};

export default HeroVisual;
