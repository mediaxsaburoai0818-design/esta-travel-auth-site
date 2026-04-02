import type { Metadata } from "next";
import { Noto_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ESTA申請完全ガイド - 米国渡航認証システム",
  description: "米国ESTA（電子渡航認証システム）の申請方法、費用比較、よくある質問まで完全ガイド。ビザ免除プログラム参加国の方向けの詳細情報を提供します。",
  keywords: "ESTA, 米国, 渡航認証, ビザ免除, 申請方法, 費用比較, FAQ, アメリカ, 電子渡航認証",
  authors: [{ name: "ESTA Guide" }],
  creator: "ESTA Guide",
  publisher: "ESTA Guide",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "ESTA申請完全ガイド - 米国渡航認証システム",
    description: "米国ESTA（電子渡航認証システム）の申請方法、費用比較、よくある質問まで完全ガイド",
    url: "https://esta-guide.com", // 実際のドメインに変更
    siteName: "ESTA Guide",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESTA申請完全ガイド - 米国渡航認証システム",
    description: "米国ESTA申請の完全ガイド。費用比較から申請手順まで詳しく解説",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} ${montserrat.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
