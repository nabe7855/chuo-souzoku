"use client";

import { AssetValues, LiabilityValues } from "@/types/chat";
import { WORRY_LIST } from "@/utils/adviceGenerator";
import {
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Gem,
  Home,
  Landmark,
  PiggyBank,
  ScrollText,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";

// --- 共通 InputField コンポーネント ---
const InputField: React.FC<{
  label: string;
  icon: React.ReactNode;
  value: number;
  onChange: (val: number) => void;
}> = ({ label, icon, value, onChange }) => (
  <div className="flex items-center gap-3 p-2">
    {/* アイコン背景 */}
    <div className="w-10 h-10 rounded-lg bg-[var(--color-light-gray)] text-[var(--color-navy)] flex items-center justify-center flex-shrink-0">
      {icon}
    </div>

    {/* ラベル + 入力 */}
    <div className="flex-1 flex items-center justify-between gap-4">
      <span className="font-bold text-[var(--color-navy)] text-sm md:text-base">
        {label}
      </span>

      <div className="relative w-32 md:w-40">
        <input
          type="number"
          min="0"
          value={value === 0 ? "" : value}
          placeholder="0"
          onChange={(e) => {
            const v = parseInt(e.target.value);
            onChange(isNaN(v) ? 0 : v);
          }}
          className="w-full text-right border border-gray-300 rounded-lg py-2 pl-2 pr-10 
                     focus:ring-[var(--color-navy)] focus:border-[var(--color-navy)] outline-none 
                     font-mono text-lg transition"
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
          万円
        </span>
      </div>
    </div>
  </div>
);

//
// ==========================
//   資産入力フォーム
// ==========================
//
interface AssetInputFormProps {
  onSubmit: (values: AssetValues) => void;
}

export const AssetInputForm: React.FC<AssetInputFormProps> = ({ onSubmit }) => {
  const [values, setValues] = useState<AssetValues>({
    deposits: 0,
    realEstate: 0,
    securities: 0,
    lifeInsurance: 0,
    other: 0,
  });

  const handleChange = (key: keyof AssetValues, val: number) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* タイトル */}
      <h3 className="text-[var(--color-navy)] font-bold text-lg mb-3 px-2 border-b-2 border-gray-200 pb-2">
        資産の入力
      </h3>

      <div className="space-y-1 max-h-[40vh] overflow-y-auto pr-2 scrollbar-hide">
        <InputField
          label="預貯金"
          icon={<PiggyBank size={20} />}
          value={values.deposits}
          onChange={(v) => handleChange("deposits", v)}
        />
        <InputField
          label="不動産"
          icon={<Home size={20} />}
          value={values.realEstate}
          onChange={(v) => handleChange("realEstate", v)}
        />
        <InputField
          label="有価証券"
          icon={<TrendingUp size={20} />}
          value={values.securities}
          onChange={(v) => handleChange("securities", v)}
        />
        <InputField
          label="生命保険"
          icon={<ShieldCheck size={20} />}
          value={values.lifeInsurance}
          onChange={(v) => handleChange("lifeInsurance", v)}
        />
        <InputField
          label="その他財産"
          icon={<Gem size={20} />}
          value={values.other}
          onChange={(v) => handleChange("other", v)}
        />
      </div>

      {/* ボタン */}
      <button
        onClick={() => onSubmit(values)}
        className="mt-4 w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] 
                   text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
      >
        次へ進む <ChevronRight size={18} />
      </button>
    </div>
  );
};

//
// ==========================
//   負債入力フォーム
// ==========================
//
interface LiabilityInputFormProps {
  onSubmit: (values: LiabilityValues) => void;
}

export const LiabilityInputForm: React.FC<LiabilityInputFormProps> = ({
  onSubmit,
}) => {
  const [values, setValues] = useState<LiabilityValues>({
    debts: 0,
    funeral: 0,
  });

  const handleChange = (key: keyof LiabilityValues, val: number) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-[var(--color-navy)] font-bold text-lg mb-3 px-2 border-b-2 border-gray-200 pb-2">
        負債の入力
      </h3>

      <div className="space-y-1">
        <InputField
          label="借入金"
          icon={<Landmark size={20} />}
          value={values.debts}
          onChange={(v) => handleChange("debts", v)}
        />
        <InputField
          label="葬儀費用"
          icon={<ScrollText size={20} />}
          value={values.funeral}
          onChange={(v) => handleChange("funeral", v)}
        />
      </div>

      <button
        onClick={() => onSubmit(values)}
        className="mt-4 w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)]
                   text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
      >
        決定する <ChevronRight size={18} />
      </button>
    </div>
  );
};

//
// ==========================
//   悩み選択フォーム
// ==========================
//
interface WorryInputFormProps {
  onSubmit: (worryId: string) => void;
}

export const WorryInputForm: React.FC<WorryInputFormProps> = ({ onSubmit }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-[var(--color-navy)] font-bold text-lg mb-3 px-2 border-b-2 border-gray-200 pb-2 flex items-center gap-2">
        <AlertCircle size={20} className="text-[var(--color-gold)]" />
        気になることはありますか？
      </h3>

      <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-1 scrollbar-hide">
        {WORRY_LIST.map((item) => {
          const active = selectedId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`w-full text-left p-3 rounded-xl border transition-all relative ${
                active
                  ? "bg-[var(--color-light-gray)] border-[var(--color-navy)] shadow-md"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-3 pr-6">
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                    active
                      ? "bg-[var(--color-navy)] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {item.rank}
                </div>

                <span
                  className={`text-sm md:text-base font-medium ${
                    active ? "text-[var(--color-navy)]" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </div>

              {active && (
                <CheckCircle
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-navy)]"
                  size={20}
                />
              )}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => selectedId && onSubmit(selectedId)}
        disabled={!selectedId}
        className="mt-4 w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] 
                   disabled:bg-gray-300 text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
      >
        診断結果を見る <ChevronRight size={18} />
      </button>
    </div>
  );
};
