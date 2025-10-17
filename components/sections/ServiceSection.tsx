
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { SERVICES } from '../../constants';

const ServiceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionTitle title="サービス内容" subtitle="Our Services" />
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="p-4 font-bold">項目</th>
                  <th className="p-4 font-bold text-center">ライト</th>
                  <th className="p-4 font-bold text-center bg-gold/20">スタンダード</th>
                  <th className="p-4 font-bold text-center">プレミアム</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    <tr>
                      <td colSpan={4} className="p-4 bg-navy/10 font-bold text-navy text-lg">{category.category}</td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="border-b border-gray-200 last:border-b-0">
                        <td className="p-4">{item.name}</td>
                        <td className="p-4 text-center font-bold text-lg">{item.light}</td>
                        <td className="p-4 text-center font-bold text-lg bg-gold/10 text-gold-dark">{item.standard}</td>
                        <td className="p-4 text-center font-bold text-lg">{item.premium}</td>
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
