import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const ComparisonSection: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(false), 4000); // 4秒後に非表示
    return () => clearTimeout(timer);
  }, []);

  const comparisonData = [
    { feature: "相談窓口の一本化", bank: "△", taxFirm: "△", chuo: "⭕️" },
    { feature: "不動産登記", bank: "❌", taxFirm: "❌", chuo: "⭕️" },
    { feature: "相続税申告", bank: "△", taxFirm: "⭕️", chuo: "⭕️" },
    { feature: "料金の明確さ", bank: "△", taxFirm: "△", chuo: "⭕️" },
    { feature: "全国・非対面対応", bank: "❌", taxFirm: "△", chuo: "⭕️" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-6 relative">
        <SectionTitle title="他社との比較" subtitle="Comparison" />
        <Card className="relative overflow-hidden">
          {/* 👇 スクロール誘導UI（モバイル限定） */}
          {showArrow && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center md:hidden">
              <div className="flex items-center bg-gradient-to-r from-gold/90 to-yellow-500/90 text-white font-bold rounded-full px-4 py-2 shadow-md backdrop-blur-sm animate-fadeInOut">
                <div className="flex space-x-1 mr-1">
                  <ChevronRight className="w-5 h-5 animate-bounce-x delay-0" />
                  <ChevronRight className="w-5 h-5 animate-bounce-x delay-150" />
                  <ChevronRight className="w-5 h-5 animate-bounce-x delay-300" />
                </div>
                <span className="text-sm tracking-wide">横にスワイプ</span>
              </div>
            </div>
          )}

          {/* 🖱️ スクロールヒント（中央表示） */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center md:hidden">
            <div className="bg-black/10 px-5 py-3 rounded-md shadow-md text-center font-semibold">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <img
                  src="/finger-cursor-icon.png"
                  alt="スクロールアイコン"
                  className="w-7 h-7"
                />
                <ChevronRight className="w-5 h-5 text-navy animate-bounce-x" />
              </div>
              <p className="text-base font-bold text-black">
                スクロールできます
              </p>
            </div>
          </div>

          {/* 横スクロール可能な表 */}
          <div className="overflow-x-auto mt-8 scrollbar-thin scrollbar-thumb-gray-300">
            <table className="min-w-[900px] w-full border-separate border-spacing-0 text-center align-middle">
              <thead className="bg-navy text-white">
                <tr>
                  {/* ✅ 固定列：完全中央揃え */}
                  <th className="py-4 px-0 font-bold text-center align-middle sticky left-0 bg-navy z-20">
                    項目
                  </th>
                  <th className="p-4 font-bold text-center align-middle">
                    銀行・信託銀行
                  </th>
                  <th className="p-4 font-bold text-center align-middle">
                    税理士法人
                  </th>
                  <th className="p-4 font-bold text-center align-middle border-2 border-gold bg-gold-dark">
                    中央相続事務所
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    {/* ✅ 固定列：完全中央揃え */}
                    <td className="py-4 px-0 text-center align-middle sticky left-0 bg-white z-10 border-r border-gray-200">
                      {row.feature}
                    </td>
                    <td className="p-4 text-2xl font-bold text-gray-500 text-center align-middle">
                      {row.bank}
                    </td>
                    <td className="p-4 text-2xl font-bold text-gray-500 text-center align-middle">
                      {row.taxFirm}
                    </td>
                    <td className="p-4 text-3xl font-bold text-gold-dark bg-gold/10 text-center align-middle">
                      {row.chuo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <p className="text-center mt-8 text-xl text-navy font-bold">
          他社では別料金や対応不可な手続きも、当事務所はワンプライスで対応します。
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;
