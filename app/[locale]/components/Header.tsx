"use client";

import { Space_Grotesk } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "../../../i18n/navigation";
import type {
  AppLocale,
  HeaderLiterals,
  LanguageSwitcherLiterals,
} from "../../../i18n/literals";
import LanguageSwitcher from "./LanguageSwitcher";

const space_Grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

type HeaderProps = {
  locale: AppLocale;
  literals: HeaderLiterals;
  languageSwitcherLiterals: LanguageSwitcherLiterals;
};

export default function Header({
  locale,
  literals,
  languageSwitcherLiterals,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-[#0E0E0E]">
      <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center relative">
        <Link
          href="/"
          locale={locale}
          className={`${space_Grotesk.className} text-2xl font-bold text-(--primary) transition-all duration-200 hover:opacity-90 hover:drop-shadow-[0_0_14px_rgba(255,84,75,0.45)]`}
        >
          {literals.brand}
        </Link>

        <div className="hidden md:flex gap-12 items-center">
          <a
            href="#about"
            className={`${space_Grotesk.className} font-light text-white border-b-2 border-b-transparent hover:text-(--primary) hover:border-b-(--primary) transition`}
          >
            {literals.aboutMe}
          </a>
          <a
            href="#experience"
            className={`${space_Grotesk.className} font-light text-white border-b-2 border-b-transparent hover:text-(--primary) hover:border-b-(--primary) transition`}
          >
            {literals.experience}
          </a>
          <a
            href="#projects"
            className={`${space_Grotesk.className} font-light text-white border-b-2 border-b-transparent hover:text-(--primary) hover:border-b-(--primary) transition`}
          >
            {literals.projects}
          </a>
          <LanguageSwitcher
            currentLocale={locale}
            literals={languageSwitcherLiterals}
          />
        </div>

        <div className="flex md:hidden items-center gap-1">
          <LanguageSwitcher
            currentLocale={locale}
            literals={languageSwitcherLiterals}
            isMobile
          />
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={
              isMobileMenuOpen ? literals.closeMenu : literals.openMenu
            }
            className="text-white hover:text-(--primary) transition-all duration-200 p-2 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X size={22} className="transition-transform duration-200" />
            ) : (
              <Menu size={22} className="transition-transform duration-200" />
            )}
          </button>
        </div>

        <div
          className={`absolute top-full left-0 right-0 md:hidden bg-[#0E0E0E] px-4 z-20 overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100 pb-4"
              : "max-h-0 opacity-0 pb-0 pointer-events-none"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col gap-2 pt-3">
            <a
              href="#about"
              onClick={closeMobileMenu}
              className={`${space_Grotesk.className} font-light text-white py-3 px-2 rounded hover:bg-neutral-800 transition-all duration-200`}
            >
              {literals.aboutMe}
            </a>
            <a
              href="#experience"
              onClick={closeMobileMenu}
              className={`${space_Grotesk.className} font-light text-white py-3 px-2 rounded hover:bg-neutral-800 transition-all duration-200`}
            >
              {literals.experience}
            </a>
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className={`${space_Grotesk.className} font-light text-white py-3 px-2 rounded hover:bg-neutral-800 transition-all duration-200`}
            >
              {literals.projects}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
