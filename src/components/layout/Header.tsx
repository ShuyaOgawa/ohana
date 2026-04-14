"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const handleCloseMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between bg-warm-white/92 backdrop-blur-sm border-b border-sand-light transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="font-display text-[22px] font-light tracking-[0.12em] text-green-deep">
            Social Support Ohana
          </span>
          <span className="font-serif text-xs tracking-[0.15em] text-text-light font-light hidden sm:inline">
            ソーシャルサポート おはな
          </span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-xs tracking-[0.15em] transition-colors duration-300 ${
                  isActive
                    ? "text-green-deep font-normal"
                    : "text-text-mid hover:text-green-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ハンバーガーボタン */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="メニューを開く"
        >
          <span className="block w-5 h-px bg-green-deep" />
          <span className="block w-5 h-px bg-green-deep" />
          <span className="block w-5 h-px bg-green-deep" />
        </button>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
}
