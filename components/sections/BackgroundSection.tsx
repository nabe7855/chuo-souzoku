import Image from "next/image";
import React from "react";
import Card from "../ui/Card";

const BackgroundSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        {/* タイトル */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy whitespace-nowrap">
            相続は、すべてのご家庭の問題です。
          </h2>
        </div>

        {/* コンテンツ */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* 左側 */}
          <Card className="flex flex-col justify-between text-center h-full">
            <div className="flex justify-center mb-4">
              <Image
                src="/イメージ1.png"
                alt="相続トラブルの非課税世帯割合"
                width={450}
                height={300}
                className="object-contain w-full h-auto max-h-[320px]"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                相続トラブルの内、相続税非課税世帯が約80％
              </h3>
              <p className="text-gray-600">
                遺産額の大小にかかわらず、相続トラブルは発生します。
                「うちは財産がないから大丈夫」という思い込みが、
                かえって準備を遅らせる原因になっています。
              </p>
            </div>
          </Card>

          {/* 右側 */}
          <Card className="flex flex-col justify-between text-center h-full">
            <div className="flex justify-center mb-4">
              <Image
                src="/登録義務化の認知率.png"
                alt="登記義務化の認知率を示す図"
                width={450}
                height={300}
                className="object-contain w-full h-auto max-h-[320px]"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                登記義務化の認知率は46.6%
              </h3>
              <p className="text-gray-600">
                不動産の相続登記が義務化されましたが、
                まだ半数以上の方がその事実を知りません。
                放置すると過料の対象となる可能性があり、
                早期の対策が求められます。
              </p>
            </div>
          </Card>
        </div>

        {/* フッター */}
        <div className="text-center mt-12">
          <p className="font-serif text-2xl md:text-3xl text-navy font-bold">
            だからこそ、一般のご家庭にこそ“事前の準備”が必要です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
