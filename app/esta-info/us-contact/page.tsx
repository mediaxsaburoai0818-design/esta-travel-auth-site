import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dane kontaktowe w USA - Formularz ESTA",
  description:
    "Jak wpisac dane kontaktowe w USA w formularzu ESTA: adres hotelu, osoba goszczaca, dane kontaktowe na wypadek sytuacji awaryjnej.",
};

export default function USContact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Dane kontaktowe w USA" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Dane kontaktowe w USA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Formularz ESTA wymaga podania danych kontaktowych w Stanach
        Zjednoczonych. Ponizej wyjasniamy, jak prawidlowo wypelnic te pola.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Osoba kontaktowa w USA (U.S. Point of Contact)
        </h2>
        <p>
          Nalezy podac dane osoby lub organizacji w USA, z ktora mozna sie
          skontaktowac podczas pobytu. Moze to byc:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Hotel lub obiekt noclegowy</li>
          <li>Przyjaciel lub krewny mieszkajacy w USA</li>
          <li>Partner biznesowy lub firma</li>
          <li>Biuro podrozy lub organizator wycieczki</li>
        </ul>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Jak wpisac dane hotelu?
        </h2>
        <div className="bg-[#f8f9fa] p-4 rounded text-sm">
          <p className="font-bold mb-2">Przyklad (hotel w Nowym Jorku):</p>
          <ul className="space-y-1">
            <li><strong>Last Name or Organization:</strong> Hilton Midtown</li>
            <li><strong>First Name:</strong> (puste lub &quot;N/A&quot;)</li>
            <li><strong>Address Line 1:</strong> 1335 Avenue of the Americas</li>
            <li><strong>City:</strong> New York</li>
            <li><strong>State:</strong> New York</li>
            <li><strong>Phone:</strong> +1-212-XXX-XXXX</li>
          </ul>
        </div>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Jesli nie masz jeszcze rezerwacji
        </h2>
        <p>
          Jesli nie masz jeszcze zarezerwowanego noclegu, mozesz wpisac nazwe
          hotelu, w ktorym planujesz sie zatrzymac, lub adres znajomego. Pole
          to nie jest wiazace &mdash; mozesz zmienic hotel po zatwierdzeniu
          ESTA. Nie mozna jednak zostawic tego pola pustego.
        </p>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Adres pobytu w USA (Address While in the U.S.)
        </h2>
        <p>
          To pole jest oddzielne od osoby kontaktowej. Wpisz adres, pod ktorym
          bedziesz przebywac podczas wizyty. Jesli zatrzymujesz sie w hotelu,
          wpisz adres hotelu.
        </p>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Kontakt alarmowy (Emergency Contact)
        </h2>
        <p>
          Podaj dane osoby, z ktora mozna sie skontaktowac w naglyn wypadku.
          Moze to byc osoba mieszkajaca w dowolnym kraju (nie musi byc w USA).
          Zwykle podaje sie dane czlonka rodziny.
        </p>

        <div className="bg-[#f8f9fa] border-l-4 border-[#1a365d] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Przygotuj dane kontaktowe w USA przed
          rozpoczeciem wypelniania formularza. Ulatwi to caly proces.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/place-of-birth/"
          className="bg-[#1a365d] hover:bg-[#2a4a7f] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Miejsce urodzenia / adres &rarr;
        </Link>
        <Link
          href="/apply/"
          className="bg-[#c41e3a] hover:bg-[#a01830] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Zloz wniosek ESTA
        </Link>
      </div>
    </div>
  );
}
