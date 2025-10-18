import { BarChart2, PieChart } from "lucide-react";
import React from "react";
import Card from "../ui/Card";

const BackgroundSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        {/* ✅ タイトル部分：改行を禁止 */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy whitespace-nowrap">
            相続は、すべてのご家庭の問題です。
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="text-center">
            <PieChart className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy mb-2">
              1000万円未満でも3割が争う
            </h3>
            <p className="text-gray-600">
              遺産額の大小にかかわらず、相続トラブルは発生します。「うちは財産がないから大丈夫」という思い込みが、かえって準備を遅らせる原因になっています。
            </p>
          </Card>

          <Card className="text-center">
            <BarChart2 className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy mb-2">
              登記義務化の認知率は46.6%
            </h3>
            <p className="text-gray-600">
              不動産の相続登記が義務化されましたが、まだ半数以上の方がその事実を知りません。放置すると過料の対象となる可能性があり、早期の対策が求められます。
            </p>
          </Card>
        </div>

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
