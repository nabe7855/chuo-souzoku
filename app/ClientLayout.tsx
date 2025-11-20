"use client";

import ContractFormModal from "@/components/ContractFormModal";
import MobileCTA from "@/components/layout/MobileCTA";
import { PLANS } from "@/constants";
import type { Plan } from "@/types";
import React, { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]);

  // ✅ 契約モーダルを開く関数
  const openModalWithPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  // ✅ 無料相談セクションへスクロール
  const scrollToConsultation = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ⭐ 追加：相続税シミュレーターへスクロール
  const scrollToSimulator = () => {
    const simulator = document.getElementById("simulator");
    if (simulator) {
      simulator.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🧩 子要素（Header, main, Footer） */}
      {children}

      {/* ⭐ MobileCTA に props を渡す（ここが重要） */}
      <MobileCTA
        onSpeedCheckClick={scrollToSimulator} // ← 追加！
        onConsultClick={scrollToConsultation}
        onContractClick={() => openModalWithPlan(PLANS[1])}
      />

      {/* 契約モーダル */}
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
