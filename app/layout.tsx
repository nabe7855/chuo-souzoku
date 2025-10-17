import Header from "@/components/layout/Header";
import FooterSection from "@/components/sections/FooterSection";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import "./globals.css";

// ✅ メタデータ（HTMLの<head>に相当）
export const metadata: Metadata = {
  title: "中央相続事務所｜あんしん相続パック",
  description:
    "生前からもしもの後まで。家族を守るワンストップ相続支援。全国対応・非対面完結・追加費用なし。",
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ RootLayout（Server Componentとして扱う）
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="overflow-x-hidden bg-white text-gray-800 font-sans">
        <ClientLayout>
          <Header />
          <main className="pt-16 pb-24 md:pt-0 md:pb-0">{children}</main>
          <FooterSection />
        </ClientLayout>
      </body>
    </html>
  );
}
