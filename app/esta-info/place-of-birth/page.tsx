import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Miejsce urodzenia i adres w formularzu ESTA",
  description:
    "Jak prawidlowo wpisac miejsce urodzenia i adres zamieszkania w formularzu ESTA. Wskazowki dotyczace wypelniania pol.",
};

export default function PlaceOfBirth() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Miejsce urodzenia / adres" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Miejsce urodzenia i adres w formularzu ESTA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Prawidlowe wypelnienie pol dotyczacych miejsca urodzenia i adresu
        zamieszkania jest kluczowe dla pomyslnego rozpatrzenia wniosku ESTA.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="heading-band"
        >
          Miejsce urodzenia (City of Birth)
        </h2>
        <p>
          Wpisz nazwe miasta, w ktorym sie urodziles. Uzyj angielskiej nazwy
          miasta, jesli jest powszechnie znana (np. Warsaw zamiast Warszawa,
          Krakow zamiast Krakow). Jesli angielska nazwa nie jest znana, wpisz
          nazwe polska.
        </p>
        <div className="bg-[#f8f9fa] p-4 rounded text-sm">
          <p className="font-bold mb-2">Przyklady:</p>
          <ul className="space-y-1">
            <li>Warszawa &rarr; <strong>Warsaw</strong> lub <strong>Warszawa</strong></li>
            <li>Krakow &rarr; <strong>Krakow</strong> lub <strong>Cracow</strong></li>
            <li>Gdansk &rarr; <strong>Gdansk</strong></li>
            <li>Wroclaw &rarr; <strong>Wroclaw</strong></li>
            <li>Lodz &rarr; <strong>Lodz</strong></li>
          </ul>
        </div>

        <h2
          className="heading-band"
        >
          Kraj urodzenia (Country of Birth)
        </h2>
        <p>
          Wybierz kraj, w ktorym sie urodziles, z listy rozwijanej. Dla
          wiekszosci polskich obywateli bedzie to &quot;POLAND&quot;.
        </p>

        <h2
          className="heading-band"
        >
          Adres zamieszkania (Home Address)
        </h2>
        <p>
          Adres zamieszkania nalezy podac w formacie angielskim:
        </p>
        <div className="bg-[#f8f9fa] p-4 rounded text-sm">
          <p className="font-bold mb-2">Format adresu:</p>
          <ul className="space-y-1">
            <li><strong>Address Line 1:</strong> Nazwa ulicy i numer domu/mieszkania</li>
            <li><strong>Address Line 2:</strong> Numer mieszkania (jesli dotyczy)</li>
            <li><strong>City:</strong> Miasto</li>
            <li><strong>State/Province/Region:</strong> Wojewodztwo</li>
            <li><strong>Country:</strong> Poland</li>
            <li><strong>Zip/Postal Code:</strong> Kod pocztowy (np. 00-001)</li>
          </ul>
        </div>
        <div className="bg-[#f8f9fa] p-4 rounded text-sm mt-4">
          <p className="font-bold mb-2">Przyklad:</p>
          <p>Address Line 1: Marszalkowska 1</p>
          <p>Address Line 2: Apt 5</p>
          <p>City: Warsaw</p>
          <p>State: Mazowieckie</p>
          <p>Country: Poland</p>
          <p>Zip Code: 00-001</p>
        </div>

        <h2
          className="heading-band"
        >
          Najczestsze bledy
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Uzywanie polskich znakow diakrytycznych (formularz ich nie obsluguje w niektorych polach)</li>
          <li>Niezgodnosc danych z paszportem</li>
          <li>Pominecie numeru mieszkania</li>
          <li>Wpisanie kodu pocztowego w zlym formacie</li>
        </ul>

        <div className="bg-[#f8f9fa] border-l-4 border-[#1a365d] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Jesli masz watpliwosci, wpisz dane
          dokladnie tak, jak sa w paszporcie. Zgodnosc danych jest
          najwazniejsza.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/us-contact/"
          className="bg-[#1a365d] hover:bg-[#2a4a7f] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Dane kontaktowe w USA &rarr;
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
