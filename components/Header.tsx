"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a365d] sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-[#0f2440] text-gray-300 text-xs py-1.5 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Elektroniczny System Autoryzacji Podrozy do USA</span>
          <span>Oficjalna strona ESTA: esta.cbp.dhs.gov</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#d69e2e] rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-montserrat font-bold text-white tracking-wide">
                ESTA GUIDE
              </div>
              <div className="text-[10px] text-gray-400 tracking-widest uppercase">
                Przewodnik po ESTA
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="text-gray-200 hover:text-white hover:bg-[#234681] px-4 py-2 rounded-md font-medium transition text-sm">
              Strona glowna
            </Link>
            <Link href="/application-guide" className="text-gray-200 hover:text-white hover:bg-[#234681] px-4 py-2 rounded-md font-medium transition text-sm">
              Procedura
            </Link>
            <Link href="/cost-comparison" className="text-gray-200 hover:text-white hover:bg-[#234681] px-4 py-2 rounded-md font-medium transition text-sm">
              Koszty
            </Link>
            <Link href="/faq" className="text-gray-200 hover:text-white hover:bg-[#234681] px-4 py-2 rounded-md font-medium transition text-sm">
              FAQ
            </Link>
            <a
              href="https://esta.cbp.dhs.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-[#d69e2e] hover:bg-[#b7791f] text-white px-5 py-2 rounded-md font-bold text-sm transition shadow-md"
            >
              Zloz wniosek
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t border-[#234681] pt-3 space-y-1">
            <Link href="/" className="block text-gray-200 hover:text-white hover:bg-[#234681] px-4 py-2.5 rounded-md font-medium transition" onClick={() => setMobileMenuOpen(false)}>
              Strona glowna
            </Link>
            <Link href="/application-guide" className="block text-gray-200 hover:text-white hover:bg-[#234681] px-4 py-2.5 rounded-md font-medium transition" onClick={() => setMobileMenuOpen(false)}>
              Procedura
            </Link>
            <Link href="/cost-comparison" className="block text-gray-200 hover:text-white hover:bg-[#234681] px-4 py-2.5 rounded-md font-medium transition" onClick={() => setMobileMenuOpen(false)}>
              Koszty
            </Link>
            <Link href="/faq" className="block text-gray-200 hover:text-white hover:bg-[#234681] px-4 py-2.5 rounded-md font-medium transition" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <a
              href="https://esta.cbp.dhs.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#d69e2e] hover:bg-[#b7791f] text-white px-4 py-2.5 rounded-md font-bold transition text-center mt-2"
            >
              Zloz wniosek
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
