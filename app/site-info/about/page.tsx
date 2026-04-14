import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "O nas - ESTA Online",
  description: "Informacje o serwisie ESTA Online. Kim jestesmy i jaki jest cel naszej strony.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o stronie", href: "/site-info/about/" },
          { label: "O nas" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        O nas
      </h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Cel serwisu
        </h2>
        <p>
          ESTA Online to serwis informacyjny poswiecony Elektronicznemu Systemowi
          Autoryzacji Podrozy (ESTA) do Stanow Zjednoczonych. Naszym celem jest
          dostarczanie rzetelnych, aktualnych i przydatnych informacji w jezyku
          polskim na temat procedury skladania wniosku ESTA.
        </p>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Czym sie zajmujemy?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Dostarczamy kompletne informacje o systemie ESTA w jezyku polskim
          </li>
          <li>Wyjasniamy procedure skladania wniosku krok po kroku</li>
          <li>
            Odpowiadamy na najczesciej zadawane pytania dotyczace podrozy do USA
          </li>
          <li>
            Ostrzegamy przed falszywymi stronami i oszustwami zwiazanymi z ESTA
          </li>
          <li>
            Informujemy o zmianach w przepisach dotyczacych Programu Ruchu
            Bezwizowego
          </li>
        </ul>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Wazne zastrzezenie
        </h2>
        <div className="bg-[#f8f9fa] border-l-4 border-[#1a365d] p-4 rounded-r text-sm">
          <p>
            ESTA Online nie jest oficjalna strona rzadu Stanow Zjednoczonych.
            Nie jestesmy powiazani z U.S. Customs and Border Protection (CBP)
            ani zadna inna agencja rzadowa USA. Oficjalna strona do skladania
            wnioskow ESTA to{" "}
            <a
              href="https://esta.cbp.dhs.gov"
              className="text-[#1a365d] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              esta.cbp.dhs.gov
            </a>
            .
          </p>
        </div>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Informacje o operatorze
        </h2>
        <div className="border border-gray-200 rounded p-4 text-sm">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-2 pr-4 text-gray-500 font-medium">Nazwa serwisu:</td>
                <td className="py-2">ESTA Online</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-500 font-medium">Typ:</td>
                <td className="py-2">Serwis informacyjny</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-500 font-medium">Jezyk:</td>
                <td className="py-2">Polski</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-500 font-medium">Kontakt:</td>
                <td className="py-2">
                  <Link href="/site-info/contact/" className="text-[#1a365d] underline">
                    Formularz kontaktowy
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
