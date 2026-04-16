import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Wjazd na Guam - Czy potrzebna jest ESTA?",
  description:
    "Informacje o wjezdzie na Guam dla obywateli polskich. Guam Visa Waiver Program, roznice miedzy ESTA a programem bezwizowym Guam.",
};

export default function Guam() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Wjazd na Guam" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Wjazd na Guam &mdash; Czy potrzebna jest ESTA?
      </h1>

      <img
        src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80"
        alt="Tropikalna plaza - Guam"
        className="w-full h-56 object-cover rounded mb-8"
      />

      <p className="text-gray-600 mb-8 leading-relaxed">
        Guam jest terytorium zalezynm USA na Oceanie Spokojnym. Obowiazuja tam
        specjalne zasady wjazdu, ktore roznia sie od zasad obowiazujacych na
        kontynencie amerykanskim.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="heading-band"
        >
          Guam Visa Waiver Program
        </h2>
        <p>
          Guam posiada wlasny program bezwizowy (Guam Visa Waiver Program),
          ktory obejmuje szerszy zakres krajow niz standardowy VWP. Obywatele
          niektorych krajow moga wjechac na Guam bez ESTA i bez wizy, pod
          warunkiem ze lot jest bezposredni.
        </p>

        <h2
          className="heading-band"
        >
          Czy Polacy potrzebuja ESTA na Guam?
        </h2>
        <p>
          Polska jest czlonkiem zarowno standardowego VWP, jak i programu
          bezwizowego Guam. Oznacza to, ze polscy obywatele moga wjechac na
          Guam:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Z ESTA</strong> &mdash; jesli lecisz z przesiadka na
            kontynencie USA lub chcesz miec mozliwosc odwiedzenia kontynent
          </li>
          <li>
            <strong>Bez ESTA</strong> &mdash; jesli lecisz bezposrednio na Guam
            (np. z Tokio, Manili, Seulu) w ramach programu bezwizowego Guam,
            pobyt do 45 dni
          </li>
        </ul>

        <h2
          className="heading-band"
        >
          Warunki wjazdu bez ESTA (Guam VWP)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Lot bezposredni na Guam (nie przez kontynent USA)</li>
          <li>Pobyt do 45 dni</li>
          <li>Cel wizyty: turystyka lub biznes</li>
          <li>Posiadanie waznego paszportu</li>
          <li>Wypelnienie formularza I-736 (na pokladzie samolotu)</li>
          <li>Posiadanie biletu powrotnego</li>
        </ul>

        <h2
          className="heading-band"
        >
          ESTA vs Guam VWP &mdash; porownanie
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#F5F5F5]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Kryterium
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  ESTA (VWP)
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#022444]">
                  Guam VWP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">Maksymalny pobyt</td>
                <td className="p-3 border-b border-gray-100">90 dni</td>
                <td className="p-3 border-b border-gray-100">45 dni</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">Oplata</td>
                <td className="p-3 border-b border-gray-100">$21</td>
                <td className="p-3 border-b border-gray-100">Bezplatnie</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">Rejestracja online</td>
                <td className="p-3 border-b border-gray-100">Tak (przed podrozea)</td>
                <td className="p-3 border-b border-gray-100">Nie (formularz I-736)</td>
              </tr>
              <tr>
                <td className="p-3">Wjazd na kontynent USA</td>
                <td className="p-3">Tak</td>
                <td className="p-3">Nie</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Jesli planujesz odwiedzic zarowno Guam,
          jak i kontynent USA, lepiej jest uzyskac ESTA. Daje to wieksza
          elastycznosc podrozy.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/what-is-esta/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Czym jest ESTA? &rarr;
        </Link>
        <Link
          href="/apply/"
          className="bg-[#8d1812] hover:bg-[#6d120e] text-white font-bold py-3 px-8 text-sm transition text-center border-[3px] border-double border-[#6d120e]"
        >
          &#10003; Zloz wniosek ESTA
        </Link>
      </div>
    </div>
  );
}
