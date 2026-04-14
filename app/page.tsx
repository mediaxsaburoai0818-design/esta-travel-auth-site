import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1a365d] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-noto-serif), serif",
                color: "white",
              }}
            >
              Elektroniczna Autoryzacja
              <br />
              Podrozy do USA
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-200 leading-relaxed">
              Kompletny przewodnik po systemie ESTA &mdash; wszystko, co musisz
              wiedziec o autoryzacji podrozy do Stanow Zjednoczonych.
            </p>
            <p className="text-sm mb-8 text-gray-300">
              Program Ruchu Bezwizowego (VWP) | Polska jest krajem uprawnionym
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/apply/"
                className="bg-[#c41e3a] hover:bg-[#a01830] text-white px-7 py-3 rounded font-bold text-base transition text-center"
              >
                Zloz wniosek ESTA
              </Link>
              <Link
                href="/esta-info/what-is-esta/"
                className="bg-white/10 hover:bg-white/20 text-white px-7 py-3 rounded font-bold text-base transition border border-white/30 text-center"
              >
                Dowiedz sie wiecej
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-[#1a365d]">$21</p>
              <p className="text-sm text-gray-500 mt-1">Oficjalna oplata</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1a365d]">72h</p>
              <p className="text-sm text-gray-500 mt-1">
                Maks. czas rozpatrywania
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1a365d]">2 lata</p>
              <p className="text-sm text-gray-500 mt-1">Okres waznosci</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1a365d]">90 dni</p>
              <p className="text-sm text-gray-500 mt-1">Maks. pobyt w USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESTA overview */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
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
            className="text-[#1a365d] font-bold underline underline-offset-2 hover:text-[#2a4a7f] transition"
          >
            Czytaj wiecej o ESTA &rarr;
          </Link>
        </div>
      </section>

      {/* Application steps */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-8"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Jak zlozyc wniosek ESTA?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-bold text-[#1a365d] mb-1">
                  Przygotuj dokumenty
                </h3>
                <p className="text-gray-600 text-sm">
                  Przygotuj paszport biometryczny, dane kontaktowe i informacje
                  o podrozy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-bold text-[#1a365d] mb-1">
                  Wypelnij formularz online
                </h3>
                <p className="text-gray-600 text-sm">
                  Wypelnij formularz na oficjalnej stronie CBP. Zajmie to okolo
                  15-20 minut.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-bold text-[#1a365d] mb-1">
                  Dokonaj platnosci ($21)
                </h3>
                <p className="text-gray-600 text-sm">
                  Zaplac karta kredytowa lub debetowa. Akceptowane sa Visa,
                  Mastercard i PayPal.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <h3 className="font-bold text-[#1a365d] mb-1">
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
              className="text-[#1a365d] font-bold underline underline-offset-2 hover:text-[#2a4a7f] transition"
            >
              Szczegolowy przewodnik po procedurze &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-8"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            Najczesciej zadawane pytania
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-5">
              <h3 className="font-bold text-[#1a365d] mb-2">
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
              <h3 className="font-bold text-[#1a365d] mb-2">
                Ile czasu zajmuje zlozenie wniosku?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wypelnienie formularza zajmuje okolo 15-20 minut. Zatwierdzenie
                nastepuje zwykle w ciagu kilku minut, ale moze potrwac do 72
                godzin.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-5">
              <h3 className="font-bold text-[#1a365d] mb-2">
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
              className="text-[#1a365d] font-bold underline underline-offset-2 hover:text-[#2a4a7f] transition"
            >
              Zobacz wszystkie pytania FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-8"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
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
                className="block bg-white border border-gray-200 rounded p-4 hover:border-[#1a365d] transition"
              >
                <h3 className="font-bold text-[#1a365d] text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a365d] text-white text-center">
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
          <p className="text-gray-300 mb-8">
            Przygotuj paszport i wypelnij formularz online. Caly proces zajmuje
            okolo 15-20 minut.
          </p>
          <Link
            href="/apply/"
            className="inline-block bg-[#c41e3a] hover:bg-[#a01830] text-white px-8 py-3 rounded font-bold transition"
          >
            Zloz wniosek ESTA
          </Link>
        </div>
      </section>
    </div>
  );
}
