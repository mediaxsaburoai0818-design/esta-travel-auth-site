import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Regulamin - ESTA Online",
  description: "Regulamin korzystania z serwisu ESTA Online. Warunki uzytkowania strony.",
};

export default function Agreement() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o stronie", href: "/site-info/about/" },
          { label: "Regulamin" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Regulamin
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Ostatnia aktualizacja: kwiecien 2026
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
        <h2
          className="heading-band"
        >
          1. Postanowienia ogolne
        </h2>
        <p>
          Niniejszy regulamin okresla zasady korzystania z serwisu ESTA Online.
          Korzystajac z serwisu, uzytkownik akceptuje ponizsze warunki.
        </p>

        <h2
          className="heading-band"
        >
          2. Charakter serwisu
        </h2>
        <p>
          ESTA Online jest serwisem informacyjnym. Nie jest oficjalna strona
          rzadu Stanow Zjednoczonych ani zadnej agencji rzadowej. Informacje
          zawarte w serwisie maja charakter wylacznie informacyjny i nie
          stanowia porady prawnej.
        </p>

        <h2
          className="heading-band"
        >
          3. Uslugi
        </h2>
        <p>Serwis swiadczy nastepujace uslugi:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Informacje o systemie ESTA i Programie Ruchu Bezwizowego</li>
          <li>Przewodniki dotyczace procedury skladania wniosku</li>
          <li>Odpowiedzi na czesto zadawane pytania</li>
          <li>Formularz kontaktowy do zapytan</li>
        </ul>

        <h2
          className="heading-band"
        >
          4. Odpowiedzialnosc
        </h2>
        <p>
          Operator serwisu doklada starannosci w celu zapewnienia aktualnosci i
          prawidlowosci informacji, jednak nie ponosi odpowiedzialnosci za
          ewentualne bledy, nieaktualnosc danych lub szkody wynikajace z
          korzystania z serwisu. Uzytkownik powinien zawsze weryfikowac
          informacje na oficjalnej stronie CBP.
        </p>

        <h2
          className="heading-band"
        >
          5. Prawa autorskie
        </h2>
        <p>
          Tresc serwisu, w tym teksty, grafiki i uklad strony, jest chroniona
          prawem autorskim. Kopiowanie, rozpowszechnianie lub wykorzystywanie
          tresci bez zgody operatora jest zabronione.
        </p>

        <h2
          className="heading-band"
        >
          6. Linki zewnetrzne
        </h2>
        <p>
          Serwis moze zawierac linki do stron zewnetrznych. Operator nie ponosi
          odpowiedzialnosci za tresc i polityki prywatnosci stron zewnetrznych.
        </p>

        <h2
          className="heading-band"
        >
          7. Zmiany regulaminu
        </h2>
        <p>
          Operator zastrzega sobie prawo do zmiany regulaminu w kazdym czasie.
          Zmiany wchodza w zycie z chwila publikacji na stronie.
        </p>

        <h2
          className="heading-band"
        >
          8. Kontakt
        </h2>
        <p>
          W sprawach dotyczacych regulaminu prosimy o kontakt poprzez{" "}
          <Link href="/site-info/contact/" className="text-[#022444] underline">
            formularz kontaktowy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
