import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#f8f9fa] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Site info */}
            <div>
              <p
                className="text-lg font-bold mb-3"
                style={{
                  fontFamily: "var(--font-noto-serif), serif",
                  color: "#1a365d",
                }}
              >
                ESTA Online
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kompletny przewodnik po Elektronicznym Systemie Autoryzacji
                Podrozy (ESTA) do Stanow Zjednoczonych.
              </p>
            </div>

            {/* ESTA Info links */}
            <div>
              <h3 className="text-sm font-bold text-[#1a365d] mb-3 uppercase tracking-wider">
                Informacje o ESTA
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/esta-info/what-is-esta/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Czym jest ESTA?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/esta-info/application/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Sposob skladania wniosku
                  </Link>
                </li>
                <li>
                  <Link
                    href="/esta-info/fee/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Oplaty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/esta-info/expiration/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Okres waznosci
                  </Link>
                </li>
                <li>
                  <Link
                    href="/esta-info/status-check/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Sprawdzenie statusu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Site info links */}
            <div>
              <h3 className="text-sm font-bold text-[#1a365d] mb-3 uppercase tracking-wider">
                Informacje o stronie
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/site-info/about/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/contact/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/privacy-policy/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Polityka prywatnosci
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/agreement/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Regulamin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/contents-policy/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Polityka tresci
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap/"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Mapa strony
                  </Link>
                </li>
              </ul>
            </div>

            {/* Official links */}
            <div>
              <h3 className="text-sm font-bold text-[#1a365d] mb-3 uppercase tracking-wider">
                Strony oficjalne
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://esta.cbp.dhs.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Oficjalna strona ESTA (CBP)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pl.usembassy.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    Ambasada USA w Polsce
                  </a>
                </li>
                <li>
                  <a
                    href="https://travel.state.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#1a365d] transition"
                  >
                    U.S. Department of State
                  </a>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white border border-gray-200 rounded text-xs text-gray-500">
                Niniejsza strona nie jest powiazana z rzadem USA. Oficjalna
                strona ESTA:{" "}
                <a
                  href="https://esta.cbp.dhs.gov"
                  className="text-[#1a365d] underline"
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
        <div className="border-t border-gray-200 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-center text-gray-500">
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
