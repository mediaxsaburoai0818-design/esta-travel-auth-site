import type { Metadata } from "next";
import { Noto_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kompletny przewodnik po ESTA - System Elektronicznej Autoryzacji Podróży do USA",
  description: "Kompletny przewodnik po ESTA (Elektroniczny System Autoryzacji Podróży) do USA. Procedura składania wniosku, porównanie kosztów i najczęściej zadawane pytania. Szczegółowe informacje dla obywateli krajów uczestniczących w Programie Ruchu Bezwizowego.",
  keywords: "ESTA, USA, autoryzacja podróży, ruch bezwizowy, procedura składania wniosku, porównanie kosztów, FAQ, Ameryka, elektroniczna autoryzacja podróży, Polska",
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
    title: "Kompletny przewodnik po ESTA - System Elektronicznej Autoryzacji Podróży do USA",
    description: "Kompletny przewodnik po ESTA (Elektroniczny System Autoryzacji Podróży) do USA. Procedura składania wniosku, porównanie kosztów i FAQ",
    url: "https://esta-travel-authorization-site.pages.dev/",
    siteName: "ESTA Guide",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kompletny przewodnik po ESTA - System Elektronicznej Autoryzacji Podróży do USA",
    description: "Kompletny przewodnik po wniosku ESTA. Od porównania kosztów po procedurę składania wniosku",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
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
