import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Polityka tresci - ESTA Online",
  description: "Polityka tresci serwisu ESTA Online. Zasady tworzenia i publikowania tresci.",
};

export default function ContentsPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o stronie", href: "/site-info/about/" },
          { label: "Polityka tresci" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Polityka tresci
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Ostatnia aktualizacja: kwiecien 2026
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
        <h2
          className="heading-band"
        >
          1. Zasady tworzenia tresci
        </h2>
        <p>
          Wszystkie tresci publikowane w serwisie ESTA Online sa tworzone z
          zachowaniem najwyzszych standardow rzetelnosci i dokladnosci.
          Informacje sa oparte na oficjalnych zrodlach rzadowych USA, w tym
          stronach CBP i Departamentu Stanu.
        </p>

        <h2
          className="heading-band"
        >
          2. Zrodla informacji
        </h2>
        <p>Tresci w serwisie opieraja sie na nastepujacych zrodlach:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Oficjalna strona ESTA (esta.cbp.dhs.gov)</li>
          <li>U.S. Customs and Border Protection (cbp.gov)</li>
          <li>U.S. Department of State (travel.state.gov)</li>
          <li>Ambasada USA w Polsce (pl.usembassy.gov)</li>
          <li>Oficjalne komunikaty i aktualizacje rzadowe</li>
        </ul>

        <h2
          className="heading-band"
        >
          3. Aktualnosc tresci
        </h2>
        <p>
          Dokladamy starannosci, aby tresci w serwisie byly aktualne. Regularnie
          weryfikujemy informacje i aktualizujemy strony w przypadku zmian
          przepisow lub procedur. Mimo to zalecamy sprawdzanie aktualnych
          informacji na oficjalnej stronie CBP przed podjeciem jakichkolwiek
          decyzji.
        </p>

        <h2
          className="heading-band"
        >
          4. Ograniczenia
        </h2>
        <p>
          Tresci w serwisie maja charakter informacyjny i nie stanowia porady
          prawnej, podatkowej ani imigracyjnej. W sprawach indywidualnych
          zalecamy skonsultowanie sie z odpowiednim specjalista lub kontakt z
          ambasada USA.
        </p>

        <h2
          className="heading-band"
        >
          5. Zglaszanie bledow
        </h2>
        <p>
          Jesli znajdziesz blad lub nieaktualna informacje w serwisie, prosimy
          o{" "}
          <Link href="/site-info/contact/" className="text-[#022444] underline">
            kontakt
          </Link>
          . Dokladamy starannosci, aby poprawic wszelkie bledy w najkrotszym
          mozliwym czasie.
        </p>
      </div>
    </div>
  );
}
