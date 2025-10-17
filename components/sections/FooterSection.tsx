
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">中央相続事務所</h3>
            <p className="text-gray-400">家族の未来を守る、あんしんの相続支援。</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><MapPin size={16} className="mr-2" /> 〒100-0001 東京都千代田区千代田1-1</li>
              <li className="flex items-center"><Phone size={16} className="mr-2" /> 050-1234-5678 (受付時間 9:00-18:00)</li>
              <li className="flex items-center"><Mail size={16} className="mr-2" /> contact@chuo-sozoku.test</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">情報</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gold transition">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-gold transition">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 中央相続事務所. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
