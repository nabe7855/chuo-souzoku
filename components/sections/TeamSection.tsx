
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { TEAM_MEMBERS } from '../../constants';
import { Award, Users } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionTitle title="専門家チームと実績" subtitle="Our Team & Performance" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 text-center lg:text-left">各分野のプロフェッショナルが連携</h3>
            <div className="grid grid-cols-2 gap-6">
              {TEAM_MEMBERS.map((member, index) => (
                <Card key={index} className="text-center">
                  <div className="w-16 h-16 bg-navy text-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <member.icon size={32} />
                  </div>
                  <h4 className="font-bold text-navy">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.title}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center bg-navy text-white">
              <Award className="w-12 h-12 text-gold mx-auto mb-3" />
              <p className="text-4xl font-bold">93.4<span className="text-2xl">%</span></p>
              <p className="font-semibold">顧客満足度</p>
            </Card>
            <Card className="text-center bg-navy text-white">
              <Users className="w-12 h-12 text-gold mx-auto mb-3" />
              <p className="text-4xl font-bold">312<span className="text-2xl">件</span></p>
              <p className="font-semibold">年間相談実績</p>
            </Card>
            <p className="sm:col-span-2 text-sm text-gray-500 text-center mt-2">*自社調査（2023年度実績）</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
