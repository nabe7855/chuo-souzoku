import Image from "next/image";
import React from "react";

interface MobileCTAProps {
  onConsultClick: () => void;
  onContractClick: () => void;
}

const MobileCTA: React.FC<MobileCTAProps> = ({
  onConsultClick,
  onContractClick,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-3 z-40">
      <div className="container mx-auto flex justify-center gap-3">
        {/* 無料相談ボタン（画像版） */}
        <button
          onClick={onConsultClick}
          className="transition-transform hover:scale-105 focus:outline-none w-1/2 flex justify-center"
        >
          <Image
            src="/無料相談.png" // public直下に配置
            alt="無料相談を申し込む"
            width={300}
            height={100}
            priority
            unoptimized
            className="w-full h-auto"
          />
        </button>

        {/* 契約ボタン（画像版） */}
        <button
          onClick={onContractClick}
          className="transition-transform hover:scale-105 focus:outline-none w-1/2 flex justify-center"
        >
          <Image
            src="/契約ボタン.png" // public直下に配置
            alt="今すぐ契約する"
            width={300}
            height={100}
            priority
            unoptimized
            className="w-full h-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default MobileCTA;
