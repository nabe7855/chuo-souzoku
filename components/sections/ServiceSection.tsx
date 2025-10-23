import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SERVICES } from "../../constants";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const ServiceSection: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(false), 4000); // 4秒後に非表示
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-light-gray relative">
      <div className="container mx-auto px-6 relative">
        <SectionTitle title="サービス内容" subtitle="Our Services" />

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

          {/* 🖱️ スクロールヒント（矢印＋指アイコン） */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center md:hidden">
  <div className="bg-white/80 px-5 py-3 rounded-md shadow-md text-center font-semibold">
    {/* 上段：指アイコン＋矢印 */}
    <div className="flex items-center justify-center space-x-2 mb-1">
      <img
        src="/finger-cursor-icon.png" // public配下に配置した指アイコン
        alt="スクロールアイコン"
        className="w-7 h-7"
      />
      <ChevronRight className="w-5 h-5 text-navy animate-bounce-x" />
    </div>

    {/* 下段：テキスト */}
    <p className="text-base font-bold text-black">スクロールできます</p>
  </div>
</div>


          <div className="overflow-x-auto mt-8">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="p-4 font-bold">項目</th>
                  <th className="p-4 font-bold text-center">ライト</th>
                  <th className="p-4 font-bold text-center bg-gold/20">
                    スタンダード
                  </th>
                  <th className="p-4 font-bold text-center">プレミアム</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    <tr>
                      <td
                        colSpan={4}
                        className="p-4 bg-navy/10 font-bold text-navy text-lg"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={itemIndex}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <td className="p-4">{item.name}</td>
                        <td className="p-4 text-center font-bold text-lg">
                          {item.light}
                        </td>
                        <td className="p-4 text-center font-bold text-lg bg-gold/10 text-gold-dark">
                          {item.standard}
                        </td>
                        <td className="p-4 text-center font-bold text-lg">
                          {item.premium}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            ✅: 標準対応 / △: オプション対応 / ❌: 非対応
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ServiceSection;
