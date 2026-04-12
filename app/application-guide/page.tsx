import Link from "next/link";

export const metadata = {
  title: "Przewodnik po procedurze ESTA - krok po kroku | ESTA Guide",
  description: "Szczegółowa procedura składania wniosku ESTA do USA krok po kroku. Kompletny przewodnik od przygotowania do zatwierdzenia wniosku.",
  keywords: "ESTA wniosek, procedura, jak złożyć wniosek, paszport, krok po kroku, przewodnik",
  openGraph: {
    title: "Przewodnik po procedurze ESTA - krok po kroku",
    description: "Szczegółowa procedura składania wniosku ESTA w 8 krokach. Poznaj najczęstsze błędy przy wypełnianiu formularza",
    type: "article",
  },
};

export default function ApplicationGuidePage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Nagłówek strony */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            Przewodnik po procedurze ESTA
          </h1>
          <p className="text-xl text-gray-600">
            Szczegółowy opis procedury składania wniosku ESTA na oficjalnej stronie, krok po kroku.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Przygotowanie przed złożeniem wniosku */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-bold text-2xl mb-6 text-blue-600">
              Przygotowanie przed złożeniem wniosku
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Co będzie potrzebne</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Ważny paszport (ważny co najmniej 6 miesięcy od planowanej daty podróży)</li>
                  <li>Karta kredytowa lub konto PayPal (do płatności)</li>
                  <li>Adres e-mail (do otrzymania potwierdzenia)</li>
                  <li>Informacje o podróży (adres zakwaterowania w USA itp.)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Czas potrzebny</h3>
                <p className="text-gray-700">
                  Wypełnienie formularza: ok. 15-20 minut<br />
                  Oczekiwanie na zatwierdzenie: od kilku minut do max. 72 godzin
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>Ważne:</strong> Zalecamy złożenie wniosku co najmniej 72 godziny przed planowaną datą podróży.
                </p>
              </div>
            </div>
          </section>

          {/* Krok 1 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  Wejdź na oficjalną stronę
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Oficjalny adres URL:
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 ml-2"
                >
                  https://esta.cbp.dhs.gov
                </a>
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>Uwaga na fałszywe strony!</strong> Strony pod innymi adresami URL, które żądają wysokich opłat, mogą być oszustwem.
                  Zawsze składaj wniosek wyłącznie pod powyższym oficjalnym adresem URL.
                </p>
              </div>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Wejdź na oficjalną stronę (esta.cbp.dhs.gov)</li>
                <li>Na stronie głównej kliknij przycisk &quot;New Application&quot; (Nowy wniosek)</li>
                <li>Wybierz język (dostępny język angielski i inne)</li>
              </ol>
            </div>
          </section>

          {/* Krok 2 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  Wprowadź dane osobowe
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Wprowadź dane dokładnie tak, jak są zapisane w paszporcie. Nawet jeden błąd w literze może spowodować odrzucenie wniosku.
              </p>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">Wymagane dane:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Imię i nazwisko (dokładnie jak w paszporcie)</li>
                  <li>Data urodzenia</li>
                  <li>Miejsce urodzenia</li>
                  <li>Obywatelstwo</li>
                  <li>Płeć</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>Wskazówka:</strong> Przygotuj paszport i wpisuj dane, patrząc bezpośrednio na dokument, aby uniknąć błędów.
                </p>
              </div>
            </div>
          </section>

          {/* Krok 3 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  Dane paszportowe
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">Wymagane dane:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Numer paszportu</li>
                  <li>Data wydania</li>
                  <li>Data ważności</li>
                  <li>Kraj wydania (Polska)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>Ważne:</strong> Paszport musi być ważny co najmniej 6 miesięcy od planowanej daty wyjazdu z USA.
                </p>
              </div>
            </div>
          </section>

          {/* Krok 4 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  Dane kontaktowe
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">Wymagane dane:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Aktualny adres zamieszkania (adres w Polsce)</li>
                  <li>Numer telefonu (format międzynarodowy: zaczynający się od +48)</li>
                  <li>Adres e-mail</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm">
                Format adresu:<br />
                Przykład: ul. Marszałkowska 1, 00-001 Warszawa, Poland
              </p>
            </div>
          </section>

          {/* Krok 5 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                5
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  Informacje o podróży
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">Wymagane dane:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Planowana data podróży (jeśli nie jest znana, podaj przybliżoną datę)</li>
                  <li>Adres zakwaterowania w USA (nazwa i adres hotelu)</li>
                  <li>Kontakt alarmowy w USA</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm">
                Jeśli miejsce zakwaterowania nie jest jeszcze znane, można wpisać &quot;UNKNOWN&quot;.
              </p>
            </div>
          </section>

          {/* Krok 6 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                6
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  Pytania kwalifikacyjne
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Odpowiedz na 9 pytań TAK/NIE. Pytania te są bardzo ważne i należy odpowiadać na nie zgodnie z prawdą.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-sm text-gray-800">
                  <strong>Ostrzeżenie:</strong> Podanie fałszywych informacji może skutkować stałym zakazem wjazdu do USA.
                  Odpowiadaj zawsze zgodnie z prawdą.
                </p>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Przykładowe pytania:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Czy chorujesz na chorobę zakaźną lub zaburzenia psychiczne?</li>
                  <li>Czy byłeś/byłaś karany/karana?</li>
                  <li>Czy posiadasz lub posiadałeś/posiadałaś narkotyki?</li>
                  <li>Czy byłeś/byłaś zaangażowany/zaangażowana w działalność terrorystyczną?</li>
                  <li>Czy kiedykolwiek odmówiono Ci wizy amerykańskiej?</li>
                </ul>
                <p className="mt-3">
                  <strong>Większość osób odpowiada na wszystkie pytania &quot;NIE&quot;.</strong>
                  Wykroczenia drogowe (przekroczenie prędkości, mandaty parkingowe) nie są brane pod uwagę.
                </p>
              </div>
            </div>
          </section>

          {/* Krok 7 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                7
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  Weryfikacja i płatność
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Sprawdź wszystkie wprowadzone dane</li>
                <li>Dokładnie zweryfikuj, czy nie ma błędów</li>
                <li>Zaakceptuj regulamin</li>
                <li>Przejdź do strony płatności</li>
                <li>Zapłać $21 kartą kredytową lub przez PayPal</li>
              </ol>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">Szczegóły płatności:</h3>
                <p className="text-gray-700 text-sm">
                  Opłata: $21<br />
                  W tym: opłata za rozpatrzenie $4 + opłata za zatwierdzenie $17<br />
                  Metody płatności: Visa, Mastercard, Amex, PayPal
                </p>
              </div>
            </div>
          </section>

          {/* Krok 8 */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                8
              </div>
              <div>
                <h2 className="font-bold text-2xl text-blue-600">
                  Oczekiwanie na zatwierdzenie
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Po złożeniu wniosku otrzymasz numer wniosku. Koniecznie zapisz ten numer.
              </p>
              <div className="bg-green-50 p-4 rounded">
                <h3 className="font-bold mb-2">Proces zatwierdzenia:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li><strong>W większości przypadków:</strong> zatwierdzenie w ciągu kilku minut</li>
                  <li><strong>W trakcie rozpatrywania:</strong> wynik w ciągu 72 godzin</li>
                  <li><strong>Powiadomienie e-mail:</strong> po zatwierdzeniu otrzymasz wiadomość e-mail</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold mb-2">Jak sprawdzić status:</h3>
                <ol className="list-decimal pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Wejdź na oficjalną stronę</li>
                  <li>Kliknij &quot;Check ESTA Status&quot; (Sprawdź status ESTA)</li>
                  <li>Wprowadź numer wniosku i dane paszportowe</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Najczęstsze błędy */}
          <section className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8">
            <h2 className="font-bold text-2xl mb-6 text-yellow-900">
              ⚠️ TOP 5 najczęstszych błędów przy wypełnianiu
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-1">1. Błąd w pisowni imienia i nazwiska</h3>
                <p className="text-gray-800 text-sm">
                  Nawet jedna literówka w porównaniu z paszportem spowoduje odrzucenie. Zawsze wpisuj dane, patrząc na paszport.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">2. Błąd w numerze paszportu</h3>
                <p className="text-gray-800 text-sm">
                  Łatwo pomylić &quot;0&quot; (zero) z &quot;O&quot; (litera O) - zachowaj ostrożność.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">3. Numer identyfikacyjny</h3>
                <p className="text-gray-800 text-sm">
                  Jeśli Twój kraj nie stosuje krajowego numeru identyfikacyjnego, wybierz &quot;Not Applicable&quot; (Nie dotyczy). W przypadku Polski możesz podać numer PESEL.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">4. Format adresu</h3>
                <p className="text-gray-800 text-sm">
                  Wystarczy wpisać swój adres w Polsce zapisany alfabetem łacińskim.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">5. Błędna odpowiedź na pytania kwalifikacyjne</h3>
                <p className="text-gray-800 text-sm">
                  Nieuwaga przy czytaniu pytań może spowodować przypadkowe zaznaczenie &quot;TAK&quot;.
                  Czytaj uważnie każde pytanie.
                </p>
              </div>
            </div>
          </section>

          {/* Następne kroki */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
            <h2 className="font-montserrat font-bold text-2xl mb-4">
              Więcej informacji
            </h2>
            <p className="mb-6 opacity-90">
              Sprawdź również porównanie kosztów i najczęściej zadawane pytania
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="/cost-comparison"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Porównanie kosztów
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
