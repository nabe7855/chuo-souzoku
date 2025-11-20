"use client";

import ChatOverlay from "@/components/chat/ChatOverlay";
import ContractFormModal from "@/components/ContractFormModal";
import MobileCTA from "@/components/layout/MobileCTA";
import { PLANS } from "@/constants";
import type { Plan } from "@/types";
import { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]);

  // ★ 相続チャットオーバーレイのON/OFF
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  // 契約モーダル
  const openModalWithPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  // 無料相談へスクロール
  const scrollToConsultation = () => {
    document
      .getElementById("cta-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ページ本体 */}
      {children}

      {/* ▼ Fixed CTA */}
      <MobileCTA
        onOpenChat={openChat} // ← ★ 正しいプロップ名に修正
        onConsultClick={scrollToConsultation}
        onContractClick={() => openModalWithPlan(PLANS[1])}
      />

      {/* ▼ チャット画面 */}
      <ChatOverlay isOpen={isChatOpen} onClose={closeChat} />

      {/* ▼ 契約モーダル */}
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
