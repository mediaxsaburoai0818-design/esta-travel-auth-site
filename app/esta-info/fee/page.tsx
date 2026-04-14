import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Oplaty za ESTA - Ile kosztuje wniosek?",
  description:
    "Oficjalna oplata za ESTA wynosi $21. Szczegoly dotyczace struktury kosztow, metod platnosci i ostrzezen przed falszywymi stronami.",
};

export default function Fee() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Oplaty" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Oplaty za wniosek ESTA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Oficjalna oplata za zlozenie wniosku ESTA wynosi <strong>$21 USD</strong>. Ponizej
        przedstawiamy szczegolowa strukture kosztow i akceptowane metody
        platnosci.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Struktura oplaty $21
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#f8f9fa]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1a365d]">
                  Skladnik
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1a365d]">
                  Kwota
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1a365d]">
                  Opis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Oplata za rozpatrzenie
                </td>
                <td className="p-3 border-b border-gray-100">$4</td>
                <td className="p-3 border-b border-gray-100">
                  Pobierana od wszystkich wnioskodawcow, niezwrotna
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Oplata za autoryzacje
                </td>
                <td className="p-3 border-b border-gray-100">$17</td>
                <td className="p-3 border-b border-gray-100">
                  Pobierana tylko w przypadku zatwierdzenia wniosku
                </td>
              </tr>
              <tr className="font-bold">
                <td className="p-3">Razem</td>
                <td className="p-3">$21</td>
                <td className="p-3">
                  Calkowita oplata przy zatwierdzeniu wniosku
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#f8f9fa] border-l-4 border-[#1a365d] p-4 rounded-r text-sm">
          <strong>Uwaga:</strong> Jesli wniosek zostanie odrzucony, pobierana
          jest tylko oplata za rozpatrzenie ($4). Oplata za autoryzacje ($17)
          nie jest wtedy naliczana.
        </div>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Akceptowane metody platnosci
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Karta kredytowa Visa</li>
          <li>Karta kredytowa Mastercard</li>
          <li>Karta kredytowa American Express</li>
          <li>Karta kredytowa Discover</li>
          <li>Karta debetowa (z logo Visa/Mastercard)</li>
          <li>PayPal</li>
        </ul>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Kiedy dokonywana jest platnosc?
        </h2>
        <p>
          Platnosc jest pobierana po wypelnieniu i wyslaniu formularza. Nalezy
          dokonac platnosci, aby wniosek zostal rozpatrzony. Bez platnosci
          wniosek nie zostanie przetworzony.
        </p>

        <h2
          className="text-2xl font-bold text-[#1a365d]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          Porownanie kosztow: oficjalna strona vs posrednicy
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-[#f8f9fa]">
              <tr>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1a365d]">
                  Zrodlo
                </th>
                <th className="text-left p-3 border-b border-gray-200 font-bold text-[#1a365d]">
                  Koszt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Oficjalna strona CBP
                </td>
                <td className="p-3 border-b border-gray-100 font-bold text-green-700">
                  $21
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-100">
                  Strony posrednikow
                </td>
                <td className="p-3 border-b border-gray-100 text-red-600">
                  $80 &mdash; $200+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border-l-4 border-[#c41e3a] p-4 rounded-r text-sm">
          <strong>Ostrzezenie:</strong> Wielu posrednikow prowadzi strony
          internetowe, ktore wygladaja jak oficjalne strony ESTA. Pobieraja
          zawyzone oplaty ($80-200) za wypelnienie tego samego formularza. Zawsze
          skladaj wniosek bezposrednio na{" "}
          <a
            href="https://esta.cbp.dhs.gov"
            className="text-[#1a365d] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            esta.cbp.dhs.gov
          </a>
          .
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
