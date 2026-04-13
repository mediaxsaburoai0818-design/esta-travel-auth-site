import Link from "next/link";

export const metadata = {
  title: "Przewodnik po procedurze ESTA - krok po kroku | ESTA Guide",
  description: "Szczegolowa procedura skladania wniosku ESTA do USA krok po kroku. Kompletny przewodnik od przygotowania do zatwierdzenia wniosku.",
  keywords: "ESTA wniosek, procedura, jak zlozyc wniosek, paszport, krok po kroku, przewodnik",
  openGraph: {
    title: "Przewodnik po procedurze ESTA - krok po kroku",
    description: "Szczegolowa procedura skladania wniosku ESTA w 8 krokach. Poznaj najczestsze bledy przy wypelnianiu formularza",
    type: "article",
  },
};

export default function ApplicationGuidePage() {
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
              <span className="text-white">Procedura</span>
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Przewodnik po procedurze ESTA
            </h1>
            <p className="text-lg text-blue-200">
              Szczegolowy opis procedury skladania wniosku ESTA na oficjalnej stronie, krok po kroku.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#f7fafc] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Preparation */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[#ebf4ff] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#2b6cb0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl text-[#1a365d]">
                  Przygotowanie przed zlozeniem wniosku
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1a365d]">Co bedzie potrzebne</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#d69e2e] mr-2 mt-0.5 font-bold">&bull;</span>
                      Wazny paszport (wazny co najmniej 6 miesiecy od planowanej daty podrozy)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d69e2e] mr-2 mt-0.5 font-bold">&bull;</span>
                      Karta kredytowa lub konto PayPal (do platnosci)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d69e2e] mr-2 mt-0.5 font-bold">&bull;</span>
                      Adres e-mail (do otrzymania potwierdzenia)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d69e2e] mr-2 mt-0.5 font-bold">&bull;</span>
                      Informacje o podrozy (adres zakwaterowania w USA itp.)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#1a365d]">Czas potrzebny</h3>
                  <p className="text-gray-600">
                    Wypelnienie formularza: ok. 15-20 minut<br />
                    Oczekiwanie na zatwierdzenie: od kilku minut do max. 72 godzin
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-[#d69e2e] p-4 rounded-r-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Wazne:</strong> Zalecamy zlozenie wniosku co najmniej 72 godziny przed planowana data podrozy.
                  </p>
                </div>
              </div>
            </section>

            {/* Steps 1-8 */}
            {[
              {
                step: 1,
                title: "Wejdz na oficjalna strone",
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Oficjalny adres URL:{" "}
                      <a href="https://esta.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" className="text-[#2b6cb0] underline hover:text-[#1a365d] font-medium">
                        https://esta.cbp.dhs.gov
                      </a>
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Uwaga na falszywe strony!</strong> Strony pod innymi adresami URL, ktore zadaja wysokich oplat, moga byc oszustwem.
                        Zawsze skladaj wniosek wylacznie pod powyzszym oficjalnym adresem URL.
                      </p>
                    </div>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                      <li>Wejdz na oficjalna strone (esta.cbp.dhs.gov)</li>
                      <li>Na stronie glownej kliknij przycisk &quot;New Application&quot; (Nowy wniosek)</li>
                      <li>Wybierz jezyk (dostepny jezyk angielski i inne)</li>
                    </ol>
                  </div>
                ),
              },
              {
                step: 2,
                title: "Wprowadz dane osobowe",
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Wprowadz dane dokladnie tak, jak sa zapisane w paszporcie. Nawet jeden blad w literze moze spowodowac odrzucenie wniosku.
                    </p>
                    <div className="bg-[#ebf4ff] p-4 rounded-lg">
                      <h3 className="font-bold mb-2 text-[#1a365d]">Wymagane dane:</h3>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Imie i nazwisko (dokladnie jak w paszporcie)</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Data urodzenia</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Miejsce urodzenia</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Obywatelstwo</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Plec</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-[#d69e2e] p-4 rounded-r-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Wskazowka:</strong> Przygotuj paszport i wpisuj dane, patrzac bezposrednio na dokument, aby uniknac bledow.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                step: 3,
                title: "Dane paszportowe",
                content: (
                  <div className="space-y-4">
                    <div className="bg-[#ebf4ff] p-4 rounded-lg">
                      <h3 className="font-bold mb-2 text-[#1a365d]">Wymagane dane:</h3>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Numer paszportu</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Data wydania</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Data waznosci</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Kraj wydania (Polska)</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-[#d69e2e] p-4 rounded-r-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Wazne:</strong> Paszport musi byc wazny co najmniej 6 miesiecy od planowanej daty wyjazdu z USA.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                step: 4,
                title: "Dane kontaktowe",
                content: (
                  <div className="space-y-4">
                    <div className="bg-[#ebf4ff] p-4 rounded-lg">
                      <h3 className="font-bold mb-2 text-[#1a365d]">Wymagane dane:</h3>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Aktualny adres zamieszkania (adres w Polsce)</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Numer telefonu (format miedzynarodowy: +48)</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Adres e-mail</li>
                      </ul>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Format adresu: np. ul. Marszalkowska 1, 00-001 Warszawa, Poland
                    </p>
                  </div>
                ),
              },
              {
                step: 5,
                title: "Informacje o podrozy",
                content: (
                  <div className="space-y-4">
                    <div className="bg-[#ebf4ff] p-4 rounded-lg">
                      <h3 className="font-bold mb-2 text-[#1a365d]">Wymagane dane:</h3>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Planowana data podrozy</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Adres zakwaterowania w USA (nazwa i adres hotelu)</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Kontakt alarmowy w USA</li>
                      </ul>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Jesli miejsce zakwaterowania nie jest jeszcze znane, mozna wpisac &quot;UNKNOWN&quot;.
                    </p>
                  </div>
                ),
              },
              {
                step: 6,
                title: "Pytania kwalifikacyjne",
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Odpowiedz na 9 pytan TAK/NIE. Pytania te sa bardzo wazne i nalezy odpowiadac na nie zgodnie z prawda.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Ostrzezenie:</strong> Podanie falszywych informacji moze skutkowac stalym zakazem wjazdu do USA.
                        Odpowiadaj zawsze zgodnie z prawda.
                      </p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-bold mb-2 text-[#1a365d]">Przykladowe pytania:</p>
                      <ul className="space-y-1">
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Czy chorujesz na chorobe zakazna lub zaburzenia psychiczne?</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Czy byles/bylas karany/karana?</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Czy posiadasz lub posiadales/posiadales narkotyki?</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Czy byles/bylas zaangazowany/zaangazowana w dzialalnosc terrorystyczna?</li>
                        <li className="flex items-center"><span className="text-[#2b6cb0] mr-2">&bull;</span>Czy kiedykolwiek odmowiono Ci wizy amerykanskiej?</li>
                      </ul>
                      <p className="mt-3">
                        <strong>Wiekszosc osob odpowiada na wszystkie pytania &quot;NIE&quot;.</strong>{" "}
                        Wykroczenia drogowe (przekroczenie predkosci, mandaty parkingowe) nie sa brane pod uwage.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                step: 7,
                title: "Weryfikacja i platnosc",
                content: (
                  <div className="space-y-4">
                    <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                      <li>Sprawdz wszystkie wprowadzone dane</li>
                      <li>Dokladnie zweryfikuj, czy nie ma bledow</li>
                      <li>Zaakceptuj regulamin</li>
                      <li>Przejdz do strony platnosci</li>
                      <li>Zaplac $21 karta kredytowa lub przez PayPal</li>
                    </ol>
                    <div className="bg-[#ebf4ff] p-4 rounded-lg">
                      <h3 className="font-bold mb-2 text-[#1a365d]">Szczegoly platnosci:</h3>
                      <p className="text-gray-600 text-sm">
                        Oplata: $21<br />
                        W tym: oplata za rozpatrzenie $4 + oplata za zatwierdzenie $17<br />
                        Metody platnosci: Visa, Mastercard, Amex, PayPal
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                step: 8,
                title: "Oczekiwanie na zatwierdzenie",
                content: (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Po zlozeniu wniosku otrzymasz numer wniosku. Koniecznie zapisz ten numer.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <h3 className="font-bold mb-2 text-green-800">Proces zatwierdzenia:</h3>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li><strong>W wiekszosci przypadkow:</strong> zatwierdzenie w ciagu kilku minut</li>
                        <li><strong>W trakcie rozpatrywania:</strong> wynik w ciagu 72 godzin</li>
                        <li><strong>Powiadomienie e-mail:</strong> po zatwierdzeniu otrzymasz wiadomosc e-mail</li>
                      </ul>
                    </div>
                    <div className="bg-[#ebf4ff] p-4 rounded-lg">
                      <h3 className="font-bold mb-2 text-[#1a365d]">Jak sprawdzic status:</h3>
                      <ol className="list-decimal pl-6 space-y-1 text-gray-600 text-sm">
                        <li>Wejdz na oficjalna strone</li>
                        <li>Kliknij &quot;Check ESTA Status&quot; (Sprawdz status ESTA)</li>
                        <li>Wprowadz numer wniosku i dane paszportowe</li>
                      </ol>
                    </div>
                  </div>
                ),
              },
            ].map((item) => (
              <section key={item.step} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1a365d] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h2 className="font-bold text-2xl text-[#1a365d]">
                      {item.title}
                    </h2>
                  </div>
                </div>
                {item.content}
              </section>
            ))}

            {/* Common mistakes */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="font-bold text-2xl text-amber-900">
                  TOP 5 najczestszych bledow przy wypelnianiu
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Blad w pisowni imienia i nazwiska", desc: "Nawet jedna literowka w porownaniu z paszportem spowoduje odrzucenie. Zawsze wpisuj dane, patrzac na paszport." },
                  { title: "Blad w numerze paszportu", desc: 'Latwo pomylic "0" (zero) z "O" (litera O) - zachowaj ostroznosc.' },
                  { title: "Numer identyfikacyjny", desc: 'Jesli Twoj kraj nie stosuje krajowego numeru identyfikacyjnego, wybierz "Not Applicable" (Nie dotyczy). W przypadku Polski mozesz podac numer PESEL.' },
                  { title: "Format adresu", desc: "Wystarczy wpisac swoj adres w Polsce zapisany alfabetem lacinskim." },
                  { title: "Bledna odpowiedz na pytania kwalifikacyjne", desc: 'Nieuwaga przy czytaniu pytan moze spowodowac przypadkowe zaznaczenie "TAK". Czytaj uwaznie kazde pytanie.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <div>
                      <h3 className="font-bold text-amber-900">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#0f2440] via-[#1a365d] to-[#234681] text-white rounded-xl p-8 text-center">
              <h2 className="font-montserrat font-bold text-2xl mb-4">
                Wiecej informacji
              </h2>
              <p className="mb-6 text-blue-200">
                Sprawdz rowniez porownanie kosztow i najczesciej zadawane pytania
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/cost-comparison"
                  className="bg-[#d69e2e] hover:bg-[#b7791f] text-white px-6 py-3 rounded-lg font-bold transition"
                >
                  Porownanie kosztow
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
