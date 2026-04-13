"use client";

import { Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "../../../i18n/navigation";
import type {
  AppLocale,
  LanguageSwitcherLiterals,
} from "../../../i18n/literals";

type LanguageSwitcherProps = {
  currentLocale: AppLocale;
  literals: LanguageSwitcherLiterals;
  isMobile?: boolean;
};

export default function LanguageSwitcher({
  currentLocale,
  literals,
  isMobile = false,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (locale: AppLocale) => {
    router.replace(pathname, { locale });
    setShowLanguageMenu(false);
  };

  const buttonClassName = isMobile
    ? "flex cursor-pointer items-center gap-2 border border-neutral-800 px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-(--primary) hover:text-(--primary)"
    : "cursor-pointer p-2 text-white transition-all duration-200 hover:text-(--primary)";

  const menuClassName = isMobile
    ? "absolute right-0 top-full z-30 mt-2 w-40 max-w-[calc(100vw-2rem)] rounded-2xl border border-neutral-800 bg-[#0E0E0E] p-2 shadow-lg transition-all duration-200 ease-out"
    : "absolute right-0 top-full z-30 mt-2 w-32 rounded border border-neutral-800 bg-[#0E0E0E] shadow-lg transition-all duration-200 ease-out";

  const optionClassName = (locale: AppLocale) =>
    `w-full cursor-pointer rounded text-left transition ${
      isMobile ? "px-4 py-3" : "px-4 py-2"
    } ${currentLocale === locale ? "text-(--primary)" : "text-white"} hover:bg-neutral-800`;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setShowLanguageMenu((prev) => !prev)}
        className={`${buttonClassName} ${showLanguageMenu ? "text-(--primary)" : ""}`}
        aria-label={literals.ariaLabel}
        aria-expanded={showLanguageMenu}
        aria-haspopup="menu"
      >
        <Languages size={20} />
        {isMobile && <span>{currentLocale.toUpperCase()}</span>}
      </button>
      <div
        className={`${menuClassName} ${
          showLanguageMenu
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
        role="menu"
        aria-hidden={!showLanguageMenu}
      >
        <button
          onClick={() => changeLanguage("es")}
          className={optionClassName("es")}
          role="menuitem"
        >
          {literals.spanish}
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={optionClassName("en")}
          role="menuitem"
        >
          {literals.english}
        </button>
      </div>
    </div>
  );
}
