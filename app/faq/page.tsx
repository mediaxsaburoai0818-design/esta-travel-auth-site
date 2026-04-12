import Link from "next/link";

export const metadata = {
  title: "Najczęściej zadawane pytania (FAQ) o ESTA - od wniosku po podróż | ESTA Guide",
  description: "Kompleksowe odpowiedzi na najczęściej zadawane pytania dotyczące ESTA. Procedura składania wniosku, koszty, ważność, rozwiązywanie problemów i więcej.",
  keywords: "ESTA FAQ, najczęściej zadawane pytania, problemy, odrzucenie, ważność, różnica od wizy",
  openGraph: {
    title: "Najczęściej zadawane pytania (FAQ) o ESTA",
    description: "Ponad 25 pytań i odpowiedzi - od wniosku po podróż. Podstawowe informacje, koszty i rozwiązywanie problemów",
    type: "article",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Podstawowe informacje",
      questions: [
        {
          q: "Czym jest ESTA?",
          a: "ESTA (Electronic System for Travel Authorization) to elektroniczna autoryzacja podróży, którą muszą uzyskać obywatele krajów uczestniczących w Programie Ruchu Bezwizowego przed podróżą do USA. System został wprowadzony w 2009 roku i jest wymagany w przypadku wizyt turystycznych lub biznesowych trwających do 90 dni."
        },
        {
          q: "Czy obywatele Polski potrzebują ESTA?",
          a: "Tak. Polska uczestniczy w Programie Ruchu Bezwizowego, więc w przypadku wizyt turystycznych lub biznesowych w USA trwających do 90 dni wymagane jest posiadanie ESTA. Jeśli jednak posiadasz ważną wizę amerykańską, ESTA nie jest potrzebna."
        },
        {
          q: "Jaka jest różnica między ESTA a wizą?",
          a: "ESTA to elektroniczna autoryzacja do krótkich pobytów (do 90 dni) w celach turystycznych lub biznesowych, którą można złożyć online ($21). Wiza jest wymagana do dłuższych pobytów lub pracy, wymaga rozmowy w ambasadzie (co najmniej $185), a jej rozpatrzenie trwa od kilku tygodni do kilku miesięcy."
        },
        {
          q: "Jak długo jest ważna ESTA?",
          a: "ESTA jest ważna przez 2 lata od daty wydania lub do daty wygaśnięcia paszportu, w zależności od tego, co nastąpi wcześniej. W okresie ważności można wielokrotnie wjeżdżać do USA."
        }
      ]
    },
    {
      category: "Procedura składania wniosku",
      questions: [
        {
          q: "Ile czasu zajmuje złożenie wniosku?",
          a: "Wypełnienie formularza zajmuje około 15-20 minut. Zatwierdzenie następuje zwykle w ciągu kilku minut, ale w niektórych przypadkach może potrwać do 72 godzin. Zalecamy złożenie wniosku co najmniej 72 godziny przed planowaną podróżą."
        },
        {
          q: "Ile dni przed podróżą należy złożyć wniosek?",
          a: "Wniosek należy złożyć co najmniej 72 godziny przed planowaną datą podróży. Jednak ze względu na możliwość dłuższego rozpatrywania, idealnie jest złożyć wniosek co najmniej tydzień wcześniej. ESTA jest ważna 2 lata, więc można ją złożyć natychmiast po ustaleniu planów podróży."
        },
        {
          q: "Co się stanie, jeśli wymienię paszport?",
          a: "W przypadku wymiany paszportu konieczne jest ponowne złożenie wniosku ESTA z nowym paszportem. ESTA jest powiązana z numerem paszportu, więc zmiana numeru paszportu powoduje unieważnienie poprzedniej ESTA."
        },
        {
          q: "Czy można złożyć wniosek grupowy?",
          a: "Tak, oficjalna strona oferuje funkcję składania wniosków grupowych, która umożliwia złożenie kilku wniosków jednocześnie. Opłata jest pobierana za każdą osobę ($21/osobę)."
        }
      ]
    },
    {
      category: "Koszty i płatności",
      questions: [
        {
          q: "Ile kosztuje ESTA?",
          a: "Oficjalna opłata wynosi $21. W tym: opłata za rozpatrzenie $4 i opłata za zatwierdzenie $17. Usługi pośredników kosztują od $80 do $200."
        },
        {
          q: "Jakie są dostępne metody płatności?",
          a: "Na oficjalnej stronie można płacić kartą kredytową (Visa, Mastercard, American Express, Discover) lub przez PayPal. Akceptowane są również karty debetowe."
        },
        {
          q: "Czy w przypadku odrzucenia wniosku otrzymam zwrot pieniędzy?",
          a: "Na oficjalnej stronie opłata za rozpatrzenie ($4) nie podlega zwrotowi, ale opłata za zatwierdzenie ($17) jest pobierana tylko w przypadku pozytywnej decyzji. Oznacza to, że w przypadku odrzucenia poniesiesz koszt jedynie $4. Polityka zwrotów pośredników różni się w zależności od firmy."
        }
      ]
    },
    {
      category: "Rozwiązywanie problemów",
      questions: [
        {
          q: "Mój wniosek został odrzucony. Co robić?",
          a: "W przypadku odrzucenia ESTA konieczne jest złożenie wniosku o wizę turystyczną B-2 w ambasadzie USA. Wniosek wizowy wymaga rozmowy kwalifikacyjnej, a koszt wynosi $185. Powód odrzucenia nie jest podawany, więc jeśli masz jakieś przypuszczenia, weź je pod uwagę przy składaniu wniosku wizowego."
        },
        {
          q: "Podałem błędne informacje. Czy mogę je poprawić?",
          a: "Korekta po złożeniu wniosku nie jest możliwa. Jednak niektóre dane, takie jak adres e-mail czy informacje o podróży, można zaktualizować po zatwierdzeniu w sekcji &quot;Update Application&quot;. W przypadku błędu w ważnych danych, takich jak imię i nazwisko lub numer paszportu, konieczne jest złożenie nowego wniosku."
        },
        {
          q: "Minęło ponad 72 godziny i nadal nie mam odpowiedzi. Czy to normalne?",
          a: "Zwykle wynik jest dostępny w ciągu 72 godzin. Jeśli trwa dłużej, sprawdź status wniosku na oficjalnej stronie. Jeśli status to &quot;Pending&quot; (W trakcie rozpatrywania), należy poczekać. W razie wątpliwości można skontaktować się z amerykańską Służbą Celną i Ochrony Granic (CBP)."
        },
        {
          q: "ESTA została zatwierdzona, ale czy muszę ją wydrukować?",
          a: "Wydruk nie jest wymagany. ESTA jest elektronicznie powiązana z paszportem, więc linie lotnicze i funkcjonariusze kontroli granicznej mogą ją zweryfikować w systemie. Jednak dla bezpieczeństwa zalecamy zapisanie numeru zatwierdzenia lub zachowanie e-maila z potwierdzeniem."
        }
      ]
    },
    {
      category: "Podróż",
      questions: [
        {
          q: "Jak długo można przebywać w USA z ESTA?",
          a: "Z ESTA można przebywać w USA maksymalnie 90 dni podczas jednej wizyty. Obowiązuje również limit 90 dni łącznie w ciągu 180 dni, więc osoby często odwiedzające USA powinny na to zwrócić uwagę."
        },
        {
          q: "Czy z ESTA można pracować w USA?",
          a: "Nie, ESTA nie uprawnia do pracy w USA. Do pracy w USA potrzebna jest wiza pracownicza (np. H-1B, L-1). Wolontariat nieodpłatny lub udział w spotkaniach biznesowych jest dozwolony, ale praca zarobkowa jest nielegalna."
        },
        {
          q: "Czy ESTA jest potrzebna przy wjeździe przez Kanadę lub Meksyk?",
          a: "Tak, ESTA jest wymagana również przy wjeździe do USA drogą lądową z Kanady lub Meksyku. Należy pamiętać, że dni spędzone w Kanadzie lub Meksyku są wliczane do 90-dniowego limitu pobytu."
        },
        {
          q: "Czy posiadanie ESTA gwarantuje wjazd do USA?",
          a: "Nie. ESTA to autoryzacja podróży, a nie gwarancja wjazdu. Ostateczną decyzję o wjeździe podejmuje funkcjonariusz kontroli granicznej po przybyciu do USA. Ważne jest posiadanie odpowiednich dokumentów i szczere odpowiadanie na pytania."
        }
      ]
    },
    {
      category: "Szczególne przypadki",
      questions: [
        {
          q: "Co w przypadku podwójnego obywatelstwa?",
          a: "Osoby z podwójnym obywatelstwem mogą złożyć wniosek ESTA, używając paszportu kraju uczestniczącego w Programie Ruchu Bezwizowego. Jednak jeśli posiadasz również obywatelstwo określonych krajów (Iran, Irak, Korea Północna, Sudan, Syria, Libia, Somalia, Jemen) lub odwiedziłeś te kraje po 2011 roku, ESTA nie ma zastosowania i konieczne jest złożenie wniosku o wizę."
        },
        {
          q: "Czy dzieci również muszą złożyć wniosek?",
          a: "Tak, każdy podróżny, niezależnie od wieku, w tym niemowlęta, musi posiadać ESTA. Rodzice mogą złożyć wniosek w imieniu dziecka, ale każda osoba musi mieć własny paszport i ESTA."
        },
        {
          q: "Co w przypadku posiadania rejestru karnego?",
          a: "Drobne wykroczenia drogowe (przekroczenie prędkości, mandaty parkingowe) zwykle nie stanowią problemu. Jednak w przypadku aresztowania lub wyroku skazującego należy uczciwie odpowiedzieć na pytania kwalifikacyjne. W niektórych przypadkach ESTA może zostać odrzucona i konieczne będzie złożenie wniosku o wizę."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Nagłówek strony */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h1>
          <p className="text-xl text-gray-600">
            Odpowiedzi na pytania dotyczące wniosku ESTA
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-bold text-2xl mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-l-4 border-gray-200 pl-4 hover:border-blue-400 transition">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      P: {faq.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      O: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Nie znalazłeś odpowiedzi? */}
          <section className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
            <div className="text-center">
              <div className="text-4xl mb-4">❓</div>
              <h2 className="font-bold text-2xl mb-4">
                Nie znalazłeś odpowiedzi na swoje pytanie?
              </h2>
              <p className="text-gray-700 mb-6">
                Więcej szczegółowych informacji znajdziesz na poniższych stronach
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/application-guide"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Procedura składania wniosku
                </Link>
                <Link
                  href="/cost-comparison"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition border-2 border-blue-600"
                >
                  Porównanie kosztów
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600">
                  Oficjalne źródła informacji:<br />
                  <a
                    href="https://esta.cbp.dhs.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Oficjalna strona ESTA
                  </a>
                  {" "}lub{" "}
                  <a
                    href="https://pl.usembassy.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Ambasada USA w Polsce
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Ważne uwagi */}
          <section className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-yellow-600 text-4xl">⚠️</div>
              <div>
                <h2 className="font-bold text-2xl text-yellow-900 mb-4">
                  Ważne uwagi
                </h2>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Informacje na tej stronie mają charakter ogólny. W przypadku indywidualnych sytuacji prosimy o kontakt z oficjalną stroną lub ambasadą USA.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Przy składaniu wniosku ESTA podawaj dokładne informacje. Podanie fałszywych danych może skutkować zakazem wjazdu do USA.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Uważaj na fałszywe strony. Jedyna oficjalna strona to <strong>https://esta.cbp.dhs.gov</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
