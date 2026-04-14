import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sprawdzenie statusu wniosku ESTA",
  description:
    "Jak sprawdzic status wniosku ESTA na oficjalnej stronie CBP. Mozliwe statusy i co oznaczaja.",
};

export default function StatusCheck() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Informacje o ESTA", href: "/esta-info/what-is-esta/" },
          { label: "Sprawdzenie statusu" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Sprawdzenie statusu wniosku ESTA
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Po zlozeniu wniosku ESTA mozesz w kazdej chwili sprawdzic jego status na
        oficjalnej stronie CBP.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2
          className="heading-band"
        >
          Jak sprawdzic status?
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Wejdz na strone{" "}
            <a
              href="https://esta.cbp.dhs.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a365d] underline"
            >
              esta.cbp.dhs.gov
            </a>
          </li>
          <li>
            Wybierz opcje &quot;Check Existing Application&quot; (Sprawdz
            istniejacy wniosek)
          </li>
          <li>
            Wprowadz dane: numer paszportu, date urodzenia, numer referencyjny
            wniosku (lub obywatelstwo)
          </li>
          <li>Kliknij &quot;Retrieve Application&quot;</li>
        </ol>

        <h2
          className="heading-band"
        >
          Mozliwe statusy wniosku
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-green-700 mb-1">
              Authorization Approved (Zatwierdzony)
            </h3>
            <p className="text-sm">
              Wniosek zostal zatwierdzony. Mozesz podrozowac do USA w ramach
              Programu Ruchu Bezwizowego. Wydrukuj lub zapisz potwierdzenie.
            </p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-yellow-600 mb-1">
              Authorization Pending (W trakcie rozpatrywania)
            </h3>
            <p className="text-sm">
              Wniosek jest nadal rozpatrywany. Sprawdz ponownie po 72
              godzinach. Nie kupuj biletow lotniczych, dopoki nie otrzymasz
              zatwierdzenia.
            </p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-red-600 mb-1">
              Travel Not Authorized (Podrozy nie autoryzowano)
            </h3>
            <p className="text-sm">
              Wniosek zostal odrzucony. Musisz ubiegac sie o wize w ambasadzie
              USA. Przyczyna odrzucenia nie jest podawana.
            </p>
          </div>
        </div>

        <h2
          className="heading-band"
        >
          Co robic, jesli status to &quot;Pending&quot;?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Poczekaj do 72 godzin &mdash; wiekszosc wnioskow jest
            rozpatrywana w tym czasie
          </li>
          <li>Sprawdzaj status regularnie na stronie CBP</li>
          <li>Nie skladaj nowego wniosku &mdash; to nie przyspieszy procesu</li>
          <li>
            Jesli po 72 godzinach status nadal jest &quot;Pending&quot;,
            rozważ kontakt z CBP
          </li>
        </ul>

        <div className="bg-[#f8f9fa] border-l-4 border-[#1a365d] p-4 rounded-r text-sm">
          <strong>Wskazowka:</strong> Zapisz numer referencyjny wniosku w
          bezpiecznym miejscu. Bez niego sprawdzenie statusu moze byc
          utrudnione.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/esta-info/expiration/"
          className="bg-[#1a365d] hover:bg-[#2a4a7f] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Okres waznosci ESTA &rarr;
        </Link>
        <Link
          href="/apply/"
          className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-3 px-8 rounded text-sm transition text-center"
        >
          Zloz wniosek ESTA
        </Link>
      </div>
    </div>
  );
}
