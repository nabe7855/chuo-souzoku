import React from "react";
import Image from "next/image";

const ReasonSection: React.FC = () => {
  return (
    <section className="w-full relative">
      <div className="w-full">
        <Image
          src="/選ばれる理由.png"
          alt="あんしん相続パックが選ばれる理由"
          width={2000}
          height={4000}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default ReasonSection;
