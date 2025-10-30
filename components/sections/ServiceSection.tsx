import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SERVICES } from "../../constants";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const ServiceSection: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-light-gray relative">
      <div className="container mx-auto px-6 relative">
        <SectionTitle title="サービス内容" subtitle="Our Services" />

        <Card className="relative overflow-hidden">
          {/* 👇 スクロール誘導UI（モバイル限定） */}
          {showArrow && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center md:hidden pointer-events-none">
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

          {/* 🖱️ スクロールヒント（モバイル・半透明＆干渉防止） */}
          <div className="absolute top-1/2 left-2/3 -translate-x-1/2 z-30 flex items-center justify-center md:hidden pointer-events-none">
            <div
              className="
      bg-white/30 px-5 py-3 rounded-md shadow-md text-center font-semibold 
      border border-gray-300 pointer-events-none
    "
            >
              <div className="flex items-center justify-center space-x-2 mb-1">
                <img
                  src="/finger-cursor-icon.png"
                  alt="スクロールアイコン"
                  className="w-7 h-7 opacity-90"
                />
                <ChevronRight className="w-5 h-5 text-navy animate-bounce-x opacity-90" />
              </div>
              {/* 👇 ここだけフォントサイズを13pxに変更 */}
              <p className="text-[13px] font-bold text-black drop-shadow-sm opacity-95 leading-tight">
                スクロール
                <br />
                できます
              </p>
            </div>
          </div>

          {/* ✅ 横スクロール可能な表 */}
          <div className="overflow-x-auto mt-8 scrollbar-thin scrollbar-thumb-gray-300">
            <table className="table-fixed w-full min-w-[700px] border-separate border-spacing-0 text-center bg-white">
              <thead className="bg-navy text-white">
                <tr>
                  {/* ✅ 固定列を200pxで固定 */}
                  <th
                    className="
                      p-3 font-bold text-left sticky left-0 
                      bg-navy z-30 shadow-md
                      w-[180px] min-w-[180px] max-w-[180px]
                    "
                  >
                    項目
                  </th>
                  <th className="p-3 font-bold text-center">ライト</th>
                  <th className="p-3 font-bold text-center bg-gold/20">
                    スタンダード
                  </th>
                  <th className="p-3 font-bold text-center">プレミアム</th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {SERVICES.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    {/* ✅ カテゴリ行 */}
                    <tr className="sticky top-[52px] z-20">
                      <td
                        className="
                          p-3 bg-gray-100 font-bold text-navy text-lg 
                          border-b border-r border-gray-300 sticky left-0 z-30 text-left
                          text-[16px]
                          w-[200px] min-w-[200px] max-w-[200px]
                        "
                      >
                        {category.category}
                      </td>
                      <td
                        colSpan={3}
                        className="p-3 bg-gray-100 font-bold text-navy text-lg border-b border-gray-300 text-center"
                      />
                    </tr>

                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={itemIndex}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        {/* ✅ 固定列セル（200px固定＋<br />対応） */}
                        <td
                          className="
                            p-3 sticky left-0 bg-white z-10 border-r border-gray-200 
                            text-left font-bold text-gray-900 truncate
                            text-[13px]
                            w-[200px] min-w-[200px] max-w-[200px]
                            leading-snug
                          "
                          dangerouslySetInnerHTML={{ __html: item.name }} // ← ここでHTMLタグを反映
                        ></td>

                        <td className="p-3 font-bold text-lg text-gray-800 text-center">
                          {item.light}
                        </td>
                        <td className="p-3 font-bold text-lg bg-gold/10 text-gold-dark text-center">
                          {item.standard}
                        </td>
                        <td className="p-3 font-bold text-lg text-gray-800 text-center">
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
