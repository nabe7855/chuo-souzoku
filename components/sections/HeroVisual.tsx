import React from "react";

const HeroVisual: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/ヒーローセクション.png')",
          backgroundPosition: "top center",
        }}
      ></div>
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-navy/"></div>
    </section>
  );
};

export default HeroVisual;
