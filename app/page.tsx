import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Navy gradient with pattern */}
      <section className="relative bg-gradient-to-br from-[#0f2440] via-[#1a365d] to-[#234681] text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#d69e2e]/20 border border-[#d69e2e]/40 text-[#ecc94b] rounded-full px-5 py-1.5 text-sm font-medium mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Oficjalny przewodnik po ESTA dla Polakow
            </div>

            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Elektroniczna Autoryzacja
              <br />
              <span className="text-[#ecc94b]">Podrozy do USA</span>
            </h1>
            <p className="text-lg md:text-xl mb-4 text-blue-100 max-w-2xl mx-auto">
              Kompletny przewodnik po systemie ESTA - wszystko, co musisz wiedziec
              o autoryzacji podrozy do Stanow Zjednoczonych
            </p>
            <p className="text-sm mb-10 text-blue-200/70">
              Program Ruchu Bezwizowego (VWP) | Polska jest krajem uprawnionym
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/application-guide"
                className="bg-[#d69e2e] hover:bg-[#b7791f] text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg shadow-[#d69e2e]/20 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Procedura skladania wniosku
              </Link>
              <Link
                href="/cost-comparison"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition border border-white/30 flex items-center justify-center backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Porownaj koszty
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 32C1200 28 1320 20 1380 16L1440 12V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f7fafc"/>
          </svg>
        </div>
      </section>

      {/* Key stats bar */}
      <section className="bg-[#f7fafc] pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto -mt-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#ebf4ff] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#1a365d]">$21</div>
              <div className="text-sm text-gray-500 mt-1">Oficjalna oplata</div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#ebf4ff] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#1a365d]">72h</div>
              <div className="text-sm text-gray-500 mt-1">Maks. czas rozpatrywania</div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#ebf4ff] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#1a365d]">2 lata</div>
              <div className="text-sm text-gray-500 mt-1">Okres waznosci</div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#ebf4ff] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#1a365d]">90 dni</div>
              <div className="text-sm text-gray-500 mt-1">Maks. pobyt w USA</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ESTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1a365d] mb-4">
                Czym jest ESTA?
              </h2>
              <div className="w-16 h-1 bg-[#d69e2e] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  ESTA (Electronic System for Travel Authorization) to system, w ktorym obywatele krajow
                  uczestniczacych w Programie Ruchu Bezwizowego (VWP) musza uzyskac elektroniczna autoryzacje
                  podrozy przed wyjazdem do Stanow Zjednoczonych.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  System zostal wprowadzony w 2009 roku i jest wymagany w przypadku wizyt turystycznych
                  lub biznesowych trwajacych do 90 dni. Wniosek mozna latwo zlozyc online,
                  a po zatwierdzeniu autoryzacja jest wazna przez 2 lata.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-[#1a365d]">Turystyka i biznes</span>
                    <p className="text-sm text-gray-500">Pobyty do 90 dni bez wizy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-[#1a365d]">Szybki proces</span>
                    <p className="text-sm text-gray-500">Zatwierdzenie zwykle w kilka minut</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-[#1a365d]">Wielokrotny wjazd</span>
                    <p className="text-sm text-gray-500">Wazna 2 lata, wielokrotne wizyty</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-[#1a365d]">Polska w programie VWP</span>
                    <p className="text-sm text-gray-500">Polacy moga korzystac z ESTA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ebf4ff] border-l-4 border-[#2b6cb0] p-4 mt-8 rounded-r-lg">
              <p className="text-sm text-gray-700">
                <strong>Wazne:</strong> ESTA nie gwarantuje wjazdu do Stanow Zjednoczonych.
                Ostateczna decyzje o wjezdzie podejmuje funkcjonariusz kontroli granicznej po przybyciu do USA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1a365d] mb-4">
              Zloz wniosek w 3 prostych krokach
            </h2>
            <div className="w-16 h-1 bg-[#d69e2e] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 text-center border-t-4 border-[#2b6cb0]">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-xl mb-3 text-[#1a365d]">Wypelnij formularz</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Wypelnij formularz online na oficjalnej stronie.
                  Zajmie to okolo 15-20 minut. Przygotuj paszport i dane kontaktowe.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 text-center border-t-4 border-[#d69e2e]">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-[#d69e2e] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-xl mb-3 text-[#1a365d]">Dokonaj platnosci</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Zaplac $21 karta kredytowa lub przez PayPal.
                  Akceptowane sa karty Visa, Mastercard, Amex.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 text-center border-t-4 border-[#2b6cb0]">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-xl mb-3 text-[#1a365d]">Oczekuj na zatwierdzenie</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  W wiekszosci przypadkow zatwierdzenie nastepuje w ciagu kilku minut.
                  Maksymalnie moze to potrwac do 72 godzin.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/application-guide"
              className="inline-flex items-center bg-[#1a365d] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#234681] transition shadow-lg"
            >
              Zobacz szczegolowa procedure
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Page links grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1a365d] mb-4">
              Przydatne informacje
            </h2>
            <div className="w-16 h-1 bg-[#d69e2e] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/application-guide" className="group block bg-[#f7fafc] rounded-xl p-6 border border-gray-200 hover:border-[#2b6cb0] hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#ebf4ff] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2b6cb0] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#2b6cb0] group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-[#1a365d] mb-2 group-hover:text-[#2b6cb0] transition">Procedura skladania wniosku</h3>
              <p className="text-sm text-gray-500">Krok po kroku: od przygotowania dokumentow do zatwierdzenia ESTA</p>
            </Link>

            <Link href="/cost-comparison" className="group block bg-[#f7fafc] rounded-xl p-6 border border-gray-200 hover:border-[#2b6cb0] hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#ebf4ff] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2b6cb0] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#2b6cb0] group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-[#1a365d] mb-2 group-hover:text-[#2b6cb0] transition">Porownanie kosztow</h3>
              <p className="text-sm text-gray-500">Oficjalna strona ($21) vs posrednicy ($80-200). Co wybrac?</p>
            </Link>

            <Link href="/faq" className="group block bg-[#f7fafc] rounded-xl p-6 border border-gray-200 hover:border-[#2b6cb0] hover:shadow-lg transition">
              <div className="w-14 h-14 bg-[#ebf4ff] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2b6cb0] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#2b6cb0] group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-[#1a365d] mb-2 group-hover:text-[#2b6cb0] transition">Najczesciej zadawane pytania</h3>
              <p className="text-sm text-gray-500">Odpowiedzi na ponad 25 pytan o ESTA, od wniosku po podrozowanie</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1a365d] mb-4">
              Najczesciej zadawane pytania
            </h2>
            <div className="w-16 h-1 bg-[#d69e2e] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
              <h3 className="font-bold text-[#1a365d] mb-2">Jaka jest roznica miedzy ESTA a wiza?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ESTA to elektroniczna autoryzacja do krotkich pobytow (do 90 dni) w celach turystycznych lub biznesowych, ktora mozna zlozyc online.
                Koszt wynosi $21. Wiza jest wymagana do dluzszych pobytow lub pracy, wymaga rozmowy w ambasadzie i kosztuje co najmniej $185.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
              <h3 className="font-bold text-[#1a365d] mb-2">Ile czasu zajmuje zlozenie wniosku?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wypelnienie formularza zajmuje okolo 15-20 minut. Zatwierdzenie nastepuje zwykle w ciagu kilku minut,
                ale w niektorych przypadkach moze potrwac do 72 godzin.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
              <h3 className="font-bold text-[#1a365d] mb-2">Co sie stanie, jesli wniosek ESTA zostanie odrzucony?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                W przypadku odrzucenia wniosku ESTA konieczne jest zlozenie wniosku o wize turystyczna B-2 w ambasadzie USA.
                Oplata za rozpatrzenie ($4) nie podlega zwrotowi.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center text-[#2b6cb0] font-bold hover:text-[#1a365d] transition"
            >
              Zobacz wszystkie pytania FAQ
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Scam warning */}
      <section className="py-12 bg-red-50 border-t-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="font-montserrat font-bold text-2xl text-red-900 mb-3">
                  Uwaga na falszywe strony internetowe
                </h2>
                <p className="text-gray-700 mb-3">
                  Wniosek ESTA mozna zlozyc wylacznie na oficjalnej stronie (<strong>https://esta.cbp.dhs.gov</strong>).
                  Oficjalna oplata wynosi $21.
                </p>
                <p className="text-gray-700">
                  Uwazaj na falszywe strony i oszustow, ktorzy oferuja uslugi posrednictwa lub przyspieszonego
                  rozpatrywania wnioskow ESTA, pobierajac za to wygorowane oplaty (ponad $100).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#0f2440] via-[#1a365d] to-[#234681] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Zacznij przygotowania do podrozy do USA
          </h2>
          <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
            Sprawdz szczegolowa procedure skladania wniosku, porownanie kosztow i najczesciej zadawane pytania
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/application-guide"
              className="bg-[#d69e2e] hover:bg-[#b7791f] text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg"
            >
              Procedura skladania wniosku
            </Link>
            <Link
              href="/cost-comparison"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition border border-white/30 backdrop-blur-sm"
            >
              Porownanie kosztow
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
