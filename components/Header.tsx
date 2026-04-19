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
    <header className="sticky top-0 z-50" style={{ backgroundColor: "#022444" }}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col" style={{ textDecoration: "none" }}>
            <span
              className="text-xl md:text-2xl font-bold tracking-wide leading-tight"
              style={{
                fontFamily: "var(--font-noto-serif), serif",
                color: "white",
                textDecoration: "none",
              }}
            >
              ESTA Online
            </span>
            <span className="text-[10px] md:text-xs tracking-wider" style={{ color: "white", textDecoration: "none" }}>
              Autoryzacja podrozy do USA
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
              <button className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition">
                Informacje o ESTA
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md py-2 min-w-[220px]">
                  {navLinks[0].children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#022444]"
                    >
                      {child.label}
                    </Link>
                  ))}
                  <Link
                    href="/esta-info/place-of-birth/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#022444]"
                  >
                    Miejsce urodzenia / adres
                  </Link>
                  <Link
                    href="/esta-info/us-contact/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#022444]"
                  >
                    Dane kontaktowe w USA
                  </Link>
                  <Link
                    href="/esta-info/official-cbp/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#022444]"
                  >
                    Oficjalna strona CBP
                  </Link>
                  <Link
                    href="/esta-info/mobile-app/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#022444]"
                  >
                    Aplikacja mobilna
                  </Link>
                  <Link
                    href="/esta-info/guam/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#022444]"
                  >
                    Wjazd na Guam
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/faq/"
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition"
            >
              FAQ
            </Link>
            <Link
              href="/site-info/contact/"
              className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition"
            >
              Kontakt
            </Link>
            <Link
              href="/apply/"
              className="ml-3 bg-[#8d1812] hover:bg-[#6d120e] rounded-lg py-2.5 px-6 text-sm transition shadow-md"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span style={{ color: "white" }}>&#10003; Zloz wniosek ESTA</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 12h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M4 18h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-white/20 pt-3 space-y-1">
            <p className="px-3 py-1 text-xs uppercase tracking-wider font-bold" style={{ color: "white" }}>
              Informacje o ESTA
            </p>
            <Link
              href="/esta-info/what-is-esta/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Czym jest ESTA?
            </Link>
            <Link
              href="/esta-info/application/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sposob skladania wniosku
            </Link>
            <Link
              href="/esta-info/fee/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Oplaty
            </Link>
            <Link
              href="/esta-info/expiration/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Okres waznosci
            </Link>
            <Link
              href="/esta-info/status-check/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sprawdzenie statusu
            </Link>
            <Link
              href="/esta-info/place-of-birth/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Miejsce urodzenia / adres
            </Link>
            <Link
              href="/esta-info/us-contact/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dane kontaktowe w USA
            </Link>
            <Link
              href="/esta-info/official-cbp/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Oficjalna strona CBP
            </Link>
            <Link
              href="/esta-info/mobile-app/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Aplikacja mobilna
            </Link>
            <Link
              href="/esta-info/guam/"
              className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Wjazd na Guam
            </Link>
            <div className="border-t border-white/20 mt-2 pt-2">
              <Link
                href="/faq/"
                className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/site-info/contact/"
                className="block hover:bg-white/10 px-4 py-2 text-sm" style={{ color: "white", textDecoration: "none" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
            <Link
              href="/apply/"
              className="block bg-[#8d1812] hover:bg-[#6d120e] rounded-lg py-3 px-6 text-sm text-center mt-2 transition shadow-md"
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span style={{ color: "white" }}>&#10003; Zloz wniosek ESTA</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
