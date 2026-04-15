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
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Potwierdzenie wniosku
      </h1>

      <div className="bg-[#F5F5F5] border border-gray-200 rounded p-6 mb-8">
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
          className="bg-[#8d1812] hover:bg-[#6d120e] text-white font-bold py-3 px-8 text-sm transition text-center border-[3px] border-double border-[#6d120e]"
        >
          Przejdz do formularza wniosku
        </Link>
        <Link
          href="/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Strona glowna
        </Link>
      </div>
    </div>
  );
}
