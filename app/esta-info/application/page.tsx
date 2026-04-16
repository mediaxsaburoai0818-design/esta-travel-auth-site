import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sposob skladania wniosku ESTA - Przewodnik krok po kroku",
  description:
    "Szczegolowy przewodnik po procedurze skladania wniosku ESTA. Krok po kroku od przygotowania dokumentow do zatwierdzenia.",
};

export default function Application() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Sposob skladania wniosku" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Sposob skladania wniosku ESTA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Wniosek ESTA mozna zlozyc wylacznie online na oficjalnej stronie CBP
        (esta.cbp.dhs.gov). Ponizej przedstawiamy szczegolowy przewodnik po
        calej procedurze.
      </p>

      <img
        src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80"
        alt="Paszport i dokumenty podrozne"
        className="w-full h-56 object-cover rounded mb-8"
      />

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <h2
          className="heading-band"
        >
          Przed rozpoczeciem &mdash; co przygotowac
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Paszport biometryczny (e-paszport) &mdash; wazny</li>
          <li>Adres e-mail do kontaktu</li>
          <li>Numer telefonu</li>
          <li>Adres zamieszkania</li>
          <li>Informacje o pracodawcy (jesli dotyczy)</li>
          <li>Adres pobytu w USA (hotel, osoba goszczaca)</li>
          <li>Karta platnicza (Visa, Mastercard, PayPal)</li>
        </ul>

        <h2
          className="heading-band"
        >
          Krok 1: Wejdz na oficjalna strone
        </h2>
        <p>
          Przejdz na strone{" "}
          <a
            href="https://esta.cbp.dhs.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#022444] underline"
          >
            esta.cbp.dhs.gov
          </a>{" "}
          i wybierz opcje &quot;New Application&quot; (Nowy wniosek). Mozesz
          wybrac wniosek indywidualny lub grupowy.
        </p>

        <h2
          className="heading-band"
        >
          Krok 2: Wprowadz dane z paszportu
        </h2>
        <p>
          Wprowadz dokladnie dane z paszportu: numer paszportu, kraj wydania,
          date wydania i date waznosci, nazwisko, imie (imiona), date urodzenia,
          miejsce urodzenia, plec i obywatelstwo.
        </p>
        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Dane musza byc identyczne z danymi w
          paszporcie. Blad w imieniu lub numerze paszportu moze spowodowac
          odrzucenie wniosku.
        </div>

        <h2
          className="heading-band"
        >
          Krok 3: Wprowadz dane osobowe
        </h2>
        <p>
          Podaj dodatkowe informacje: inne nazwiska (jesli uzywane), informacje
          o podwojnym obywatelstwie, dane rodzicow, adres e-mail, numer telefonu
          i adres zamieszkania.
        </p>

        <h2
          className="heading-band"
        >
          Krok 4: Wprowadz dane o zatrudnieniu
        </h2>
        <p>
          Podaj informacje o aktualnym zatrudnieniu: nazwe firmy, stanowisko,
          adres i numer telefonu pracodawcy. Jesli nie pracujesz, wybierz
          odpowiednia opcje.
        </p>

        <h2
          className="heading-band"
        >
          Krok 5: Wprowadz dane o podrozy
        </h2>
        <p>
          Podaj dane kontaktowe w USA (adres hotelu lub osoby goszczacej), adres
          pobytu, dane kontaktowe na wypadek sytuacji awaryjnej oraz informacje
          o locie.
        </p>

        <h2
          className="heading-band"
        >
          Krok 6: Odpowiedz na pytania kwalifikacyjne
        </h2>
        <p>
          Odpowiedz na 9 pytan dotyczacych kwalifikowalnosci (choroby zakazne,
          narkotyki, przeszlosc kryminalna, terroryzm itp.). W wiekszosci
          przypadkow odpowiedz brzmi &quot;Nie&quot;. Odpowiadaj zgodnie z
          prawda &mdash; falszywe informacje moga prowadzic do stalego zakazu
          wjazdu.
        </p>

        <h2
          className="heading-band"
        >
          Krok 7: Sprawdz i wyslij
        </h2>
        <p>
          Sprawdz dokladnie wszystkie wprowadzone dane, zaakceptuj warunki i
          wyslij wniosek. Nastepnie dokonaj platnosci $21.
        </p>

        <h2
          className="heading-band"
        >
          Po zlozeniu wniosku
        </h2>
        <p>
          Po wyslaniu wniosku otrzymasz numer referencyjny. Zachowaj go
          &mdash; bedzie potrzebny do sprawdzenia statusu wniosku. Zatwierdzenie
          nastepuje zwykle w ciagu kilku minut, ale moze potrwac do 72 godzin.
        </p>

        <div className="bg-red-50 border-l-4 border-[#8d1812] p-4 rounded-r text-sm">
          <strong>Uwaga:</strong> Skladaj wniosek wylacznie na oficjalnej
          stronie{" "}
          <a
            href="https://esta.cbp.dhs.gov"
            className="text-[#022444] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            esta.cbp.dhs.gov
          </a>
          . Falszywe strony pobieraja zawyzone oplaty ($80-200) za te sama
          usluge.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/fee/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Sprawdz oplaty &rarr;
        </Link>
        <Link
          href="/apply/"
          className="bg-[#8d1812] hover:bg-[#6d120e] text-white font-bold py-3 px-8 text-sm transition text-center border-[3px] border-double border-[#6d120e]"
        >
          &#10003; Zloz wniosek ESTA
        </Link>
      </div>
    </div>
  );
}
