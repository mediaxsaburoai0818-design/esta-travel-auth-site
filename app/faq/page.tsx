import Link from "next/link";

export const metadata = {
  title: "Najczesciej zadawane pytania (FAQ) o ESTA - od wniosku po podroz | ESTA Guide",
  description: "Kompleksowe odpowiedzi na najczesciej zadawane pytania dotyczace ESTA. Procedura skladania wniosku, koszty, waznosc, rozwiazywanie problemow i wiecej.",
  keywords: "ESTA FAQ, najczesciej zadawane pytania, problemy, odrzucenie, waznosc, roznica od wizy",
  openGraph: {
    title: "Najczesciej zadawane pytania (FAQ) o ESTA",
    description: "Ponad 25 pytan i odpowiedzi - od wniosku po podroz. Podstawowe informacje, koszty i rozwiazywanie problemow",
    type: "article",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: "Podstawowe informacje",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      questions: [
        {
          q: "Czym jest ESTA?",
          a: "ESTA (Electronic System for Travel Authorization) to elektroniczna autoryzacja podrozy, ktora musza uzyskac obywatele krajow uczestniczacych w Programie Ruchu Bezwizowego przed podroza do USA. System zostal wprowadzony w 2009 roku i jest wymagany w przypadku wizyt turystycznych lub biznesowych trwajacych do 90 dni."
        },
        {
          q: "Czy obywatele Polski potrzebuja ESTA?",
          a: "Tak. Polska uczestniczy w Programie Ruchu Bezwizowego, wiec w przypadku wizyt turystycznych lub biznesowych w USA trwajacych do 90 dni wymagane jest posiadanie ESTA. Jesli jednak posiadasz wazna wize amerykanska, ESTA nie jest potrzebna."
        },
        {
          q: "Jaka jest roznica miedzy ESTA a wiza?",
          a: "ESTA to elektroniczna autoryzacja do krotkich pobytow (do 90 dni) w celach turystycznych lub biznesowych, ktora mozna zlozyc online ($21). Wiza jest wymagana do dluzszych pobytow lub pracy, wymaga rozmowy w ambasadzie (co najmniej $185), a jej rozpatrzenie trwa od kilku tygodni do kilku miesiecy."
        },
        {
          q: "Jak dlugo jest wazna ESTA?",
          a: "ESTA jest wazna przez 2 lata od daty wydania lub do daty wygasniecia paszportu, w zaleznosci od tego, co nastapi wczesniej. W okresie waznosci mozna wielokrotnie wjezdzac do USA."
        }
      ]
    },
    {
      category: "Procedura skladania wniosku",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      questions: [
        {
          q: "Ile czasu zajmuje zlozenie wniosku?",
          a: "Wypelnienie formularza zajmuje okolo 15-20 minut. Zatwierdzenie nastepuje zwykle w ciagu kilku minut, ale w niektorych przypadkach moze potrwac do 72 godzin. Zalecamy zlozenie wniosku co najmniej 72 godziny przed planowana podroza."
        },
        {
          q: "Ile dni przed podroza nalezy zlozyc wniosek?",
          a: "Wniosek nalezy zlozyc co najmniej 72 godziny przed planowana data podrozy. Jednak ze wzgledu na mozliwosc dluzszego rozpatrywania, idealnie jest zlozyc wniosek co najmniej tydzien wczesniej. ESTA jest wazna 2 lata, wiec mozna ja zlozyc natychmiast po ustaleniu planow podrozy."
        },
        {
          q: "Co sie stanie, jesli wymienie paszport?",
          a: "W przypadku wymiany paszportu konieczne jest ponowne zlozenie wniosku ESTA z nowym paszportem. ESTA jest powiazana z numerem paszportu, wiec zmiana numeru paszportu powoduje uniewaznienie poprzedniej ESTA."
        },
        {
          q: "Czy mozna zlozyc wniosek grupowy?",
          a: "Tak, oficjalna strona oferuje funkcje skladania wnioskow grupowych, ktora umozliwia zlozenie kilku wnioskow jednoczesnie. Oplata jest pobierana za kazda osobe ($21/osobe)."
        }
      ]
    },
    {
      category: "Koszty i platnosci",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      questions: [
        {
          q: "Ile kosztuje ESTA?",
          a: "Oficjalna oplata wynosi $21. W tym: oplata za rozpatrzenie $4 i oplata za zatwierdzenie $17. Uslugi posrednikow kosztuja od $80 do $200."
        },
        {
          q: "Jakie sa dostepne metody platnosci?",
          a: "Na oficjalnej stronie mozna placic karta kredytowa (Visa, Mastercard, American Express, Discover) lub przez PayPal. Akceptowane sa rowniez karty debetowe."
        },
        {
          q: "Czy w przypadku odrzucenia wniosku otrzymam zwrot pieniedzy?",
          a: "Na oficjalnej stronie oplata za rozpatrzenie ($4) nie podlega zwrotowi, ale oplata za zatwierdzenie ($17) jest pobierana tylko w przypadku pozytywnej decyzji. Oznacza to, ze w przypadku odrzucenia poniesiesz koszt jedynie $4."
        }
      ]
    },
    {
      category: "Rozwiazywanie problemow",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      questions: [
        {
          q: "Moj wniosek zostal odrzucony. Co robic?",
          a: "W przypadku odrzucenia ESTA konieczne jest zlozenie wniosku o wize turystyczna B-2 w ambasadzie USA. Wniosek wizowy wymaga rozmowy kwalifikacyjnej, a koszt wynosi $185."
        },
        {
          q: "Podalem bledne informacje. Czy moge je poprawic?",
          a: "Korekta po zlozeniu wniosku nie jest mozliwa. Jednak niektore dane, takie jak adres e-mail czy informacje o podrozy, mozna zaktualizowac po zatwierdzeniu w sekcji \"Update Application\". W przypadku bledu w waznych danych konieczne jest zlozenie nowego wniosku."
        },
        {
          q: "Minelo ponad 72 godziny i nadal nie mam odpowiedzi. Czy to normalne?",
          a: "Zwykle wynik jest dostepny w ciagu 72 godzin. Jesli trwa dluzej, sprawdz status wniosku na oficjalnej stronie. Jesli status to \"Pending\" (W trakcie rozpatrywania), nalezy poczekac."
        },
        {
          q: "ESTA zostala zatwierdzona, ale czy musze ja wydrukowac?",
          a: "Wydruk nie jest wymagany. ESTA jest elektronicznie powiazana z paszportem. Jednak dla bezpieczenstwa zalecamy zapisanie numeru zatwierdzenia lub zachowanie e-maila z potwierdzeniem."
        }
      ]
    },
    {
      category: "Podroz",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      questions: [
        {
          q: "Jak dlugo mozna przebywac w USA z ESTA?",
          a: "Z ESTA mozna przebywac w USA maksymalnie 90 dni podczas jednej wizyty. Obowiazuje rowniez limit 90 dni lacznie w ciagu 180 dni."
        },
        {
          q: "Czy z ESTA mozna pracowac w USA?",
          a: "Nie, ESTA nie uprawnia do pracy w USA. Do pracy potrzebna jest wiza pracownicza. Wolontariat nieodplatny lub udzial w spotkaniach biznesowych jest dozwolony."
        },
        {
          q: "Czy ESTA jest potrzebna przy wjezdzie przez Kanade lub Meksyk?",
          a: "Tak, ESTA jest wymagana rowniez przy wjezdzie do USA droga ladowa z Kanady lub Meksyku. Dni spedzone w Kanadzie lub Meksyku sa wliczane do 90-dniowego limitu pobytu."
        },
        {
          q: "Czy posiadanie ESTA gwarantuje wjazd do USA?",
          a: "Nie. ESTA to autoryzacja podrozy, a nie gwarancja wjazdu. Ostateczna decyzje o wjezdzie podejmuje funkcjonariusz kontroli granicznej po przybyciu do USA."
        }
      ]
    },
    {
      category: "Szczegolne przypadki",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      questions: [
        {
          q: "Co w przypadku podwojnego obywatelstwa?",
          a: "Osoby z podwojnym obywatelstwem moga zlozyc wniosek ESTA, uzywajac paszportu kraju uczestniczacego w Programie Ruchu Bezwizowego. Jednak jesli posiadasz rowniez obywatelstwo okreslonych krajow (Iran, Irak, Korea Polnocna, Sudan, Syria, Libia, Somalia, Jemen) lub odwiedziles te kraje po 2011 roku, ESTA nie ma zastosowania."
        },
        {
          q: "Czy dzieci rowniez musza zlozyc wniosek?",
          a: "Tak, kazdy podrozny, niezaleznie od wieku, w tym niemowleta, musi posiadac ESTA. Rodzice moga zlozyc wniosek w imieniu dziecka, ale kazda osoba musi miec wlasny paszport i ESTA."
        },
        {
          q: "Co w przypadku posiadania rejestru karnego?",
          a: "Drobne wykroczenia drogowe (przekroczenie predkosci, mandaty parkingowe) zwykle nie stanowia problemu. Jednak w przypadku aresztowania lub wyroku skazujacego nalezy uczciwie odpowiedziec na pytania kwalifikacyjne."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#0f2440] via-[#1a365d] to-[#234681] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center text-sm text-blue-300 mb-4">
              <Link href="/" className="hover:text-white transition">Strona glowna</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white">FAQ</span>
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Najczesciej zadawane pytania (FAQ)
            </h1>
            <p className="text-lg text-blue-200">
              Odpowiedzi na pytania dotyczace wniosku ESTA
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#f7fafc] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <section key={categoryIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-[#ebf4ff] rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="font-bold text-2xl text-[#1a365d]">
                    {category.category}
                  </h2>
                </div>
                <div className="space-y-5">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-l-4 border-gray-200 pl-4 hover:border-[#2b6cb0] transition py-1">
                      <h3 className="font-bold text-[#1a365d] mb-2">
                        P: {faq.q}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        O: {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Still have questions */}
            <section className="bg-[#ebf4ff] border border-[#2b6cb0]/20 rounded-xl p-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-[#2b6cb0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl text-[#1a365d] mb-4">
                  Nie znalazles odpowiedzi na swoje pytanie?
                </h2>
                <p className="text-gray-600 mb-6">
                  Wiecej szczegolowych informacji znajdziesz na ponizszych stronach
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    href="/application-guide"
                    className="bg-[#1a365d] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#234681] transition"
                  >
                    Procedura skladania wniosku
                  </Link>
                  <Link
                    href="/cost-comparison"
                    className="bg-white text-[#1a365d] px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition border-2 border-[#1a365d]"
                  >
                    Porownanie kosztow
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-[#2b6cb0]/20">
                  <p className="text-sm text-gray-500">
                    Oficjalne zrodla informacji:{" "}
                    <a
                      href="https://esta.cbp.dhs.gov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2b6cb0] underline hover:text-[#1a365d]"
                    >
                      Oficjalna strona ESTA
                    </a>
                    {" "}lub{" "}
                    <a
                      href="https://pl.usembassy.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2b6cb0] underline hover:text-[#1a365d]"
                    >
                      Ambasada USA w Polsce
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Important notes */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-2xl text-amber-900 mb-4">
                    Wazne uwagi
                  </h2>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-0.5 font-bold">&bull;</span>
                      <span>Informacje na tej stronie maja charakter ogolny. W przypadku indywidualnych sytuacji prosimy o kontakt z oficjalna strona lub ambasada USA.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-0.5 font-bold">&bull;</span>
                      <span>Przy skladaniu wniosku ESTA podawaj dokladne informacje. Podanie falszywych danych moze skutkowac zakazem wjazdu do USA.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-0.5 font-bold">&bull;</span>
                      <span>Uwazaj na falszywe strony. Jedyna oficjalna strona to <strong>https://esta.cbp.dhs.gov</strong>.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
