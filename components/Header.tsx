"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Informacje o ESTA",
    href: "/esta-info/what-is-esta/",
    children: [
      { label: "Czym jest ESTA?", href: "/esta-info/what-is-esta/" },
      { label: "Sposob skladania wniosku", href: "/esta-info/application/" },
      { label: "Oplaty", href: "/esta-info/fee/" },
      { label: "Okres waznosci", href: "/esta-info/expiration/" },
      { label: "Sprawdzenie statusu", href: "/esta-info/status-check/" },
    ],
  },
  { label: "Sposob skladania wniosku", href: "/esta-info/application/" },
  { label: "Oplaty", href: "/esta-info/fee/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Kontakt", href: "/site-info/contact/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className="text-xl font-bold tracking-wide"
              style={{
                fontFamily: "var(--font-noto-serif), serif",
                color: "#1a365d",
              }}
            >
              ESTA Online
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Dropdown: ESTA Info */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-[#1a365d] px-3 py-2 text-sm font-medium transition">
                Informacje o ESTA
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md py-2 min-w-[220px]">
                  {navLinks[0].children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]"
                    >
                      {child.label}
                    </Link>
                  ))}
                  <Link
                    href="/esta-info/place-of-birth/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]"
                  >
                    Miejsce urodzenia / adres
                  </Link>
                  <Link
                    href="/esta-info/us-contact/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]"
                  >
                    Dane kontaktowe w USA
                  </Link>
                  <Link
                    href="/esta-info/official-cbp/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]"
                  >
                    Oficjalna strona CBP
                  </Link>
                  <Link
                    href="/esta-info/mobile-app/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]"
                  >
                    Aplikacja mobilna
                  </Link>
                  <Link
                    href="/esta-info/guam/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a365d]"
                  >
                    Wjazd na Guam
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/faq/"
              className="text-gray-700 hover:text-[#1a365d] px-3 py-2 text-sm font-medium transition"
            >
              FAQ
            </Link>
            <Link
              href="/site-info/contact/"
              className="text-gray-700 hover:text-[#1a365d] px-3 py-2 text-sm font-medium transition"
            >
              Kontakt
            </Link>
            <Link
              href="/apply/"
              className="ml-3 bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-3 px-8 rounded text-sm transition"
            >
              Zloz wniosek ESTA
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-gray-200 pt-3 space-y-1">
            <p className="px-3 py-1 text-xs text-gray-400 uppercase tracking-wider font-bold">
              Informacje o ESTA
            </p>
            <Link
              href="/esta-info/what-is-esta/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Czym jest ESTA?
            </Link>
            <Link
              href="/esta-info/application/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sposob skladania wniosku
            </Link>
            <Link
              href="/esta-info/fee/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Oplaty
            </Link>
            <Link
              href="/esta-info/expiration/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Okres waznosci
            </Link>
            <Link
              href="/esta-info/status-check/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sprawdzenie statusu
            </Link>
            <Link
              href="/esta-info/place-of-birth/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Miejsce urodzenia / adres
            </Link>
            <Link
              href="/esta-info/us-contact/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dane kontaktowe w USA
            </Link>
            <Link
              href="/esta-info/official-cbp/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Oficjalna strona CBP
            </Link>
            <Link
              href="/esta-info/mobile-app/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aplikacja mobilna
            </Link>
            <Link
              href="/esta-info/guam/"
              className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wjazd na Guam
            </Link>
            <div className="border-t border-gray-200 mt-2 pt-2">
              <Link
                href="/faq/"
                className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/site-info/contact/"
                className="block text-gray-700 hover:text-[#1a365d] hover:bg-gray-50 px-4 py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
            <Link
              href="/apply/"
              className="block bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-3 px-8 rounded text-sm text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zloz wniosek ESTA
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
