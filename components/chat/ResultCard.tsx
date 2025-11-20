"use client";

import { SimulationResult } from "@/types/chat";
import { generateAdvice } from "@/utils/adviceGenerator";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  RefreshCw,
} from "lucide-react";
import React from "react";

interface ResultCardProps {
  result: SimulationResult;
  worryId: string;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  worryId,
  onReset,
}) => {
  const advice = generateAdvice(result, worryId);

  return (
    <div className="w-full space-y-4">
      <div className="bg-white rounded-xl overflow-hidden border border-[var(--color-navy-light)] shadow-lg">
        {/* Header */}
        <div
          className={`p-4 text-white text-center ${
            result.isTaxable
              ? "bg-[var(--color-navy-dark)]"
              : "bg-[var(--color-emerald)]"
          }`}
        >
          <h3 className="font-bold text-lg">シミュレーション結果</h3>
        </div>

        <div className="p-6">
          {/* Main Result */}
          <div className="text-center mb-8">
            <p className="text-[var(--color-gray-dark)] text-sm mb-1">
              相続税の概算額
            </p>

            {result.isTaxable ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <span className="text-4xl md:text-5xl font-bold text-[var(--color-navy)]">
                  {result.totalTax.toLocaleString()}
                </span>
                <span className="text-xl ml-2 font-bold text-[var(--color-gray-dark)]">
                  万円
                </span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center text-[var(--color-emerald)]"
              >
                <CheckCircle2 size={48} className="mb-2" />
                <span className="text-2xl font-bold">相続税はかかりません</span>
                <p className="text-sm text-[var(--color-gray-dark)] mt-1">
                  基礎控除の範囲内です
                </p>
              </motion.div>
            )}
          </div>

          {/* Details Grid */}
          <div className="bg-[var(--color-navy-light)] rounded-lg p-4 space-y-3 text-sm mb-6">
            {/* Asset Breakdown */}
            <div className="pb-3 border-b border-[var(--color-navy-light)]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[var(--color-gray-dark)]">資産総額</span>
                <span className="font-bold text-[var(--color-navy)]">
                  {result.totalAssets.toLocaleString()} 万円
                </span>
              </div>

              <div className="flex justify-between items-center mb-1 text-xs text-[var(--color-gray-dark)]">
                <span className="pl-2">うち生命保険(非課税考慮後)</span>
                <span>{result.taxableInsurance.toLocaleString()} 万円</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[var(--color-gray-dark)]">
                  負債・葬儀費用
                </span>
                <span className="font-bold text-red-500">
                  -{result.totalLiabilities.toLocaleString()} 万円
                </span>
              </div>
            </div>

            {/* Net Calculation */}
            <div className="flex justify-between items-center pb-2 border-b border-[var(--color-navy-light)]">
              <span className="text-[var(--color-navy)] font-bold">
                正味遺産額
              </span>
              <span className="font-bold text-[var(--color-navy)]">
                {result.netAssets.toLocaleString()} 万円
              </span>
            </div>

            {/* Deduction */}
            <div className="flex justify-between items-center pb-2 border-b border-[var(--color-navy-light)]">
              <span className="text-[var(--color-gray-dark)]">基礎控除額</span>
              <span className="font-bold text-[var(--color-navy)]">
                <span className="text-xs font-normal text-[var(--color-gray-dark)] mr-2">
                  (3000 + 600 × {result.heirCount}人)
                </span>
                -{result.basicDeduction.toLocaleString()} 万円
              </span>
            </div>

            {/* Taxable */}
            <div className="flex justify-between items-center pt-1">
              <span className="text-[var(--color-gray-dark)] font-medium">
                課税対象額
              </span>
              <span
                className={`font-bold ${
                  result.taxableAssets > 0
                    ? "text-red-600"
                    : "text-[var(--color-gray-dark)]"
                }`}
              >
                {result.taxableAssets.toLocaleString()} 万円
              </span>
            </div>
          </div>

          {/* Advice Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-br from-[var(--color-gold-light)] to-white border-2 border-[var(--color-gold-dark)]/30 rounded-xl p-5 shadow-sm"
          >
            <div className="mb-3">
              <span className="inline-block bg-[var(--color-gold-dark)] text-white text-xs px-3 py-1 rounded-full font-bold mb-2">
                AIアドバイス
              </span>
              <h4 className="text-[var(--color-navy)] font-bold text-lg leading-snug">
                {advice.title}
              </h4>
            </div>

            <div className="text-sm text-[var(--color-gray-dark)] leading-relaxed mb-4 break-words">
              {advice.message}
            </div>

            <button
              className="w-full bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold-light)] hover:opacity-90 text-white font-bold py-3 rounded-lg shadow-md transform transition hover:-translate-y-0.5 flex items-center justify-center gap-2"
              onClick={() =>
                alert("無料相談の予約フォームへ遷移します（デモ）")
              }
            >
              <MessageCircle size={18} />
              {advice.ctaText}
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Disclaimer */}
          <div className="mt-6 flex items-start gap-2 text-[10px] text-[var(--color-gray-dark)] bg-[var(--color-gray-light)] p-3 rounded">
            <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
            <p>
              この計算は概算です。小規模宅地等の特例や配偶者税額軽減などは詳細条件によるため、
              正確な納税額は税理士へご相談ください。
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full py-3 text-[var(--color-navy)] hover:bg-[var(--color-navy-light)]/30 transition flex items-center justify-center gap-2 text-sm font-medium"
      >
        <RefreshCw size={16} />
        もう一度計算する
      </button>
    </div>
  );
};
