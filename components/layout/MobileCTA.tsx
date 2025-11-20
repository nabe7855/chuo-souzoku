import Image from "next/image";
import React from "react";

interface MobileCTAProps {
  onSpeedCheckClick: () => void;
  onContractClick: () => void;
  onConsultClick: () => void;
}

const MobileCTA: React.FC<MobileCTAProps> = ({
  onSpeedCheckClick,
  onContractClick,
  onConsultClick,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white z-40">
      <div className="w-full flex flex-col">
        {/* ◆ 1段目（バウンス） */}
        <button
          onClick={onSpeedCheckClick}
          className="w-full active:animate-ctaBounce"
        >
          <Image
            src="/フッターナビゲーション1.png"
            alt="30秒スピード相続診断する"
            width={800}
            height={200}
            priority
            unoptimized
            className="w-full h-auto"
          />
        </button>

        {/* ◆ 2段目（左右2カラム・バウンス） */}
        <div className="flex w-full">
          <button
            onClick={onContractClick}
            className="w-1/2 active:animate-ctaBounce"
          >
            <Image
              src="/フッターナビゲーション2.png"
              alt="お申込みはこちら"
              width={400}
              height={200}
              priority
              unoptimized
              className="w-full h-auto"
            />
          </button>

          <button
            onClick={onConsultClick}
            className="w-1/2 active:animate-ctaBounce"
          >
            <Image
              src="/フッターナビゲーション3.png"
              alt="無料相談はこちら"
              width={400}
              height={200}
              priority
              unoptimized
              className="w-full h-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA;
