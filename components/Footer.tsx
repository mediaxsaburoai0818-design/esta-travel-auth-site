import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#011a33]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Site info */}
            <div>
              <p
                className="text-lg font-bold mb-3 text-white"
                style={{
                  fontFamily: "var(--font-noto-serif), serif",
                }}
              >
                ESTA Online
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Kompletny przewodnik po Elektronicznym Systemie Autoryzacji
                Podrozy (ESTA) do Stanow Zjednoczonych.
              </p>
            </div>

            {/* ESTA Info links */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
                Informacje o ESTA
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/esta-info/what-is-esta/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Czym jest ESTA?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/esta-info/application/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Sposob skladania wniosku
                  </Link>
                </li>
                <li>
                  <Link
                    href="/esta-info/fee/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Oplaty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/esta-info/expiration/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Okres waznosci
                  </Link>
                </li>
                <li>
                  <Link
                    href="/esta-info/status-check/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Sprawdzenie statusu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Site info links */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
                Informacje o stronie
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/site-info/about/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/contact/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/privacy-policy/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Polityka prywatnosci
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/agreement/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Regulamin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/contents-policy/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Polityka tresci
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap/"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Mapa strony
                  </Link>
                </li>
              </ul>
            </div>

            {/* Official links */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
                Strony oficjalne
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://esta.cbp.dhs.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Oficjalna strona ESTA (CBP)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pl.usembassy.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    Ambasada USA w Polsce
                  </a>
                </li>
                <li>
                  <a
                    href="https://travel.state.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-2 hover:text-gray-200 transition"
                  >
                    U.S. Department of State
                  </a>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-[#022444] border border-white/10 rounded text-xs text-gray-200">
                Niniejsza strona nie jest powiazana z rzadem USA. Oficjalna
                strona ESTA:{" "}
                <a
                  href="https://esta.cbp.dhs.gov"
                  className="text-gray-200 underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  esta.cbp.dhs.gov
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-center text-gray-200">
              &copy; {new Date().getFullYear()} ESTA Online. Wszelkie prawa
              zastrzezone. | Strona informacyjna &mdash; nie jest oficjalna
              strona rzadu USA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
