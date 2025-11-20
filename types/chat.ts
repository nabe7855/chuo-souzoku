import React from 'react';

export interface AssetValues {
  deposits: number;
  realEstate: number;
  securities: number;
  lifeInsurance: number;
  other: number;
}

export interface LiabilityValues {
  debts: number;
  funeral: number;
}

export interface SimulationResult {
  taxableAssets: number; // 課税遺産総額 (10000 yen unit)
  basicDeduction: number; // 基礎控除額 (10000 yen unit)
  totalTax: number; // 相続税総額 (10000 yen unit)
  isTaxable: boolean;
  netAssets: number; // 正味遺産額 (10000 yen unit) after deductions
  heirCount: number;
  totalAssets: number; // Raw total assets
  totalLiabilities: number; // Raw total liabilities
  taxableInsurance: number; // Insurance amount after exemption
}

export interface WorryItem {
  id: string;
  label: string;
  rank: number;
}

export interface AdviceContent {
  title: string;
  message: React.ReactNode;
  ctaText: string;
}

export interface ChatStep {
  id: 'intro' | 'assets' | 'liabilities' | 'spouse' | 'children' | 'worry' | 'calculating' | 'result';
  question: string;
  inputType: 'button' | 'form' | 'number' | 'worry-selection' | 'none';
}

export interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: React.ReactNode;
  timestamp: Date;
  isTyping?: boolean;
}

export type InputType = 'start' | 'number' | 'boolean' | 'assets-form' | 'liabilities-form' | 'worry-selection' | 'reset';