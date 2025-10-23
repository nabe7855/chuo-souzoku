"use client";

import { useState } from "react";

// ✅ セクション群
import BackgroundSection from "@/components/sections/BackgroundSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import FlowSection from "@/components/sections/FlowSection";
import HeroSection from "@/components/sections/HeroSection";
import PriceSection from "@/components/sections/PriceSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ReasonSection from "@/components/sections/ReasonSection";
import ReviewSection from "@/components/sections/ReviewSection";
import ServiceSection from "@/components/sections/ServiceSection";
import SimulatorSection from "@/components/sections/SimulatorSection";
import TeamSection from "@/components/sections/TeamSection";

// ✅ 共通コンポーネント
import ContractFormModal from "@/components/ContractFormModal";

// ✅ 定数
import { PLANS } from "@/constants";
import type { Plan } from "@/types";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]);

  // ✅ 契約モーダルを開く
  const openModalWithPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  // ✅ CTAセクションまでスムーズスクロール
  const scrollToConsultation = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ✅ ヒーローセクション */}
      <HeroSection
        onContractClick={() => openModalWithPlan(PLANS[1])}
        onConsultClick={scrollToConsultation}
      />

      {/* ✅ 以下、順にセクションを展開 */}
      <BackgroundSection />
      <div id="problems">
        <ProblemSection />
      </div>
      <div id="services">
        <ServiceSection />
      </div>
      <div id="reason">
        <ReasonSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="comparison">
        <ComparisonSection />
      </div>
      <div id="price">
        <PriceSection onContractClick={openModalWithPlan} />
      </div>
      <div id="simulator">
        <SimulatorSection />
      </div>
      <div id="flow">
        <FlowSection onContractClick={() => openModalWithPlan(PLANS[1])} />
      </div>
      <div id="reviews">
        <ReviewSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>

      {/* ✅ CTAセクション（ページ下部） */}
      <div id="cta-section">
        <CTASection onConsultClick={scrollToConsultation} />
      </div>

      {/* ✅ 契約モーダル */}
      {isModalOpen && (
        <ContractFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialPlan={selectedPlan}
        />
      )}
    </>
  );
}
