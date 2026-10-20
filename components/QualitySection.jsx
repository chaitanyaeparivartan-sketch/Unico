"use client";

import { useState } from "react";

/*
  Quality Promise & Standards Section
  - Quality Promise: Compact zig-zag staircase cards with gold titles and watermark numbers
  - ISO Accreditations: Restored original 3-column layout with vertical dividers and rotating medallion IsoBadge
*/

// Restored Original IsoBadge with rotating outer ring on hover
function IsoBadge({ number }) {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-8 group cursor-default">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full transition-transform duration-700 ease-out group-hover:rotate-45"
      >
        {/* Outer Dotted / Ticked Ring */}
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#ae7b13"
          strokeWidth="1.2"
          strokeDasharray="2 3.5"
          className="opacity-75"
        />
        {/* Inner Solid Gold Ring */}
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="#0c1017"
          stroke="#ae7b13"
          strokeWidth="1.5"
          className="transition-colors duration-300 group-hover:stroke-[#d4af37]"
        />
      </svg>

      {/* Center ISO & Number */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#d4af37] mb-0.5">
          ISO
        </span>
        <span className="text-[22px] sm:text-[24px] font-bold tracking-tight text-white">
          {number}
        </span>
      </div>
    </div>
  );
}

const COMMITMENTS = [
  {
    id: "01",
    title: "Approved materials from trusted sources",
  },
  {
    id: "02",
    title: "Quality checks at every critical stage",
  },
  {
    id: "03",
    title: "Strong site supervision & execution control",
  },
  {
    id: "04",
    title: "Progress & QC updates shared regularly",
  },
  {
    id: "05",
    title: "Safety, finish & long-term performance",
  },
  {
    id: "06",
    title: "Complete drawings, records & documentation",
  },
  {
    id: "07",
    title: "Support continuing after completion",
  },
];

const ISO_STANDARDS = [
  {
    number: "9001",
    title: "Quality Management",
    desc: "Consistent, documented processes from groundbreaking to handover.",
  },
  {
    number: "14001",
    title: "Environmental Management",
    desc: "Responsible construction that respects people and the planet.",
  },
  {
    number: "45001",
    title: "Health & Safety",
    desc: "Safe sites and safe teams, with safety built into every stage of work.",
  },
];

export default function QualitySection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="quality"
      className="relative w-full bg-[#090c10] text-white py-10 sm:py-12 lg:py-14 px-6 sm:px-8 lg:px-12 border-t border-white/5 scroll-mt-10 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d4af65]/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header - Horizontally Centered */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center">
          {/* Eyebrow: Diamond + Quality Standards */}
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#ae7b13] inline-block" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#ae7b13]">
              QUALITY STANDARDS
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-canela text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] tracking-tight text-white font-light leading-[1.12] mb-4 sm:mb-5">
            Quality Promise
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm sm:text-base md:text-[16.5px] font-light leading-relaxed max-w-2xl mx-auto">
            Seven commitments in every project, from groundbreaking to handover.
          </p>
        </div>

        {/* 7 Quality Standard Cards in Compact Zig-Zag Staircase */}
        <div className="space-y-3.5 sm:space-y-4 max-w-5xl mx-auto mb-20 sm:mb-24">
          {COMMITMENTS.map((item, idx) => {
            const isEven = idx % 2 === 1; // 02, 04, 06 are even indices
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`w-full sm:w-[92%] md:w-[72%] lg:w-[62%] max-w-[580px] rounded-none py-4 sm:py-5 px-5 sm:px-7 md:px-8 transition-all duration-300 border relative overflow-hidden min-h-[76px] sm:min-h-[84px] flex items-center ${
                  isEven
                    ? "ml-auto mr-0 bg-gradient-to-r from-[#14120e] to-[#18140f] border-[#c9a35a]/25"
                    : "mr-auto ml-0 bg-gradient-to-r from-[#11141a] to-[#0c0f14] border-white/10"
                } ${
                  isHovered
                    ? "border-[#c9a35a]/60 shadow-[0_8px_30px_rgba(201,163,90,0.12)] -translate-y-0.5"
                    : "hover:border-white/20"
                }`}
              >
                {/* Left Side: Point Title in Gold */}
                <div className="relative z-10 pr-16 sm:pr-20">
                  <h3 className="text-sm sm:text-base md:text-[17px] lg:text-[18px] font-bold tracking-tight text-[#caa156] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Right Side: Clean Watermark Number */}
                <div className="absolute right-4 sm:right-6 md:right-7 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none">
                  <span
                    aria-hidden="true"
                    className="font-sans font-black text-5xl sm:text-6xl md:text-[68px] text-white/[0.08] tracking-tight leading-none select-none"
                  >
                    {item.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Restored Original 3-Column ISO Layout with Vertical Dividers & Rotating Medallion Badges */}
        <div className="border-t border-white/10 pt-16 sm:pt-20 lg:pt-24 max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-2 h-2 rotate-45 bg-[#ae7b13] inline-block" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#ae7b13]">
                STANDARDS & ACCREDITATIONS
              </span>
            </div>

            <h3 className="font-canela text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-white font-light leading-[1.12] mb-4">
              ISO Certified Excellence
            </h3>

            <p className="text-neutral-400 text-sm sm:text-base md:text-[16.5px] font-light leading-relaxed max-w-2xl">
              Internationally recognised standards behind every site and handover.
            </p>
          </div>

          {/* 3-Column Grid with Vertical Hairline Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 md:divide-x md:divide-white/10">
            {ISO_STANDARDS.map((item, idx) => (
              <div
                key={item.number}
                className={`py-10 sm:py-12 md:py-14 flex flex-col items-start ${
                  idx === 0
                    ? "md:pr-10 lg:pr-14"
                    : idx === 1
                    ? "md:px-10 lg:px-14 border-t border-white/10 md:border-t-0"
                    : "md:pl-10 lg:pl-14 border-t border-white/10 md:border-t-0"
                }`}
              >
                {/* Rotating Medallion Badge */}
                <IsoBadge number={item.number} />

                {/* Title */}
                <h4 className="font-sans text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-neutral-400 text-sm sm:text-[15px] font-light leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
