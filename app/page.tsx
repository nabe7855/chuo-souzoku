"use client";

import React, { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import BackgroundSection from "@/components/sections/BackgroundSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ReasonSection from "@/components/sections/ReasonSection";
import TeamSection from "@/components/sections/TeamSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PriceSection from "@/components/sections/PriceSection";
import SimulatorSection from "@/components/sections/SimulatorSection";
import FlowSection from "@/components/sections/FlowSection";
import ReviewSection from "@/components/sections/ReviewSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContractFormModal from "@/components/ContractFormModal";
import { PLANS } from "@/constants";
import type { Plan } from "@/types";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]);

  // ✅ モーダル開閉関数
  const openModalWithPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  // ✅ CTAセクションへのスクロール
  const scrollToConsultation = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ✅ 必須 props を渡す */}
      <HeroSection
        onContractClick={() => openModalWithPlan(PLANS[1])}
        onConsultClick={scrollToConsultation}
      />

      <BackgroundSection />
      <div id="problems"><ProblemSection /></div>
      <div id="services"><ServiceSection /></div>
      <div id="reason"><ReasonSection /></div>
      <div id="team"><TeamSection /></div>
      <div id="comparison"><ComparisonSection /></div>
      <div id="price"><PriceSection onContractClick={openModalWithPlan} /></div>
      <div id="simulator"><SimulatorSection /></div>
      <div id="flow"><FlowSection onContractClick={() => openModalWithPlan(PLANS[1])} /></div>
      <div id="reviews"><ReviewSection /></div>
      <div id="faq"><FAQSection /></div>
      <div id="cta-section"><CTASection onConsultClick={scrollToConsultation} /></div>

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
