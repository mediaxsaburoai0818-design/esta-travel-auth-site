import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Potwierdzenie wniosku ESTA",
  description: "Strona potwierdzenia wniosku ESTA. Sprawdz wprowadzone dane przed wyslaniem.",
};

export default function Confirm() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Wniosek ESTA", href: "/apply/" },
          { label: "Potwierdzenie" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Potwierdzenie wniosku
      </h1>

      <div className="bg-[#f8f9fa] border border-gray-200 rounded p-6 mb-8">
        <p className="text-gray-600 leading-relaxed mb-4">
          Ta strona sluzy do potwierdzenia danych wniosku ESTA. Aby wypelnic
          formularz, przejdz do strony skladania wniosku.
        </p>
        <p className="text-sm text-gray-500">
          Formularz wniosku ESTA zawiera wbudowany krok potwierdzenia (krok 7),
          w ktorym mozesz sprawdzic wszystkie dane przed wyslaniem.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/apply/"
          className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-3 px-8 rounded text-sm transition text-center"
        >
          Przejdz do formularza wniosku
        </Link>
        <Link
          href="/"
          className="bg-[#1a365d] hover:bg-[#2a4a7f] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Strona glowna
        </Link>
      </div>
    </div>
  );
}
