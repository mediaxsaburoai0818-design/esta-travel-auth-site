import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Zastrzeżenie */}
      <div className="bg-orange-100 border-t-4 border-orange-500 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 text-orange-600 text-2xl">⚠️</div>
            <div className="text-sm text-gray-800">
              <p className="font-bold text-gray-900 mb-2">Ważne zastrzeżenie</p>
              <p>
                Niniejsza strona nie jest powiązana z oficjalną stroną rządu USA (
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  esta.cbp.dhs.gov
                </a>
                ).
                Jest to strona informacyjna dotycząca autoryzacji podróży ESTA.
                Oficjalna opłata za wniosek na stronie rządowej wynosi $21. W przypadku korzystania z usług pośrednika, prosimy o dokładne sprawdzenie zakresu usług i cen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stopka główna */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informacje o stronie */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-lg mb-4">ESTA GUIDE</h3>
            <p className="text-sm mb-4">
              Kompleksowy przewodnik po Elektronicznym Systemie Autoryzacji Podróży (ESTA) do USA.
              Dostarczamy wszystkie niezbędne informacje od procedury składania wniosku po porównanie kosztów.
            </p>
          </div>

          {/* Szybkie linki */}
          <div>
            <h3 className="text-white font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/application-guide" className="hover:text-white transition">
                  Procedura składania wniosku
                </Link>
              </li>
              <li>
                <Link href="/cost-comparison" className="hover:text-white transition">
                  Porównanie kosztów
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Najczęściej zadawane pytania
                </Link>
              </li>
            </ul>
          </div>

          {/* Oficjalne linki */}
          <div>
            <h3 className="text-white font-semibold mb-4">Strony oficjalne</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Oficjalna strona ESTA ↗
                </a>
              </li>
              <li>
                <a
                  href="https://pl.usembassy.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Ambasada USA w Polsce ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Prawa autorskie */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} ESTA Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
