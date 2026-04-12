import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Sekcja hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            ELECTRONIC SYSTEM FOR
            <br />
            TRAVEL AUTHORIZATION
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Kompletny przewodnik po systemie ESTA
          </p>
          <p className="text-lg mb-8 opacity-80">
            Elektroniczna autoryzacja wymagana do podróży do USA z krajów uczestniczących w Programie Ruchu Bezwizowego
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/application-guide"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Procedura składania wniosku →
            </Link>
            <Link
              href="/cost-comparison"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition border-2 border-white"
            >
              Porównaj koszty
            </Link>
          </div>
        </div>
      </section>

      {/* 3 kluczowe informacje */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kto musi złożyć wniosek */}
            <div className="border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition">
              <div className="text-blue-600 text-3xl mb-3">👥</div>
              <h3 className="font-bold text-lg mb-3">Kto musi złożyć wniosek</h3>
              <p className="text-gray-700 text-sm mb-4">
                Obywatele krajów uprawnionych do bezwizowego wjazdu do USA
              </p>
              <Link href="/who-needs-esta" className="text-blue-600 text-sm font-medium hover:underline">
                Dowiedz się więcej →
              </Link>
            </div>

            {/* Opłaty */}
            <div className="border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition">
              <div className="text-blue-600 text-3xl mb-3">💵</div>
              <h3 className="font-bold text-lg mb-3">Opłaty</h3>
              <p className="text-gray-700 text-sm mb-4">
                Oficjalna strona: $21<br />
                Usługi pośredników: $80-200
              </p>
              <Link href="/cost-comparison" className="text-blue-600 text-sm font-medium hover:underline">
                Dowiedz się więcej →
              </Link>
            </div>

            {/* Czas rozpatrywania */}
            <div className="border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition">
              <div className="text-blue-600 text-3xl mb-3">⏱️</div>
              <h3 className="font-bold text-lg mb-3">Czas rozpatrywania</h3>
              <p className="text-gray-700 text-sm mb-4">
                Zwykle do 72 godzin<br />
                Większość wniosków zatwierdzana w kilka minut
              </p>
              <Link href="/application-guide" className="text-blue-600 text-sm font-medium hover:underline">
                Dowiedz się więcej →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Czym jest ESTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-8">
            Czym jest ESTA?
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              ESTA (Electronic System for Travel Authorization) to system, w którym obywatele krajów
              uczestniczących w Programie Ruchu Bezwizowego (VWP) muszą uzyskać elektroniczną autoryzację
              podróży przed wyjazdem do Stanów Zjednoczonych.
            </p>
            <p className="text-gray-700 mb-4">
              System został wprowadzony w 2009 roku i jest wymagany w przypadku wizyt turystycznych
              lub biznesowych trwających do 90 dni. Wniosek można łatwo złożyć online,
              a po zatwierdzeniu autoryzacja jest ważna przez 2 lata.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-sm text-gray-800">
                <strong>Ważne:</strong> ESTA nie gwarantuje wjazdu do Stanów Zjednoczonych.
                Ostateczną decyzję o wjeździe podejmuje funkcjonariusz kontroli granicznej po przybyciu do USA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 proste kroki */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
            Złóż wniosek w 3 prostych krokach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Krok 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-3">Wypełnij formularz</h3>
              <p className="text-gray-600">
                Wypełnij formularz online na oficjalnej stronie.
                Zajmie to około 15-20 minut.
              </p>
            </div>

            {/* Krok 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-3">Dokonaj płatności</h3>
              <p className="text-gray-600">
                Zapłać $21 kartą kredytową lub przez PayPal.
              </p>
            </div>

            {/* Krok 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-3">Oczekuj na zatwierdzenie</h3>
              <p className="text-gray-600">
                W większości przypadków zatwierdzenie następuje w ciągu kilku minut.
                Maksymalnie może to potrwać do 72 godzin.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/application-guide"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              Zobacz szczegółową procedurę →
            </Link>
          </div>
        </div>
      </section>

      {/* Najczęściej zadawane pytania */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-center mb-12">
            Najczęściej zadawane pytania
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Pytanie 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">P: Jaka jest różnica między ESTA a wizą?</h3>
              <p className="text-gray-700">
                O: ESTA to elektroniczna autoryzacja do krótkich pobytów (do 90 dni) w celach turystycznych lub biznesowych, którą można złożyć online.
                Koszt wynosi $21, a zatwierdzenie trwa zwykle od kilku minut do 72 godzin.
                Z kolei wiza jest wymagana do dłuższych pobytów lub pracy, wymaga rozmowy w ambasadzie, kosztuje co najmniej $185, a jej rozpatrzenie trwa od kilku tygodni do kilku miesięcy.
              </p>
            </div>

            {/* Pytanie 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">P: Ile czasu zajmuje złożenie wniosku?</h3>
              <p className="text-gray-700">
                O: Wypełnienie formularza zajmuje około 15-20 minut. Zatwierdzenie następuje zwykle w ciągu kilku minut,
                ale w niektórych przypadkach może potrwać do 72 godzin. Dlatego zalecamy złożenie wniosku co najmniej 72 godziny przed planowaną podróżą.
              </p>
            </div>

            {/* Pytanie 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">P: Co się stanie, jeśli wniosek ESTA zostanie odrzucony?</h3>
              <p className="text-gray-700">
                O: W przypadku odrzucenia wniosku ESTA konieczne jest złożenie wniosku o wizę turystyczną B-2 w ambasadzie USA.
                Opłata za rozpatrzenie w wysokości $4 nie podlega zwrotowi, natomiast opłata za zatwierdzenie w wysokości $17 jest pobierana tylko w przypadku pozytywnej decyzji.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-blue-600 font-bold text-lg hover:underline"
            >
              Zobacz wszystkie pytania FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* Ostrzeżenie przed oszustwami */}
      <section className="py-12 bg-red-50 border-t-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-red-600 text-4xl">⚠️</div>
              <div>
                <h2 className="font-montserrat font-bold text-2xl text-red-900 mb-4">
                  Uwaga na fałszywe strony internetowe
                </h2>
                <p className="text-gray-800 mb-4">
                  Wniosek ESTA można złożyć wyłącznie na oficjalnej stronie (<strong>https://esta.cbp.dhs.gov</strong>).
                  Oficjalna opłata wynosi $21.
                </p>
                <p className="text-gray-800 mb-4">
                  Uważaj na fałszywe strony i oszustów, którzy oferują usługi pośrednictwa lub przyspieszonego
                  rozpatrywania wniosków ESTA, pobierając za to wygórowane opłaty (ponad $100).
                </p>
                <p className="text-gray-800">
                  Jeśli zdecydujesz się skorzystać z usług pośrednika, dokładnie sprawdź zakres usług i cenę
                  przed podjęciem decyzji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl mb-6">
            Zacznij przygotowania do podróży do USA
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Sprawdź szczegółową procedurę składania wniosku, porównanie kosztów i najczęściej zadawane pytania
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/application-guide"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Procedura składania wniosku
            </Link>
            <Link
              href="/cost-comparison"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition border-2 border-white"
            >
              Porównanie kosztów
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
