"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavItems = [
    { label: "Projects", href: "#projects", active: true },
    { label: "Our Story", href: "#story" },
    { label: "Our Work", href: "#work" },
  ];

  const rightNavItems = [
    { label: "How We Build", href: "#how-we-build" },
    { label: "Quality", href: "#quality" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/75 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Left Navigation (Projects, Our Story, Our Work) with Growing Text Effect */}
        <nav className="hidden xl:flex items-center space-x-9 text-[13px] tracking-[0.14em] uppercase text-white/90 font-medium">
          {leftNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative py-1 transition-all duration-300 flex items-center gap-2 group ${
                item.active
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.active && (
                <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#ae7b13] group-hover:scale-150 transition-all duration-300 shadow-sm animate-pulse"></span>
              )}
              <span className="inline-block transition-all duration-300 ease-out origin-center group-hover:scale-110 group-hover:tracking-[0.2em] group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
                {item.label}
              </span>
              {/* Expanding glowing underline on hover */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ae7b13] to-transparent transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Center UNICO Logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="relative flex items-center group">
            <div className="relative h-12 sm:h-14 md:h-15 w-32 sm:w-36 md:w-44 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/unico-logo-cropped.png"
                alt="UNICO Logo"
                fill
                priority
                className="object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]"
                sizes="(max-width: 768px) 130px, 180px"
              />
            </div>
          </Link>
        </div>

        {/* Right Navigation & CTA with Growing Text Effect */}
        <div className="hidden xl:flex items-center space-x-8">
          <nav className="flex items-center space-x-7 text-[13px] tracking-[0.14em] uppercase text-white/90 font-medium">
            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-1 text-white/80 hover:text-white transition-all duration-300 group flex items-center"
              >
                <span className="inline-block transition-all duration-300 ease-out origin-center group-hover:scale-115 group-hover:tracking-[0.22em] group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
                  {item.label}
                </span>
                {/* Expanding glowing underline on hover */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ae7b13] to-transparent transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Luxury Split CTA Button: 'Start a Project' with Growing Effect */}
          <button
            onClick={onOpenContact}
            className="group flex items-stretch cursor-pointer select-none transition-transform duration-300 hover:scale-[1.04]"
            aria-label="Start a Project"
          >
            <span className="bg-white text-black text-[13px] font-medium tracking-[0.06em] px-5 py-2.5 flex items-center justify-center transition-all duration-300 group-hover:bg-[#f2efe9]">
              <span className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:tracking-[0.12em]">
                Start a Project
              </span>
            </span>
            <span className="w-[1px] bg-neutral-300"></span>
            <span className="bg-white text-black px-3 py-2.5 flex items-center justify-center transition-all duration-300 group-hover:bg-[#f2efe9]">
              <ArrowUpRight
                size={16}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-125"
              />
            </span>
          </button>
        </div>

        {/* Medium screens layout (lg to xl) */}
        <div className="hidden lg:flex xl:hidden items-center space-x-5">
          <button
            onClick={onOpenContact}
            className="group flex items-stretch cursor-pointer select-none"
          >
            <span className="bg-white text-black text-xs font-medium tracking-wider uppercase px-4 py-2">
              Start a Project
            </span>
            <span className="w-[1px] bg-neutral-300"></span>
            <span className="bg-white text-black px-2.5 py-2 flex items-center justify-center">
              <ArrowUpRight size={14} />
            </span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-neutral-300"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-neutral-300 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with all requested items */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0c1016]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4 text-sm uppercase tracking-[0.16em]">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 transition-all duration-300 group flex items-center ${
                  item.active ? "text-white font-semibold" : "text-white/80 hover:text-white"
                }`}
              >
                <span className="inline-block transition-transform duration-300 group-hover:scale-105 group-hover:tracking-[0.2em] origin-left">
                  {item.label}
                </span>
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full group flex items-stretch cursor-pointer select-none"
              >
                <span className="flex-1 bg-white text-black px-5 py-3 font-medium tracking-wider text-xs uppercase flex items-center justify-center">
                  Start a Project
                </span>
                <span className="w-[1px] bg-neutral-300"></span>
                <span className="bg-white text-black px-4 py-3 flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
