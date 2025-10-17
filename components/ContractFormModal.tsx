"use client"

import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { PLANS } from '../constants';
import type { Plan } from '../types';

interface ContractFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan: Plan;
}

const ContractFormModal: React.FC<ContractFormModalProps> = ({ isOpen, onClose, initialPlan }) => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(initialPlan);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'bank',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contract Submitted:", { plan: selectedPlan.name, ...formData });
    setIsSubmitted(true);
  };

  const renderStepContent = () => {
    if (isSubmitted) {
      return (
        <div className="text-center p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-navy mb-2">ご契約ありがとうございます</h3>
          <p className="text-gray-600 mb-6">
            契約内容の控えをご入力いただいたメールアドレスへ送信しました。<br/>
            担当者より3営業日以内にご連絡いたします。
          </p>
          <Button onClick={onClose}>閉じる</Button>
        </div>
      );
    }

    switch (step) {
      case 1: // Plan Confirmation
        return (
          <div>
            <h3 className="text-2xl font-bold text-navy mb-4">プランの確認</h3>
            <div className="space-y-2">
              {PLANS.map(plan => (
                <label
                  key={plan.name}
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition ${selectedPlan.name === plan.name ? 'border-gold bg-gold/10' : 'border-gray-300'}`}
                >
                  <input
                    type="radio"
                    name="plan"
                    className="hidden"
                    value={plan.name}
                    checked={selectedPlan.name === plan.name}
                    onChange={() => setSelectedPlan(plan)}
                  />
                  <div className="font-bold text-lg text-navy">{plan.name}</div>
                  <div className="text-gray-600">{plan.description}</div>
                  <div className="font-bold text-gold-dark mt-1">{plan.price.toLocaleString()}円 (税込)</div>
                </label>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Button onClick={() => setStep(2)}>
                契約者情報の入力へ <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        );
      case 2: // User Info
        return (
          <form onSubmit={() => setStep(3)}>
            <h3 className="text-2xl font-bold text-navy mb-4">契約者情報の入力</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Button onClick={() => setStep(1)} variant="outline">戻る</Button>
              <Button type="submit">最終確認へ <ArrowRight size={20} /></Button>
            </div>
          </form>
        );
      case 3: // Confirmation and Submission
        return (
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-navy mb-4">最終確認</h3>
            <div className="space-y-3 bg-light-gray p-4 rounded-lg">
                <p><strong>プラン:</strong> {selectedPlan.name} ({selectedPlan.price.toLocaleString()}円)</p>
                <p><strong>お名前:</strong> {formData.name}</p>
                <p><strong>メール:</strong> {formData.email}</p>
                <p><strong>電話番号:</strong> {formData.phone}</p>
            </div>
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 flex items-start">
              <AlertTriangle className="w-8 h-8 mr-3 mt-1" />
              <div>
                <h4 className="font-bold">契約の成立について</h4>
                <p className="text-sm">
                  「申し込み」ボタンを押すことで、中央相続事務所との契約が成立します。
                  契約内容の控えは入力いただいたメールアドレスへ自動送信されます。
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Button onClick={() => setStep(2)} variant="outline">戻る</Button>
              <Button type="submit" variant="primary">申し込み (契約成立)</Button>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <AnimatePresence>
        <motion.div
          className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <div className="p-6 relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <X size={24} />
            </button>
            {renderStepContent()}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContractFormModal;
