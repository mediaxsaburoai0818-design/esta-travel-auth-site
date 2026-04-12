import Link from "next/link";
import DiagnosticTool from "@/components/DiagnosticTool";

export const metadata = {
  title: "Porównanie kosztów ESTA - Oficjalna strona vs usługi pośredników | ESTA Guide",
  description: "Dokładne porównanie kosztów wniosku ESTA. Różnice między oficjalną stroną ($21) a usługami pośredników ($80-200). Dowiedz się, co wybrać.",
  keywords: "ESTA koszty, porównanie cen, usługi pośredników, oficjalna strona, opłaty, cena",
  openGraph: {
    title: "Porównanie kosztów ESTA - Oficjalna strona vs usługi pośredników",
    description: "Oficjalna $21 vs pośrednicy $80-200. Zalety, wady i narzędzie diagnostyczne do optymalnego wyboru",
    type: "article",
  },
};

export default function CostComparisonPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Nagłówek strony */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            Porównanie kosztów ESTA
          </h1>
          <p className="text-xl text-gray-600">
            Dokładne porównanie kosztów i zakresu usług oficjalnej strony i pośredników
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Tabela porównawcza kosztów */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-bold text-2xl mb-6 text-blue-600">
              Tabela porównawcza cen
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-blue-600">
                    <th className="text-left py-4 px-4 font-bold">Pozycja</th>
                    <th className="text-center py-4 px-4 font-bold bg-blue-50">
                      Oficjalna strona<br />
                      <span className="text-2xl text-blue-600">$21</span>
                    </th>
                    <th className="text-center py-4 px-4 font-bold">
                      Pośrednik A<br />
                      <span className="text-2xl">$89</span>
                    </th>
                    <th className="text-center py-4 px-4 font-bold">
                      Pośrednik B<br />
                      <span className="text-2xl">$149</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 font-medium">Opłata podstawowa</td>
                    <td className="py-4 px-4 text-center bg-blue-50">$21</td>
                    <td className="py-4 px-4 text-center">$89</td>
                    <td className="py-4 px-4 text-center">$149</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Obsługa językowa</td>
                    <td className="py-4 px-4 text-center bg-blue-50">Głównie angielski<br /><span className="text-xs">(dostępny przewodnik)</span></td>
                    <td className="py-4 px-4 text-center">Pełna obsługa w języku polskim</td>
                    <td className="py-4 px-4 text-center">Pełna obsługa w języku polskim</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Wsparcie</td>
                    <td className="py-4 px-4 text-center bg-blue-50">Brak</td>
                    <td className="py-4 px-4 text-center">E-mail<br /><span className="text-xs">(pon.-pt. 10-18)</span></td>
                    <td className="py-4 px-4 text-center">Wsparcie 24/7<br /><span className="text-xs">(telefon i czat)</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Sprawdzanie błędów</td>
                    <td className="py-4 px-4 text-center bg-blue-50">Na własną odpowiedzialność</td>
                    <td className="py-4 px-4 text-center">✓ Tak</td>
                    <td className="py-4 px-4 text-center">✓ Tak</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Gwarancja zwrotu</td>
                    <td className="py-4 px-4 text-center bg-blue-50">-</td>
                    <td className="py-4 px-4 text-center">Zwrot przy odrzuceniu<br /><span className="text-xs">(warunki)</span></td>
                    <td className="py-4 px-4 text-center">Pełny zwrot przy odrzuceniu</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Korekty</td>
                    <td className="py-4 px-4 text-center bg-blue-50">Wymagany nowy wniosek</td>
                    <td className="py-4 px-4 text-center">1 bezpłatna korekta</td>
                    <td className="py-4 px-4 text-center">Nieograniczone korekty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Szczegóły oficjalnej strony */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                $21
              </div>
              <h2 className="font-bold text-2xl text-blue-600">
                Oficjalna strona (esta.cbp.dhs.gov)
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Zalety
                </h3>
                <ul className="list-disc pl-10 space-y-1 text-gray-700">
                  <li>Najtańsza opcja (tylko $21)</li>
                  <li>Wiarygodność oficjalnej strony</li>
                  <li>Bezpośrednie złożenie wniosku</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-red-600 mr-2">✗</span> Wady
                </h3>
                <ul className="list-disc pl-10 space-y-1 text-gray-700">
                  <li>Formularz w języku angielskim (dostępny jest przewodnik)</li>
                  <li>Brak wsparcia (na własną odpowiedzialność)</li>
                  <li>Brak możliwości korekty po złożeniu wniosku</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>Polecane dla:</strong><br />
                  - Osób biegle władających angielskim<br />
                  - Osób preferujących samodzielne załatwianie formalności<br />
                  - Osób chcących zminimalizować koszty
                </p>
              </div>
            </div>
          </section>

          {/* Szczegóły usług pośredników */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                $89-149
              </div>
              <h2 className="font-bold text-2xl text-orange-600">
                Usługi pośredników
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Zalety
                </h3>
                <ul className="list-disc pl-10 space-y-1 text-gray-700">
                  <li>Pełna obsługa w języku polskim</li>
                  <li>Weryfikacja błędów zapobiegająca pomyłkom</li>
                  <li>Gwarancja zwrotu pieniędzy (w zależności od usługi)</li>
                  <li>Wsparcie 24/7 (w zależności od usługi)</li>
                  <li>Możliwość korekty w cenie</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-red-600 mr-2">✗</span> Wady
                </h3>
                <ul className="list-disc pl-10 space-y-1 text-gray-700">
                  <li>Koszt 4-7 razy wyższy niż na oficjalnej stronie</li>
                  <li>Zakres usług różni się w zależności od firmy</li>
                  <li>Konieczność uważania na fałszywe strony</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>Polecane dla:</strong><br />
                  - Osób nieznających angielskiego<br />
                  - Osób niepewnych procedury<br />
                  - Osób potrzebujących wsparcia<br />
                  - Osób, którym brakuje czasu
                </p>
              </div>
            </div>
          </section>

          {/* Narzędzie diagnostyczne */}
          <DiagnosticTool />

          {/* Ostrzeżenie przed oszustwami */}
          <section className="bg-red-50 border-2 border-red-500 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-red-600 text-4xl">⚠️</div>
              <div>
                <h2 className="font-bold text-2xl text-red-900 mb-4">
                  Uwaga na fałszywe strony
                </h2>
                <div className="space-y-3 text-gray-800">
                  <p>
                    Korzystając z usług pośredników, zwróć uwagę na następujące kwestie:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Istnieją fałszywe strony podszywające się pod oficjalną</strong><br />
                      Jedyna oficjalna strona to <strong>https://esta.cbp.dhs.gov</strong>.
                    </li>
                    <li>
                      <strong>Unikaj stron żądających nienormalnie wysokich opłat</strong><br />
                      Typowy zakres cen to $80-150. Powyżej $200 to za dużo.
                    </li>
                    <li>
                      <strong>Sprawdź dane firmy</strong><br />
                      Upewnij się, że podany jest adres, numer telefonu i nazwa firmy.
                    </li>
                    <li>
                      <strong>Sprawdź warunki gwarancji zwrotu</strong><br />
                      Nawet jeśli napisano &quot;gwarancja zwrotu&quot;, warunki mogą być restrykcyjne.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Najczęściej zadawane pytania */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-bold text-2xl mb-6 text-blue-600">
              Najczęściej zadawane pytania dotyczące kosztów
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  P: Czy w przypadku odrzucenia wniosku otrzymam zwrot pieniędzy?
                </h3>
                <p className="text-gray-700">
                  O: Na oficjalnej stronie opłata za rozpatrzenie ($4) nie podlega zwrotowi, ale opłata za zatwierdzenie ($17) jest pobierana tylko w przypadku pozytywnej decyzji.
                  W przypadku usług pośredników polityka zwrotów różni się w zależności od firmy.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  P: Co jeśli nie mam karty kredytowej?
                </h3>
                <p className="text-gray-700">
                  O: Na oficjalnej stronie można również płacić przez PayPal. Niektórzy pośrednicy oferują także przelewy bankowe lub inne metody płatności.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">
                  P: Czy składając wniosek grupowy, można uzyskać zniżkę?
                </h3>
                <p className="text-gray-700">
                  O: Na oficjalnej stronie nie ma zniżek (opłata $21 za osobę). Niektórzy pośrednicy oferują zniżki grupowe.
                </p>
              </div>
            </div>
          </section>

          {/* Następne kroki */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="font-montserrat font-bold text-2xl mb-4">
              Gotowy do złożenia wniosku?
            </h2>
            <p className="mb-6 opacity-90">
              Sprawdź szczegółową procedurę w naszym przewodniku
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="/application-guide"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Procedura składania wniosku
              </Link>
              <Link
                href="/faq"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition border-2 border-white"
              >
                FAQ
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
