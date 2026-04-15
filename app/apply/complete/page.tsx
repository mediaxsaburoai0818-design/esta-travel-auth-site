import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wniosek ESTA wyslany pomyslnie",
  description: "Potwierdzenie wyslania wniosku ESTA. Informacje o dalszych krokach.",
};

export default function Complete() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-4"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Wniosek zostal wyslany
      </h1>

      <p className="text-gray-600 mb-2 leading-relaxed">
        Dziekujemy za zlozenie wniosku ESTA. Twoj wniosek zostal przyjety do
        rozpatrzenia.
      </p>

      <div className="bg-[#F5F5F5] border border-gray-200 rounded p-6 my-8 text-left">
        <h2 className="font-bold text-[#022444] mb-4">
          Numer referencyjny wniosku
        </h2>
        <div className="bg-white border border-gray-200 rounded p-4 text-center mb-4">
          <span className="text-2xl font-mono font-bold text-[#022444] tracking-widest">
            ESTA-2026-XXXX-XXXX
          </span>
        </div>
        <p className="text-sm text-gray-500">
          Zapisz ten numer referencyjny. Bedzie potrzebny do sprawdzenia statusu
          wniosku.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded p-6 text-left mb-8">
        <h2 className="font-bold text-[#022444] mb-4">Co dalej?</h2>
        <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600">
          <li>
            <strong>Oczekuj na zatwierdzenie</strong> &mdash; wiekszosc wnioskow
            jest rozpatrywana w ciagu kilku minut, ale moze to potrwac do 72
            godzin.
          </li>
          <li>
            <strong>Sprawdz status</strong> &mdash; wejdz na{" "}
            <a
              href="https://esta.cbp.dhs.gov"
              className="text-[#022444] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              esta.cbp.dhs.gov
            </a>{" "}
            i wybierz &quot;Check Existing Application&quot;.
          </li>
          <li>
            <strong>Zapisz potwierdzenie</strong> &mdash; po zatwierdzeniu
            wydrukuj lub zapisz potwierdzenie autoryzacji ESTA.
          </li>
          <li>
            <strong>Przygotuj sie do podrozy</strong> &mdash; ESTA jest wazna
            przez 2 lata. Upewnij sie, ze paszport jest wazny przez caly okres
            pobytu.
          </li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <Link
          href="/esta-info/status-check/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition"
        >
          Jak sprawdzic status wniosku
        </Link>
        <Link
          href="/"
          className="border border-gray-300 hover:border-[#022444] text-gray-700 px-6 py-3 rounded font-bold text-sm transition"
        >
          Strona glowna
        </Link>
      </div>
    </div>
  );
}
