import Link from "next/link";
import DiagnosticTool from "@/components/DiagnosticTool";

export const metadata = {
  title: "Porownanie kosztow ESTA - Oficjalna strona vs uslugi posrednikow | ESTA Guide",
  description: "Dokladne porownanie kosztow wniosku ESTA. Roznice miedzy oficjalna strona ($21) a uslugami posrednikow ($80-200). Dowiedz sie, co wybrac.",
  keywords: "ESTA koszty, porownanie cen, uslugi posrednikow, oficjalna strona, oplaty, cena",
  openGraph: {
    title: "Porownanie kosztow ESTA - Oficjalna strona vs uslugi posrednikow",
    description: "Oficjalna $21 vs posrednicy $80-200. Zalety, wady i narzedzie diagnostyczne do optymalnego wyboru",
    type: "article",
  },
};

export default function CostComparisonPage() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#0f2440] via-[#1a365d] to-[#234681] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center text-sm text-blue-300 mb-4">
              <Link href="/" className="hover:text-white transition">Strona glowna</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white">Porownanie kosztow</span>
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Porownanie kosztow ESTA
            </h1>
            <p className="text-lg text-blue-200">
              Dokladne porownanie kosztow i zakresu uslug oficjalnej strony i posrednikow
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#f7fafc] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Price comparison table */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#ebf4ff] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl text-[#1a365d]">
                  Tabela porownawcza cen
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#1a365d]">
                      <th className="text-left py-4 px-4 font-bold text-[#1a365d]">Pozycja</th>
                      <th className="text-center py-4 px-4 font-bold bg-[#ebf4ff] rounded-t-lg">
                        <span className="text-[#1a365d]">Oficjalna strona</span><br />
                        <span className="text-2xl text-[#2b6cb0]">$21</span>
                      </th>
                      <th className="text-center py-4 px-4 font-bold">
                        <span className="text-[#1a365d]">Posrednik A</span><br />
                        <span className="text-2xl text-gray-600">$89</span>
                      </th>
                      <th className="text-center py-4 px-4 font-bold">
                        <span className="text-[#1a365d]">Posrednik B</span><br />
                        <span className="text-2xl text-gray-600">$149</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { label: "Oplata podstawowa", a: "$21", b: "$89", c: "$149" },
                      { label: "Obsluga jezykowa", a: "Glownie angielski", b: "Pelna obsluga PL", c: "Pelna obsluga PL" },
                      { label: "Wsparcie", a: "Brak", b: "E-mail (pn-pt)", c: "Wsparcie 24/7" },
                      { label: "Sprawdzanie bledow", a: "Na wlasna odpow.", b: "Tak", c: "Tak" },
                      { label: "Gwarancja zwrotu", a: "-", b: "Warunki", c: "Pelny zwrot" },
                      { label: "Korekty", a: "Nowy wniosek", b: "1 bezplatna", c: "Nieograniczone" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition">
                        <td className="py-4 px-4 font-medium text-[#1a365d]">{row.label}</td>
                        <td className="py-4 px-4 text-center bg-[#ebf4ff]/50 text-sm">{row.a}</td>
                        <td className="py-4 px-4 text-center text-sm">{row.b}</td>
                        <td className="py-4 px-4 text-center text-sm">{row.c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Official site details */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#1a365d] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  $21
                </div>
                <h2 className="font-bold text-2xl text-[#1a365d]">
                  Oficjalna strona (esta.cbp.dhs.gov)
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-3 flex items-center text-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Zalety
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">&bull;</span>Najtansza opcja (tylko $21)</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">&bull;</span>Wiarygodnosc oficjalnej strony</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">&bull;</span>Bezposrednie zlozenie wniosku</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-3 flex items-center text-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Wady
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-red-400 mr-2 mt-0.5">&bull;</span>Formularz w jezyku angielskim</li>
                    <li className="flex items-start"><span className="text-red-400 mr-2 mt-0.5">&bull;</span>Brak wsparcia</li>
                    <li className="flex items-start"><span className="text-red-400 mr-2 mt-0.5">&bull;</span>Brak mozliwosci korekty</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#ebf4ff] border-l-4 border-[#2b6cb0] p-4 mt-6 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Polecane dla:</strong> Osob biegle wladajacych angielskim, preferujacych samodzielne zalatwianie formalnosci i chcacych zminimalizowac koszty.
                </p>
              </div>
            </section>

            {/* Agent details */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-[#d69e2e] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  $89+
                </div>
                <h2 className="font-bold text-2xl text-[#d69e2e]">
                  Uslugi posrednikow
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-3 flex items-center text-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Zalety
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">&bull;</span>Pelna obsluga w jezyku polskim</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">&bull;</span>Weryfikacja bledow</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">&bull;</span>Gwarancja zwrotu pieniedzy</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">&bull;</span>Wsparcie 24/7</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 mt-0.5">&bull;</span>Mozliwosc korekty w cenie</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-3 flex items-center text-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Wady
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start"><span className="text-red-400 mr-2 mt-0.5">&bull;</span>Koszt 4-7 razy wyzszy</li>
                    <li className="flex items-start"><span className="text-red-400 mr-2 mt-0.5">&bull;</span>Rozny zakres uslug</li>
                    <li className="flex items-start"><span className="text-red-400 mr-2 mt-0.5">&bull;</span>Koniecznosc uwazania na oszustow</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-[#d69e2e] p-4 mt-6 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Polecane dla:</strong> Osob nieznajacych angielskiego, niepewnych procedury, potrzebujacych wsparcia lub ktorym brakuje czasu.
                </p>
              </div>
            </section>

            {/* Diagnostic Tool */}
            <DiagnosticTool />

            {/* Scam warning */}
            <section className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-2xl text-red-900 mb-4">
                    Uwaga na falszywe strony
                  </h2>
                  <div className="space-y-3 text-gray-700 text-sm">
                    <p>Korzystajac z uslug posrednikow, zwroc uwage na nastepujace kwestie:</p>
                    <ul className="space-y-2">
                      <li><strong>Istnieja falszywe strony podszywajace sie pod oficjalna</strong> - Jedyna oficjalna strona to <strong>https://esta.cbp.dhs.gov</strong>.</li>
                      <li><strong>Unikaj stron zadajacych nienormalnie wysokich oplat</strong> - Typowy zakres cen to $80-150. Powyzej $200 to za duzo.</li>
                      <li><strong>Sprawdz dane firmy</strong> - Upewnij sie, ze podany jest adres, numer telefonu i nazwa firmy.</li>
                      <li><strong>Sprawdz warunki gwarancji zwrotu</strong> - Nawet jesli napisano &quot;gwarancja zwrotu&quot;, warunki moga byc restrykcyjne.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ about costs */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#ebf4ff] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl text-[#1a365d]">
                  Najczesciej zadawane pytania dotyczace kosztow
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    q: "Czy w przypadku odrzucenia wniosku otrzymam zwrot pieniedzy?",
                    a: "Na oficjalnej stronie oplata za rozpatrzenie ($4) nie podlega zwrotowi, ale oplata za zatwierdzenie ($17) jest pobierana tylko w przypadku pozytywnej decyzji. Polityka zwrotow posrednikow rozni sie w zaleznosci od firmy."
                  },
                  {
                    q: "Co jesli nie mam karty kredytowej?",
                    a: "Na oficjalnej stronie mozna rowniez placic przez PayPal. Niektorzy posrednicy oferuja takze przelewy bankowe lub inne metody platnosci."
                  },
                  {
                    q: "Czy skladajac wniosek grupowy, mozna uzyskac znizke?",
                    a: "Na oficjalnej stronie nie ma znizek (oplata $21 za osobe). Niektorzy posrednicy oferuja znizki grupowe."
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-gray-200 pl-4 hover:border-[#2b6cb0] transition">
                    <h3 className="font-bold text-[#1a365d] mb-2">P: {item.q}</h3>
                    <p className="text-gray-600 text-sm">O: {item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#0f2440] via-[#1a365d] to-[#234681] text-white rounded-xl p-8 text-center">
              <h2 className="font-montserrat font-bold text-2xl mb-4">
                Gotowy do zlozenia wniosku?
              </h2>
              <p className="mb-6 text-blue-200">
                Sprawdz szczegolowa procedure w naszym przewodniku
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/application-guide"
                  className="bg-[#d69e2e] hover:bg-[#b7791f] text-white px-6 py-3 rounded-lg font-bold transition"
                >
                  Procedura skladania wniosku
                </Link>
                <Link
                  href="/faq"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition border border-white/30"
                >
                  FAQ
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
