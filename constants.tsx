import { FileText, Handshake, Landmark, Scale } from "lucide-react";
import type { FAQItem, Plan, Review, ServiceItem, TeamMember } from "./types";

export const PLANS: Plan[] = [
  {
    name: "ライトプラン",
    price: 165000,
    description: "相続財産の整理までをサポート",
    features: ["相続人調査", "財産目録作成", "遺産分割協議書作成支援"],
  },
  {
    name: "スタンダードプラン",
    price: 330000,
    description: "相続手続きと登記まで一括対応",
    features: [
      "ライトプランの全内容",
      "不動産の名義変更（登記）",
      "預貯金・株式等の解約・名義変更",
      "各種行政手続き代行",
    ],
    isStandard: true,
  },
  {
    name: "プレミアムプラン",
    price: 550000,
    description: "二次相続や海外資産にも対応",
    features: [
      "スタンダードプランの全内容",
      "二次相続コンサルティング",
      "海外資産の相続手続き支援",
      "税務申告サポート",
    ],
  },
];

export const REVIEWS: Review[] = [
  {
    quote:
      "何から手をつけて良いか分からなかったのですが、全てお任せできて本当に助かりました。",
    author: "佐藤様",
    details: "70代・スタンダードプラン",
    rating: 5,
    image: "佐藤.png",
  },
  {
    quote:
      "料金が明確で、追加費用も一切なく安心でした。説明も非常に丁寧で分かりやすかったです。",
    author: "鈴木様",
    details: "60代・スタンダードプラン",
    rating: 5,
    image: "鈴木.png",
  },
  {
    quote:
      "遠方に住んでいるため非対面での手続きに不安がありましたが、LINEや郵送でスムーズに進めて頂けました。",
    author: "高橋様",
    details: "50代・ライトプラン",
    rating: 4,
    image: "高橋.png",
  },
];

export const FAQS: FAQItem[] = [
  {
    question:
      "本当に33万円で全ての手続きが終わりますか？追加費用はかかりませんか？",
    answer:
      "はい、スタンダードプランは税込33万円の定額です。戸籍謄本取得などの実費以外、当事務所への報酬として追加費用は一切発生しませんのでご安心ください。",
  },
  {
    question: "地方に住んでいますが、依頼は可能ですか？",
    answer:
      "はい、全国対応しております。Zoom、LINE、お電話、郵送などを活用し、一度もご来所いただくことなく全ての手続きを完結させることが可能です。",
  },
  {
    question: "相談だけでも大丈夫ですか？",
    answer:
      "もちろんです。初回のご相談は無料ですので、まずはお気軽にお悩みをお聞かせください。無理な勧誘は一切行いません。",
  },
  {
    question: "支払方法は何がありますか？",
    answer:
      "銀行振込とクレジットカード払いに対応しております。分割払いのご相談も承りますので、お気軽にお申し付けください。",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    category: "相続財産を調べる",
    items: [
      { name: "相続人調査・確定", light: "✅", standard: "✅", premium: "✅" },
      {
        name: "相続関係説明図の作成",
        light: "✅",
        standard: "✅",
        premium: "✅",
      },
      {
        name: "財産調査・財産目録作成",
        light: "✅",
        standard: "✅",
        premium: "✅",
      },
      { name: "海外資産の調査", light: "❌", standard: "❌", premium: "✅" },
    ],
  },
  {
    category: "もめないための準備",
    items: [
      {
        name: "遺産分割協議書の作成",
        light: "✅",
        standard: "✅",
        premium: "✅",
      },
      { name: "遺言書作成サポート", light: "△", standard: "△", premium: "✅" },
      { name: "家族信託のコンサル", light: "❌", standard: "△", premium: "✅" },
    ],
  },
  {
    category: "各種手続きの代行",
    items: [
{
  name: "不動産の名義変更<br />　　　（相続登記）", 
  light: "❌",
  standard: "✅",
  premium: "✅",
},
      {
        name: "預貯金・有価証券<br />　　　の名義変更",
        light: "❌",
        standard: "✅",
        premium: "✅",
      },
      {
        name: "自動車・保険等<br />　　　の名義変更",
        light: "❌",
        standard: "✅",
        premium: "✅",
      },
      { name: "相続放棄の手続き支援", light: "△", standard: "△", premium: "△" },
    ],
  },
  {
    category: "税金の対策と申告",
    items: [
      {
        name: "相続税シミュレーション",
        light: "△",
        standard: "✅",
        premium: "✅",
      },
      {
        name: "二次相続を考慮した対策",
        light: "❌",
        standard: "❌",
        premium: "✅",
      },
      {
        name: "相続税申告<br />（提携税理士）",
        light: "△",
        standard: "△",
        premium: "✅",
      },
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "山田 太郎", title: "代表司法書士", icon: Scale },
  { name: "鈴木 花子", title: "税理士（提携）", icon: Landmark },
  { name: "田中 一郎", title: "行政書士", icon: FileText },
  { name: "高橋 良子", title: "ファイナンシャルプランナー", icon: Handshake },
];
