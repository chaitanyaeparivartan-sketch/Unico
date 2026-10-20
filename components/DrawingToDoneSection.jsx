"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

export default function DrawingToDoneSection() {
  const [sliderPos, setSliderPos] = useState(48); // default ~48% match reference
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Global listeners while dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleContainerClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <section
      id="work"
      className="w-full bg-[#090c10] text-white py-8 sm:py-10 lg:py-12 px-6 sm:px-8 lg:px-12 select-none border-t border-white/10"
    >
      <span id="drawing-to-done" className="absolute -top-24 left-0 pointer-events-none opacity-0" />
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-5 sm:mb-6 lg:mb-7 max-w-4xl">
          <div className="flex items-center gap-2 mb-3 sm:mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#ae7b13] inline-block shadow-[0_0_8px_rgba(174,123,19,0.6)]"></span>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#ae7b13]">
              FROM DRAWING TO DONE
            </span>
          </div>

          <h2 className="font-canela text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] tracking-tight text-white font-light leading-[1.12] mb-4 sm:mb-5">
            See what gets built when you plan it properly first.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base md:text-[16.5px] font-light leading-relaxed max-w-2xl">
            Drag the slider to compare our architectural blueprint against the completed, delivered structure in Hyderabad.
          </p>
        </div>

        {/* Interactive Comparison Slider Container - Full Section Width */}
        <div className="w-full shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
          <div
            ref={containerRef}
            onClick={handleContainerClick}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches && e.touches[0]) {
                handleMove(e.touches[0].clientX);
              }
            }}
            className="relative w-full aspect-[16/10] sm:aspect-[2/1] lg:aspect-[2.35/1] max-h-[440px] sm:max-h-[470px] overflow-hidden select-none border border-white/10 cursor-ew-resize group bg-[#0d1117]"
            role="slider"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Comparison slider between architectural blueprint and completed structure"
          >
            {/* Background Layer: Completed / Reality Structure (Right side revealed as slider moves right) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/featured/retail/prime-retail-reality.webp"
                alt="Completed, delivered Prime Retail structure in Hyderabad"
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover object-center pointer-events-none select-none"
              />

              {/* Top-Right Badge: Delivered Structure */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 px-3 sm:px-3.5 py-1.5 bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-200 pointer-events-none flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Delivered Structure</span>
              </div>
            </div>

            {/* Foreground Layer: Architectural Blueprint (Left side, clipped by sliderPos) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              {/* Base Blueprint Drawing */}
              <Image
                src="/images/featured/retail/prime-retail-blueprint.webp"
                alt="Architectural CAD blueprint drawing of Prime Retail"
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover object-center select-none contrast-[1.08] saturate-[1.15]"
              />

              {/* Blueprint Paper Grid (Major & Minor Architectural Drafting Grid) */}
              <div
                className="absolute inset-0 pointer-events-none opacity-45 mix-blend-screen"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(165, 215, 255, 0.28) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(165, 215, 255, 0.28) 1px, transparent 1px),
                    linear-gradient(to right, rgba(165, 215, 255, 0.10) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(165, 215, 255, 0.10) 1px, transparent 1px)
                  `,
                  backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
                }}
              />

              {/* Blueprint Paper Fiber / Grain Texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.7'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Blueprint Paper Tonal Gradient & Subtle Vignette */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#051c38]/40 via-transparent to-[#002244]/25 mix-blend-multiply" />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(3,20,45,0.75)]" />

              {/* Subtle Drafting Paper Crease Lines */}
              <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/[0.04] pointer-events-none" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/[0.04] pointer-events-none" />

              {/* Engineering Corner Registration Marks */}
              <div className="absolute top-3 left-3 text-cyan-300/40 text-[10px] font-mono select-none pointer-events-none">
                + REG: 01
              </div>
              <div className="absolute bottom-3 left-3 text-cyan-300/40 text-[10px] font-mono select-none pointer-events-none">
                + DWG: UN-HYD-04
              </div>

              {/* Top-Left Badge: Architectural Paper Blueprint */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 px-3 sm:px-3.5 py-1.5 bg-[#07192f]/85 backdrop-blur-md border border-cyan-400/35 text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-cyan-200 pointer-events-none flex items-center gap-2 shadow-lg">
                <span className="w-1.5 h-1.5 rotate-45 bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
                <span>Paper Blueprint</span>
              </div>
            </div>

            {/* Center Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ae7b13]/40 via-[#ae7b13] to-[#ae7b13]/40 shadow-[0_0_14px_rgba(174,123,19,0.9)] -translate-x-1/2 pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Circular Slider Handle Knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ae7b13] hover:bg-[#c89226] text-white flex items-center justify-center shadow-[0_0_22px_rgba(174,123,19,0.7),0_4px_14px_rgba(0,0,0,0.7)] border-2 border-white/90 transition-transform duration-150 group-hover:scale-105 active:scale-95 pointer-events-none">
                <ChevronsLeftRight size={19} strokeWidth={2.5} className="drop-shadow" />
              </div>
            </div>
          </div>

          {/* Bottom Specifications Metadata Bar */}
          <div className="w-full bg-[#0d1117] border border-t-0 border-white/10 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <span className="block text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-1.5">
                BUILDING TYPE
              </span>
              <span className="block text-xs sm:text-[14px] lg:text-[15px] font-medium text-white tracking-wide">
                Prime Retail Commercial Complex
              </span>
            </div>

            <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <span className="block text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-1.5">
                CLIENT / TENANT
              </span>
              <span className="block text-xs sm:text-[14px] lg:text-[15px] font-medium text-white tracking-wide">
                Aditya Birla Group
              </span>
            </div>

            <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <span className="block text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-1.5">
                LOCATION
              </span>
              <span className="block text-xs sm:text-[14px] lg:text-[15px] font-medium text-white tracking-wide">
                Banjara Hills, Hyderabad
              </span>
            </div>

            <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              <span className="block text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-1.5">
                EXECUTION STATUS
              </span>
              <span className="text-xs sm:text-[14px] lg:text-[15px] font-semibold text-[#d4af37] tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]"></span>
                Delivered & Handed Over
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
