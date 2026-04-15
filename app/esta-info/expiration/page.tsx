import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Okres waznosci ESTA - Kiedy odnowic?",
  description:
    "ESTA jest wazna przez 2 lata od zatwierdzenia. Dowiedz sie, kiedy nalezy odnowic autoryzacje i jakie zmiany powoduja jej uniewaznienie.",
};

export default function Expiration() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Okres waznosci" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Okres waznosci ESTA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Autoryzacja ESTA jest wazna przez <strong>2 lata</strong> od daty
        zatwierdzenia lub do momentu wygasniecia paszportu &mdash; w zaleznosci
        od tego, co nastapi wczesniej.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="heading-band"
        >
          Zasady waznosci
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Wazna przez 2 lata od daty zatwierdzenia</li>
          <li>Wygasa wraz z paszportem (jesli paszport wygasa wczesniej)</li>
          <li>Pozwala na wielokrotne wjazdy do USA w okresie waznosci</li>
          <li>Kazdy pobyt nie moze przekraczac 90 dni</li>
        </ul>

        <h2
          className="heading-band"
        >
          Kiedy nalezy odnowic ESTA?
        </h2>
        <p>
          Nowy wniosek ESTA nalezy zlozyc w nastepujacych przypadkach:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Po uplywie 2 lat od zatwierdzenia</li>
          <li>Po uzyskaniu nowego paszportu</li>
          <li>Po zmianie nazwiska</li>
          <li>Po zmianie obywatelstwa</li>
          <li>Po zmianie plci</li>
          <li>Po zmianie odpowiedzi na pytania kwalifikacyjne</li>
        </ul>

        <h2
          className="heading-band"
        >
          Czy moge podrozowac z wygasajaca ESTA?
        </h2>
        <p>
          ESTA musi byc wazna w momencie wejscia na poklad samolotu do USA.
          Nie musi byc wazna przez caly okres pobytu &mdash; wazne jest, aby
          byla wazna w dniu wylotu. Zaleca sie jednak zlozenie nowego wniosku
          z odpowiednim wyprzedzeniem.
        </p>

        <h2
          className="heading-band"
        >
          Jak sprawdzic date waznosci?
        </h2>
        <p>
          Date waznosci ESTA mozna sprawdzic na oficjalnej stronie CBP w
          zakladce &quot;Check Existing Application&quot;. Potrzebny bedzie
          numer paszportu, data urodzenia i numer referencyjny wniosku.
        </p>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Zaleca sie zlozenie nowego wniosku ESTA
          co najmniej 72 godziny przed planowana podroza, aby miec czas na
          rozpatrzenie wniosku.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/status-check/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Sprawdz status wniosku &rarr;
        </Link>
        <Link
          href="/apply/"
          className="bg-[#8d1812] hover:bg-[#6d120e] text-white font-bold py-3 px-8 text-sm transition text-center border-[3px] border-double border-[#6d120e]"
        >
          Zloz wniosek ESTA
        </Link>
      </div>
    </div>
  );
}
