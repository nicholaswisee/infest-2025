"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo-ksep.svg";
interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Event", href: "/event" },
  { name: "ERC", href: "/erc" },
  { name: "BCC", href: "/bcc" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-fit px-2 z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <div className="relative w-full h-16 bg-gradient-to-br from-white/30 to-white/0 rounded-full shadow-lg backdrop-blur-xl border border-white/20 flex items-center gap-10 px-3 sm:px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 sm:gap-2 text-white font-bold text-lg"
        >
          <Image src={Logo} alt="Logo" className="w-[70px]" />
        </Link>

        {/* Navigation Links */}
        <nav className="relative h-full flex items-center justify-center gap-x-1 sm:gap-x-2 md:gap-x-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                // Each link is a relative container for its underline
                className="relative font-medium text-xs sm:text-sm transition-colors duration-300 px-2 py-1 h-full flex items-center"
              >
                <span
                  className={
                    isActive
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-200"
                  }
                >
                  {link.name}
                </span>

                {/* Gradient underline, only rendered if the link is active */}
                {isActive && (
                  <span className="absolute bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Daftar Button */}
        <Link
          href="/daftar"
          className="flex items-center gap-2 bg-cyan-400/80 text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105 hover:bg-cyan-400 border border-cyan-300/50 shadow-md text-xs sm:text-sm py-2 px-3 sm:px-4"
        >
          {/* <UserPlus className="w-4 h-4 sm:hidden" /> */}
          <span className="hidden sm:inline">Daftar</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
