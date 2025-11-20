"use client";

import {
  AssetValues,
  InputType,
  LiabilityValues,
  Message,
  SimulationResult,
} from "@/types/chat";
import { WORRY_LIST } from "@/utils/adviceGenerator";
import { calculateInheritanceTax } from "@/utils/taxCalculator";
import { Calculator, Home, RefreshCw, Send } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import {
  AssetInputForm,
  LiabilityInputForm,
  WorryInputForm,
} from "./FormInputs";
import { MessageBubble, TypingIndicator } from "./MessageBubble";
import { ResultCard } from "./ResultCard";

interface ChatInterfaceProps {
  onBackToHome: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onBackToHome }) => {
  // State
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const [assetValues, setAssetValues] = useState<AssetValues>({
    deposits: 0,
    realEstate: 0,
    securities: 0,
    lifeInsurance: 0,
    other: 0,
  });
  const [liabilityValues, setLiabilityValues] = useState<LiabilityValues>({
    debts: 0,
    funeral: 0,
  });
  const [hasSpouse, setHasSpouse] = useState<boolean | null>(null);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [selectedWorryId, setSelectedWorryId] = useState<string>("");
  const [simResult, setSimResult] = useState<SimulationResult | null>(null);

  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState<InputType>("start");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, inputType]);

  // Bot Helper
  const addBotMessage = (
    text: React.ReactNode,
    nextInputType: InputType,
    delay = 800
  ) => {
    setIsTyping(true);
    setInputType("start");

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "bot",
          text,
          timestamp: new Date(),
        },
      ]);
      setInputType(nextInputType);
    }, delay);
  };

  const addUserMessage = (text: React.ReactNode) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        text,
        timestamp: new Date(),
      },
    ]);
  };

  const initChat = () => {
    setMessages([]);
    setSimResult(null);

    setAssetValues({
      deposits: 0,
      realEstate: 0,
      securities: 0,
      lifeInsurance: 0,
      other: 0,
    });
    setLiabilityValues({ debts: 0, funeral: 0 });
    setHasSpouse(null);
    setChildrenCount(0);
    setSelectedWorryId("");
    setInputValue("");

    addBotMessage(
      <>
        こんにちは。
        <br />
        相続税の簡易シミュレーターです。
        <br />
        資産や負債を入力して、相続税額を試算しましょう。
      </>,
      "start",
      400
    );
  };

  const hasInitialized = useRef(false);
  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      initChat();
    }
  }, []);

  // Flow Logic
  const handleStart = () => {
    addUserMessage("診断を始める");
    addBotMessage(
      <>
        ありがとうございます。
        <br />
        まず<strong>資産の状況</strong>を教えてください。
      </>,
      "assets-form"
    );
  };

  const handleAssetSubmit = (values: AssetValues) => {
    setAssetValues(values);

    const total =
      values.deposits +
      values.realEstate +
      values.securities +
      values.lifeInsurance +
      values.other;

    addUserMessage(
      <div className="text-sm">
        <div>資産合計: {total.toLocaleString()} 万円</div>
      </div>
    );

    addBotMessage(
      <>
        次は<strong>負債の状況</strong>です。
        <br />
        借入金や葬儀費用を入力してください。
      </>,
      "liabilities-form"
    );
  };

  const handleLiabilitySubmit = (values: LiabilityValues) => {
    setLiabilityValues(values);

    const total = values.debts + values.funeral;
    addUserMessage(`負債合計: ${total.toLocaleString()} 万円`);

    addBotMessage(
      <>
        続いて<strong>相続人</strong>について確認します。
        <br />
        配偶者はいますか？
      </>,
      "boolean"
    );
  };

  const handleBooleanSubmit = (val: boolean) => {
    setHasSpouse(val);
    addUserMessage(val ? "いる" : "いない");

    addBotMessage(
      <>
        お子様は何人いらっしゃいますか？
        <br />
        <span className="text-xs text-gray-500">
          ※いない場合は「0」と入力してください。
        </span>
      </>,
      "number"
    );
  };

  const handleNumberSubmit = () => {
    if (!inputValue) return;

    const val = parseInt(inputValue.replace(/,/g, ""));
    if (isNaN(val) || val < 0) return;

    setChildrenCount(val);
    addUserMessage(`${val} 人`);
    setInputValue("");

    addBotMessage(
      <>
        最後に、<strong>今一番気になっていること</strong>を選んでください。
      </>,
      "worry-selection"
    );
  };

  const handleWorrySubmit = (worryId: string) => {
    setSelectedWorryId(worryId);

    const label = WORRY_LIST.find((w) => w.id === worryId)?.label || "その他";

    addUserMessage(label);

    setIsTyping(true);
    setInputType("start");

    setTimeout(() => {
      setIsTyping(false);

      const result = calculateInheritanceTax(
        assetValues,
        liabilityValues,
        hasSpouse === true,
        childrenCount
      );
      setSimResult(result);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "bot",
          text: (
            <ResultCard
              result={result}
              worryId={worryId}
              onReset={handleReset}
            />
          ),
          timestamp: new Date(),
        },
      ]);

      setInputType("reset");
    }, 1500);
  };

  const handleReset = () => initChat();

  // Render
  return (
    <div className="flex flex-col h-[calc(100vh-40px)] md:h-[calc(100vh-80px)] max-h-[800px] bg-[#e5e9ef] rounded-2xl shadow-2xl overflow-hidden border border-white/20 ring-1 ring-black/5">
      {/* Header */}
      <div className="bg-[var(--color-navy)] text-white p-4 flex items-center justify-between shadow-md z-10 relative">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <Calculator className="text-[var(--color-gold)] w-5 h-5" />
          </div>

          <div>
            <h1 className="font-bold text-base md:text-lg leading-tight">
              相続税シミュレーター
            </h1>
            <p className="text-[10px] md:text-xs opacity-80">AIチャット診断</p>
          </div>
        </div>

        <button
          onClick={onBackToHome}
          className="flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
        >
          <Home size={14} />
          <span className="hidden md:inline">トップへ</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide bg-[#f0f4f8]">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            sender={msg.sender}
            isLatest={msg.id === messages[messages.length - 1]?.id}
          >
            {msg.text}
          </MessageBubble>
        ))}

        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-200 safe-area-bottom">
        {inputType === "start" && !isTyping && messages.length === 1 && (
          <button
            onClick={handleStart}
            className="w-full bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] text-white font-bold py-3 px-6 rounded-xl shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
          >
            診断を始める
          </button>
        )}

        {inputType === "assets-form" && (
          <AssetInputForm onSubmit={handleAssetSubmit} />
        )}

        {inputType === "liabilities-form" && (
          <LiabilityInputForm onSubmit={handleLiabilitySubmit} />
        )}

        {inputType === "number" && (
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNumberSubmit()}
                placeholder="例: 2"
                className="
    w-full 
    border-2 border-gray-300 
    rounded-xl 
    px-4 py-3 pr-12
    focus:outline-none 
    focus:border-[var(--color-navy)] 
    focus:ring-[var(--color-navy)] 
    transition 
    text-lg
    text-[#0D1B2A]              /* ← 入力文字が濃くなる */
    placeholder-gray-500         /* ← placeholder濃くする */
    placeholder-opacity-100      /* ← スマホで薄くされない */
  "
                autoFocus
                inputMode="numeric"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold pointer-events-none">
                人
              </span>
            </div>

            <button
              onClick={handleNumberSubmit}
              disabled={!inputValue}
              className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] disabled:bg-gray-300 text-white px-4 md:px-6 rounded-xl shadow-md transition flex items-center justify-center"
            >
              <Send size={24} />
            </button>
          </div>
        )}

        {inputType === "boolean" && (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleBooleanSubmit(true)}
              className="py-3 px-4 bg-[var(--color-light-gray)] border-2 border-gray-300 rounded-xl text-[var(--color-navy)] font-bold hover:bg-gray-100 transition active:scale-95"
            >
              はい
            </button>

            <button
              onClick={() => handleBooleanSubmit(false)}
              className="py-3 px-4 bg-white border-2 border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition active:scale-95"
            >
              いいえ
            </button>
          </div>
        )}

        {inputType === "worry-selection" && (
          <WorryInputForm onSubmit={handleWorrySubmit} />
        )}

        {(inputType === "start" || inputType === "reset") &&
          messages.length > 1 &&
          !isTyping && (
            <div className="flex justify-center">
              {inputType === "reset" ? (
                <button
                  onClick={handleReset}
                  className="text-[var(--color-navy)] hover:text-[var(--color-navy-light)] text-sm flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-100 transition"
                >
                  <RefreshCw size={16} />
                  はじめからやり直す
                </button>
              ) : (
                <span className="text-xs text-gray-400 animate-pulse">
                  入力待ち...
                </span>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default ChatInterface;
