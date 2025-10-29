import React from "react";
import { PLANS } from "../../constants";
import type { Plan } from "../../types";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

interface PriceSectionProps {
  onContractClick: (plan: Plan) => void;
}

const PriceSection: React.FC<PriceSectionProps> = ({ onContractClick }) => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionTitle title="料金プラン" subtitle="Our Pricing" />
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${
                plan.isStandard ? "border-4 border-gold" : ""
              }`}
            >
              <div className="flex-grow">
                <h3 className="font-serif text-2xl font-bold text-navy text-center mb-2">
                  {plan.name}
                </h3>
                <p className="text-center text-gold-dark text-4xl font-bold mb-4">
                  {plan.price.toLocaleString()}
                  <span className="text-lg font-normal text-gray-600">
                    円 (税込)
                  </span>
                </p>
                <p className="text-center text-gray-600 mb-6 h-12">
                  {plan.description}
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-gold mr-2 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                onClick={() => onContractClick(plan)}
                className="w-full mt-8"
              >
                {plan.name}で契約する
              </Button>
            </Card>
          ))}
        </div>
        <p className="text-center mt-8 text-lg text-navy font-bold">
          原則として、スタンダードプラン（33万円）でほとんどの相続手続きが完結します。
        </p>
        <p className="text-center mt-8 text-lg text-navy font-bold">
          　　　　※個別のプランニングもご対応可能です。お気軽にご相談下さい。{" "}
        </p>
      </div>
    </section>
  );
};

export default PriceSection;
