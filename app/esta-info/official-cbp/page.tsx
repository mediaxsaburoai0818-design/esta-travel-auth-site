import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Oficjalna strona CBP - ESTA",
  description:
    "Informacje o oficjalnej stronie CBP do skladania wnioskow ESTA. Jak rozpoznac oficjalna strone i unikac oszustw.",
};

export default function OfficialCBP() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Oficjalna strona CBP" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Oficjalna strona CBP do skladania wnioskow ESTA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Wnioski ESTA mozna skladac wylacznie na oficjalnej stronie internetowej
        U.S. Customs and Border Protection (CBP).
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="heading-band"
        >
          Oficjalny adres strony
        </h2>
        <div className="bg-[#F5F5F5] border border-gray-200 rounded p-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Oficjalna strona ESTA:</p>
          <a
            href="https://esta.cbp.dhs.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold text-[#022444] underline"
          >
            https://esta.cbp.dhs.gov
          </a>
          <p className="text-xs text-gray-400 mt-2">
            Domena .gov oznacza oficjalna strone rzadu USA
          </p>
        </div>

        <h2
          className="heading-band"
        >
          Jak rozpoznac oficjalna strone?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Adres URL konczy sie na <strong>.gov</strong> (domena rządowa)
          </li>
          <li>Strona jest obslugiwana przez CBP (Customs and Border Protection)</li>
          <li>Oplata wynosi dokladnie $21</li>
          <li>Strona jest dostepna w wielu jezykach</li>
          <li>
            Nie wymaga oplaty za &quot;przyspieszenie&quot; rozpatrywania
          </li>
        </ul>

        <h2
          className="heading-band"
        >
          Jak rozpoznac falszywa strone?
        </h2>
        <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm">
          <p className="font-bold mb-2">Znaki ostrzegawcze:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Adres URL nie konczy sie na .gov</li>
            <li>Oplata znacznie wyzsza niz $21 (np. $80-200)</li>
            <li>Obietnica &quot;gwarantowanego zatwierdzenia&quot;</li>
            <li>Oferta &quot;przyspieszonego rozpatrywania&quot;</li>
            <li>
              Agresywna reklama lub natrętne pop-upy
            </li>
          </ul>
        </div>

        <h2
          className="heading-band"
        >
          Co mozna zrobic na oficjalnej stronie CBP?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Zlozyc nowy wniosek ESTA (indywidualny lub grupowy)</li>
          <li>Sprawdzic status istniejacego wniosku</li>
          <li>Zaktualizowac dane (adres e-mail, dane o podrozy)</li>
          <li>Odnowic wygasla autoryzacje ESTA</li>
        </ul>

        <h2
          className="heading-band"
        >
          Inne przydatne strony rzadowe
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.cbp.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              www.cbp.gov
            </a>{" "}
            &mdash; Glowna strona CBP
          </li>
          <li>
            <a
              href="https://travel.state.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              travel.state.gov
            </a>{" "}
            &mdash; U.S. Department of State (informacje o wizach)
          </li>
          <li>
            <a
              href="https://pl.usembassy.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              pl.usembassy.gov
            </a>{" "}
            &mdash; Ambasada USA w Polsce
          </li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/application/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Jak zlozyc wniosek &rarr;
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
