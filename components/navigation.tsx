"use client";

import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navigation({
  setLanguage,
}: {
  setLanguage: Dispatch<SetStateAction<string>>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [{ label: "Home", href: "/" }];

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 flex justify-between border-b border-white/10 items-center p-6 z-50 transition-all duration-300 bg-black/95 backdrop-blur-sm`}
      >
        <div className="flex row-span-3 space-x-2">
          <Link
            href="https://github.com/Mihailghrgh"
            className="text-3xl font-medium tracking-wider hover:text-white/80 transition-colors"
          >
            <FaGithubSquare />
          </Link>
          <Link
            href="https://github.com/Mihailghrgh"
            className="text-3xl font-medium tracking-wider hover:text-white/80 transition-colors"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/Mihailghrgh"
            className="text-3xl font-medium tracking-wider hover:text-white/80 transition-colors"
          >
            <FaInstagram />
          </Link>
        </div>

        <div>
          <button
            onClick={() => {
              setLanguage("english");
            }}
            className="text-sm font-medium tracking-wider hover:text-white/80 transition-colors"
          >
            ENGLISH
          </button>
          <span> / </span>
          <button
            onClick={() => setLanguage("romanian")}
            className="text-sm font-medium tracking-wider hover:text-white/80 transition-colors"
          >
            ROMÂNĂ
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl md:text-6xl font-light hover:text-white/70 transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="space-y-4 text-white/60">
                <p className="text-sm">Get in touch</p>
                <p className="text-lg">hello@voicetwoo.agency</p>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
