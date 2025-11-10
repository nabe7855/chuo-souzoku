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
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* カード① 相続紛争の実態 */}
          <Card className="flex flex-col justify-between text-center h-full">
            <div className="flex justify-center mb-4">
              <Image
                src="/相続トラブル.png"
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
              <p className="text-gray-600 text-sm sm:text-base">
                家庭裁判所に持ち込まれた遺産分割事件のうち、
                <strong>
                  遺産額5,000万円未満が約75%、1,000万円未満が約33%
                </strong>
                を占めています。 「財産が少ないから大丈夫」ではなく、
                少ないからこそ分け方でもめるのが現実です。
              </p>
            </div>
          </Card>

          {/* カード② 登記義務化の認知度 */}
          <Card className="flex flex-col justify-between text-center h-full">
            <div className="flex justify-center mb-4">
              <Image
                src="/登記義務化.png"
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
              <p className="text-gray-600 text-sm sm:text-base">
                2024年4月から不動産の相続登記が義務化されましたが、
                <strong>まだ半数以上の方がその事実を知りません。</strong>
                放置すると過料の対象となる可能性があり、
                法的リスクが増加しています。
              </p>
            </div>
          </Card>

          {/* カード③ 空き家問題との関係 */}
          <Card className="flex flex-col justify-between text-center h-full">
            <div className="flex justify-center mb-4">
              <Image
                src="/空き家問題.png"
                alt="空き家と相続の関係"
                width={450}
                height={300}
                className="object-contain w-full h-auto max-h-[320px]"
                priority
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                空き家の54.6%が相続による取得
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                相続した不動産を放置すると、
                <strong>固定資産税や管理リスク</strong>が増大します。
                結果的に空き家問題を悪化させ、
                社会的・経済的損失にもつながります。
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
