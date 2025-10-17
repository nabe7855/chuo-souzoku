
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    { feature: '相談窓口の一本化', bank: '△', taxFirm: '△', chuo: '⭕️' },
    { feature: '不動産登記', bank: '❌', taxFirm: '❌', chuo: '⭕️' },
    { feature: '相続税申告', bank: '△', taxFirm: '⭕️', chuo: '⭕️' },
    { feature: '料金の明確さ', bank: '△', taxFirm: '△', chuo: '⭕️' },
    { feature: '全国・非対面対応', bank: '❌', taxFirm: '△', chuo: '⭕️' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="他社との比較" subtitle="Comparison" />
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-center">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="p-4 font-bold text-left">項目</th>
                  <th className="p-4 font-bold">銀行・信託銀行</th>
                  <th className="p-4 font-bold">税理士法人</th>
                  <th className="p-4 font-bold border-2 border-gold bg-gold-dark">中央相続事務所</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 text-left">{row.feature}</td>
                    <td className="p-4 text-2xl font-bold text-gray-500">{row.bank}</td>
                    <td className="p-4 text-2xl font-bold text-gray-500">{row.taxFirm}</td>
                    <td className="p-4 text-3xl font-bold text-gold-dark bg-gold/10">{row.chuo}</td>
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
