import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Disclaimer bar */}
      <div className="bg-amber-50 border-t-4 border-[#d69e2e] py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-3 max-w-4xl mx-auto">
            <div className="flex-shrink-0 w-8 h-8 bg-[#d69e2e] rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">
              !
            </div>
            <div className="text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-1">Wazne zastrzezenie</p>
              <p>
                Niniejsza strona nie jest powiazana z oficjalna strona rzadu USA (
                <a
                  href="https://esta.cbp.dhs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2b6cb0] underline hover:text-[#1a365d]"
                >
                  esta.cbp.dhs.gov
                </a>
                ).
                Jest to strona informacyjna dotyczaca autoryzacji podrozy ESTA.
                Oficjalna oplata za wniosek na stronie rzadowej wynosi $21.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#0f2440] text-gray-400">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Site info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#d69e2e] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-montserrat font-bold text-lg">ESTA GUIDE</span>
              </div>
              <p className="text-sm leading-relaxed">
                Kompleksowy przewodnik po Elektronicznym Systemie Autoryzacji Podrozy (ESTA) do USA.
                Informacje o procedurze, kosztach i najczesciej zadawanych pytaniach.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nawigacja</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition flex items-center">
                    <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>Strona glowna
                  </Link>
                </li>
                <li>
                  <Link href="/application-guide" className="hover:text-white transition flex items-center">
                    <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>Procedura skladania wniosku
                  </Link>
                </li>
                <li>
                  <Link href="/cost-comparison" className="hover:text-white transition flex items-center">
                    <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>Porownanie kosztow
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition flex items-center">
                    <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* ESTA Info */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Informacje o ESTA</h3>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>
                  <span>Oplata: $21 (oficjalna)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>
                  <span>Waznosc: 2 lata</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>
                  <span>Czas rozpatrywania: do 72h</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>
                  <span>Pobyt: max. 90 dni</span>
                </li>
              </ul>
            </div>

            {/* Official links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Strony oficjalne</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://esta.cbp.dhs.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center"
                  >
                    <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>Oficjalna strona ESTA
                  </a>
                </li>
                <li>
                  <a
                    href="https://pl.usembassy.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center"
                  >
                    <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>Ambasada USA w Polsce
                  </a>
                </li>
                <li>
                  <a
                    href="https://travel.state.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center"
                  >
                    <span className="mr-2 text-[#d69e2e]">&rsaquo;</span>U.S. Travel State Gov
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-[#1a365d] py-5">
          <div className="container mx-auto px-4">
            <p className="text-xs text-center text-gray-500">
              &copy; {new Date().getFullYear()} ESTA Guide. All rights reserved. |
              Strona informacyjna - nie jest oficjalna strona rzadu USA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
