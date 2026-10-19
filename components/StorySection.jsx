"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, Compass, Layers, Building2, Sparkles } from "lucide-react";

export default function StorySection({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(4); // default to 'Now' (index 4)

  const phases = [
    {
      year: "1985",
      badge: "Phase 01",
      pillar: "Bedrock",
      title: "Land & Master Planning",
      shortDesc: "Strategic land acquisition, zoning layouts, and civic foundation engineering in Hyderabad.",
      fullDesc:
        "UNICO was founded with a non-negotiable principle: permanent structural integrity. Our early years focused on strategic land acquisition, master-planning large parcels, and laying foundational civil infrastructure across Hyderabad's developing corridors.",
      metric: "Bedrock Foundation",
      icon: Compass,
      stats: "35+ Acres Master-Planned",
    },
    {
      year: "1998",
      badge: "Phase 02",
      pillar: "Craftsmanship",
      title: "Custom Luxury Villas",
      shortDesc: "Turnkey bespoke estates, private architectural residences, and artisan finishes.",
      fullDesc:
        "Pioneered bespoke private estates and turnkey architectural residences. Every villa was engineered for generational longevity, incorporating seismic-reinforced concrete framing, custom stonework, and climate-responsive architecture.",
      metric: "Bespoke Residences",
      icon: Layers,
      stats: "50+ Luxury Estates",
    },
    {
      year: "2010",
      badge: "Phase 03",
      pillar: "Community",
      title: "Villas & Apartments",
      shortDesc: "Scaled gated residential enclaves, multi-family communities, and modern amenities.",
      fullDesc:
        "Scaled our engineering expertise to develop integrated gated communities and luxury low-rise apartment enclaves, delivering unified utility infrastructure, private road networks, and recreational amenities.",
      metric: "Scaled Communities",
      icon: Building2,
      stats: "250,000+ Sq. Ft. Built",
    },
    {
      year: "2015",
      badge: "Phase 04",
      pillar: "Enterprise",
      title: "Commercial & Steel",
      shortDesc: "Heavy structural steel, ISO cleanrooms, and institutional campus developments.",
      fullDesc:
        "Diversified into heavy structural steel assemblies, enterprise commercial hubs, precision ISO-certified cleanroom facilities for medical manufacturing, and major institutional education campuses like Sancta Maria.",
      metric: "Grade-A Infrastructure",
      icon: Award,
      stats: "15+ Institutional & EPC",
    },
    {
      year: "Now",
      badge: "Present Day",
      pillar: "Skyline",
      title: "1M+ Sq. Ft. & Beyond",
      shortDesc: "Over one million square feet handed over with an unblemished zero structural failure record.",
      fullDesc:
        "Today, UNICO stands as an engineering authority with over 1,000,000 sq. ft. constructed and handed over. Operating across institutional, cleanroom, retail, and luxury residential sectors with ISO-certified standards and turnkey handover excellence.",
      metric: "1M+ Sq. Ft. Delivered",
      icon: Sparkles,
      stats: "40 Years • Zero Failure",
      isHighlight: true,
    },
  ];

  return (
    <section
      id="story"
      className="w-full bg-[#090c10] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 select-none border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#ae7b13]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <div className="flex items-center gap-2 mb-3 sm:mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#ae7b13] inline-block shadow-[0_0_8px_rgba(174,123,19,0.6)]"></span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#ae7b13]">
              OUR STORY • 1985 TO TODAY
            </span>
          </div>

          <h2 className="font-canela text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] tracking-tight text-white font-light leading-[1.12] mb-4 sm:mb-5">
            The UNICO Journey
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-[16.5px] font-light leading-relaxed max-w-2xl">
            Four decades of structural rise in Hyderabad — charted phase by phase from bedrock to the skyline.
          </p>
        </div>

        {/* Stepped Masonry Visualization Frame */}
        <div className="w-full mb-12 sm:mb-16 relative">
          <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4">
            {/* Stepped Brick Wall Assembled from Modular Assets */}
            <div className="relative w-full aspect-[2190/864] max-h-[520px] filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]">
              <Image
                src="/images/story/unico-brick-wall-with-text.png"
                alt="The UNICO Journey - Ascending stepped weathered brick wall from 1985 to Today"
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1300px"
                className="object-contain object-bottom select-none"
              />

              {/* Interactive Step Hotspots overlaid on the 5 pillars */}
              <div className="absolute inset-0 grid grid-cols-5 pointer-events-auto">
                {phases.map((phase, idx) => (
                  <button
                    key={phase.year}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="h-full w-full transition-all duration-300 focus:outline-none cursor-pointer group/pillar relative"
                    aria-label={`Highlight ${phase.year} ${phase.title}`}
                  >
                    {activeStep === idx && (
                      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#ae7b13] shadow-[0_0_12px_#ae7b13] pointer-events-none transition-all duration-300" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Baseline Stone Foundation Accent */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ae7b13]/50 to-transparent mt-2" />
          </div>
        </div>

        {/* Ascending Phase Milestone Cards (5 Tiers from Bedrock to Skyline) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 w-full">
          {phases.map((phase, idx) => {
            const isActive = activeStep === idx;
            const Icon = phase.icon;

            return (
              <div
                key={phase.year}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col justify-between p-5 sm:p-6 transition-all duration-500 cursor-pointer border group ${
                  isActive
                    ? phase.isHighlight
                      ? "bg-gradient-to-b from-[#ae7b13]/15 to-black/80 border-[#ae7b13] shadow-[0_12px_40px_rgba(174,123,19,0.25)] -translate-y-1"
                      : "bg-white/[0.06] border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)] -translate-y-1"
                    : "bg-[#0d1117]/80 hover:bg-[#0d1117] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Active Top Glow Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                    isActive
                      ? phase.isHighlight
                        ? "bg-[#ae7b13] shadow-[0_0_10px_#ae7b13]"
                        : "bg-white"
                      : "bg-transparent"
                  }`}
                />

                {/* Card Top: Step Indicator & Year */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.16em] uppercase px-2 py-0.5 border ${
                        isActive
                          ? phase.isHighlight
                            ? "border-[#ae7b13]/40 text-[#ae7b13] bg-[#ae7b13]/10"
                            : "border-white/30 text-white bg-white/10"
                          : "border-white/10 text-neutral-400 bg-white/[0.02]"
                      }`}
                    >
                      {phase.badge}
                    </span>

                    <Icon
                      size={16}
                      className={`transition-colors duration-300 ${
                        isActive
                          ? phase.isHighlight
                            ? "text-[#ae7b13]"
                            : "text-white"
                          : "text-neutral-500 group-hover:text-neutral-400"
                      }`}
                    />
                  </div>

                  {/* Year Heading */}
                  <h3
                    className={`font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-1.5 transition-colors duration-300 ${
                      phase.isHighlight
                        ? "text-[#d4af37]"
                        : isActive
                        ? "text-white"
                        : "text-neutral-200"
                    }`}
                  >
                    {phase.year}
                  </h3>

                  {/* Title */}
                  <h4 className="text-sm sm:text-[15px] font-semibold text-white tracking-wide mb-2.5 leading-snug">
                    {phase.title}
                  </h4>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-[12.5px] leading-relaxed font-light mb-4">
                    {phase.shortDesc}
                  </p>
                </div>

                {/* Card Bottom: Metric / Stats Badge */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-medium tracking-wide">
                  <span
                    className={`${
                      phase.isHighlight
                        ? "text-[#d4af37] font-semibold flex items-center gap-1.5"
                        : "text-neutral-300"
                    }`}
                  >
                    {phase.isHighlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
                    )}
                    {phase.stats}
                  </span>

                  <ArrowUpRight
                    size={14}
                    className={`transition-transform duration-300 ${
                      isActive
                        ? "translate-x-0.5 -translate-y-0.5 text-white"
                        : "text-neutral-500 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Narrative / Heritage Bar */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-[#0c1015] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ae7b13]"></span>
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#ae7b13]">
                40 YEARS OF STRUCTURAL CERTAINTY
              </span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
              From our first foundational plot in 1985 to commanding major institutional, cleanroom, and residential skylines in 2026, UNICO has never deviated from zero compromise civil engineering.
            </p>
          </div>

          {onOpenContact && (
            <button
              type="button"
              onClick={onOpenContact}
              className="whitespace-nowrap group/btn flex items-stretch cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
              aria-label="Start a Project with UNICO"
            >
              <span className="bg-white text-black text-[12px] sm:text-[12.5px] font-medium tracking-[0.06em] uppercase px-5 py-3 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#f2efe9]">
                Start Your Project
              </span>
              <span className="w-[1px] bg-neutral-300"></span>
              <span className="bg-white text-black px-3 py-3 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#f2efe9]">
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
