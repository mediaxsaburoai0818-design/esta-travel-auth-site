import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Zalecane przegladarki - ESTA Online",
  description: "Informacje o zalecanych przegladarkach do korzystania z serwisu ESTA Online i oficjalnej strony ESTA.",
};

export default function Browser() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o stronie", href: "/site-info/about/" },
          { label: "Zalecane przegladarki" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Zalecane przegladarki
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Aby zapewnic najlepsze doswiadczenie podczas korzystania z serwisu ESTA
        Online oraz oficjalnej strony ESTA (esta.cbp.dhs.gov), zalecamy
        korzystanie z jednej z ponizszych przegladarek.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="heading-band"
        >
          Zalecane przegladarki
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: "Google Chrome",
              version: "Wersja 100+",
              desc: "Zalecana przeglądarka. Najlepsza kompatybilnosc z formularzami ESTA.",
            },
            {
              name: "Mozilla Firefox",
              version: "Wersja 100+",
              desc: "Dobra alternatywa z silnym naciskiem na prywatnosc.",
            },
            {
              name: "Microsoft Edge",
              version: "Wersja 100+",
              desc: "Wbudowana przeglądarka w systemie Windows 10/11.",
            },
            {
              name: "Apple Safari",
              version: "Wersja 15+",
              desc: "Domyslna przegladarka na urzadzeniach Apple (Mac, iPhone, iPad).",
            },
          ].map((browser) => (
            <div
              key={browser.name}
              className="border border-gray-200 rounded p-4"
            >
              <h3 className="font-bold text-[#022444] mb-1">
                {browser.name}
              </h3>
              <p className="text-xs text-gray-400 mb-2">{browser.version}</p>
              <p className="text-sm text-gray-600">{browser.desc}</p>
            </div>
          ))}
        </div>

        <h2
          className="heading-band"
        >
          Wymagania techniczne
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Obsluga JavaScript (wlaczona)</li>
          <li>Obsluga plikow cookies (wlaczona)</li>
          <li>Obsluga TLS 1.2 lub nowszego</li>
          <li>Minimalna rozdzielczosc ekranu: 320px szerokosc</li>
        </ul>

        <h2
          className="heading-band"
        >
          Przegladarki niewspierane
        </h2>
        <p className="text-sm">
          Nastepujace przegladarki nie sa oficjalnie wspierane i moga powodowac
          problemy z wyswietlaniem tresci:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Internet Explorer (wszystkie wersje)</li>
          <li>Starsze wersje przegladarek (sprzed 2022 roku)</li>
        </ul>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Przed zlozeniem wniosku ESTA na oficjalnej
          stronie CBP upewnij sie, ze uzywasz aktualnej wersji przegladarki i
          masz wlaczony JavaScript oraz cookies.
        </div>
      </div>
    </div>
  );
}
