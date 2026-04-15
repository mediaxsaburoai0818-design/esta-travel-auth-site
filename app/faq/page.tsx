import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ - Najczesciej zadawane pytania o ESTA",
  description:
    "Odpowiedzi na najczesciej zadawane pytania dotyczace ESTA: procedura, koszty, waznosc, odrzucenie wniosku i wiele wiecej.",
};

const faqs = [
  {
    q: "Czym jest ESTA i do czego sluzy?",
    a: "ESTA (Electronic System for Travel Authorization) to elektroniczny system autoryzacji podrozy do USA. Obywatele krajow uczestniczacych w Programie Ruchu Bezwizowego (VWP), w tym Polski, musza uzyskac ESTA przed podroza do Stanow Zjednoczonych w celach turystycznych lub biznesowych (pobyt do 90 dni).",
  },
  {
    q: "Ile kosztuje wniosek ESTA?",
    a: "Oficjalna oplata za ESTA wynosi $21 USD. Sklada sie z oplaty za rozpatrzenie ($4, niezwrotna) i oplaty za autoryzacje ($17, pobierana tylko przy zatwierdzeniu). Uwazaj na falszywe strony, ktore pobieraja $80-200 za te sama usluge.",
  },
  {
    q: "Jak dlugo trwa rozpatrzenie wniosku ESTA?",
    a: "Wiekszosc wnioskow jest rozpatrywana w ciagu kilku minut. W niektorych przypadkach rozpatrzenie moze potrwac do 72 godzin. Zaleca sie zlozenie wniosku co najmniej 72 godziny przed planowana podroza.",
  },
  {
    q: "Jak dlugo jest wazna autoryzacja ESTA?",
    a: "ESTA jest wazna przez 2 lata od daty zatwierdzenia lub do momentu wygasniecia paszportu (w zaleznosci od tego, co nastapi wczesniej). W tym okresie mozna wielokrotnie wjezdzac do USA.",
  },
  {
    q: "Jaka jest roznica miedzy ESTA a wiza?",
    a: "ESTA to uproszczona autoryzacja do krotkich pobytow (do 90 dni) w celach turystycznych/biznesowych. Koszt: $21, wniosek online, rozpatrzenie w minutach. Wiza wymaga rozmowy w ambasadzie, kosztuje od $185 i pozwala na dluzsze pobyty.",
  },
  {
    q: "Czy Polska jest w Programie Ruchu Bezwizowego?",
    a: "Tak, Polska zostala dolaczona do Programu Ruchu Bezwizowego (VWP) w listopadzie 2019 roku. Polscy obywatele z paszportem biometrycznym moga ubiegac sie o ESTA.",
  },
  {
    q: "Co sie stanie, jesli moj wniosek ESTA zostanie odrzucony?",
    a: "W przypadku odrzucenia wniosku ESTA nie mozesz podrozowac do USA w ramach VWP. Musisz ubiegac sie o wize turystyczna B-1/B-2 w ambasadzie USA. Oplata za rozpatrzenie ($4) nie podlega zwrotowi. Przyczyna odrzucenia nie jest podawana.",
  },
  {
    q: "Czy moge ubiegac sie o ESTA, jesli mialem(am) odmowe wizy do USA?",
    a: "Odmowa wizy nie wyklucza automatycznie mozliwosci uzyskania ESTA, ale moze wplynac na decyzje. Nalezy odpowiedziec zgodnie z prawda na wszystkie pytania kwalifikacyjne w formularzu.",
  },
  {
    q: "Jakie dokumenty sa potrzebne do zlozenia wniosku ESTA?",
    a: "Potrzebny jest wazny paszport biometryczny, adres e-mail, numer telefonu, adres zamieszkania, dane o zatrudnieniu, adres pobytu w USA (np. hotel) oraz karta platnicza (Visa/Mastercard/PayPal).",
  },
  {
    q: "Czy moge zmienic dane w zatwierdzonym wniosku ESTA?",
    a: "Po zatwierdzeniu ESTA mozna zaktualizowac tylko niektore dane: adres e-mail i informacje o podrozy (adres w USA, numer lotu). Inne zmiany (np. numer paszportu, nazwisko) wymagaja zlozenia nowego wniosku.",
  },
  {
    q: "Czy ESTA gwarantuje wjazd do USA?",
    a: "Nie. ESTA to jedynie autoryzacja podrozy. Ostateczna decyzje o wjezdzie podejmuje funkcjonariusz kontroli granicznej CBP po przybyciu do USA. Moze on odmowic wjazdu nawet z zatwierdzona ESTA.",
  },
  {
    q: "Czy potrzebuje ESTA na tranzyt przez USA?",
    a: "Tak, nawet jesli tylko przelatujest przez USA (tranzyt) i nie opuszczasz strefy tranzytu, potrzebujesz ESTA. Dotyczy to rowniez lotow z przesiadka w USA.",
  },
  {
    q: "Czy moge zlozyc wniosek ESTA na telefonie?",
    a: "Tak, CBP udostepnia oficjalna aplikacje mobilna ESTA Mobile (dostepna na iOS i Android). Mozna rowniez skorzystac z przegladarki na smartfonie, wchodzac na strone esta.cbp.dhs.gov.",
  },
  {
    q: "Jak sprawdzic status mojego wniosku ESTA?",
    a: "Wejdz na strone esta.cbp.dhs.gov, wybierz 'Check Existing Application', a nastepnie wprowadz numer paszportu, date urodzenia i numer referencyjny wniosku (lub obywatelstwo).",
  },
  {
    q: "Czy moge zloz wniosek ESTA w imieniu innej osoby?",
    a: "Tak, mozna zlozyc wniosek ESTA w imieniu innej osoby (np. dziecka, osoby starszej). Nalezy posiadac wszystkie wymagane dane z paszportu tej osoby. Mozna rowniez zlozyc wniosek grupowy.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-4"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Najczesciej zadawane pytania (FAQ)
      </h1>
      <p className="text-gray-600 mb-10 leading-relaxed">
        Odpowiedzi na najczesciej zadawane pytania dotyczace systemu ESTA i
        podrozowania do Stanow Zjednoczonych.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-200 pb-5">
            <h2 className="font-bold text-[#022444] mb-2 text-base">
              {faq.q}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#F5F5F5] border border-gray-200 rounded p-6">
        <h2 className="font-bold text-[#022444] mb-2">
          Nie znalazles odpowiedzi?
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Skontaktuj sie z nami, a odpowiemy na Twoje pytanie.
        </p>
        <Link
          href="/site-info/contact/"
          className="inline-block bg-[#022444] hover:bg-[#0a3a6b] text-white px-5 py-2 rounded font-bold text-sm transition"
        >
          Skontaktuj sie z nami
        </Link>
      </div>
    </div>
  );
}
