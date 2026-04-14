import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Aplikacja mobilna ESTA Mobile",
  description:
    "Jak korzystac z oficjalnej aplikacji ESTA Mobile do skladania wnioskow ESTA na smartfonie. Dostepna na iOS i Android.",
};

export default function MobileApp() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Aplikacja mobilna" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        ESTA Mobile &mdash; aplikacja do skladania wnioskow
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        CBP udostepnila oficjalna aplikacje mobilna ESTA Mobile, ktora umozliwia
        skladanie wnioskow ESTA bezposrednio ze smartfona.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="heading-band"
        >
          O aplikacji ESTA Mobile
        </h2>
        <p>
          ESTA Mobile to oficjalna aplikacja Customs and Border Protection
          (CBP), ktora umozliwia skladanie i sprawdzanie wnioskow ESTA na
          urzadzeniach mobilnych. Aplikacja jest bezplatna do pobrania.
        </p>

        <h2
          className="heading-band"
        >
          Dostepnosc
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>iOS (App Store) &mdash; dla urzadzen Apple</li>
          <li>Android (Google Play) &mdash; dla urzadzen z systemem Android</li>
        </ul>

        <h2
          className="heading-band"
        >
          Funkcje aplikacji
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Skladanie nowego wniosku ESTA</li>
          <li>Skanowanie paszportu aparatem telefonu (OCR)</li>
          <li>Sprawdzanie statusu istniejacego wniosku</li>
          <li>Aktualizacja danych o podrozy</li>
          <li>Zapisywanie wniosku i powrot do niego pozniej</li>
        </ul>

        <h2
          className="heading-band"
        >
          Jak zlozyc wniosek przez aplikacje?
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>Pobierz aplikacje ESTA Mobile z App Store lub Google Play</li>
          <li>Otworz aplikacje i wybierz &quot;New Application&quot;</li>
          <li>
            Zeskanuj strone ze zdjeciem w paszporcie aparatem telefonu (lub
            wprowadz dane recznie)
          </li>
          <li>Wypelnij pozostale pola formularza</li>
          <li>Sprawdz dane i wyslij wniosek</li>
          <li>Dokonaj platnosci $21</li>
        </ol>

        <h2
          className="heading-band"
        >
          Zalety aplikacji mobilnej
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Skanowanie paszportu &mdash; automatyczne wypelnianie danych z
            paszportu
          </li>
          <li>Wygodne uzytkowanie na smartfonie</li>
          <li>Mozliwosc zapisania wniosku i powrotu do niego pozniej</li>
          <li>Powiadomienia o statusie wniosku</li>
        </ul>

        <div className="bg-[#f8f9fa] border-l-4 border-[#1a365d] p-4 rounded-r text-sm">
          <strong>Uwaga:</strong> Upewnij sie, ze pobierasz oficjalna aplikacje
          CBP. Szukaj wydawcy &quot;U.S. Customs and Border Protection&quot; w
          sklepie z aplikacjami.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/application/"
          className="bg-[#1a365d] hover:bg-[#2a4a7f] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Sposob skladania wniosku &rarr;
        </Link>
        <Link
          href="/apply/"
          className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-3 px-8 rounded text-sm transition text-center"
        >
          Zloz wniosek ESTA
        </Link>
      </div>
    </div>
  );
}
