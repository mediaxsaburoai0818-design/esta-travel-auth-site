import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Czym jest ESTA? - Kompletny przewodnik",
  description:
    "ESTA (Electronic System for Travel Authorization) - elektroniczny system autoryzacji podrozy do USA. Kraje uprawnione, warunki zwolnienia z wizy.",
};

export default function WhatIsEsta() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Czym jest ESTA?" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Czym jest ESTA?
      </h1>

      <img
        src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&q=80"
        alt="Statua Wolnosci - symbol Stanow Zjednoczonych"
        className="w-full h-64 object-cover rounded mb-8"
      />

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          ESTA (Electronic System for Travel Authorization) to elektroniczny
          system autoryzacji podrozy ustanowiony przez Departament Bezpieczenstwa
          Wewnetrznego Stanow Zjednoczonych (DHS). System ten pozwala obywatelom
          krajow uczestniczacych w Programie Ruchu Bezwizowego (Visa Waiver
          Program - VWP) na uzyskanie zezwolenia na podrozowanie do USA bez
          koniecznosci posiadania wizy.
        </p>

        <h2
          className="text-2xl font-bold text-[#1a365d] pt-4"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Cel systemu ESTA
        </h2>
        <p>
          System ESTA zostal wprowadzony 12 stycznia 2009 roku w celu wzmocnienia
          bezpieczenstwa podrozy miedzynarodowych. Pozwala wladzom amerykanskim
          na weryfikacje podroznych przed ich przybyciem do Stanow Zjednoczonych,
          co usprawnia kontrole graniczna i zwieksza bezpieczenstwo.
        </p>

        <h2
          className="text-2xl font-bold text-[#1a365d] pt-4"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Kto moze ubiegac sie o ESTA?
        </h2>
        <p>
          O autoryzacje ESTA moga ubiegac sie obywatele 41 krajow
          uczestniczacych w Programie Ruchu Bezwizowego. Polska jest jednym z
          tych krajow od listopada 2019 roku. Aby skorzystac z ESTA, nalezy
          posiadac paszport biometryczny (e-paszport).
        </p>

        <h2
          className="text-2xl font-bold text-[#1a365d] pt-4"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Kraje uprawnione do ESTA (wybrane)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {[
            "Polska",
            "Niemcy",
            "Francja",
            "Wielka Brytania",
            "Hiszpania",
            "Wlochy",
            "Holandia",
            "Belgia",
            "Austria",
            "Czechy",
            "Portugalia",
            "Szwecja",
            "Norwegia",
            "Dania",
            "Finlandia",
            "Japonia",
            "Korea Poludniowa",
            "Australia",
            "Nowa Zelandia",
            "Szwajcaria",
            "Irlandia",
          ].map((country) => (
            <span
              key={country}
              className="bg-[#f8f9fa] border border-gray-200 rounded px-3 py-1.5 text-gray-700"
            >
              {country}
            </span>
          ))}
        </div>

        <h2
          className="text-2xl font-bold text-[#1a365d] pt-4"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Warunki korzystania z ESTA
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Cel podrozy: turystyka, biznes lub tranzyt</li>
          <li>Maksymalny pobyt: 90 dni</li>
          <li>Posiadanie paszportu biometrycznego</li>
          <li>Brak historii odmowy wizy do USA (z wyjatkami)</li>
          <li>Brak pobytu w okreslonych krajach (Iran, Irak, Syria, itd.)</li>
        </ul>

        <h2
          className="text-2xl font-bold text-[#1a365d] pt-4"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          ESTA a wiza &mdash; roznice
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#f8f9fa]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1a365d]">
                  Kryterium
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1a365d]">
                  ESTA
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1a365d]">
                  Wiza B-1/B-2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">Koszt</td>
                <td className="p-3 border-b border-gray-100">$21</td>
                <td className="p-3 border-b border-gray-100">$185+</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Czas rozpatrywania
                </td>
                <td className="p-3 border-b border-gray-100">
                  Kilka minut &mdash; 72h
                </td>
                <td className="p-3 border-b border-gray-100">
                  Tygodnie / miesiace
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Maksymalny pobyt
                </td>
                <td className="p-3 border-b border-gray-100">90 dni</td>
                <td className="p-3 border-b border-gray-100">Do 180 dni</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">Waznosc</td>
                <td className="p-3 border-b border-gray-100">2 lata</td>
                <td className="p-3 border-b border-gray-100">Do 10 lat</td>
              </tr>
              <tr>
                <td className="p-3">Rozmowa w ambasadzie</td>
                <td className="p-3">Nie</td>
                <td className="p-3">Tak</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#f8f9fa] border-l-4 border-[#1a365d] p-4 rounded-r">
          <p className="text-sm text-gray-700">
            <strong>Wazne:</strong> ESTA nie gwarantuje wjazdu do Stanow
            Zjednoczonych. Ostateczna decyzje o wjezdzie podejmuje funkcjonariusz
            kontroli granicznej (CBP) po przybyciu do USA.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/application/"
          className="bg-[#1a365d] hover:bg-[#2a4a7f] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Jak zlozyc wniosek &rarr;
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
