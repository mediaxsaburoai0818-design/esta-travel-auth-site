import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mapa strony",
  description: "Pelna lista wszystkich stron na ESTA Online.",
};

const sections = [
  {
    title: "Strony glowne",
    links: [
      { href: "/", label: "Strona glowna" },
      { href: "/apply/", label: "Wniosek ESTA" },
      { href: "/faq/", label: "FAQ" },
    ],
  },
  {
    title: "Informacje o ESTA",
    links: [
      { href: "/esta-info/what-is-esta/", label: "Czym jest ESTA?" },
      {
        href: "/esta-info/application/",
        label: "Sposob skladania wniosku",
      },
      { href: "/esta-info/fee/", label: "Oplaty" },
      { href: "/esta-info/expiration/", label: "Okres waznosci" },
      {
        href: "/esta-info/status-check/",
        label: "Sprawdzenie statusu wniosku",
      },
      {
        href: "/esta-info/place-of-birth/",
        label: "Miejsce urodzenia / adres",
      },
      { href: "/esta-info/us-contact/", label: "Dane kontaktowe w USA" },
      { href: "/esta-info/official-cbp/", label: "Oficjalna strona CBP" },
      { href: "/esta-info/mobile-app/", label: "Aplikacja mobilna" },
      { href: "/esta-info/guam/", label: "Wjazd na Guam" },
    ],
  },
  {
    title: "Wniosek ESTA",
    links: [
      { href: "/apply/", label: "Formularz wniosku" },
      { href: "/apply/confirm/", label: "Potwierdzenie" },
      { href: "/apply/complete/", label: "Zakonczenie" },
    ],
  },
  {
    title: "Informacje o stronie",
    links: [
      { href: "/site-info/about/", label: "O nas" },
      { href: "/site-info/contact/", label: "Kontakt" },
      { href: "/site-info/privacy-policy/", label: "Polityka prywatnosci" },
      { href: "/site-info/agreement/", label: "Regulamin" },
      { href: "/site-info/contents-policy/", label: "Polityka tresci" },
      { href: "/site-info/browser/", label: "Zalecane przegladarki" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb items={[{ label: "Mapa strony" }]} />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-8"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Mapa strony
      </h1>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-bold text-[#022444] text-lg mb-3 border-b border-gray-200 pb-2">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#022444] transition underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
