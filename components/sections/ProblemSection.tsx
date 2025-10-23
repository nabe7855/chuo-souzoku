import { motion } from "framer-motion";
import { HelpCircle, Users } from "lucide-react";
import React from "react";
import SectionTitle from "../ui/SectionTitle";

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="こんなお悩み、ありませんか？"
          subtitle="Your Problems"
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <motion.div
              className="p-6 border-2 border-gray-200 rounded-lg"
              whileHover={{ scale: 1.05, borderColor: "#d4af37" }}
            >
              <HelpCircle className="w-12 h-12 text-navy mx-auto mb-4" />
              <p className="text-xl font-semibold">
                何から始めたらいいか
                <br />
                分からない…
              </p>
            </motion.div>
            <motion.div
              className="p-6 border-2 border-gray-200 rounded-lg"
              whileHover={{ scale: 1.05, borderColor: "#d4af37" }}
            >
              <Users className="w-12 h-12 text-navy mx-auto mb-4" />
              <p className="text-xl font-semibold">
                税理士、司法書士…
                <br />
                誰に相談すればいいの？
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center my-8"></div>
          <div className="bg-navy text-white p-8 rounded-lg shadow-2xl text-center">
            <h3 className="font-serif text-3xl font-bold text-gold mb-4">
              ご安心ください！
            </h3>
            <p className="text-xl md:text-2xl font-semibold">
              当事務所なら、窓口ひとつで完結。
              <br />
              専門家チームが連携し、すべての手続きを一本化します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
