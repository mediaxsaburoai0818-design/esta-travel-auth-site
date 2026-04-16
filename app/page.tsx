import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white min-h-[400px] md:min-h-[520px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-whitehouse.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#022444]/85 to-[#022444]/70" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-28 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-lg"
              style={{
                fontFamily: "var(--font-noto-serif), serif",
              }}
            >
              Elektroniczna Autoryzacja
              <br />
              Podrozy do USA
            </h1>
            <p className="text-base md:text-xl mb-3 md:mb-4 leading-relaxed drop-shadow" style={{ color: "#d0d0d0" }}>
              Zlozenie wniosku zajmuje do 3 dni. Prosimy o wczesniejsze
              zalatwienie formalnosci.
            </p>
            <p className="text-xs md:text-sm mb-6 md:mb-8 drop-shadow" style={{ color: "#b0b0b0" }}>
              Program Ruchu Bezwizowego (VWP) | Polska jest krajem uprawnionym
            </p>
            <div className="flex flex-col gap-3 items-center mt-2 w-full" style={{ maxWidth: "360px", margin: "0 auto" }}>
              <Link
                href="/apply/"
                className="block w-full rounded bg-[#8d1812] hover:bg-[#6d120e] transition shadow-lg text-center"
                style={{ color: "white", textDecoration: "none", padding: "18px 24px" }}
              >
                <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>&#10003; Zloz wniosek ESTA</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Red border line below hero */}
      <div className="h-1 bg-[#8d1812]" />

      {/* Key facts */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#022444]">$21</p>
              <p className="text-sm text-gray-500 mt-2">Oficjalna oplata</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#022444]">72h</p>
              <p className="text-sm text-gray-500 mt-2">
                Maks. czas rozpatrywania
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#022444]">2 lata</p>
              <p className="text-sm text-gray-500 mt-2">Okres waznosci</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#022444]">90 dni</p>
              <p className="text-sm text-gray-500 mt-2">Maks. pobyt w USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTA overview */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Czym jest ESTA?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            ESTA (Electronic System for Travel Authorization) to elektroniczny
            system, w ktorym obywatele krajow uczestniczacych w Programie Ruchu
            Bezwizowego (VWP) musza uzyskac autoryzacje przed wyjazdem do Stanow
            Zjednoczonych. System zostal wprowadzony w 2009 roku.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Autoryzacja ESTA jest wymagana w przypadku wizyt turystycznych lub
            biznesowych trwajacych do 90 dni. Wniosek mozna zlozyc online, a po
            zatwierdzeniu jest wazna przez 2 lata. Polska jest jednym z krajow
            uprawnionych do udzialu w programie VWP.
          </p>
          <Link
            href="/esta-info/what-is-esta/"
            className="text-[#022444] font-bold underline underline-offset-2 hover:text-[#0a3a6b] transition"
          >
            Czytaj wiecej o ESTA &rarr;
          </Link>
        </div>
      </section>

      {/* Application steps */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Jak zlozyc wniosek ESTA?
          </h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#022444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-bold text-[#022444] mb-1">
                  Przygotuj dokumenty
                </h3>
                <p className="text-gray-600 text-sm">
                  Przygotuj paszport biometryczny, dane kontaktowe i informacje
                  o podrozy.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#022444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-bold text-[#022444] mb-1">
                  Wypelnij formularz online
                </h3>
                <p className="text-gray-600 text-sm">
                  Wypelnij formularz na oficjalnej stronie CBP. Zajmie to okolo
                  15-20 minut.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#022444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-bold text-[#022444] mb-1">
                  Dokonaj platnosci ($21)
                </h3>
                <p className="text-gray-600 text-sm">
                  Zaplac karta kredytowa lub debetowa. Akceptowane sa Visa,
                  Mastercard i PayPal.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#022444] text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <h3 className="font-bold text-[#022444] mb-1">
                  Oczekuj na zatwierdzenie
                </h3>
                <p className="text-gray-600 text-sm">
                  Zwykle zatwierdzenie nastepuje w ciagu kilku minut, ale moze
                  potrwac do 72 godzin.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/esta-info/application/"
              className="text-[#022444] font-bold underline underline-offset-2 hover:text-[#0a3a6b] transition"
            >
              Szczegolowy przewodnik po procedurze &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Najczesciej zadawane pytania
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5">
              <h3 className="font-bold text-[#022444] mb-2">
                Jaka jest roznica miedzy ESTA a wiza?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ESTA to elektroniczna autoryzacja do krotkich pobytow (do 90
                dni) w celach turystycznych lub biznesowych. Koszt wynosi $21.
                Wiza jest wymagana do dluzszych pobytow lub pracy, wymaga
                rozmowy w ambasadzie i kosztuje co najmniej $185.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="font-bold text-[#022444] mb-2">
                Ile czasu zajmuje zlozenie wniosku?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wypelnienie formularza zajmuje okolo 15-20 minut. Zatwierdzenie
                nastepuje zwykle w ciagu kilku minut, ale moze potrwac do 72
                godzin.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="font-bold text-[#022444] mb-2">
                Co sie stanie, jesli wniosek ESTA zostanie odrzucony?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                W przypadku odrzucenia wniosku ESTA konieczne jest zlozenie
                wniosku o wize turystyczna B-2 w ambasadzie USA. Oplata za
                rozpatrzenie ($4) nie podlega zwrotowi.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/faq/"
              className="text-[#022444] font-bold underline underline-offset-2 hover:text-[#0a3a6b] transition"
            >
              Zobacz wszystkie pytania FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="py-4 px-6 text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-6" style={{ backgroundColor: "#022444", color: "white" }}>
            Przydatne strony
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/esta-info/what-is-esta/",
                title: "Czym jest ESTA?",
                desc: "Podstawowe informacje o systemie ESTA",
              },
              {
                href: "/esta-info/application/",
                title: "Sposob skladania wniosku",
                desc: "Krok po kroku przez formularz",
              },
              {
                href: "/esta-info/fee/",
                title: "Oplaty za ESTA",
                desc: "Szczegoly dotyczace kosztow",
              },
              {
                href: "/esta-info/expiration/",
                title: "Okres waznosci",
                desc: "Kiedy odnowic autoryzacje ESTA",
              },
              {
                href: "/esta-info/status-check/",
                title: "Sprawdzenie statusu",
                desc: "Jak sprawdzic status wniosku",
              },
              {
                href: "/esta-info/official-cbp/",
                title: "Oficjalna strona CBP",
                desc: "Link do strony rzadowej",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-4 border-b border-gray-200 hover:bg-gray-50 transition"
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-sm mb-1" style={{ color: "#333", fontWeight: "bold" }}>
                  {item.title}
                </h3>
                <p className="text-xs" style={{ color: "#666" }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#022444] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-noto-serif), serif",
              color: "white",
            }}
          >
            Zacznij procedure skladania wniosku ESTA
          </h2>
          <p className="mb-8" style={{ color: "white" }}>
            Przygotuj paszport i wypelnij formularz online. Caly proces zajmuje
            okolo 15-20 minut.
          </p>
          <div style={{ maxWidth: "360px", margin: "0 auto" }}>
            <Link
              href="/apply/"
              className="block w-full rounded bg-[#8d1812] hover:bg-[#6d120e] transition shadow-lg text-center"
              style={{ color: "white", textDecoration: "none", padding: "18px 24px" }}
            >
              <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>&#10003; Zloz wniosek ESTA</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
