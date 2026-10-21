"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

/*
  Quality Promise & Standards Section
  - Quality Promise: 
    * Controlled One-Card-at-a-Time Step Scroll:
    * Left side: Dedicated scrollable cards container that advances exactly ONE card at a time
    * Wheel and touch events are throttled so scrolling will NOT shift/skip past multiple steps
    * Right side: Sticky image showcase locked in view, cross-fading to the relevant stage image
    * Step pips & Next/Prev buttons provide immediate one-step advancement
  - ISO Accreditations: 3-column layout with vertical dividers and rotating medallion IsoBadge
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
    tag: "Certified Supply Chain",
    desc: "Rigorous laboratory testing and tier-1 vendor verification for all cement, structural steel, aggregates, and engineered components.",
    image: "/images/quality/Construction Material List for House Building India _ AECORD Blog.jpg",
  },
  {
    id: "02",
    title: "Quality checks at every critical stage",
    tag: "Multi-Tier Inspections",
    desc: "Comprehensive engineering audits, slump & cube-strength testing at every milestone prior to subsequent phase clearance.",
    image: "/images/quality/Construction Quality Inspection at Daylight.png",
  },
  {
    id: "03",
    title: "Strong site supervision & execution control",
    tag: "Site Governance",
    desc: "Dedicated senior site engineers and certified safety supervisors maintaining round-the-clock precision and tolerance standards.",
    image: "/images/quality/Supervisor Directing a Busy Construction Site.png",
  },
  {
    id: "04",
    title: "Progress & QC updates shared regularly",
    tag: "Transparent Reporting",
    desc: "Weekly photographic audits, digital milestones, and quality control reports shared directly with property owners and partners.",
    image: "/images/quality/Construction Planning at the Site.png",
  },
  {
    id: "05",
    title: "Safety, finish & long-term performance",
    tag: "Enduring Finishes",
    desc: "Zero-compromise safety protocols coupled with architectural finish tolerances engineered to perform flawlessly for generations.",
    image: "/images/quality/Residential Building Inspection.png",
  },
  {
    id: "06",
    title: "Complete drawings, records & documentation",
    tag: "As-Built Archives",
    desc: "Detailed architectural drawings, structural calculations, and MEP warranties catalogued for lifelong reference and transparency.",
    image: "/images/quality/Construction Engineers Reviewing Plans Onsite.png",
  },
  {
    id: "07",
    title: "Support continuing after completion",
    tag: "Lifecycle Warranty",
    desc: "Post-handover transition assistance, structured maintenance checks, and long-term structural guarantee stewardship.",
    image: "/images/quality/Modern Home Handover Inspection.png",
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
  const [activeId, setActiveId] = useState("01");
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef({});
  const isLockedRef = useRef(false);
  const lockTimerRef = useRef(null);

  const activeItem = COMMITMENTS.find((c) => c.id === activeId) || COMMITMENTS[0];
  const currentIndex = COMMITMENTS.findIndex((c) => c.id === activeId);

  // Smoothly center the active card in the cards container
  const centerCardInContainer = useCallback((id) => {
    const container = cardsContainerRef.current;
    const card = cardRefs.current[id];
    if (container && card) {
      const cardTop = card.offsetTop;
      const cardHeight = card.offsetHeight;
      const containerHeight = container.offsetHeight;
      const targetScroll = cardTop - containerHeight / 2 + cardHeight / 2;
      container.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, []);

  const selectStep = useCallback(
    (id) => {
      setActiveId(id);
      centerCardInContainer(id);
    },
    [centerCardInContainer]
  );

  useEffect(() => {
    centerCardInContainer("01");
    return () => {
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, [centerCardInContainer]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      selectStep(COMMITMENTS[currentIndex - 1].id);
    }
  }, [currentIndex, selectStep]);

  const handleNext = useCallback(() => {
    if (currentIndex < COMMITMENTS.length - 1) {
      selectStep(COMMITMENTS[currentIndex + 1].id);
    }
  }, [currentIndex, selectStep]);

  // Non-jumping step-by-step scroll controller on Large and Extra Large screens
  const handleWheel = (e) => {
    // Only apply controlled step scroll on lg/xl screens (width >= 1024px)
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    // If locked during a step transition: prevent momentum from skipping steps
    if (isLockedRef.current) {
      if (
        (e.deltaY > 0 && currentIndex < COMMITMENTS.length - 1) ||
        (e.deltaY < 0 && currentIndex > 0)
      ) {
        e.preventDefault();
      }
      return;
    }

    // Ignore tiny trackpad jitter
    if (Math.abs(e.deltaY) < 18) return;

    if (e.deltaY > 0) {
      // Scroll DOWN: advance exactly 1 step without jumping
      if (currentIndex < COMMITMENTS.length - 1) {
        e.preventDefault();
        isLockedRef.current = true;
        const nextId = COMMITMENTS[currentIndex + 1].id;
        selectStep(nextId);

        clearTimeout(lockTimerRef.current);
        lockTimerRef.current = setTimeout(() => {
          isLockedRef.current = false;
        }, 650);
      }
      // If already at step 7, do not preventDefault: page scrolls down naturally
    } else if (e.deltaY < 0) {
      // Scroll UP: step back exactly 1 step without jumping
      if (currentIndex > 0) {
        e.preventDefault();
        isLockedRef.current = true;
        const prevId = COMMITMENTS[currentIndex - 1].id;
        selectStep(prevId);

        clearTimeout(lockTimerRef.current);
        lockTimerRef.current = setTimeout(() => {
          isLockedRef.current = false;
        }, 650);
      }
      // If already at step 1, do not preventDefault: page scrolls up naturally
    }
  };

  return (
    <section
      id="quality"
      className="relative w-full bg-[#090c10] text-white py-14 sm:py-18 lg:py-24 px-6 sm:px-8 lg:px-12 border-t border-white/5 scroll-mt-10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d4af65]/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header - Horizontally Centered */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14 flex flex-col items-center">
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
            Seven commitments engineered into every project, experienced step by step from groundbreaking to handover.
          </p>
        </div>

        {/* Step-by-Step Layout:
            - Controlled 1-step-at-a-time scrolling on large/XL screens with zero jumping
            - Side-by-side: Left cards container & Right synchronized image showcase
        */}
        <div
          onWheel={handleWheel}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center mb-20 sm:mb-28"
        >
          {/* Left Column: Dedicated Cards Container */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex flex-col">
            <div
              ref={cardsContainerRef}
              className="h-[460px] sm:h-[490px] lg:h-[510px] overflow-hidden space-y-3 sm:space-y-3.5 pr-1 select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {COMMITMENTS.map((item, idx) => {
                const isActive = activeId === item.id;
                const isEven = idx % 2 === 1;

                return (
                  <div
                    key={item.id}
                    ref={(el) => (cardRefs.current[item.id] = el)}
                    data-card-id={item.id}
                    onClick={() => selectStep(item.id)}
                    className={`group cursor-pointer w-full py-5 sm:py-6 px-6 sm:px-8 transition-all duration-500 border relative overflow-hidden min-h-[82px] sm:min-h-[92px] flex items-center ${
                      isActive
                        ? "opacity-100 scale-100 bg-gradient-to-r from-[#17140f] to-[#12100c] border-[#d4af37]/80 shadow-[0_8px_30px_rgba(212,175,55,0.16)] translate-y-0"
                        : isEven
                        ? "opacity-35 scale-[0.99] bg-gradient-to-r from-[#14120e] to-[#18140f] border-[#c9a35a]/15 hover:opacity-75 hover:border-white/30"
                        : "opacity-35 scale-[0.99] bg-gradient-to-r from-[#11141a] to-[#0c0f14] border-white/5 hover:opacity-75 hover:border-white/30"
                    }`}
                  >
                    {/* Left Active Solid Gold Accent Pip */}
                    <span
                      className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#d4af37] transition-all duration-500 ${
                        isActive
                          ? "opacity-100 shadow-[0_0_10px_rgba(212,175,55,0.9)]"
                          : "opacity-0 group-hover:opacity-40"
                      }`}
                    />

                    {/* Title Only */}
                    <div className="relative z-10 pr-16 sm:pr-20">
                      <h3
                        className={`text-sm sm:text-base md:text-[17px] lg:text-[18px] font-bold tracking-tight leading-snug transition-colors duration-300 ${
                          isActive
                            ? "text-[#d4af37]"
                            : "text-[#caa156] group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Watermark Number Only */}
                    <div className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none">
                      <span
                        aria-hidden="true"
                        className={`font-sans font-black text-5xl sm:text-6xl md:text-[68px] tracking-tight leading-none select-none transition-all duration-500 ${
                          isActive ? "text-[#d4af37]/30 scale-105" : "text-white/[0.06]"
                        }`}
                      >
                        {item.id}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Synchronized Image Showcase */}
          <div className="lg:col-span-5 xl:col-span-5 relative">
            <div className="w-full transition-all duration-300">
              <div className="relative bg-[#0d1016] border border-white/10 p-2 sm:p-2.5 shadow-2xl">
                {/* Main Image Stage */}
                <div className="relative w-full h-[400px] sm:h-[430px] lg:h-[450px] overflow-hidden bg-neutral-900">
                  {COMMITMENTS.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          isActive
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 550px"
                          className="object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                          priority={item.id === "01"}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Navigation Controls: Next/Prev & Step Indicators */}
                <div className="pt-3 px-3 flex items-center justify-between border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className="p-1.5 border border-white/10 hover:border-[#d4af37] text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      aria-label="Previous Step"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentIndex === COMMITMENTS.length - 1}
                      className="p-1.5 border border-white/10 hover:border-[#d4af37] text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      aria-label="Next Step"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-400 pl-1">
                      Step {currentIndex + 1} of 7
                    </span>
                  </div>

                  {/* Step Pips */}
                  <div className="flex items-center gap-1.5">
                    {COMMITMENTS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToStep(item.id)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${
                          activeId === item.id
                            ? "w-6 bg-[#d4af37]"
                            : "w-2 bg-white/20 hover:bg-white/50"
                        }`}
                        aria-label={`Jump to step ${item.id}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
