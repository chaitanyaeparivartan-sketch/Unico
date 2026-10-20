"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage or default to dark
    const savedTheme = localStorage.getItem("unico-theme") || "dark";
    setTheme(savedTheme);
    applyTheme(savedTheme);
    setMounted(true);
  }, []);

  const applyTheme = (currentTheme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", currentTheme);
    if (currentTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("unico-theme", nextTheme);
    applyTheme(nextTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <div
      id="theme-toggle-container"
      className="fixed bottom-6 right-6 z-50 flex items-center select-none"
    >
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        title={isDark ? "Dark Mode Active (Click for Light Mode)" : "Light Mode Active (Click for Dark Mode)"}
        onClick={toggleTheme}
        className={`group relative inline-flex items-center w-[84px] h-[44px] rounded-full p-[3px] transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#caa156] active:scale-95 ${
          isDark
            ? "bg-black border-[2.5px] border-white shadow-[0_6px_22px_rgba(0,0,0,0.7)] hover:border-white/90"
            : "bg-[#E5E7EB] border-[2.5px] border-[#D1D5DB] shadow-[0_6px_22px_rgba(0,0,0,0.18)] hover:border-neutral-400"
        }`}
      >
        {/* Left Slot: Clean Crescent Moon Icon without stars */}
        <div
          className={`absolute left-[11px] top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
            isDark
              ? "opacity-100 scale-100 text-white"
              : "opacity-0 scale-75 pointer-events-none text-neutral-400"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[20px] h-[20px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Pure Crescent Moon */}
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>

        {/* Right Slot: Sun with 8 Radiating Rays Icon (shown in Light Mode where 'OFF' was) */}
        <div
          className={`absolute right-[10px] top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
            !isDark
              ? "opacity-100 scale-100 text-[#111827]"
              : "opacity-0 scale-75 pointer-events-none text-neutral-600"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[21px] h-[21px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Center Sun Disc */}
            <circle cx="12" cy="12" r="4.2" strokeWidth="2" />
            {/* 8 Straight Sun Rays */}
            <line x1="12" y1="2.2" x2="12" y2="4.6" />
            <line x1="12" y1="19.4" x2="12" y2="21.8" />
            <line x1="2.2" y1="12" x2="4.6" y2="12" />
            <line x1="19.4" y1="12" x2="21.8" y2="12" />
            <line x1="5.1" y1="5.1" x2="6.8" y2="6.8" />
            <line x1="17.2" y1="17.2" x2="18.9" y2="18.9" />
            <line x1="5.1" y1="18.9" x2="6.8" y2="17.2" />
            <line x1="17.2" y1="6.8" x2="18.9" y2="5.1" />
          </svg>
        </div>

        {/* Tactile Circular Sliding Knob (Matching Reference Pill Knob) */}
        <div
          className={`w-[32px] h-[32px] rounded-full bg-gradient-to-b from-white via-[#fcfcfc] to-[#ebebeb] transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex items-center justify-center ${
            isDark
              ? "translate-x-[42px] shadow-[0_2px_8px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.95)]"
              : "translate-x-0 shadow-[0_2px_8px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.95)]"
          }`}
        />
      </button>
    </div>
  );
}
